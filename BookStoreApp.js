import { FlatList, StyleSheet, Text, Button, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './store/actions';

export default function BookStoreApp() {
    const books = [
        {
          id: '1',
          title: 'Гаррі Поттер і філософський камінь',
          author: 'Дж.К. Ролінґ',
          price: 20,
          cover: 'https://images.prom.ua/5893994992_w600_h600_5893994992.jpg'
        },
        {
          id: '2',
          title: 'Аліса в Країні Чудес',
          author: 'Льюїс Керрол',
          price: 15,
          cover: 'https://mamabook.com.ua/wp-content/uploads/2018/05/maxresdefault.jpg'
        },
        {
          id: '3',
          title: 'Віллі Вонка і шоколадна фабрика',
          author: 'Роальд Дал',
          price: 18,
          cover: 'https://sviato.lviv.ua/wp-content/uploads/2013/03/ww2.jpg'
        }
      ];
      

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Store</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Image source={{ uri: item.cover }} style={{ width: 50, height: 50 }} />
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>{`$${item.price}`}</Text>
            <Button title="Add to Cart" onPress={() => dispatch(addToCart(item))} />
          </View>
        )}
      />
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text>{item.title}</Text>
            <Text>{`$${item.price}`}</Text>
            <Button title="Remove from Cart" onPress={() => dispatch(removeFromCart(item.id))} />
          </View>
        )}
      />
      <Text>Total: ${cart.reduce((total, item) => total + item.price, 0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  bookItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
  },
});
