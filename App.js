import React from 'react';
import {
  SafeAreaView,
 } from 'react-native';

import Circle from './src/components/Circle';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'column',
        backgroundColor: '#FAF0E7',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Header />

      <Circle color="#88C292" title="Zen" size="3" style={{marginLeft: 180}} />
      <Circle
        color="#6694C5"
        title="Dreams"
        size="2"
        style={{marginLeft: 100}}
      />
      <Circle
        color="#CB8178"
        title="Health"
        size="2"
        style={{marginLeft: 200}}
      />
      <Circle
        color="#FFFDFE"
        title="Inbox"
        fontColor="black"
        size="2.5"
        style={{marginLeft: 130}}
      />
      <Circle
        color="#E5C692"
        title="Ideas"
        size="2"
        style={{marginLeft: 240}}
      />
      <Circle
        color="#86BFB9"
        title="Travel"
        size="2"
        style={{marginLeft: 100}}
      />
      <Circle
        color="#919BE1"
        title="Creativity"
        size="1.5"
        style={{marginRight: 200}}
      />
      <Footer />
    </SafeAreaView>
  );
};

 

export default App;
