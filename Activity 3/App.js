import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Angelo
        <Text style={styles.lastname}> Esguerra</Text>
           {'\n'}
         <Text style={styles.year}> 3rd Year</Text>
         <Text style={styles.section}> BSIT</Text>
         {'\n'}
         <Text style={styles.sentence1}>as an 3rd year IT student natuto ako ng maraming programming </Text>
         <Text style={styles.sentence2}>language maliban sa js :P at habang nag aaral marami akong kaibigan na nakilala hehehed!</Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'blue'
  },
  lastname: {
    color: 'red',
  },
  year: {
    color: 'green',
  },
   section: {
    color: 'gray',
  },
   sentence1: {
    color: 'orange',
  },
     sentence2: {
    color: 'black',
  },
});

export default BoldAndBeautiful;