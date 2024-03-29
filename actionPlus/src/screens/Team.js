
import React from 'react';
import { Text, View,TextInput,TouchableOpacity, Alert, Image,ScrollView, InteractionManager} from 'react-native';
import styles from "./stylesheet";
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import axios from "axios";
import {APIListAllTeam,APIListNewNotification, ImageUrl} from './DataFileApis';
import { LoadingError } from './Functions';

export default class Team extends React.Component {
constructor(props){
    super(props);
    this.state = {
        TeamData:[],
        
    
    }
    
}

UNSAFE_componentWillMount() {
    axios.get(APIListNewNotification)
    .then(res => {
        let results = res; 
        this.setState({TodaysNotifications:results.data})})
    .catch(err=>{})
    axios.get(APIListAllTeam)
    .then(res => {
        let results =JSON.stringify(res.data); 
        let jsonResults =JSON.parse(results); 
        // let FirstIndex = jsonResults[0];
        // let Data = [];
        // Data.push(FirstIndex);
        // jsonResults.shift() // remove fst array element
        this.setState({TeamData:[...jsonResults]})
        // console.log(this.state.TeamFounder)
        })
    .catch(err=>{Alert.alert("Error",LoadingError);})


}

// Major Screens

render() {
    
    const {TeamData,TodaysNotifications} = this.state;

    return (
        
        <View style={styles.mainView}>
            <View style={styles.topNavigationHeader}>
            <View style={styles.openDrawerMenuView} >
                    <View style={styles.mainMenuView}>
                        <TouchableOpacity style={styles.openDrawerbtn} onPress={() => this.props.navigation.openDrawer()}>
                            <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={50} style={styles.opeMenuIcone} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style = { styles.productTopTitleNameView}>
                    <Text style = { styles.productTopTitleName}> Home </Text>
                </View> */}

            <View style={styles.mainChatView}>
                <TouchableOpacity style={styles.openChatBtn} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text  style={styles.mainCartNumberTxt}>{TodaysNotifications}</Text>
                    <AntDesign name="notification" size={35} style={styles.NotificationIcon} />
                </TouchableOpacity>
            </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.MainBodyView}  >
                <View style={{height:80}}></View>
                {TeamData && TeamData.map ((item, index) => (
                    <View key={index} >
                        <View style={styles.DetailsCard} >
                        <View style={styles.DetailsHeaderCard}>
                            <View style={[styles.ImageCardView,styles.ImageCardView1]} >
                                <Image style={styles.ImageImage} source={{uri: ImageUrl+item.Image}}/>
                            </View>
                            <View style={styles.NameTitleDescriptionView} >
                                <Text style={[styles.TextLabels ,styles.TextLabels1]} >{item.Name}</Text>
                            </View>
                        </View>

                            <Text style={[styles.TextLabels, styles.TextLabels4]} >{item.Title}</Text>
                        </View>
                        <View style={{height:80}}></View>
                    </View>
                    
                ))}
                <View style={{height:15}}></View>

            </View>

                <View style={styles.MainBottomSpaceView}></View>
                </ScrollView>
            </View>

    );
}
}
