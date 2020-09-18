import React, { Component } from 'react'
import { FlatList } from 'react-native'
import SingleNotificationComponent from './SingleNotificationComponent';

class ItemListNotification extends Component {
    
    constructor(props){
        super(props)
        this.state={
           array:this.props.arrayDataItems
        }
    }
    handleChecked=(singleItem)=>{
        let list=this.state.array
        list.map((item)=>{
            if(item.id==singleItem.id){
                item.checked=singleItem.checked
            }
        })
        this.props.handleCheckedBox(list)
         this.setState({array:list})
         
    }

    render(
    ){
    return (
            <FlatList
            style={{flex:1, marginBottom:'10%'}}
            data={this.props.arrayDataItems}
            renderItem={({ item }) =>
                <SingleNotificationComponent element={item} onChecked={this.handleChecked} />
            }
        />
    )
}
}

export default ItemListNotification;