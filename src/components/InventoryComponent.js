import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import SingleInventoryComponent from './SingleInventoryComponent'
import SingleInventoryBrand from './SingleInventoryBrand'

export default class InventoryComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.items,
            show:false,
            brands:this.props.Brands
        }
    }

    handleShow=(check)=>{
        this.setState({show:check})
        console.log(check)
    }

    handleChecked=(singleItem)=>{
        let list=this.state.brands
        list.map((item)=>{
            if(item.id==singleItem.id){
                item.checked=singleItem.checked
            }
        })
       // this.props.handleCheckedBox(list)
         this.setState({brands:list})
    }
    
    render() {
        return (
                <View>
                    {
                        this.state.show?
                        <View>
                            <FlatList
                    style={{ padding:'10%' }}
                    data={this.state.brands}
                    navigation
                    renderItem={({ item }) => 
                    <SingleInventoryBrand brand={item} onClick={this.handleShow} onChecked={this.handleChecked} />
                }
                />
                <TouchableOpacity style={{
            height: 55,
            width: '60%',
            padding: 25,
            backgroundColor: "#93D152",
            borderWidth: 1,
            borderColor: "rgba(112,112,112,1)",
            borderStyle: "solid",
            borderRadius: 100,
            alignSelf: 'center',
        }} onPress={this.handleShow}>
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <Text style={{ fontSize: 20, color: '#ffffff', alignSelf: 'center' }}>Submit</Text>
                    </View>
                </TouchableOpacity >
                        </View>
                        :
                        <FlatList
                    style={{ padding:'10%' }}
                    data={this.state.data}
                    renderItem={({ item }) => 
                    <SingleInventoryComponent element={item} onClick={this.handleShow} />}
                />
                    }
                </View>
           
        )
    }

}