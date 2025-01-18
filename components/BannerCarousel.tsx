// Components/BannerCarousel.js
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';

const BannerCarousel = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const segments = useRef(banners.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(segments[currentIndex], {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        segments[currentIndex].setValue(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      });
    };

    startAnimation();

    return () => {
      segments.forEach((segment) => segment.stopAnimation());
    };
  }, [currentIndex]);

  return (
    <View style={styles.bannerContainer}>
      <Image source={banners[currentIndex]} style={styles.banner} />
      <View style={styles.progressBarContainer}>
        {segments.map((progress, index) => (
          <Animated.View
            key={index}
            style={[
              styles.segment,
              {
                width: `${100 / banners.length}%`,
                backgroundColor: index === currentIndex ? '#007BFF' : '#ddd',
                transform: [
                  {
                    scaleX: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: { position: 'relative', width: '100%', height: 200 },
  banner: { width: '100%', height: '100%', resizeMode: 'cover' },
  progressBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    flexDirection: 'row',
  },
  segment: {
    height: '100%',
    transformOrigin: 'left',
  },
});

export default BannerCarousel;
