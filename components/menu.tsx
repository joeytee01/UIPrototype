// Components/Menu.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Menu = ({ menuItems }) => {
  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <View key={index} style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Image source={item.icon} style={styles.menuIcon} />
          </View>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', margin: 16 ,paddingLeft:10},
  menuItem: { alignItems: 'center', margin: 8 ,paddingLeft: 10},
  menuIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  menuIcon: { width: 30, height: 30 },
  menuText: { fontSize: 12, textAlign: 'center' },
});

export default Menu;
