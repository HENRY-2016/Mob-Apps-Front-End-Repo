
import React from 'react';
import { Text, View, Alert,TextInput,TouchableOpacity,ScrollView,Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from "./stylesheet";
import * as ImagePicker from 'expo-image-picker';
import {Entypo, AntDesign,FontAwesome,Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { COLORS } from './Colours';
import {
        APILogInClubMemberByCardNo,APIClubMemberApplication,APIListAllCountries,
        APIClubMemberAllRenewals,APIPostImg,APIClubMemberAllReferrals,
        APIUpdateClubMemberPassword,APIAccountStatusByCardNo, 
    } from './DataFileApis';
import {
        getBackgroundColor,mainNavigationBtnStyle,getPlainColor,tableTrView,
        mainTableTitleHandleView,aboutTitleText,aboutText,introClubText,trTdText,
        mainNavigationBtnWidth1,mainNavigationBtnWidth2,mainNavigationBtnWidth3,
        getBorderBottomColor,
        mainNavigationBtnWidth4,mainTableTitleHandleViewCredit,userProfileView,
    } from './StatusFunctions'

export default class Club extends React.Component {
constructor(props){
    super(props);
    this.state = {
        
        Countries:[],
        // Screens
        DoNotShowHomeScreen:false,
        DoNotShowBenefitsScreen:true,
        DoNotShowLogInScreen:true,
        DoNotShowApplyMembershipScreen:true,
        DoNotShowMemberCategoryScreen:true,
        DoNotShowUserAccountScreen:true,

        // On chat
        DoNotShowMainNavBtnScreen:false, // should be false always
        // ShowSplashScreen:false,
        // CustomerDetailsFound:true,
        ClubCardNoLogIn:'',
        // chat ----
        ChartCardNo:'',
        ChatMemberName:'',
        ChatChat:'',

        // member application details
        CountrySelectedValue:'',
        PhoneCountryCode:'',
        CountrySelected:'',
        MemberFaceImageType:'',
        MemberFaceImageUri:'',
        MemberFaceImage:null,
        MemberBodyImage:null,
        MemberNominateFaceImage1:null,
        // MemberNominateFaceImage2:null,
        // MemberNominateFaceImage3:null,
        MemberName:'',
        MemberZipCode:'',
        MemberDistrict:'',
        MemberSubCounty:'',
        MemberVillage:'',
        MemberEmail:'',
        MemberCountry:'',
        MemberPhone:'',
        MemberAddress:'',

        ReferralType: '',
        MemberReferral:'',

        MemberDOB:'',
        MemberNominateDOB1:'',
        MemberNominateDOB2:'',
        MemberNominateDOB3:'',

        MemberNominateName1:'',
        MemberNominateEmail1:'',
        MemberNominatePhone1:'',

        // MemberNominateName2:'',
        // MemberNominateEmail2:'',
        // MemberNominatePhone2:'',

        // MemberNominateName3:'',
        // MemberNominateEmail3:'',
        // MemberNominatePhone3:'',


        // Member Log In
        ClubLogInName:'',
        ClubLogInPassword:'',

        // log in profile
        DoNotShowProfileDetailsScreen:true, 
        DoNotShowProfileSettingsScreen:true,
        ClubMemberAllRenewals:[],
        ClubMemberAllReferrals:[],
        AllMemberChats:[],
        NewPassword:'',
        ClubMemberId:'',
        ClubMemberRegistration:'',
        ClubMemberPayment:'',
        IsMemberLogeIn:false,
        ClubMemberName:'',
        ClubMemberCardNo:'',
        ClubMemberPhone:'',
        ClubMemberCategory:'',
        ClubMemberPoints:'',
        ClubMemberSavings:'',
        AccountStatus:'',

        

    }
    
}

UNSAFE_componentWillMount()
{
    this.initializeClubUserName ();
    axios.get(APIListAllCountries)
    .then(res => {
        let results =JSON.stringify(res.data); 
        this.setState({Countries:[...JSON.parse(results)]})
        })
    .catch(err=>{Alert.alert("Error","\n\nCan Not Load App Data"+"\n\n"+"Connect To Internet And Open App Again");})
}

componentDidMount(){} 


initializeClubUserName = () => 
{
    try 
    {   
        AsyncStorage.getItem('ClubMemberDetails').then((Details)=>{
        if (Details !== null) {
            // We have data!!
            const jsonData = JSON.parse(Details)
            let Name = jsonData[0].ClubUserName;
            let CardNo = jsonData[0].ClubMemberCardNo;
            let Category= jsonData[0].ClubMemberCategory;
            let Registration= jsonData[0].Registration;
            let Payment= jsonData[0].Payment;
            let Id= jsonData[0].Id;


            this.setState({ClubMemberName:Name});
            this.setState({ClubMemberCardNo:CardNo});
            this.setState({ClubMemberCategory:Category});
            this.setState({ClubMemberPayment:Payment});
            this.setState({ClubMemberRegistration:Registration});
            this.setState({ClubMemberId:Id});
            this.setState({IsMemberLogeIn:true});
            this.getAllClubMemberRenewals(CardNo);
            this.getAccountStatus(CardNo)

        }
        else {this.setState({IsMemberLogeIn:false})}
        })
    }catch (error) { console.log(error)}

}

getAccountStatus = (CardNo) =>
{
    // let cardNo = this.state.ClubMemberCardNo;
    axios.get(APIAccountStatusByCardNo+CardNo)
    .then(res => {
        let results =JSON.stringify(res.data);
        let jsonResults =JSON.parse(results); 
        let AccStatus = jsonResults[0].Status;
        this.setState({AccountStatus:AccStatus})
        })
    .catch(err=>{console.log(err);})
    
}
getAllClubMemberRenewals = (ClubMemberCardNo) =>
{
    axios.get(APIClubMemberAllRenewals+ClubMemberCardNo)
    .then(res => {
        let results =JSON.stringify(res.data); 
        this.setState({ClubMemberAllRenewals:[...JSON.parse(results)]})
        })
    .catch()
    axios.get(APIClubMemberAllReferrals+ClubMemberCardNo)
    .then(res => {
        let results =JSON.stringify(res.data); 
        this.setState({ClubMemberAllReferrals:[...JSON.parse(results)]})
        })
    .catch(err=>{ console.log("=====>>>"+err)})
    
}

setNewPassword = (text) =>{this.setState({NewPassword:text});}
setChatChat = (text) =>{this.setState({ChatChat:text});}
setClubCardNoLogIn = (text) =>{this.setState({ClubCardNoLogIn:text});}
setMemberPhone = (text) =>{this.setState({MemberPhone:text});}
setMemberName = (text) =>{this.setState({MemberName:text});}
setMemberEmail = (text) =>{this.setState({MemberEmail:text});}
setMemberCountry = (text) =>{this.setState({MemberCountry:text});}
setMemberAddress = (text) =>{this.setState({MemberAddress:text});}
setMemberDOB = (text) =>{this.setState({MemberDOB:text});}
setMemberZipCode = (text) =>{this.setState({MemberZipCode:text});}
setMemberDistrict = (text) =>{this.setState({MemberDistrict:text});}
setMemberSubCounty = (text) =>{this.setState({MemberSubCounty:text});}
setMemberVillage = (text) =>{this.setState({MemberVillage:text});}

setReferralType = (text) =>  {this.setState({ReferralType:text})}
setMemberReferral= (text) =>{this.setState({MemberReferral:text});}


setMemberNominateName1 = (text) =>{this.setState({MemberNominateName1:text});}
setMemberNominateEmail1 = (text) =>{this.setState({MemberNominateEmail1:text});}
setMemberNominatePhone1 = (text) =>{this.setState({MemberNominatePhone1:text});}
setMemberNominateDOB1 = (text) =>{this.setState({MemberNominateDOB1:text});}


setCountrySelectedValue  = (text) =>
{
    const CountriesArr = [...this.state.Countries]
    let Index = text.split(':');
    let country = Index[0]
    let arraryIndex = Index[1]
    let code = CountriesArr[arraryIndex]
    let phoneCode = code.countryCode
    // countryCode
    this.setState({PhoneCountryCode:phoneCode});
    this.setState({CountrySelected:country});
}



// log in 
setClubLogInName = (text) =>{this.setState({ClubLogInName:text});}
setClubLogInPassword = (text) =>{this.setState({ClubLogInPassword:text});}

showProfileDetailsScreen = () =>
{
    this.setState({DoNotShowProfileSettingsScreen:true})
    this.setState({DoNotShowProfileDetailsScreen:true})
}
showProfileSettingsScreen = () =>
{
    this.setState({DoNotShowProfileDetailsScreen:false})
    this.setState({DoNotShowProfileSettingsScreen:false})
}


showHomeScreen = () =>
{
    this.setState({DoNotShowBenefitsScreen:true})
    this.setState({DoNotShowLogInScreen:true})
    this.setState({DoNotShowUserAccountScreen:true})
    this.setState({DoNotShowApplyMembershipScreen:true})
    this.setState({DoNotShowMemberCategoryScreen:true})
    this.setState({DoNotShowHomeScreen:false})
}

showBenefitsScreen = () =>
{
    this.setState({DoNotShowLogInScreen:true})
    this.setState({DoNotShowApplyMembershipScreen:true})
    this.setState({DoNotShowHomeScreen:true})
    this.setState({DoNotShowUserAccountScreen:true})
    this.setState({DoNotShowMemberCategoryScreen:true})
    this.setState({DoNotShowBenefitsScreen:false})
}
showLogInScreen = () =>
{
    this.setState({DoNotShowHomeScreen:true})
    this.setState({DoNotShowBenefitsScreen:true})
    this.setState({DoNotShowApplyMembershipScreen:true})
    this.setState({DoNotShowUserAccountScreen:true})
    this.setState({DoNotShowMemberCategoryScreen:true})
    this.setState({DoNotShowLogInScreen:false})
}
showApplyMembershipScreen = () =>
{
    this.setState({DoNotShowLogInScreen:true})
    this.setState({DoNotShowHomeScreen:true})
    this.setState({DoNotShowUserAccountScreen:true})
    this.setState({DoNotShowBenefitsScreen:true})
    this.setState({DoNotShowMemberCategoryScreen:true})
    this.setState({DoNotShowApplyMembershipScreen:false})
}

showUserAccountScreen = () =>
{
    this.setState({DoNotShowLogInScreen:true})
    this.setState({DoNotShowHomeScreen:true})
    this.setState({DoNotShowBenefitsScreen:true})
    this.setState({DoNotShowApplyMembershipScreen:true})
    this.setState({DoNotShowMemberCategoryScreen:true})
    this.setState({DoNotShowUserAccountScreen:false})
}

showMemberCategoryScreen = () =>
{
    this.setState({DoNotShowLogInScreen:true})
    this.setState({DoNotShowHomeScreen:true})
    this.setState({DoNotShowBenefitsScreen:true})
    this.setState({DoNotShowApplyMembershipScreen:true})
    this.setState({DoNotShowUserAccountScreen:true})
    this.setState({DoNotShowMemberCategoryScreen:false})
}


logOutUser = async () => 
{
    try 
    {   
        await AsyncStorage.removeItem ('ClubMemberDetails');
        this.setState({IsMemberLogeIn:false});
        Alert.alert("Warning","\n\n You Have Logged Out")

    }catch (error) { console.log(error)}
}

facePhotoImage = async () => 
{
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        // base64:true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) 
        {this.setState({MemberFaceImage:result.uri});
            this.setState({MemberFaceImageType:result.type});
            this.setState({MemberFaceImageUri:result.uri});

        }
};
facePhotoImage1 = async () => 
{
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        // base64:true,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) 
        {this.setState({MemberNominateFaceImage1:result.uri});}
};

fullBodyPhotoImage = async () => 
{
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        // width:300,
        // height:1000,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.cancelled) 
        {this.setState({MemberBodyImage:result.uri});}
};

showBase64Image =  (ImageInput) =>
{
    console.log("=================Base64====");

    // let imageUrl = this.state.MemberFaceImage;
    let imageUrl = ImageInput;
    const imageUrlArr = imageUrl.split('/');
    console.log(imageUrlArr);

    const imageFile = imageUrlArr[imageUrlArr.length - 1];
    console.log(imageFile);
    return imageFile;

    //============================


}


postImga2 = async () =>
{
    
    // let faceImg =  this.state.MemberFaceImage;
    let img = this.showBase64Image(this.state.MemberFaceImage);
    console.log("000000000000000000000000000000000000000000 "+img)

    const formData = new FormData();
    // formData.set('enctype','multipart/form-data')
    formData.append('file',img);
    formData.append('name','Henry');

    // for (let obj of formData) {
    //     console.log(obj);
    //   }
    // const file = new File(['blob'],img);
    // file.append(img)
    
    let config = { 
        headers: { 'Content-Type': 'multipart/form-data','Accept': 'application/json',} 
        
    }
    let formData2 = JSON.stringify(formData);
    try
    {
        console.log("-------------->>"+APIPostImg)
        const postRequest = await axios.post(APIPostImg,
            {
                formData
            }
            
        
        )
        
        let result = postRequest.data;
        console.log(result);
        // Alert.alert("Application Status",result);
    }

    catch (error)
        {
            console.log(error)
            // Alert.alert("An Error","Un Able To Post Your Application\n\nCheck Your Network Connections\n\n")
        };
}


postImga00000 = async () => {

    let img = this.showBase64Image(this.state.MemberFaceImage);
    console.log("000000000000000000000000000000000000000000 "+img)

    // try {
        const formData = new FormData();
        formData.append('file',img);
        formData.append('name','Henry');

        let res = await  fetch(APIPostImg, {
            method: 'POST',
            body: formData
            })
            // console.log("===<><><><>"+res)
            .then(response => console.log(response))
            // .then(result => {console.log('Success:', result);})
            .then(data => {console.log(data);})
            .catch(error => {console.log('Error:', error);});

    //     } 
    // catch (error) {console.error(error);}
    };

// async postImga () {

    postImgaPadding = async () => {

    // let formData = new FormData();
    // formData.append('photo', { uri: localUri, name: filename, type });
    // formData.append('name','Henry');
    let img = this.showBase64Image(this.state.MemberFaceImage);
    console.log("000000000000000000000000000000000000000000"+img)


    // let imageUrl = this.state.MemberFaceImage;
    // const imageUrlArr = imageUrl.split('/');
    // console.log(imageUrlArr);

    // const imageFile = imageUrlArr[imageUrlArr.length - 1];
    // let img = imageFile

    console.log("<><>><><>");
    let URI = this.state.MemberFaceImageUri.replace(/%/g, '')
    console.log("uri"+URI);
    console.log("type"+this.state.MemberFaceImageType);





    const formData = new FormData();
    formData.append('file',img);
    // formData.append('file',{type: 'image/*', uri:URI,name:"img"});
    // formData.append('file',{uri:this.state.MemberFaceImageUri,name:img,type:'image'});
    // formData.append('file',{uri:this.state.MemberFaceImageUri,type:this.state.MemberFaceImageType,name:"img"});
    formData.append('name','Henry');

    // return await fetch(APIPostImg, {
    //   method: 'POST',
    //   body: formData, 

    //   header: {
    //     'content-type': 'multipart/form-data',
    //   },
    // });
    fetch(APIPostImg, {
        headers: { 'Content-Type': 'multipart/form-data'},
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(data => {console.log(data);})
        .catch(error => {console.error('Error---:', error);});
}
postMembershipApplication = async () => 
{
    console.log("////////////"+this.state.CountrySelected)
    if (this.state.CountrySelected == null)
    {Alert.alert("Please","\n \n  Your Country \n\n")}
    else
        {
        let name = this.state.MemberName;
        let phone = this.state.MemberPhone;
        let DOB = this.state.MemberDOB;
        let email = this.state.MemberEmail;

        let country= this.state.CountrySelected;
        let zipCode = this.state.MemberZipCode;
        let address = this.state.MemberAddress;
        let district = this.state.MemberDistrict;
        let county = this.state.MemberSubCounty;
        let Village = this.state.MemberVillage;

        let referralType = this.state.ReferralType;
        let referral = this.state.MemberReferral;


        let nominateDOF1 = this.state.MemberNominateDOB1;
        let nominateName1 = this.state.MemberNominateName1;
        let NominateEmail1 = this.state.MemberNominateEmail1;
        let nominatePhone1 = this.state.PhoneCountryCode+this.state.MemberNominatePhone1;
        let fullPhone = this.state.PhoneCountryCode+phone;


        let faceImg =  "faceImg";// this.state.MemberFaceImage;
        let bodyImg =  "bodyImg";//this.state.MemberBodyImage;
        let nominateImg = "NominateImg";//this.state.MemberNominateFaceImage1;

    
        console.log("Name ==> "+ name)
        console.log("Phone ==> "+ phone)
        console.log("Phone ==> "+ DOB)
        console.log("address ==> "+ address)
        console.log("service ==> "+ email)
        console.log("service ==> "+ country)
        console.log("service ==> "+ zipCode)

        console.log("===================================> ")
        console.log("service ==> "+ nominateName1)
        console.log("service ==> "+ nominateDOF1)
        console.log("service ==> "+ NominateEmail1)
        console.log("service ==> "+ nominatePhone1)

    


        if ((country =="USA") || (country =="UK"))
        {
            // let img = this.showBase64Image(this.state.MemberFaceImage);
            // console.log("000000000000000000000000000000000000000000 "+img)
    
            if (
                (name.length == 0)|| (DOB.length == 0) ||(email.length == 0)|| 
                (phone.length < 11) ||  (zipCode.length == 0)||(address.length == 0 ) ||
                (nominateName1.length == 0) || (NominateEmail1.length == 0) || 
                (nominatePhone1.length == 0 ) ||(nominateDOF1.length == 0) ||
                (referralType.length == 0 ) ||(referral.length == 0) 
            )
            {Alert.alert("Warning","\n \n  All Inputs Are Required \n\n  Phone Should Be 11 digits")}

            else
            {
                console.log("Name ==> "+ name)
                console.log("Phone ==> "+fullPhone)
                console.log("address ==> "+ address)
                console.log("service ==> "+ email)
                console.log("service ==> "+ zipCode)
                console.log("service ==> "+ country)


                console.log("==================================> ")
                console.log("service ==> "+ nominateName1)
                console.log("service ==> "+ NominateEmail1)
                console.log("service ==> "+ nominatePhone1)
                console.log("service ==> "+ nominateDOF1)


                try
                {
                    const postRequest = await axios.post(APIClubMemberApplication,
                        {
                            "MemberName": name,
                            "MemberEmail": email,
                            "MemberDOB": DOB,
                            "MemberPhone": fullPhone,
                
                            "MemberNominateName1": nominateName1,
                            "MemberNominateEmail1": NominateEmail1,
                            "MemberNominatePhone1": nominatePhone1,
                            "MemberNominateDOB1": nominateDOF1,

                            "MemberCountry": country,
                            "MemberZipOrPostCod":zipCode,
                            "MemberAddress": address,
                            "MemberDistrict":"null",
                            "MemberSubCountry":"null",
                            "MemberVillage":"null",

                            "MemberFaceImage": faceImg,
                            "MemberBodyImage": bodyImg,
                            "MemberNominateFaceImage1":nominateImg,

                            "MemberReferralType":referralType,
                            "MemberReferral":referral,
                
                        
                            "MemberNominateName2":  "nominateName2",
                            "MemberNominateEmail2": "NominateEmail2",
                            "MemberNominatePhone2": "nominatePhone2",
                            "MemberNominateDOB2": "Name",
                
                
                            "MemberNominateName3":  "nominateName3",
                            "MemberNominateEmail3": "NominateEmail3",
                            "MemberNominatePhone3": "nominatePhone3",
                            "MemberNominateDOB3": "Name",
                
                            "MemberNominateFaceImage2": "Name",
                            "MemberNominateFaceImage3": "Name"
                        }
                    )
                    
                    let result = postRequest.data.status;
                    // console.log("=======>>>>"+ JSON.stringify(postRequest))
                    Alert.alert("Application Status","Your Application Has Been Received Well \n\n We Are Going To Get Back To You Soon");
                    // Alert.alert("Application Status",result);
                    // console.log("11111"+postRequest.status)
                    // console.log("222222"+postRequest.data)
                    console.log("222222"+result)


                }
                catch (error)
                    {
                        console.log("+++++++++++++++++"+error);
                        Alert.alert("An Error","Un Able To Post Your Application\n\nCheck Your Network Connections\n\n")
                    };
            }
        }  

        else
        {
            if (
                    (name.length == 0)|| (DOB.length == 0) ||(email.length == 0)||(phone.length < 9) ||  
                    (district.length == 0)||(county.length == 0 )||(Village.length == 0 ) ||
                    (nominateName1.length == 0) || (NominateEmail1.length == 0) || 
                    (nominatePhone1.length == 0 ) ||(nominateDOF1.length == 0) ||
                    (referralType.length == 0 ) ||(referral.length == 0) 
                )
                {Alert.alert("Warning","\n\n   All Inputs Are Required \n\n Phone Should Be 9 digits")}
            

            else
            {
                console.log("Name ==> "+ name)
                console.log("Phone ==> "+ phone)
                console.log("email ==> "+ email)
                console.log("DOB ==> "+ DOB)

                console.log("district ==> "+ district)
                console.log("county ==> "+ county)
                console.log("village ==> "+ Village)

                console.log("=============================> ")
                console.log("name ==> "+ nominateName1)
                console.log("email ==> "+ NominateEmail1)
                console.log("phone ==> "+ nominatePhone1)
                console.log("DOB ==> "+ DOB )


                try
                {
                    const postRequest = await axios.post(APIClubMemberApplication,
                        {
                            "MemberName": name,
                            "MemberEmail": email,
                            "MemberCountry": country,
                            "MemberDOB": DOB,
                            "MemberPhone": fullPhone,
                
                            "MemberNominateName1": nominateName1,
                            "MemberNominateEmail1": NominateEmail1,
                            "MemberNominatePhone1": nominatePhone1,
                            "MemberNominateDOB1": nominateDOF1,
                
                            "MemberCountry": country,
                            "MemberZipOrPostCod":"null",
                            "MemberAddress": "null",
                            "MemberDistrict":district,
                            "MemberSubCountry":county,
                            "MemberVillage":Village,

                            "MemberReferralType":referralType,
                            "MemberReferral":referral,


                            "MemberFaceImage": faceImg,
                            "MemberBodyImage": bodyImg,
                            "MemberNominateFaceImage1":nominateImg,
                        
                            "MemberNominateName2":  "nominateName2",
                            "MemberNominateEmail2": "NominateEmail2",
                            "MemberNominatePhone2": "nominatePhone2",
                            "MemberNominateDOB2": "Name",
                
                
                            "MemberNominateName3":  "nominateName3",
                            "MemberNominateEmail3": "NominateEmail3",
                            "MemberNominatePhone3": "nominatePhone3",
                            "MemberNominateDOB3": "Name",
                
                            "MemberNominateFaceImage1": "Name",
                            "MemberNominateFaceImage2": "Name",
                            "MemberNominateFaceImage3": "Name"
                            
                        }
                        
                    
                    )
                    
                    // let result = postRequest.data.status;
                    // console.log(result);
                    Alert.alert("Application Status","Your Application Has Been Received Well \n\n We Are Going To Get Back To You Soon");
                }

                catch (error)
                    {
                        console.log(error)
                        Alert.alert("An Error","Un Able To Post Your Application\n\nCheck Your Network Connections\n\n")
                    };
            }
        }
    }
}
logInUser = async () =>
{
    let ClubLogInName = this.state.ClubLogInName;
    let ClubLogInPassword = this.state.ClubLogInPassword;

    if ((ClubLogInName.length == 0) || (ClubLogInPassword.length == 0))
        {Alert.alert('Warning','Please All Fields Are Required ')}
    else
    {
        try
        {
            const loginRequest = await axios.get(APILogInClubMemberByCardNo+ClubLogInName)
            let results = loginRequest.data
            let jsonString = JSON.stringify(results)
            let jsonResults =JSON.parse(jsonString);

            if (results.length == 0)
            {Alert.alert("Sorry","\n\n  No Member Records Found \n\n Try Again")}
            else
            {
                let CardNo = jsonResults[0].CardNo;
                let userPassword  = jsonResults[0].Password;
                
                if ((CardNo !== ClubLogInName)&&(userPassword !== ClubLogInPassword ))
                    {Alert.alert("Sorry ","\n\n Invalid User Card Number \n\n Or\n Password \n\nTry Again")}

                else
                {
                    let Name= jsonResults[0].Name;
                    let Type = jsonResults[0].MemberType;
                    let Payment = jsonResults[0].PaymentType;
                    let Registration = jsonResults[0].Registration;
                    let Id = jsonResults[0].id;
                    try {
                        let MemberDetails={ClubUserName:Name,ClubMemberCardNo:CardNo,ClubMemberId:Id,ClubMemberCategory:Type,Registration:Registration,Payment:Payment}
                        const Details  = []
                        Details.push(MemberDetails)
                        await AsyncStorage.setItem('ClubMemberDetails',JSON.stringify(Details));
                        } 
                    catch (error) {console.log(error)}

                    this.setState({ClubMemberName:Name});
                    this.setState({ClubMemberCardNo:CardNo});
                    this.setState({ClubMemberCategory:Type});
                    this.setState({ClubMemberPayment:Payment});
                    this.setState({ClubMemberRegistration:Registration});
                    this.setState({ClubMemberId:Id});
                    this.setState({IsMemberLogeIn:true});
                    this.getAllClubMemberRenewals (CardNo)
                    this.showUserAccountScreen();
                    this.getAccountStatus(CardNo)
                }
            }

        }

        catch (error)
            {
                Alert.alert("An Error","Host Not Found Or\n\n  Check Your Network Connections\n")
            };
    }
}

updateUserPassword = async () =>
{
    let NewPass = this.state.NewPassword;
    let id = this.state.ClubMemberId;
    console.log(NewPass+"::"+id)
    if ((NewPass.length == 0))
        {Alert.alert('Warning','Password Should Not Be Empty')}
    else
    {
        try
        {
            const Request = await axios.put(APIUpdateClubMemberPassword, 
                    {"id":id,"Password":NewPass})
            let result = Request.data.status;
            console.log(result);
            Alert.alert("Request Status","\n\n"+result);
            
            
        }

        catch (error)
            {

                Alert.alert("An Error","\n\n  Check Your Network Connections\n"+error)
            };
    }
}
render() {

    const {DoNotShowProfileDetailsScreen,DoNotShowProfileSettingsScreen,AccountStatus} = this.state;
    const { DoNotShowUserAccountScreen,DoNotShowMemberCategoryScreen} = this.state;
    const {MemberFaceImage,MemberBodyImage,MemberNominateFaceImage1} = this.state;
    const { DoNotShowHomeScreen,DoNotShowBenefitsScreen,DoNotShowLogInScreen,DoNotShowApplyMembershipScreen} = this.state;

    const {ClubMemberName,ClubMemberAllReferrals,ClubMemberCategory,IsMemberLogeIn} = this.state;
    const {ClubMemberCardNo,ClubMemberAllRenewals,ClubMemberRegistration,ClubMemberPayment} = this.state;
    const { Countries,CountrySelectedValue,CountrySelected,PhoneCountryCode,ReferralType} = this.state;

    return (
        <View style={styles.mainView}>
            <View style={styles.topNavigationHeader}>
                <View style={styles.openDrawerMenuView} >
                    <View style={styles.mainMenuView}>
                        <TouchableOpacity style={styles.openDrawerbtn} onPress={() => this.props.navigation.openDrawer()}>
                            <FontAwesome name="navicon" size={28} color="black" style={styles.opeMenuIcone} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style = { styles.productTopTitleNameView}>
                    <Text style = { styles.productTopTitleName}> Club </Text>
                </View> */}
            <View style={styles.mainChatView}>
                <TouchableOpacity style={styles.openChatBtn} onPress={() => this.props.navigation.navigate('Chat')}>
                    <Ionicons name="ios-chatbubble-ellipses-sharp" size={30} style={styles.opeMenuIcone} />
                </TouchableOpacity>
            </View>
            </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.MainTopHeaderView} >
                        <View style={styles.MainTopHeaderTextView}>
                            <Text style={[styles.MainTopHeaderTextLabelClub]}> {AccountStatus} </Text>
                            <Text style={styles.MainTopHeaderTextLabel}> Tc Club Member </Text>

                        </View>
                    </View>
                    <View style={[styles.MainTopRadiusView,styles.MainTopRadiusView2]} ></View>
                    <View style={styles.MainTopRadiusSpaceBottomView} ></View>


                    <View style={styles.MainNavigationBtnView1}>
                    {/* {DoNotShowMainNavBtnScreen?<></>:(<> */}
                    <View style={styles.MainNavigationBtnView}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={styles.MainNavigationBtnSpaceView} ></View>
                            <View style={styles.ArrowMainView}>
                                <AntDesign name="rightcircle" size={30} style={[getPlainColor(AccountStatus)]} />
                            </View>
                            <View style={styles.MainNavigationBtnSpaceView} ></View>
                                <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth1(),getBackgroundColor(AccountStatus)]} 
                                    onPress={this.showHomeScreen} >
                                <Text style = {styles.btnText}> Home  </Text>
                            </TouchableOpacity>

                            <View style={styles.MainNavigationBtnSpaceView} ></View>
                            <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth1(),getBackgroundColor(AccountStatus)]} 
                                onPress={this.showBenefitsScreen} >
                                <Text style = {styles.btnText}> Club Benefits  </Text>
                            </TouchableOpacity>

                            <View style={styles.MainNavigationBtnSpaceView} ></View>
                            <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth2(),getBackgroundColor(AccountStatus)]} 
                                onPress={this.showMemberCategoryScreen} >
                                <Text style = {styles.btnText}>Category Benefits  </Text>
                            </TouchableOpacity>

                            {IsMemberLogeIn?(<></>):(<>
                            <View style={styles.MainNavigationBtnSpaceView} ></View>
                            <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth3(),getBackgroundColor(AccountStatus)]}
                                onPress={this.showApplyMembershipScreen}  >
                                <Text style = {styles.btnText}> Apply For Membership </Text>
                            </TouchableOpacity>
                            </>)}

                            {IsMemberLogeIn?(<>
                                <View style={styles.MainNavigationBtnSpaceView} ></View>
                                <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth1(),getBackgroundColor(AccountStatus)]}
                                    onPress={this.showUserAccountScreen} >
                                    <Text style = {styles.btnText}> Profile </Text>
                                </TouchableOpacity>
                            </>):(<>
                                <View style={styles.MainNavigationBtnSpaceView} ></View>
                                <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth3(),getBackgroundColor(AccountStatus)]}
                                    onPress={this.showLogInScreen} >
                                    <Text style = {styles.btnText}> Member Log In </Text>
                                </TouchableOpacity>
                            </>)} 
                            
                            <View style={styles.MainNavigationBtnSpaceView} ></View>
                            <View style={styles.ArrowMainView}>
                                <AntDesign name="leftcircle" size={30} style={[getPlainColor(AccountStatus)]} />
                            </View>
                            <View style={styles.MainNavigationBtnSpaceView} ></View>
                        </ScrollView>
                    </View>
                    {/* </>)} */}
                    </View>
                    <View style={{height:20}}></View>

                    {/* 
                        ====================================================================
                        ====================================================================
                        ====================================================================
                                    Begin Homes Screen
                        ====================================================================
                        ====================================================================
                        ====================================================================
                    */}

                    {  DoNotShowHomeScreen ? <></>:(<>
                        <View style={styles.clubHomeSScreenView} >
                            <Image style={styles.clubHomeScreenImage} source={require('../../assets/logo.png')}/>
                        </View>
                        <Text  style = {[introClubText(),getPlainColor(AccountStatus)]}>
                            Tc Club is a club for Individuals talent or talents &  promoting Businesses with a mission of 
                            supporting each other to achieve goals in life. 
                        </Text>

                        <Text  style = {[introClubText(),getPlainColor(AccountStatus)]}>
                            Our members receive 1 to 1 support to 
                            enhance their Business be it on Talk the Walk Tv & Radio show, we also assist members to 
                            save and make money
                        </Text>
                    </>)}
                    
                    {/* 
                        ====================================================================
                        ====================================================================
                        ====================================================================
                                    Begin Benefits Screen
                        ====================================================================
                        ====================================================================
                        ====================================================================
                    */}
                    { DoNotShowBenefitsScreen ?<></>:(<>
                    
                        <View style={{height:15}} ></View>
                        <View style={styles.MainOuterCardListView} >
                            <View  style={styles.MainInnerCardAboutView}>
                                <Text style={[aboutTitleText(),getPlainColor(AccountStatus)]} >Tc Club Membership Benefits</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Website Designing</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Accounting Services</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Sales And Marketing</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Business Plan Support</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Mobile App Development</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Start Up Business Loan</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Social Media Management</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Wills And Estate Planning</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Web Hosting And Domains</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Surprise Gifts Or Vouchers</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Business Growth and Advice</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Discount Air Tickets Worldwide</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Virtual Secretary/ Administrator</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Discounted Worldwide Hotels stays</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Investment Advise from the experts</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Support And Property Ownership Advise</Text>
                                <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Pooling Resources And Grow Together Monthly</Text>
                            </View>
                        </View>
                    </>)}
                    {/* 
                        ====================================================================
                        ====================================================================
                        ====================================================================
                                    Begin Log  In  Screen
                        ====================================================================
                        ====================================================================
                        ====================================================================
                    */}
                    {DoNotShowLogInScreen?<></>:(<>
                        <View style={styles.orderListDetailsText} >
                        <View style={styles.ApplyCardView} >
                            <TextInput style={styles.input} placeholder="Tc Number"  
                            placeholderTextColor = "#5800c4"  onChangeText={text => this.setClubLogInName(text)}
                            />

                            <TextInput style={styles.input} placeholder="Password" secureTextEntry
                            placeholderTextColor = "#5800c4"  onChangeText={text => this.setClubLogInPassword(text)}
                            />
                            

                            <TouchableOpacity style={[styles.MainNavigationBtn, styles.MainNavigationBtn4]} onPress={this.logInUser} >
                                <Text style = {styles.btnText}> Log In  </Text>
                            </TouchableOpacity>
                            <View style={{height:30}} ></View>
                        </View>
                        </View>
                    </>)}
                    
                    {/* 
                        ====================================================================
                        ====================================================================
                        ====================================================================
                                    Begin Member Apply  Screen
                        ====================================================================
                        ====================================================================
                        ====================================================================
                    */}
                    {DoNotShowApplyMembershipScreen?<></>:(<>
                        <View style={styles.orderListDetailsTexts} >
                            
                        <View style={styles.ApplyCardView} >
                            <View style={{height:30}}></View>
                            <Text style = {styles.btnText}> Applicant Info  </Text>
                            {/* <TouchableOpacity style={[styles.MainNavigationBtn, styles.MainNavigationBtn4]} onPress={this.showBase64Image} >
                                <Text style = {styles.btnText}> base64  </Text>
                            </TouchableOpacity> */}

                            <View style={{height:20}}></View>
                            <View style={styles.uploadedImageView}>
                                <TouchableOpacity style={[styles.MainNavigationBtn, styles.MainNavigationBtn2]} onPress={this.facePhotoImage} >
                                    <Text style = {styles.btnText}> Face Photo  </Text>
                                </TouchableOpacity>
                                <View style={{height:20}}></View>
                                {MemberFaceImage && <Image source={{ uri: MemberFaceImage }} style={{ width: 200, height: 200 }} />}
                            </View>

                            <View style={{height:20}} ></View>
                                <View style={styles.uploadedImageView}>
                                <TouchableOpacity style={[styles.MainNavigationBtn, styles.MainNavigationBtn2]} onPress={this.fullBodyPhotoImage} >
                                    <Text style = {styles.btnText}> Full Body Photo  </Text>
                                </TouchableOpacity>
                                <View style={{height:20}}></View>
                                {MemberBodyImage && <Image source={{ uri: MemberBodyImage }} style={{ width: 200, height: 200 }} />}
                            </View>

                            <TextInput style={styles.input} placeholder="Full Name" onChangeText={text => this.setMemberName(text)}  
                            placeholderTextColor = "#5800c4" 
                            />

                            <TextInput style={styles.input} placeholder="DOB DD/MM/YY" onChangeText={text => this.setMemberDOB(text)}
                            placeholderTextColor = "#5800c4" 
                            />

                            <TextInput style={styles.input} placeholder="Email" onChangeText={text => this.setMemberEmail(text)}
                            placeholderTextColor = "#5800c4" 
                            />

                            <View style={styles.pickerSelectionInputView}>
                                <Picker style={styles.pickerSelectioninputs} dropdownIconColor= {COLORS.white}
                                    selectedValue={ReferralType }
                                    
                                    onValueChange={(itemValue) =>this.setReferralType(itemValue)}>
                                        <Picker.Item label="How Did You Know Tc Club"/> 
                                        <Picker.Item label="By Office" value="By Office" /> 
                                        <Picker.Item label="Club Member" value="Club Member" /> 
                                </Picker>
                            </View>

                            {ReferralType && ReferralType ?(<>
                                <TextInput style={styles.input} placeholder="Office / Tc Number" onChangeText={text => this.setMemberReferral(text)}
                                placeholderTextColor = "#5800c4" 
                                />
                                <View style={{height:20}}></View>
                            </>):(<></>)}


                            <View style={styles.pickerSelectionInputView}>
                                <Picker style={styles.pickerSelectioninputs} dropdownIconColor= {COLORS.white}
                                    selectedValue={CountrySelectedValue}
                                    
                                    onValueChange={(itemValue) =>this.setCountrySelectedValue(itemValue)}>
                                        <Picker.Item label="Select Country"/> 
                                        {Countries && Countries.map((iteam,Index ) => (
                                        <Picker.Item label={iteam.countryName} value={iteam.countryName+':'+Index} /> 
                                        ))}
                                </Picker>
                            </View>


                            {CountrySelected == "USA" || CountrySelected =="UK" ?(<>
                                <TextInput style={styles.input} placeholder="Country" editable = {false}  defaultValue={CountrySelected}
                                placeholderTextColor = "#5800c4" 
                                />
                                <View style={styles.PhoneInput} >
                                    <TextInput style={[styles.phoneInput,styles.phoneInput1]}  editable = {false}  defaultValue={PhoneCountryCode} placeholder="Code" onChangeText={text => this.setMemberPhone(text)}
                                    placeholderTextColor = "#5800c4" 
                                    />
                                    <TextInput style={[styles.phoneInput,styles.phoneInput2]} placeholder="10 digits" onChangeText={text => this.setMemberPhone(text)}
                                    placeholderTextColor = "#5800c4" 
                                    maxLength={10} keyboardType="numeric" 
                                    />
                                </View>
                            
                                <TextInput style={styles.input} placeholder="Zip Code / Post code" onChangeText={text => this.setMemberZipCode(text)}
                                placeholderTextColor = "#5800c4" 
                                />
                                <TextInput style={styles.input} placeholder="Full Address" onChangeText={text => this.setMemberAddress(text)}
                                placeholderTextColor = "#5800c4" 
                                />
                                <View style={{height:20}}></View>
                            </>):(<>

                                <TextInput style={styles.input} placeholder="Country" editable = {false}  defaultValue={CountrySelected}
                                placeholderTextColor = "#5800c4" 
                                />

                                <View style={styles.PhoneInput} >
                                    <TextInput style={[styles.phoneInput,styles.phoneInput1]}  editable = {false}  defaultValue={PhoneCountryCode} placeholder="Code" onChangeText={text => this.setMemberPhone(text)}
                                    placeholderTextColor = "#5800c4" 
                                    />
                                    <TextInput style={[styles.phoneInput,styles.phoneInput2]} placeholder="9 digits" onChangeText={text => this.setMemberPhone(text)}
                                    placeholderTextColor = "#5800c4" 
                                    maxLength={9} keyboardType="numeric" 
                                    />
                                </View>

                            
                                <TextInput style={styles.input} placeholder="District" onChangeText={text => this.setMemberDistrict(text)}
                                placeholderTextColor = "#5800c4" 
                                />

                                <TextInput style={styles.input} placeholder="Sub County" onChangeText={text => this.setMemberSubCounty(text)}
                                placeholderTextColor = "#5800c4" 
                                />
                                <TextInput style={styles.input} placeholder="Village / Town" onChangeText={text => this.setMemberVillage(text)}
                                placeholderTextColor = "#5800c4" 
                                />
                                <View style={{height:20}}></View>

                            </>)}

                                <View style={{height:10}}></View>
                        </View>


                        <View style={{height:10}}></View>
                            <View style={styles.ApplyCardView} >
                            <View style={{height:30}}></View>
                            <Text style = {styles.btnText}> Next Of Kin </Text>
                            <View style={{height:20}}></View>
                            <View style={styles.uploadedImageView}>
                                <TouchableOpacity style={[styles.MainNavigationBtn, styles.MainNavigationBtn2]} onPress={this.facePhotoImage1} >
                                    <Text style = {styles.btnText}> Face Photo  </Text>
                                </TouchableOpacity>
                                <View style={{height:20}}></View>
                                {MemberNominateFaceImage1 && <Image source={{ uri:MemberNominateFaceImage1 }} style={{ width: 200, height: 200 }} />}
                            </View>

                            <TextInput style={styles.input} placeholder="Country" editable = {false}  defaultValue={CountrySelected}
                            placeholderTextColor = "#5800c4" 
                            />

                            <TextInput style={styles.input} placeholder="Full Name" onChangeText={text => this.setMemberNominateName1(text)}  
                            placeholderTextColor = "#5800c4" 
                            />

                            <TextInput style={styles.input} placeholder="DOB DD/MM/YY" onChangeText={text => this.setMemberNominateDOB1(text)}
                            placeholderTextColor = "#5800c4" 
                            />

                            <TextInput style={styles.input} placeholder="Email" onChangeText={text => this.setMemberNominateEmail1(text)}
                            placeholderTextColor = "#5800c4" 
                            />

                            {CountrySelected == "USA" || CountrySelected =="UK" ?(<>
                            <TextInput style={styles.input} placeholder="Country" editable = {false}  defaultValue={CountrySelected}
                            placeholderTextColor = "#5800c4" 
                            />
                            <View style={styles.PhoneInput} >
                                <TextInput style={[styles.phoneInput,styles.phoneInput1]}  editable = {false}  defaultValue={PhoneCountryCode} placeholder="Code" onChangeText={text => this.setMemberPhone(text)}
                                placeholderTextColor = "#5800c4" 
                                />
                                <TextInput style={[styles.phoneInput,styles.phoneInput2]} placeholder="10 digits" onChangeText={text => this.setMemberNominatePhone1(text)}
                                placeholderTextColor = "#5800c4" 
                                maxLength={10} keyboardType="numeric" 
                                />
                            </View></>):(<>

                                <View style={styles.PhoneInput} >
                                    <TextInput style={[styles.phoneInput,styles.phoneInput1]}  editable = {false}  defaultValue={PhoneCountryCode} placeholder="Code" onChangeText={text => this.setMemberPhone(text)}
                                    placeholderTextColor = "#5800c4" 
                                    />
                                    <TextInput style={[styles.phoneInput,styles.phoneInput2]} placeholder="9 digits" onChangeText={text => this.setMemberNominatePhone1(text)}
                                    placeholderTextColor = "#5800c4" 
                                    maxLength={9} keyboardType="numeric" 
                                    />
                                </View>
                                <View style={{height:10}}></View>
                                </>)}
                            </View>

                            {/* <TouchableOpacity style={[styles.MainNavigationBtn, styles.MainNavigationBtn4]} onPress={this.postImga} >
                                <Text style = {styles.btnText}> Send  </Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity style={[styles.MainNavigationBtn, styles.MainNavigationBtn4]} onPress={this.postMembershipApplication} >
                                <Text style = {styles.btnText}> Send  </Text>
                            </TouchableOpacity>
                                <View style={{height:10}} ></View>
                            </View>
                    </>)}

                    {/* 
                        ====================================================================
                        ====================================================================
                        ====================================================================
                                    Member Category Screen
                        ====================================================================
                        ====================================================================
                        ====================================================================
                    */}

                    {DoNotShowMemberCategoryScreen ?<></>:(<>
                        <View style={{height:15}} ></View>
                        <View style={styles.MainOuterCardListView} >
                            <View  style={styles.MainInnerCardAboutView}>
                            <Text style={[aboutTitleText(),getPlainColor(AccountStatus)]} >Bronze Membership Benefits</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >UK Sponsorship Jobs & Visa</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Mobile App Development</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Dental & Emergency Help for you GOLD & Immediate family member listed </Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Worldwide Airticket Installment payment Gold Member Advise & Support to own your first Home or property </Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Free Consultation and Obtaining wills & Feneral Services. </Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Support to start a Business or promote Talent or do Printing or Graphic Design</Text>

                            <View style={{height:50}} ></View>
                            <Text style={[aboutTitleText(),getPlainColor(AccountStatus)]} >Silver Membership Benefits</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >GETS All six Benefits a Bronze member gets</Text>
                            <Text style={[aboutTitleText(),getPlainColor(AccountStatus)]} >Plus</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Accounting Services</Text> 
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Sales and Marketing</Text> 
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Business Plan Support</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Mobile App Development</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Social Media Management</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Start up Business Loans</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Wills & Estate Planning</Text>


                            <View style={{height:50}} ></View>
                            <Text style={[aboutTitleText(),getPlainColor(AccountStatus)]} >Gold Membership Benefits</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >All Benefits of Bronze and Silver member gets</Text>
                            <Text style={[aboutTitleText(),getPlainColor(AccountStatus)]} >Plus</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Mobile App Development</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} > Web hosting and Domains</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Surprise Gifts or Vouchers</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Business Growth and Advice </Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Support & Property Ownership</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Discounted Worldwide Hotels Bills</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Pooling Resources & Grow Together</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Virtual Secretary / Administration</Text>
                            <Text style={[aboutText(),getPlainColor(AccountStatus)]} >Investment Advise From The Experts</Text>
                            </View>
                        </View>
                    </>)}
                    
                    {/* 
                        ====================================================================
                        ====================================================================
                        ====================================================================
                                    User Account  Screen
                        ====================================================================
                        ====================================================================
                        ====================================================================
                    */}
                    {DoNotShowUserAccountScreen ?<></>:(<>
                        
                        {/* ================== AccountStatus == Active ================== */}
                        
                        <View style = {[userProfileView(),getBackgroundColor(AccountStatus)]} >
                            <View style = {[styles.UserProfileImageView]} >
                                <Entypo name="user" size={90} color="white" />
                            </View>
                            <View style = {[styles.UserProfileNameView]} >
                                <Text style = {styles.btnText}>{ClubMemberName}</Text>
                                <View style={{height:20}} ></View>
                                <Text style = {styles.btnText}> {ClubMemberRegistration}  </Text>

                                <View style={{height:20}} ></View>
                                <Text style = {styles.btnText}> {ClubMemberCardNo} </Text>
                                <View style={{height:20}} ></View>
                                <Text style = {styles.btnText}> {ClubMemberCategory} : {ClubMemberPayment}  </Text>

                            </View>
                        </View>
                        {DoNotShowProfileDetailsScreen ?(<>
                        <View style={{height:20}} ></View>
                        <View style = {[mainTableTitleHandleViewCredit(),getBackgroundColor(AccountStatus)]} >
                            <Text style = { styles.tableTitleHandleText}>Tc Credit :: 000 </Text>
                        </View>

                        {/* <View style={styles.mainTableOuterView} >
                        {ClubMemberAllReferrals && ClubMemberAllReferrals.map((item, index) => (

                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View key={index}>
                                <View style={styles.mainTableView}>
                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Number}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Date}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Points}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.TccNumber}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.MemberName}</Text>
                                    </View>
                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <View style={{width:20}} ></View>
                                    </View>
                                </View>
                            </View>
                            </ScrollView>
                            ))}
                            </View> */}

                            <View style={{height:20}} ></View>
                        <View style = {[mainTableTitleHandleView(),getBackgroundColor(AccountStatus)]} >
                            <Text style = { styles.tableTitleHandleText}> Referrals </Text>
                        </View>

                        <View style={styles.mainTableOuterView} >
                        {ClubMemberAllReferrals && ClubMemberAllReferrals.map((item, index) => (

                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View key={index}>
                                <View style={styles.mainTableView}>
                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Number}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Date}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Points}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.TccNumber}</Text>
                                    </View>

                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.MemberName}</Text>
                                    </View>
                                    <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                        <View style={{width:20}} ></View>
                                    </View>
                                </View>
                            </View>
                            </ScrollView>
                            ))}
                            </View>

                        
                            <View style={{height:20}} ></View>
                            <View style = {[mainTableTitleHandleView(),getBackgroundColor(AccountStatus)]} >
                                <Text style = { styles.tableTitleHandleText}> Renewals </Text>
                            </View>

                            <View style={styles.mainTableOuterView} >
                            {ClubMemberAllRenewals && ClubMemberAllRenewals.map((item, index) => (
                                <View key={index}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                
                                    <View style={styles.mainTableView}>
                                        <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                            <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Renewal}</Text>
                                        </View>
                                        <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                            <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.Fee}</Text>
                                        </View>

                                        <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                            <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.DateOne}</Text>
                                        </View>
                                        <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                            <Text  style={[trTdText(),getPlainColor(AccountStatus)]}> To </Text>
                                        </View>
                                        <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                            <Text  style={[trTdText(),getPlainColor(AccountStatus)]}>{item.DateTwo}</Text>
                                        </View>

                                        
                                        <View style={[tableTrView(),getBorderBottomColor(AccountStatus)]} >
                                            <View style={{width:20}} ></View>
                                        </View>
                                    </View>
                                
                                </ScrollView>
                                </View>
                                ))}
                                </View>
                                </>):(<></>)}

                            {DoNotShowProfileSettingsScreen ? <></>:(<>
                                <View style={{height:20}} ></View>
                                <View style={styles.ApplyCardView} >
                                    <Text style={styles.AboutText} >Update Your Password</Text>
                                    <TextInput style={styles.input} placeholder="New Password"
                                    placeholderTextColor = "#5800c4"  onChangeText={text => this.setNewPassword(text)}
                                    />

                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth1(),getBackgroundColor(AccountStatus)]} onPress={this.updateUserPassword} >
                                        <Text style = {styles.btnText}> Update  </Text>
                                    </TouchableOpacity>
                                    <View style={{height:20}} ></View>
                                    <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth2(),getBackgroundColor(AccountStatus)]} onPress={this.showProfileDetailsScreen} >
                                        <Text style = {styles.btnText}>  Cancel </Text>
                                    </TouchableOpacity>
                                    <View style={{height:30}} ></View>
                                </View>
                                </View>
                            
                            </>)}
                        
                        <View style={{alignItems:'center'}}>
                        <View style={{height:20}} ></View>
                            <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth3(),getBackgroundColor(AccountStatus)]} onPress={this.showProfileSettingsScreen} >
                                <Text style = {styles.btnText}> Settings  </Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={[mainNavigationBtnStyle(),mainNavigationBtnWidth4(),getBackgroundColor(AccountStatus)]} onPress={this.logOutUser} >
                                <Text style = {styles.btnText}> Log Out  </Text>
                            </TouchableOpacity>
                        </View>
                    </>)}
                    
                {/* <View style={styles.MainBottomSpaceView}></View> */}
                </ScrollView>
    
            </View>
    );
}
}
