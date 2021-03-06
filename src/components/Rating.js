import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Rating({rating}) {
  const filledStars = Math.floor(rating / 2);
  const maxStars = Array(5 - filledStars).fill('staro');
  const r = [...Array(filledStars).fill('star'), ...maxStars];
  console.log('r==>', r);
  return (
    <View style={styles.rating}>
      <Text style={styles.ratingNumber}>{rating}</Text>
      {r.map((type, index) => {
        console.log('type==>', type);
        console.log('index==>', index);
        return <Icon key={index} name={type} size={12} color="#FFAA33" />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingNumber: {
    marginRight: 4,
    fontFamily: 'Menlo',
    fontSize: 14,
    color: 'black',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
});
