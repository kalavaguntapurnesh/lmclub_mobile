import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {CartContext} from '../context/CartContext';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../context/AppContext';

const PricingDetailScreen = ({route, navigation}) => {
  const {id, image, name, price, description} = route.params;

  const navigate = useNavigation();

  const [isYearly, setIsYearly] = useState(false);

  console.log('ID is : ', id);
  console.log('Name is : ', name);

  // Get addToCart function from CartContext
  const {addToCart} = useContext(AppContext);

  const togglePlan = () => {
    setIsYearly(prevState => !prevState);
  };

  const handleAddToCart = () => {
    const finalPrice = isYearly ? price * 12 : price;

    const product = {id: name, price: finalPrice, image, description};
    addToCart(product);
    Alert.alert(`${name} has been added to your cart!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />

        <View style={styles.planContainer}>
          <Text style={styles.planName}>{name}</Text>
          <View style={styles.starContainer}>
            <Image
              source={{
                uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3JtMjE2NC0yNDA5MjQtc2ktMDAyLTA3LXAucG5n.png',
              }}
              style={styles.starImage}
            />
            <Text>4.8 / 5</Text>
          </View>
        </View>

        <View style={styles.featuresContainer}>
          <Image
            source={{
              uri: 'https://www.lmclub.club/assets/beehive-CqYcaS-I.webp',
            }}
            style={styles.featureImage}
          />

          <Image
            source={{
              uri: 'https://www.lmclub.club/assets/broadcast-CWHhJIqs.webp',
            }}
            style={styles.featureImage}
          />

          <Image
            source={{
              uri: 'https://www.lmclub.club/assets/estore-DhiTkpHR.webp',
            }}
            style={styles.featureImage}
          />

          <Image
            source={{
              uri: 'https://www.lmclub.club/assets/enroll-CJF6H07Z.webp',
            }}
            style={styles.featureImage}
          />

          <Image
            source={{
              uri: 'https://www.lmclub.club/assets/network-Cwi2h2ca.webp',
            }}
            style={styles.featureImage}
          />
        </View>

        <View style={styles.planDescription}>
          <Text style={styles.aboutTitle}>About {name}</Text>
          <Text style={styles.aboutDescription}> {description}</Text>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.planPrice}>
            {' '}
            ${isYearly ? price * 12 : price}/ {isYearly ? 'year' : 'month'}
          </Text>
          <TouchableOpacity style={styles.toggleButton} onPress={togglePlan}>
            <Text style={styles.toggleButtonText}>
              {isYearly ? 'Monthly' : 'Yearly '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              // onPress={() => alert('Added to Cart')}
              onPress={handleAddToCart}>
              <Text style={styles.cartText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCheckout}
              // onPress={() => alert('Proceed to Checkout')}
              onPress={() => navigation.navigate('CartScreen')}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PricingDetailScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },

  featuresContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  featureButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    borderWidth: 1,
    borderColor: '#4CAF50',
    color: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: '45%',
    textAlign: 'center',
  },
  featureText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  featureImage: {
    width: 48,
    height: 48,
  },

  starImage: {
    width: 20,
    height: 20,
  },

  starContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },

  planContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planDescription: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  aboutDescription: {
    marginVertical: 8,
    fontSize: 15,
    color: '#555',
  },

  bottomContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  priceSection: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planPrice: {
    fontSize: 20,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    borderColor: '#4CAF50',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: '50%',
    textAlign: 'center',
  },
  buttonCheckout: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: '50%',
    textAlign: 'center',
  },

  cartText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  toggleButton: {
    borderColor: '#4CAF50',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  toggleButtonText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '600',
  },
});
