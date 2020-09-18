import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import DescriptionBox from './DescriptionBox';
import ItemListWallet from './ItemListWallet';

const AccordionContentDesignWallet = () => {
    let date = '20/02/2020'
    let dataArray = [{
        id: 1,
        MaterialName: "Kartik's Brand ",
        BrandName: "Brand Name",
        Color: "Red",
        ColorCode: "#E32626",
        Quantity: '450 Items',
        Amount: "24,500",
    },
    {
        id: 2,
        MaterialName: "Kartik's Brand ",
        BrandName: "Brand Name",
        Color: "Red",
        ColorCode: "#E32626",
        Quantity: '450 Items',
        Amount: "24,500",
    }, {
        id: 3,
        MaterialName: "Kartik's Brand ",
        BrandName: "Brand Name",
        Color: "Red",
        ColorCode: "#E32626",
        Quantity: '450 Items',
        Amount: "24,500",
    }, {
        id: 4,
        MaterialName: "Kartik's Brand ",
        BrandName: "Brand Name",
        Color: "Red",
        ColorCode: "#E32626",
        Quantity: '450 Items',
        Amount: "24,500",
    }]
    return (
        <ScrollView>
            <View style={styles.mainContainer} >
                <View style={{ borderBottomWidth: 2, borderColor: '#000000' }} />
                <View style={{ alignItems: 'center', marginTop: '13%', flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }}>
                    <Text style={{ fontSize: 18 }} >Site Engineer Name</Text>
                    <View style={styles.SiteEngineerFiller}></View>
                    <Feather name="phone" color="black" size={25} style={{ top: 5 }} />
                </View>
                <DescriptionBox Date={date} />
                <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: '10%', marginRight: '10%' }}>
                    <Text style={{ fontSize: 18 }} >Address</Text>
                    <View style={styles.SiteEngineerFiller}></View>
                    <FontAwesome name="share-alt" color="black" size={25} style={{ alignSelf: 'center' }} />
                </View>
                <ItemListWallet arrayDataItems={dataArray} />
                <View style={{ borderBottomWidth: 2, borderColor: '#000000' }} />
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    SiteEngineerFiller: {
        flex: 1,
        flexDirection: "row",
    },
    signInFiller: {
        marginLeft: '15%',
        flex: 1,
        flexDirection: "row"
    }
})

export default AccordionContentDesignWallet;