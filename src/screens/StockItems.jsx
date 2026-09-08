import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AllItems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              { backgroundColor: item.stock <= 10 ? '#FFCCCC' : '#D7F6BF' },
            ]}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}{" "}{item.unit}</Text>
          </View>
        )}
        contentContainerStyle={{ gap: 8 }}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
});
