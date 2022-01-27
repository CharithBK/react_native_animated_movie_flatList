import axios from 'axios';
import {API_URL} from '../../constants/api';
import {Dispatch} from "react";

export interface MovieDetails {
    readonly type: 'GET_MOVIES';
    movies: any;
}

export type DetailsAction = MovieDetails;

const genres = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10770: 'TV Movie',
};

const getImagePath = path =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = path =>
    `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = () => {
    return async (dispatch: Dispatch<DetailsAction|any>) => {
        const results = await axios.get(API_URL);
        const movieData:any = results?.data?.results;
        //console.log(JSON.stringify(movieData))
        const movies = movieData.map(
            ({
                 id,
                 original_title,
                 poster_path,
                 backdrop_path,
                 vote_average,
                 overview,
                 release_date,
                 genre_ids,
             }) => ({
                key: String(id),
                title: original_title,
                poster: getImagePath(poster_path),
                backdrop: getBackdropPath(backdrop_path),
                rating: vote_average,
                description: overview,
                releaseDate: release_date,
                genres: genre_ids.map((genre) => genres[genre]),
            })
        );

        dispatch({type: 'GET_MOVIES',movies: movies});
        return movies;
};
};