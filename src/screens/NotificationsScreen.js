import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import NotificationComponent from '../components/NotificationComponent'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'


const NotificationsScreen = () =>{
    let Date = '23/06/2020'
   let value=8
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#ffffff', flex: 1 }} >
               <Text style= {{ alignSelf:'center', marginTop:'10%', color:'#353535', fontSize:24, fontWeight:'bold', marginBottom:'5%' }} >Notifications</Text>
               
                <View style ={{marginTop:'5%', marginHorizontal:'10%'}}>
                    <Text style = {{ fontSize:18, color:'#353535' }} >{Date}</Text>
                </View>
                <NotificationComponent
                  NoOfItems={value.toString()}
                  Amount='24,500'
                />
                <NotificationComponent
                    NoOfItems={value.toString()}
                   Amount='24,500'
                />
                <NotificationComponent
                    NoOfItems={value.toString()}
                   Amount='24,500'
                />
               
                <View style ={{marginHorizontal:'10%', marginTop:'10%'}}>
                    <Text style = {{ fontSize:18, color:'#353535' }} >26/09/2020</Text>
                </View>
               
                <NotificationComponent
                      NoOfItems={value.toString()}
                    Amount='24,500'
                />
                <NotificationComponent
                   NoOfItems={8}
                    Amount='24,500'
                />
                <NotificationComponent
                   NoOfItems={10}
                    Amount='24,500'
                />
                <NotificationComponent
                   NoOfItems={15}
                    Amount='24,500'
                />
                <NotificationComponent
                   NoOfItems={6}
                    Amount='24,500'
                />
                </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rect3: {
        width: "90%",
        height: 60,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "rgba(112,112,112,1)",
        borderStyle: "solid",
        borderRadius: 100,
        flexDirection: "row",
        paddingStart: 20,
       alignSelf:'center'
      },
      textInputPhone: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        flexDirection: 'row',
        maxWidth: '88%'
      },
})


export default NotificationsScreen;