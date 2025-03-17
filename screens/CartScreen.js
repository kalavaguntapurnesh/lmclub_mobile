import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {AppContext} from '../context/AppContext';
import {useNavigation} from '@react-navigation/native';

const CartScreen = ({navigation}) => {
  const {cart, removeFromCart, clearCart} = useContext(AppContext);
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Your Cart</Text> */}
      {cart.length === 0 ? (
        <View style={styles.emptyCart}>
          <Image
            style={styles.emptyImage}
            source={require('../assets/sad.png')}
          />
          <Text style={styles.emptyText}>Your cart is empty</Text>

          <TouchableOpacity
            style={styles.button}
            // onPress={() => alert('Added to Cart')}
            onPress={() => navigate.navigate('Main')}>
            <Text style={styles.cartText}>Explore Products</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.cartItem}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>${item.price}/month</Text>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 10},
  emptyText: {fontSize: 18, color: '#777', textAlign: 'center', marginTop: 20},
  cartItem: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  image: {width: 80, height: 80, marginRight: 10},
  details: {flex: 1, justifyContent: 'center'},
  name: {fontSize: 18, fontWeight: 'bold'},
  price: {fontSize: 16, color: '#555'},
  removeText: {color: 'red', marginTop: 5},
  clearButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  clearText: {color: 'white', fontSize: 16, fontWeight: 'bold'},

  emptyCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 160,
    height: 160,
  },

  button: {
    marginTop: 20,
    borderColor: '#4CAF50',
    borderWidth: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    width: '50%',
    textAlign: 'center',
  },

  buttonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  cartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
