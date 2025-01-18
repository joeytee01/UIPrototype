import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/header';
import BannerCarousel from '../../components/BannerCarousel';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import InfoCards from '../../components/InfoCards';
import ShowCards from '../../components/ShowCards';

const App = () => {
  const banners = [
    require('../../assets/images/show1.jpg'),
    require('../../assets/images/show2.jpg'),
    require('../../assets/images/show3.jpg'),
  ];

  const menuItems = [
    { title: 'Map', icon: require('../../assets/images/Group 342.png') },
    { title: 'Inhabitants', icon: require('../../assets/images/Group 342-2.png') },
    { title: 'Shows', icon: require('../../assets/images/Group 341.png') },
    { title: 'Shopping', icon: require('../../assets/images/Group 275.png') },
    { title: 'Dine', icon: require('../../assets/images/Group 310.png') },
    { title: 'Meet & Greets', icon: require('../../assets/images/Layer 1.png') },
  ];

  const footerItems = [
    { title: 'Home', icon: require('../../assets/images/On.png') },
    { title: 'Wallet', icon: require('../../assets/images/Group 275.png') },
    { title: 'More', icon: require('../../assets/images/On-2.png') },
  ];

  const infoCards = [
    {
      title: 'My e-tickets',
      text: "There aren't any yet.",
      linkText: 'Retrieve here',
      icon: require('../../assets/images/Icons-V2.png'),
    },
    {
      title: 'Park hours',
      text: 'Today, 13 Feb\n10am - 5pm',
      linkText: 'Plan my visit',
      icon: require('../../assets/images/Icons-V2-2.png'),
    },
  ];

  const showCards = [
    {
      title: 'Dive Feeding @ Shipwreck',
      time: '2:30 PM',
      image: require('../../assets/images/show1.jpg'),
    },
    {
      title: 'Say Cheese Shark',
      time: '2:40 PM',
      image: require('../../assets/images/show2.jpg'),
    },
    {
      title: 'Diving Is Fun!',
      time: '2:40 PM',
      image: require('../../assets/images/show3.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header />
      <BannerCarousel banners={banners} />
      <Menu menuItems={menuItems} />
      <InfoCards cards={infoCards} />
      <ShowCards shows={showCards} />
  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default App;
