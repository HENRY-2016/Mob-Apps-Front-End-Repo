
import React from 'react';
import {Text, View,TouchableOpacity,Image, ScrollView} from 'react-native';
import styles from "./stylesheet";
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import axios from "axios";
import {APIListAllAwards, ImageUrl} from './DataFileApis';


export default class Awards extends React.Component {
constructor(props){
    super(props);
    this.state = {
        AwardsData:[],
    
    }
    
}

componentDidMount() {

    axios.get(APIListAllAwards)
    .then(res => {
        let results =JSON.stringify(res.data); 
        this.setState({AwardsData:[...JSON.parse(results)]})
        // console.log(this.state)
        })
    .catch(err=>{Alert.alert("Error","\n\nCan Not Load Products");})

}


render() {
    
    const {AwardsData} = this.state;

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

                <TouchableOpacity style={styles.openChatBtn} onPress={() => this.props.navigation.navigate('Notifications')}>
                    
                        <Text  style={styles.mainCartNumberTxt}>3</Text>

                    <AntDesign name="notification" size={35} style={styles.NotificationIcon} />
                </TouchableOpacity>
            </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={styles.MainBodyView}  >
                <View style={{height:80}}></View>
                {AwardsData && AwardsData.map((item,index) =>(
                    <View key={index} >
                        <View style={styles.DetailsCard} >
                            <View style={[styles.ImageCardView,styles.ImageCardView2]} >
                                <Image style={styles.ImageImage2} source={{uri: ImageUrl+item.Image}}/>
                            </View>

                            <Text style={[styles.TextLabels,styles.TextLabels4]} >{item.Title} </Text>
                            <Text style={[styles.TextLabels ,styles.TextLabels4]} >{item.Description} </Text>

                        </View>
                        <View style={{height:80}}></View>
                    </View>
                ))}

                </View>
                <View style={styles.MainBottomSpaceView}></View>
                </ScrollView>
            </View>

    );
}
}
