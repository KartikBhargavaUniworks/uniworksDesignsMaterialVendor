import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather'
import AccordionContentDesignWallet from './AccordionContentDesignWallet';

const WalletComponent = ({ Date, NoOfItems, paidOrNot, Amount }) => {


    const [data, setData] = useState({
        show: false
    })

    const handleShowContent = () => {
        setData(
            {
                show: !data.show
            }
        )
    }
    let amount = "₹ " + Amount
    let date=Date
    return (
        <View style={{flex:1 }} >
        <View style={styles.mainContainer} >
            <TouchableOpacity  onPress={() => handleShowContent()} >
                <View style={styles.contentBox} >
                <Text style={{ color: '#353535', fontWeight: 'bold', fontSize: 20 }} >{NoOfItems + '  Items'}</Text>
                <View style={styles.filler} />
                <View>
                    {paidOrNot ?

                        <TouchableOpacity style={{ marginRight: '5%' }} >
                            <Feather name='check-square' size={24} style={{ color: '#4ACF4E' }} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ marginRight: '5%' }} >
                            <Feather name='minus-square' size={24} style={{ color: '#CF604A' }} />
                        </TouchableOpacity>
                    }
                </View>
                </View>
                <View style={styles.contentBox2} >
                <Text style={{ color: '#353535', fontWeight: 'bold', fontSize: 16 , opacity:0.5}} >{Date}</Text>
                <View style={styles.filler} />
                <Text style={{ color:'#353535' , fontSize:20, alignSelf:'center' }} >{amount}</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View>
                {
                    data.show?
                    <AccordionContentDesignWallet Date={date} />
                    :
                    null
                }
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: '4%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginHorizontal: '10%',
        flex: 1,
    },
    contentBox: {
        marginStart: '10%',
        flexDirection: 'row',
        marginTop: '5%',
        marginEnd: '5%',
    },
    contentBox2: {
        marginStart: '10%',
        flexDirection: 'row',
        marginEnd: '5%',
    },
    filler: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default WalletComponent;



