// Components/Header.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
      <Image source={require('../assets/images/back.png')} style={styles.icon} />
      </TouchableOpacity>
      <Image source={require('../assets/images/image 3.png')} style={styles.logo} />
      <TouchableOpacity>
        <Image source={require('../assets/images/Leading-icon.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, marginTop:20, },
  logo: { width: 100, height: 60, resizeMode: 'contain' },
  icon: { width: 24, height: 24 },
});

export default Header;
