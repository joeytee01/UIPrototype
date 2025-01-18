import React from 'react';
import { ScrollView, View } from 'react-native';
import ShowCard from './ShowCard'; // Import the ShowCard component

const ShowCards = ({ shows }) => {
  return (
    <ScrollView horizontal style={{ flexDirection: 'row', paddingHorizontal: 16, marginTop: 10, paddingBottom: 90, }}>
      {shows.map((show, index) => (
        <ShowCard
          key={index}
          image={show.image}
          title={show.title}
          time={show.time}
        />
      ))}
    </ScrollView>
  );
};

export default ShowCards;
