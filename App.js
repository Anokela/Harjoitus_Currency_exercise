import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [euros, setEuros] = useState('');
  const [pounds,setPounds] = useState(0);

/* function to calculate the conversion when user presses button   
  function calculate() {
    const result = euros.replace(',','.') * 0.9;
    setPounds(result);
  } */

  function change(text) {
    setEuros(text);
    const result = text.replace(',','.') * 0.9;
    setPounds(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Euros</Text>
      <TextInput style={styles.field} value={euros} onChangeText={text => change(text)}
      keyboardType='decimal-pad'></TextInput>
       <Text style={styles.field}>Pounds</Text>
       <Text style={styles.field}>{pounds.toFixed(2)}</Text>
       {/* to add button to calculate the conversion */}
       {/* <Button onPress={calculate} title='Calculate'></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});
