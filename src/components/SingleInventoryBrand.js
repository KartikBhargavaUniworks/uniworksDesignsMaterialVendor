import React, { Component, useState } from 'react'
import { Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';

 class SingleInventoryBrand extends Component {

        constructor(props){
            super(props)
            this.state={
                show:false,
                Brand:this.props.brand
            }
        }
        handleShow=()=>{
            this.props.onClick(!this.state.show)
            this.setState({ show:!this.state.show })
            
        }
        checkThisBox = (itemID) => {
            let data = this.state.Brand
            if (data.id == itemID) {
                data.checked = !data.checked
                this.setState({ Brand: data })
                // this.props.onChecked(this.state.Brand)
            }
        }
        render(){
        return (
            <View style={{ marginVertical:20, paddingTop:20, paddingBottom:20, paddingLeft:10, paddingRight:15 }}>
                    
                    <View style={{ flexDirection: 'row', marginHorizontal: '10%', alignSelf:'center' }} >
                        <Text style={{ color: '#000000', fontSize: 24, fontWeigth: 'bold' }}>{this.state.Brand.BrandName}</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }} />
                        <CheckBox
                        checked={this.state.Brand.checked}
                        onPress={() => this.checkThisBox(this.state.Brand.id)}
                    />
                        </View>
                       
            </View>
        )
        }
}
export default SingleInventoryBrand;