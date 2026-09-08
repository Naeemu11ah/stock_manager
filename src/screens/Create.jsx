import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Create = ({ data, setdata }) => {
  const [itemName, setitemName] = useState('');
  const [itemStock, setitemStock] = useState('');
  const [itemUnit, setitemUnit] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, seteditItemId] = useState(null);

  const stockAddingHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: itemStock,
      unit: itemUnit,
    };
    {
      itemName && itemStock && itemUnit && setdata([...data, newItem]);
    }
    setitemName('');
    setitemStock('');
    setitemUnit('');
  };

  const handleDeletion = id => {
    setdata(data.filter(item => item.id !== id));
  };

  const handleEditing = item => {
    setisEdit(true);
    seteditItemId(item.id);
    setitemName(item.name);
    setitemStock(String(item.stock));
    setitemUnit(item.unit);
  };

  const handlingDataUdation = () => {
    {
      itemName &&
        itemStock &&
        itemUnit &&
        setdata(
          data.map(item =>
            item.id === editItemId
              ? { ...item, name: itemName, stock: itemStock, unit: itemUnit }
              : item,
          ),
        );
    }
    setisEdit(false);
    setitemName('');
    setitemStock('');
    setitemUnit('');
  };

  return (
    <View>
      {/* inputs */}
      <View style={styles.mainContiner}>
        <TextInput
          placeholder="Enter item name"
          style={styles.input}
          value={itemName}
          onChangeText={setitemName}
        />
        <TextInput
          placeholder="Enter stock quantity"
          style={styles.input}
          value={itemStock}
          onChangeText={setitemStock}
        />
        <TextInput
          placeholder="Enter unit (Kg, Dz, L)"
          style={styles.input}
          value={itemUnit}
          onChangeText={setitemUnit}
        />
        <Pressable
          style={styles.button}
          onPress={() =>
            isEdit ? handlingDataUdation() : stockAddingHandler()
          }
        >
          <Text style={styles.buttonText}>
            {isEdit ? 'Update data' : 'Add to stock'}
          </Text>
        </Pressable>
      </View>

      {/* stock items  */}
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All stocked items</Text>
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
              <Text style={styles.itemText}>
                {item.stock} {item.unit}
              </Text>
              <View style={{ flexDirection: 'row', gap: 15 }}>
                <Pressable onPress={() => handleEditing(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => handleDeletion(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 8 }}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  mainContiner: {
    gap: 10,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#133015',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  headingText: {
    fontSize: 20,
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
    fontWeight: 600,
  },
});
