import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';




export default function App() {
  const [firstnum, setFirstnum] = useState('');
  const [secondnum, setSecondnum] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);


  const calcSum = () => {
   const sum = parseFloat(firstnum) + parseFloat(secondnum);
   setResult(sum);
   setHistory([...history, {key: `${firstnum} + ${secondnum} = ${sum}`}]);
  }

  const calcSub = () => {
    const sub = parseFloat(firstnum) - parseFloat(secondnum);
    setResult(sub);
    setHistory([...history, {key: `${firstnum} - ${secondnum} = ${sub}`}]);
  }

  return (


    
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Result: {result.toFixed(2)}</Text>
      <TextInput
        keyboardType="numeric"
        style={{fontSize:18, width: 100, borderWidth: 1 }}
        onChangeText={firstnum => setFirstnum(firstnum)} 
      />
      <TextInput 
        keyboardType="numeric"
        style={{fontSize:18, width: 100, borderWidth: 1 }}
        onChangeText={secondnum => setSecondnum(secondnum)}
       
      />
      </View>
        <View style={styles.buttoncontainer}>
          <Button onPress={calcSum} title=" + "/>
          <Button onPress={calcSub} title=" - "/>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize: 18}}>History</Text>
          <FlatList
            data={history}
            renderItem={({item}) => <Text style={{fontSize: 18}}>{item.key}</Text>}
            keyExtractor={((item, index) => index.toString())}
            />
        </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  header: {
    fontSize:25,
    color: 'blue'

  },
  listcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});