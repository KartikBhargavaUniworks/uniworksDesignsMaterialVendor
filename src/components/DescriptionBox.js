import React from 'react';
import { Text, View } from 'react-native';

const DescriptionBox = ({Date}) =>{
  return(
    <View style={{ backgroundColor: '#ffffff', alignItems: 'center', height: 150, marginBottom: '5%',marginHorizontal:'5%', marginTop: '5%' }} >
    <View style={{ alignItems: 'center' }} >
  <Text style={{ paddingTop: 15,  fontSize: 24, fontWeight:'bold', color:'#353535' }}> {Date}</Text>
      <View style={{ marginTop: 10, alignItems: 'center' }} >
        <Text style={{  fontSize: 16, textAlign: 'center', marginTop:'10%', color:'#353535', fontSize:22 }}>9:30</Text>
      </View>
    </View>
  </View>
  )
}

export default DescriptionBox;