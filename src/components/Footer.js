import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Footer = () => {
   return (
      <>
         <View>
            <Icon name="microphone" size={30} color="#B3AFA6" style={{ marginBottom: 5, alignSelf: 'center', }} />
         </View>
         <View style={styles.navBar}>
            <View style={styles.leftContainer}>
               <Icon name="home" size={30} color="#B3AFA6" style={{ marginBottom: 20, marginLeft: 20 }} />
            </View>
            <Icon name="filter" size={30} color="#B3AFA6" style={{ marginBottom: 20 }} />
            <View style={styles.rightContainer}>
               <Icon name="filter" size={30} color="#B3AFA6" style={{ marginBottom: 20, marginRight: 20 }} />
            </View>
         </View>
      </>
   )
}
const styles = StyleSheet.create({
   navBar: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
   },
   leftContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
   },
   rightContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
   },

});




export default Footer;