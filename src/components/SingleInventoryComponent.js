import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

 class SingleInventoryComponent extends Component {

        constructor(props){
            super(props)
            this.state={
                show:false
            }
        }
        handleShow=()=>{
            this.props.onClick(!this.state.show)
            this.setState({ show:!this.state.show })
            
        }
        render(){
        return (
            <View style={{ marginVertical:20, paddingTop:20, paddingBottom:20, paddingLeft:10, paddingRight:15 }}>
                    <TouchableOpacity onPress={this.handleShow} >
                    <View style={{ flexDirection: 'row', marginHorizontal: '10%', alignSelf:'center' }} >
                        <Text style={{ color: '#000000', fontSize: 24, fontWeigth: 'bold' }}>{this.props.element}</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <Feather name="chevron-right" size={24} style={{ alignSelf:'center' }}/>
                        </View>
                    </TouchableOpacity>
            </View>
        )
        }
}
export default SingleInventoryComponent;