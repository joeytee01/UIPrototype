import React from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from './InfoCard'; // Import the InfoCard component

const InfoCards = ({ cards }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical:10}}>
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          text={card.text}
          linkText={card.linkText}
          icon={card.icon}
          onPress={() => console.log('Link pressed!')} // Handle onPress logic here
        />
      ))}
    </ScrollView>
  );
};

export default InfoCards;
