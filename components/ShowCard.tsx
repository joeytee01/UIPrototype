import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ShowCard = ({ image, title, time }) => {
  return (
    <View style={styles.showCard}>
      <Image source={image} style={styles.showImage} />
      <Text style={styles.showTime}>{time}</Text>
      <Text style={styles.showTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    
  showCard: { width: 250, marginRight: 16 },
  showImage: { width: 250, height: 150, borderRadius: 8, marginBottom: 8, },
  showTime: { fontSize: 12, color: '#666', marginBottom: 4 },
  showTitle: { fontSize: 12, fontWeight: 'bold' },
});

export default ShowCard;
