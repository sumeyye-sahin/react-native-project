import React, {useState} from 'react';
import {View, Text, FlatList, Switch} from 'react-native';

function App() {
  const data = [
    {id: 0, name: 'cafe.exe', isFavorite: true},
    {id: 1, name: 'KafaKafe', isFavorite: false},
    {id: 2, name: 'bugG', isFavorite: false},
    {id: 3, name: 'Latte Cafe', isFavorite: true},
    {id: 4, name: 'starbucks', isFavorite: false},
    {id: 5, name: 'escCafe', isFavorite: false},
  ];
  const [cafeList, setCafeList] = useState(data);
  const [showFavoriteCafeList, setShowFavoriteCafeList] = useState(false);

  function controlSwitch(isOpen) {
    setShowFavoriteCafeList(isOpen);
    isOpen
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  return (
    <View>
      <Text style={{color: 'black'}}> LIST FAVORITE CAFES </Text>
      <Switch value={showFavoriteCafeList} onValueChange={controlSwitch} />
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text> {item.name} </Text>}
      />
    </View>
  );
}

export default App;
