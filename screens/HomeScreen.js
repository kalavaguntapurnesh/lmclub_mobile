import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useRef, useEffect, useState, useContext} from 'react';
import {Card} from 'react-native-paper';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {AppContext} from '../context/AppContext';

const sliderImages = [
  {
    uri: 'https://www.lmclub.club/assets/beehive-CqYcaS-I.webp',
    title: 'Beehive',
    description:
      'Unlock the beehive, it will allow us to text/email great deals, coupons, information and opportunities from local businesses.',
  },
  {
    uri: 'https://www.lmclub.club/assets/broadcast-CWHhJIqs.webp',
    title: 'Broadcast',
    description:
      'Broadcast your message to a wider audience and make your business heard.',
  },
  {
    uri: 'https://www.lmclub.club/assets/estore-DhiTkpHR.webp',
    title: 'EStore',
    description:
      'Shop conveniently from your favorite online stores and get exclusive deals.',
  },
  {
    uri: 'https://www.lmclub.club/assets/enroll-CJF6H07Z.webp',
    title: 'Enroll',
    description:
      'Enroll in exclusive programs that help grow your business and community.',
  },
  {
    uri: 'https://www.lmclub.club/assets/network-Cwi2h2ca.webp',
    title: 'Network',
    description:
      'Expand your network and connect with like-minded professionals.',
  },
];

const slider = [
  'https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const HomeScreen = () => {
  const flatListRef = useRef(null);
  let currentIndex = 0;

  const {userData} = useContext(AppContext);

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        flatListRef.current.scrollToIndex({
          index: currentIndex,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const openModal = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Set StatusBar background to transparent and bar style to dark-content */}
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Header with Search Bar and Notification Icon */}
      <View style={styles.header}>
        {/* <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png',
            }}
            style={styles.menuIcon}
          />
        </TouchableOpacity> */}

        <View style={styles.headerContent}>
          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#ccc"
          />

          {/* Notification Icon */}
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827314.png', // Notification bell icon
              }}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Welcome Message */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome {userData && `${userData.firstName} ${userData.lastName}`}</Text>
        <Text style={styles.welcomeTwo}>
          To the world's best membership club!
        </Text>
      </View>

      {/* Horizontal Image Slider */}
      <View style={styles.sliderContainer}>
        <FlatList
          ref={flatListRef}
          data={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.sliderImage} />
          )}
        />
      </View>

      <View style={styles.viewMore}>
        <Text style={{fontWeight: '600'}}>Widgets</Text>
        <Text style={{fontSize: 12}}>View More</Text>
      </View>

      {/* Image Card Row */}
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <View style={styles.imageRow}>
            {sliderImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => openModal(image)}>
                <Image source={{uri: image.uri}} style={styles.image} />
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      </View>

      <View style={styles.viewMore}>
        <Text style={{fontWeight: '600'}}>Pricing Plans</Text>
        <Text style={{fontSize: 12}}>View More</Text>
      </View>

      {/* Horizontal Pricing Plans Section */}
      <View style={styles.pricingContainer}>
        <FlatList
          data={[
            {
              id: '1',
              image: 'https://www.lmclub.club/assets/bronze-oGuHLEcP.jpg',
              name: 'Bronze',
              price: '5.99',
              description:
                'Basic benefits, moderate rewards, essential support, community engagement included. No matter which level you choose, you’re instantly connected to a powerful network group and the rewards are Amazing!.',
            },
            {
              id: '2',
              image: 'https://www.lmclub.club/assets/silver-C-U-uO_j.jpg',
              name: 'Silver',
              price: '8.99',
              description:
                'Valuable features, good rewards, reliable support, strong networking opportunities. No matter which level you choose, you’re instantly connected to a powerful network group and the rewards are Amazing!',
            },
            {
              id: '3',
              image: 'https://www.lmclub.club/assets/gold-Ba_rYwzP.jpg',
              name: 'Gold',
              price: '11.99',
              description:
                'Premium benefits, high rewards, enhanced support, excellent community access. No matter which level you choose, you’re instantly connected to a powerful network group and the rewards are Amazing!.',
            },
            {
              id: '4',
              image: 'https://www.lmclub.club/assets/platinum-B6o-iD3t.jpg',
              name: 'Platinum',
              price: '14.99',
              description:
                'Exclusive perks, priority support, maximum rewards, ultimate networking experience. No matter which level you choose, you’re instantly connected to a powerful network group and the rewards are Amazing!.',
            },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PricingDetail', item)}
              style={styles.pricingCard}>
              <Image source={{uri: item.image}} style={styles.pricingImage} />
              <Text style={styles.planName}>{item.name}</Text>
              <Text style={styles.planPrice}>${item.price}/month</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          {/* <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setModalVisible(false)}> */}
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                {selectedImage && (
                  <>
                    <Image
                      source={{uri: selectedImage.uri}}
                      style={styles.modalImage}
                    />
                    <Text style={styles.modalTitle}>{selectedImage.title}</Text>
                    <Text style={styles.modalDescription}>
                      {selectedImage.description}
                    </Text>
                    <View style={styles.checkboxContainer}>
                      <CheckBox
                        value={isChecked}
                        onValueChange={setIsChecked}
                        style={styles.checkbox}
                        tintColor="#555"
                        onCheckColor="#4CAF50"
                      />

                      <Text style={styles.checkText}>
                        I agree to the{' '}
                        <TouchableOpacity
                          onPress={() => {
                            setModalVisible(false);
                            navigation.navigate('About');
                          }}>
                          <Text style={styles.underline}>
                            {' '}
                            Terms & Conditions.
                          </Text>
                        </TouchableOpacity>
                      </Text>
                    </View>
                  </>
                )}
                <View style={styles.buttonsFlex}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeTextOne}>Close</Text>
                  </TouchableOpacity>
                  {isChecked && (
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                      <Text style={styles.closeTextTwo}>Unlock</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>

          {/* </TouchableOpacity> */}
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    fontFamily: 'Outfit',
  },

  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuIcon: {
    width: 28,
    height: 28,
    marginRight: 15,
    tintColor: 'white',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  notificationIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
  welcomeContainer: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  welcomeTwo: {
    fontSize: 12,
    marginTop: 4,
    color: '#555',
  },
  sliderContainer: {
    height: 180,
    marginBottom: 15,
  },
  sliderImage: {
    width: 360,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  viewMore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  cardContainer: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  card: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    borderWidth: 0,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Ensures centering horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a slight background overlay
    width: '100%',
  },

  modalBackground: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Ensures it is centered
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginVertical: 6,
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginVertical: 6,
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginVertical: 6,
    color: '#555',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    color: '#555',
  },

  checkText: {
    color: '#555',
    marginLeft: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 8,
    height: 8,
  },

  underline: {
    textDecorationLine: 'underline',
  },

  buttonsFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'dashed',
    borderColor: 'red',
    width: '100%',
    paddingVertical: 8,
  },

  closeTextOne: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
    paddingVertical: 8,
    width: 120,
    borderRadius: 4,
    paddingHorizontal: 20,
    backgroundColor: '#EF5350',
  },

  closeTextTwo: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
    paddingVertical: 8,
    width: 120,
    borderRadius: 4,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
  },

  pricingContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  pricingCard: {
    width: 120,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    elevation: 3,
  },
  pricingImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  planName: {
    fontSize: 14,
    fontWeight: '600',
  },
  planPrice: {
    fontSize: 12,
    color: '#555',
  },
});
