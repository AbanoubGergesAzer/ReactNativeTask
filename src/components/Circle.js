import React from 'react';
import { Text, View, Dimensions } from 'react-native';
const Circle = ({ color, title, fontColor, size, style }) => {
  return (
    <View style={{ ...style }}>
      <View
        style={{
          borderRadius:
            Math.round(
              Dimensions.get('window').width + Dimensions.get('window').height,
            ) / 2,
          width: (Dimensions.get('window').width * 0.5) / size,
          height: (Dimensions.get('window').width * 0.5) / size,
          backgroundColor: color,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ textAlign: 'center', color: fontColor || 'white' }}>
          {' '}
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Circle;
