import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AccordionContentDesignNotification from './AcordionContentDesignNotification';

const NotificationComponent = ({ NoOfItems, Amount }) => {

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
    let date = '20/02/2020'
    let amount = "₹ " + Amount
    return (
        <View style={{ flex: 1 }} >
            <View style={styles.mainContainer} >
                <TouchableOpacity onPress={() => handleShowContent()} >
                    <View style={styles.contentBox} >
                        <Text style={{ color: '#353535', fontWeight: 'bold', fontSize: 20 }} >{NoOfItems + '  Items'}</Text>
                        <View style={styles.filler} />
                        <Text style={{ color: '#353535', fontSize: 20, alignSelf: 'center' }} >{amount}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                {
                    data.show ?
                        <AccordionContentDesignNotification Date={date} />
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
    filler: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default NotificationComponent;
