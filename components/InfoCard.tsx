import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const InfoCard = ({ icon, title, text, linkText, onPress }) => {
  return (
    <View style={styles.infoCard}>
      <TouchableOpacity style={styles.infoIconContainer}>
        <Image source={icon} style={styles.infoIcon} />
      </TouchableOpacity>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoText}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  infoCard: {
    width: '55%',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginRight:20,
  },
  infoIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
  },
  infoIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
  infoText: { fontSize: 12, marginBottom: 8 },
  linkText: { fontSize: 12, color: '#007BFF' },
});

export default InfoCard;
