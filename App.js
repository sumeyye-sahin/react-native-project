import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function App() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <View>
      <Text style={{fontSize:40}}>Counter: {counter}</Text>
      <Button
        title="increase counter"
        onPress={() => increaseCounter()}></Button>
      <Button title="decrease counter" onPress={() => decreaseCounter()}>
       
      </Button>
    </View>
  );
}

export default App;
