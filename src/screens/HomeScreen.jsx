import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import StockItems from './StockItems';
import Create from './Create';

const HomeScreen = () => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
    { id: 1, name: 'Wheat', stock: 10, unit: 'Kg' },
    { id: 2, name: 'Rice', stock: 50, unit: 'Kg' },
    { id: 3, name: 'Oil', stock: 30, unit: 'L' },
    { id: 4, name: 'Eggs', stock: 20, unit: 'Dz' },
    { id: 5, name: 'Milk', stock: 2, unit: 'L' },
  ]);
  return (
    <View style={styles.mianContainer}>
      <Text style={styles.text}>Dashboard</Text>

      {/* buttons */}
      <View style={styles.buttonCotainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setview(0)}
        >
          <Text
            style={[styles.buttonText, view === 0 ? { color: 'white' } : null]}
          >
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 1 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setview(1)}
        >
          <Text
            style={[styles.buttonText, view === 1 ? { color: 'white' } : null]}
          >
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setview(2)}
        >
          <Text
            style={[styles.buttonText, view === 2 ? { color: 'white' } : null]}
          >
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <StockItems data={data} />}
      {view === 1 && (
        <StockItems data={data.filter(item => item.stock <= 10)} />
      )}
      {view === 2 && <Create data={data} setdata={setdata} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mianContainer: {
    height: '100%',
    width: '100%',
    padding: '4%',
  },
  text: {
    fontSize: 30,
    fontWeight: 700,
  },
  buttonCotainer: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
  },
  button: {
    borderWidth: 1.5,
    borderColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 500,
    color: 'green',
  },
});
