import React, { useState, Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import SingleWalletComponent from './SingleWalletComponent';

export default class ItemListWallet extends Component {
    render(
    ){
    return (
            <FlatList
            style={{flex:1, marginBottom:'10%'}}
            data={this.props.arrayDataItems}
            renderItem={({ item }) =>
                <SingleWalletComponent element={item}  />
            }
        />
    )
}
}
