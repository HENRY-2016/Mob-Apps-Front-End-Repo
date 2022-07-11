
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, ActivityIndicator} from 'react-native';
import {FontAwesome,Ionicons } from '@expo/vector-icons';
import styles from "./stylesheet";
import axios from "axios";
import { COLORS } from './Colours';
import { SliderBox } from "react-native-image-slider-box";
import {APIlistAllOffersProducts, imageurl} from './DataFileApis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native-web';


export default class Offers extends React.Component {
constructor(props){
    super(props);
    this.state = {

        cartItems: [],
        NumberOfItems:'',

         // Screens
        DoNotShowDisplayScreen: false,
        DoNotShowItemDetailsScreen: true,

        ItemDetails:[
            "https://github.com/HENRY-2016/Development-Repo/blob/main/kg-app-1.png?raw=true",
            "https://github.com/HENRY-2016/Development-Repo/blob/main/kg-app-2.png?raw=true",
            "https://github.com/HENRY-2016/Development-Repo/blob/main/kg-app-3.png?raw=true",
            "https://github.com/HENRY-2016/Development-Repo/blob/main/kg-app-4.png?raw=true",
            "https://github.com/HENRY-2016/Development-Repo/blob/main/kg-app-5.png?raw=true",
            "https://github.com/HENRY-2016/Development-Repo/blob/main/kg-app-6.png?raw=true",
        ],
        ItemIndex:'',
    }
    
}

componentDidMount() {
    axios.get(APIlistAllOffersProducts)
    .then(res => {
        let results =JSON.stringify(res.data); 
        this.setState({cartItems:[...JSON.parse(results)]})
        })
    .catch(err=>{Alert.alert("Error","\n\n"+err)})

setInterval(this.getNumberOfItems,1000);

}
showItemDisplayScreen = () =>
{
    this.setState({DoNotShowItemDetailsScreen: true})
    this.setState({DoNotShowDisplayScreen: false})
}
showItemDetailsScreen = () =>
{
    this.setState({DoNotShowDisplayScreen: true})
    this.setState({DoNotShowItemDetailsScreen: false})
}

displayItemDetailsScreen = (index) =>
{
    this.setState({ItemIndex:index})
    setTimeout(this.showItemDetailsScreen,2000)
}
getNumberOfItems = () => 
{
    try 
    {   AsyncStorage.getItem ('NumberOfItems')
        .then(value =>{if (value != null){ this.setState({NumberOfItems:value})}})
        // console.log("===== geting NumberOfItems")
    }catch (error) { console.log(error)}
};

addtocart = (index) => 
{
    const newItems = [...this.state.cartItems]; // clone the array

    let product = newItems[index];
    let id = index;
    let name = product.Name;
    let status = product.Description;
    let amount = product.Amount;
    let image = product.image;
    let qty = 1;
    let itemcart={ id: id, name: name, status: status, amount: amount, qty:qty,image:image}
    

    console.log("product details===>"+ JSON.stringify(itemcart));

    AsyncStorage.getItem('cartItems').then((datacart)=>{
            if (datacart !== null) 
            {
                // We have data!!
                const cart = JSON.parse(datacart)
                cart.push(itemcart)
                AsyncStorage.setItem('cartItems',JSON.stringify(cart));
                alert("Item Added To Cart")
            }
            else{
                const cart  = []
                cart.push(itemcart)
                AsyncStorage.setItem('cartItems',JSON.stringify(cart));
                alert("Item Added To Cart")
            }
        })
        .catch((err)=>{alert(err)})
        // store intia1 Oder List with cartItems
        // AsyncStorage.setItem('orderList',JSON.stringify(this.cartItems));

        // NumberOfItems
        AsyncStorage.getItem('NumberOfItems').then((number)=>{
            if (number !== null) 
            {
                // We have data!!
                const value = JSON.parse(number)
                let newnumber = parseInt(value) + 1;
                console.log("== New ===",newnumber)
                AsyncStorage.setItem('NumberOfItems',JSON.stringify(newnumber));
                console.log("number Added")
            }
            else{
                let newnumber = 1;
                AsyncStorage.setItem('NumberOfItems',JSON.stringify(newnumber));
                console.log("Initial Num Added To Cart")
            }
        })
        .catch((err)=>{alert(err)})
}

formatNumberWithComma(numb) {
    let str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

render() {
    
    const { ItemDetails,ItemIndex,DoNotShowItemDetailsScreen} = this.state;
    const { cartItems,NumberOfItems,DoNotShowDisplayScreen,} = this.state;


    return (
        
        <View style={styles.mainView}>
            <View style={styles.mainViewTopSpace} ></View>
            <View style={styles.topNavigationHeader}>
                <View style={styles.openDrawerMenuView} >
                    <View style={styles.mainMenuView}>
                        <TouchableOpacity style={styles.openDrawerbtn} onPress={() => this.props.navigation.openDrawer()}>
                            <FontAwesome name="navicon" size={28} color="black" style={styles.opeMenuIcone} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = { styles.productTopTitleNameView}>
                    <Text style = { styles.productTopTitleName}> Offers </Text>
                </View>
                <View style={styles.mainCartView}>
                    <TouchableOpacity style={styles.mainCartbtn} onPress={() => this.props.navigation.navigate('Cart')}>
                        <Ionicons name="ios-cart" size={25} style={styles.cartCartIncon} />
                        <Text  style={styles.mainCartNumberTxt}>{NumberOfItems}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {DoNotShowDisplayScreen ?<></>: (
                <>
                <ScrollView>
                    {cartItems && cartItems.map((item, i) => (
						<>
						<View key={i} style={styles.offersMainContainerView}>

                            <View style={styles.offersimageRightView}>
                                <TouchableOpacity onPress={()=>this.displayItemDetailsScreen(i)}>
                                    <Image source={{uri: imageurl+item.image}} style={styles.productImage} />
                                </TouchableOpacity>
							</View>

                                <View style={styles.offersLableLeftView}>
                                    <Text numberOfLines={1} style={styles.offersLables}> {item.Name}</Text>
                                    <Text numberOfLines={1} style={styles.offersLables}> {item.Description}</Text>
                                    <Text numberOfLines={1} style={styles.offersLables}> {this.formatNumberWithComma(item.Amount)}</Text>
                                </View>
                        </View>
						<View style={styles.offersbtnsView}>
							<TouchableOpacity style={styles.offersschedulebtn}   >
								<Text style = {styles.btnText} >{item.PalaceHolderOne}</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.offersorderbtn} onPress={()=>this.addtocart(i)} >
								<Text style = {styles.btnText}> Add to cart </Text>
							</TouchableOpacity>
						</View>
						</>
                    ))}

                    <View style={{alignItems: "center"}}>
                        <TouchableOpacity style={styles.offersProcedbtn} >
                            <Text style = {styles.nextbtnText} onPress={()=>this.props.navigation.navigate('Cart')} >PROCED</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>)}

                {DoNotShowItemDetailsScreen ? <></>:(<>
                    <ScrollView>
                    <View style={{height:20}}></View>
                        <View style={styles.ImageSliderView}>
                            <View style={{height:20}}></View>
                            <SliderBox style={styles.ImageSliderView}
                                images={ItemDetails} sliderBoxHeight={200}
                                dotColor= {COLORS.white} inactiveDotColor={COLORS.colourNumberOne}
                                paginationBoxVerticalPadding={10}
                                autoplay circleLoop resizeMethod={'resize'} resizeMode={'cover'}
                                paginationBoxStyle={styles.ImagePaginationBoxStyle}
                                dotStyle={styles.ImageSliderDotStyle}
                                ImageComponentStyle={ styles.ImageSliderImageComponentStyle}
                                imageLoadingColor={COLORS.colourNumberOne}
                                /> 
                        </View> 
                    <View  style={styles.MainTextDetailsView}>
                        <View style={styles.TextDetailsView}>
                            <Text  style={styles.offersLables}> Name</Text>
                            <Text  style={styles.TextDetails}> Description Description Description Description Description Description</Text>
                            <Text  style={styles.offersLables}>Amount</Text>
                        </View>
                    </View>

                    <View style={styles.offersbtnsView}>
                        <TouchableOpacity style={styles.offersorderbtn}  onPress={()=>this.showItemDisplayScreen} >
                            <Text style = {styles.btnText} >Display</Text>
                        </TouchableOpacity>
                        <View style={{width:25}} ></View>

                        <TouchableOpacity style={styles.offersorderbtn} onPress={()=>this.addtocart(ItemIndex)} >
                            <Text style = {styles.btnText}> Add to cart </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:20}}></View>
                    <View style={{alignItems: "center"}}>
                        <TouchableOpacity style={styles.offersProcedbtn} >
                            <Text style = {styles.nextbtnText} onPress={()=>this.props.navigation.navigate('Cart')} >PROCED</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:20}}></View>
                    </ScrollView>
                </>)}
        </View>
    );
}
}
