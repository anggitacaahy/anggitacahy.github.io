import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Error = () => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Image
        source={require('./images/error.png')}
        style={{width: 200, height: 200}}
      />
      <Text style={style.title}>Error 404</Text>
      <Text style={style.subtitle}>Not Found</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'navy',
  },
  subtitle: {
    fontWeight: 'bold',
  },
});

export default Error;
