import React, { useState, useEffect } from "react";
import {  Text, View, FlatList, StyleSheet} from "react-native";



export default () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100&inc=name")
      .then((response) => response.json())
      .then((response) => {
        setPeople(response.results);
      })
      .catch((error) => {
        console.log("error", error);
        alert("Oops!! Something went wrong.");
      });
  }, []);

  return (
    
      <FlatList
        data={people}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    
  );
};
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  name: {
    fontSize: 18,
    fontColor: '#ffa500',
  },
  separator: {
    backgroundColor: '03fcf0',
    height: 1,
  },
});