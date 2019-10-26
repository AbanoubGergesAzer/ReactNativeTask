import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {

   return (
      <View style={styles.navBar}>
         <View style={styles.leftContainer}>
            <Icon name="filter" size={30} color="#B3AFA6" />
         </View>
         <View style={styles.rightContainer}>
            <Icon name="filter" size={30} color="#B3AFA6" />
         </View>
      </View>
   )
};
const styles = StyleSheet.create({
   navBar: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   leftContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginLeft: 10
   },
   rightContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: 10
   },
});



export default Header;