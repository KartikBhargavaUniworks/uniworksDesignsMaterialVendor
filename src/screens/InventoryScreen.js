import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import InventoryComponent from '../components/InventoryComponent'
import { View, Text } from 'react-native'


const InventoryScreen = () => {

    let Data = ['ItemName 1', 'ItemName 2', 'ItemName 3', 'ItemName 4', 'ItemName 5']
    let dataArray = [{
        id: 1,
        BrandName: "Brand Name",
        checked: false
    },
    {
        id: 2,
        BrandName: "Brand Name",
        checked: false
    }, {
        id: 3,
        BrandName: "Brand Name",
        checked: false
    }, {
        id: 4,
        BrandName: "Brand Name",
        checked: false
    }]
    const [data, setData] = useState(dataArray)
    const handleCheckedBoxData = (arrayDataUpdated) => {
        setData({
            data: arrayDataUpdated
        })
    }
    return (
        <View style={{ flex: 1, marginTop: '10%' }} >
            <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, fontWeight: 'bold', opacity: 0.8, marginBottom: '5%' }} >Inventory</Text>
            <InventoryComponent items={Data} Brands={dataArray}  handleCheckedBox={handleCheckedBoxData} />
        </View>
    )
}

export default InventoryScreen;