// Components/Footer.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = ({ footerItems }) => {
  return (
    <View style={styles.footer}>
      {footerItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.footerItem}>
          <Image source={item.icon} style={styles.footerIcon} />
          <Text style={styles.footerText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 16, borderTopWidth: 1, borderTopColor: '#ccc', },
  footerItem: { alignItems: 'center' },
  footerIcon: { width: 24, height: 24, marginBottom: 4 },
  footerText: { fontSize: 10 },
});

export default Footer;
