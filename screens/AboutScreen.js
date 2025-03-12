import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>About LM Club</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.text}>
            Who We Are I am Rickardo A. Anderson, just an ordinary guy with an
            extraordinary mindset. I believe that our very design as human
            beings is to achieve and accomplish great things, and that BIG
            things start small. I am driven by the belief that human cooperation
            is the most powerful force on earth. I value persistence,
            resilience, creativity, determination, passion, drive, the power of
            habit, teamwork, and most importantly, I believe in LAOE MAOM and in
            YOU.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Our Founder's Vision</Text>
          <Text style={styles.text}>
            From a young age, l identified as someone who wants more - not just
            for myself but for everyone capable of utilizing their inherent
            abilities. Imagination is a gift we all possess, and it has been the
            driving force behind many great successes. However, many of us find
            ourselves using our talents for others rather than ourselves, often
            feeling exploited. Despite feeling a constant "inner desire" to
            achieve great things, I also faced my own doubts and insecurities,
            my "monster." Understanding this monster and facing it head-on with
            my creativity, which I call my "Genius," has been my key to
            overcoming obstacles. It wasn't until 2015, with the guidance of a
            business mentor, that I realized the value of focusing on my
            strengths rather than my weaknesses. Embracing this philosophy led
            to significant shifts in my entrepreneurial journey.{' '}
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Our Journey</Text>
          <Text style={styles.text}>
            Achieving success is often a lonely and challenging road. It took me
            15 years of dedication and sacrifice to carve my own path.
            Recognizing the intensity of this journey, I founded the Laoe Maom
            Group to help others avoid such extreme sacrifices. Our
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Our Mission</Text>
          <Text style={styles.text}>
            Laoe Maom is a global creative community that makes collaboration
            easy, creating infinite opportunities for our members. We build
            success around our passions and adapt to the ever-changing dynamics
            of the world. Our mission is to build and operate a collaborative
            network of like-minded, hard-working individuals. At Laoe Maom, we
            believe in building success together. Join us and be a part of a
            progressive and expansive community dedicated to achieving greatness
            through collaboration and mutual support.{' '}
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://www.lmclub.club/assets/Founder1-BBvgq8Ia.jpg',
            }}
            style={styles.profileImage}
          />

          <Image
            source={{
              uri: 'https://www.lmclub.club/assets/Founder22-ChikUhh9.jpg',
            }}
            style={styles.profileImage}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
    alignItems: 'center',
  },
  heading: {
    fontWeight: '800',
    fontSize: 18,
    color: '#ffffff',
    paddingTop: 16,
  },
  scrollContent: {
    paddingTop: 120,
    paddingBottom: 80,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    width: '100%',
    backgroundColor: '#f2f2f3',
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    width: '90%',
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
  },
  profileImage: {
    width: '90%',
    height: 260,
    borderRadius: 4,
  },
});
