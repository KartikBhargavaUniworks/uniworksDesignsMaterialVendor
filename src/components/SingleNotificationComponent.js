import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'



export default class SingleNotificationComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Element: this.props.element,
            colorCode: this.props.element.ColorCode,
            amount: "₹ " + this.props.element.Amount
        }
    }

    checkThisBox = (itemID) => {
        let data = this.state.Element
        if (data.id == itemID) {
            data.checked = !data.checked
            this.setState({ Element: data })
            this.props.onChecked(this.state.Element)
        }
    }

    render(
    ) {
        return (

            <View style={{ marginTop: '10%' }} >
                <View style={{ flexDirection: 'row', marginHorizontal: '10%' }} >
                    <Text style={{ fontSize: 20, color: '#353535', fontWeight: 'bold' }} >{this.state.Element.MaterialName}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                        <CheckBox
                            checked={this.state.Element.checked}
                            onPress={() => this.checkThisBox(this.state.Element.id.toString())}
                        />
                </View>
                <Text style={{ marginHorizontal: '10%', color: "#353535", fontSize: 16, marginTop: 5 }} >{this.state.Element.BrandName}</Text>
                <View style={{ flexDirection: 'row', marginTop: '5%', marginHorizontal: '10%' }} >
                    <View >
                        <Text style={{ fontSize: 18, fontWeight: 'bold', opacity: 0.8 }} >Specification</Text>
                        <Text style={{ fontSize: 16 }} >{this.state.Element.Color + ',' + this.state.Element.ColorCode}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <View style={{
                        width: "20%",
                        height: 30,
                        backgroundColor: this.state.colorCode,
                        borderWidth: 1,
                        borderColor: this.state.colorCode,
                        borderStyle: "solid",
                        borderRadius: 100,
                        marginTop: 5
                    }} />
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: '10%', marginTop: '5%' }} >
                    <Text style={{ fontSize: 20, color: '#353535', fontWeight: 'bold' }} >{this.state.Element.Quantity}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }} />
                    <Text style={{ fontSize: 20, color: '#353535', fontWeight: 'bold' }} >{this.state.amount}</Text>
                </View>
            </View>
        )
    }
}
