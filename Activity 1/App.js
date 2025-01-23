import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
    <center><Text>Angelo "John Wick" Esguerra</Text></center>
    <View>
    <center><Text>IT 302</Text></center>
    <center><Image
     source={{
       uri: 'https://th.bing.com/th/id/OIP.NiUmRlgOnQPNmjtXkXpPlAHaEK?rs=1&pid=ImgDetMain',
     }}
     style={{width: 200, height: 200}}
     /></center>
    </View>
    <center><TextInput
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      textAlign: 'center',
    }}
    defaultValue="You can type in me"
    /></center>

    </ScrollView>
  );
};

export default App;