
import {StyleSheet} from 'react-native';
import {COLORS,FONTSIZES, OTHERS} from './Colours';

export default StyleSheet.create(
{
	BottomInvisibleView:{backgroundColor:'transparent',height:35},
	mainView: {
		flex:1,
		backgroundColor:COLORS.colourBodyColor,
		// backgroundColor:COLORS.colourNumberSix,

	},

	MainTopHeaderView:
	{
		backgroundColor:COLORS.colourNumberThree,
		height:200,
	},
	MainTopRadiusView:
	{
		backgroundColor:COLORS.colourBodyColor,
		// backgroundColor:COLORS.black,
		height:50,
		borderTopLeftRadius:80,
		borderTopRightRadius:80,
	},
	MainTopRadiusView1:{marginTop:-80,},
	MainTopRadiusView2:{marginTop:-60,},
	MainTopRadiusSpaceBottomView:
	{
		backgroundColor:COLORS.colourBodyColor,
		height:10,

	},
	MainNavigationBtnView1:
	{
		backgroundColor:COLORS.colourBodyColor,
		height:45,
	},
	MainNavigationBtnView:
	{
		backgroundColor:COLORS.colourBodyColor,
		// backgroundColor:COLORS.colourNumberOne,
		// height:50,
	},
	MainBottomSpaceView:{height:40},
	MainNavigationBtnSpaceView:{width:20,},
	MainNavigationBtn: 
	{
		// marginTop: 1,
		backgroundColor:COLORS.colourNumberOne,
		paddingTop: 15,height: 43,borderRadius: 50,
		justifyContent: "center",
	},
	MainNavigationBtn1:{width:140,},
	MainNavigationBtn2:{width:170,},
	MainNavigationBtn3:{width:250,},
	MainNavigationBtn4:{width:"90%", margin: 15,},
	MainNavigationBtn5:{width:"25%", marginTop: 15, marginLeft:5,marginRight:18,},


	mainCardContainerView:
	{

		flexDirection: 'row',
		backgroundColor:COLORS.colourNumberSix,
		marginLeft:10,marginRight:10, marginTop: 10,
		borderTopEndRadius:15,borderTopLeftRadius:15,

	},
	mainBookingCardContainerView:
	{

		flexDirection: 'row',
		backgroundColor:COLORS.colourNumberSix,
		marginLeft:10,marginRight:10, marginTop: 10,
		borderRadius:15,

	},
	imageRightView:
	{
		flexDirection: 'column', 
		flexGrow: 1,
	
		width:130,
		height:100,
		marginBottom:10, marginLeft:10,
		// backgroundColor: '#7a42f4',
	},
	productImage:
	{
		marginLeft:2,marginTop:10,marginBottom:10,
		height: 160,width: 160,  borderRadius:15,
		// backgroundColor: '#eeeeee'
	},
	textLableLeftView:
	{
		flexDirection: 'column', 
		flexGrow: 1,
		marginLeft:0,
		alignSelf: 'center',
		width:130,height:190,
		// backgroundColor: '#eeeeee',
	},
	MainTopHeaderTextView:{marginTop:80,},
	MainTopHeaderTextView1:{marginTop:43,},
	MainTopHeaderTextLabel:
	{
		paddingLeft:40,
		fontSize:FONTSIZES.moduleTitleTextFontSize,
		color:COLORS.white,
	},
	textLabels:
	{
		paddingLeft:40,paddingTop:20,
		fontSize:OTHERS.producttextfontsize,
		color:COLORS.black,
	},
	// MainSmallBtnView:
	// {
	// 	flexDirection: 'column',
	// 	marginTop:'35%',marginBottom:'35%', marginLeft:10,marginRight:10,
		
	// 	height:50,width:'95%', 
	// 	borderBottomEndRadius:15,borderBottomLeftRadius:15,
	// 	alignItems: 'center', justifyContent: 'center',
	// },

	// SmallBtnOne: 
	// {
	// 	marginTop: 1,
	// 	backgroundColor:COLORS.colourNumberOne,
	// 	paddingTop: 15,height: 43,
	// 	borderRadius: 50,
	// 	justifyContent: "center",
	// 	marginLeft:5,
	// },
	// SmallBtnOne1: {width: 210},
	// SmallBtnOne2: {width: 250},

	btnText: {
		color: COLORS.white,
		fontSize: OTHERS.bigbtnfontsize,
		marginTop:-20,
		justifyContent: "center",textAlign: "center",
	},
	

	input: {
		margin: 15,
		height: 40,
		color:COLORS.colourNumberOne,
		fontSize:19,
		width:'90%',
		textAlign:'center',
		borderWidth: 3,
		borderRadius: 50,
		borderColor:COLORS.colourNumberOne,
	
	},
	input1: {width:'60%',},
	phoneInput: {
		margin: 15,
		height: 40,
		color:COLORS.white,
		fontSize:18,
		textAlign:'left',
		borderBottomWidth:3,
		borderBottomColor:COLORS.colourNumberOne,
	
	},
	phoneInput1: {width:'20%',},
	phoneInput2: {width:'50%',},
	orderListDetailsText:
	{
		backgroundColor:COLORS.colourNumberSix,
		
		borderRadius:15,
		width:'90%', marginLeft:20,
		marginTop:10,marginBottom :10,
	},
	nextbtnText: {
		color: COLORS.white,
		fontSize: OTHERS.bigbtnfontsize,
		marginTop:-8,
		justifyContent: "center",textAlign: "center",
	},
	

	// Holiday Homes ====================================
	HolidayHomeHandleView:
	{
		backgroundColor:COLORS.colourNumberTwo,
		height:40, width:100,marginLeft:10,
		borderTopRightRadius:25,
	},
	HolidayHomeMainCardView:
	{
		// backgroundColor:COLORS.black,
		// height:370,
		// paddingLeft:5, marginRight:5,
	},
	HolidayHomeHandleText:
	{
		color:COLORS.white,marginLeft:20,
		fontSize:FONTSIZES.holidayHomesTitleTextFontSize,
	},
	HolidayHomeDetailsMainView:
	{
		backgroundColor:COLORS.colourNumberTwo,
		// height:300,

	},
	HolidayHomeActionView:
	{
		flexDirection:"row", marginTop:-30,
		backgroundColor:COLORS.colourNumberTwo,

	},
	HolidayHomeVideoView:{flexDirection:"row", marginTop:-25,},
	HolidayHomeVideoBackView:{flexDirection:"row",},
	HolidayHomeVideoTopSpaceView:{backgroundColor:COLORS.colourBodyColor, height:20,},

	VideoBackBtn: 
	{
		width:200,marginLeft:30,
		// backgroundColor:COLORS.white,
		backgroundColor:COLORS.colourNumberOne,

		paddingTop: 15,
		height: 43,borderRadius: 50,
		justifyContent: "center",
	},
	ArrowMainView:
	{
		// backgroundColor:COLORS.colourNumberTwo,
		// backgroundColor:COLORS.black,
		marginTop:8,
	},

	ArrowIcon:{color:COLORS.colourNumberOne},
	ActionBtn: 
	{
		// marginTop: 1,
		backgroundColor:COLORS.white,
		paddingTop: 15,height: 43,borderRadius: 50,
		justifyContent: "center",
	},
	actionBtnText:
	{
		color: COLORS.colourNumberOne,
		fontSize: FONTSIZES.holidayHomesActionBtnTextFontSize,
		marginTop:-20,fontWeight: "bold",
		justifyContent: "center",textAlign: "center",
	},
	showListBtnText:
	{
		color: COLORS.white,
		fontSize: FONTSIZES.holidayHomesActionBtnTextFontSize,
		marginTop:-20,fontWeight: "bold",
		justifyContent: "center",textAlign: "center",
	},
	BottomSpaceView:{backgroundColor:COLORS.colourNumberTwo,height:15,},


	// MainInnerCardListView:{flexDirection:'row',},
	MainInnerCardAboutView:{flexDirection:"column"},
	MainInnerRightCardListText:{},
	// LeftUserIcons:{ width:40,height:40,},
	// InnerCardListView:{ 
	// 	justifyContent: "center",textAlign: "center",
	// 	height:50,backgroundColor:COLORS.white,
	// 	},

	// InnerCardListView1:
	// {
	// 	borderColor:COLORS.colourNumberOne,
	// 	borderWidth:3,padding:10,
	// },

	AboutTitleText:
	{
		fontSize:FONTSIZES.cardListTextFontSize, 
		color:COLORS.colourNumberOne,
		fontWeight:"bold",
		paddingLeft:15,paddingBottom:10,paddingRight:20,
	},
	// InnerCardListText:
	// {
	// 	fontSize:FONTSIZES.cardListTextFontSize, 
	// 	color:COLORS.colourNumberOne,
	// },
	AboutText:
	{
		fontSize:FONTSIZES.cardListTextFontSize, 
		color:COLORS.colourNumberOne,
		paddingLeft:30,paddingBottom:20,paddingRight:20,
	},

	// Silder 
	homeImageSlider:
	{
		height:230, width:'95%',
		marginLeft:5,marginBottom:20,
	},
	homeImageSlidingImgs:{width:'100%',},
	video: {
		alignSelf: 'center',
		width: 330,
		height: 300,
	},
	
	// ================================================================
	// ================================================================
	// ================================================================

		// Screen screen
	// ================================================================
	// ================================================================

	introClubText:
	{
		marginLeft:-20,
		color: COLORS.colourNumberOne,
		fontSize: FONTSIZES.clubIntroTextFontSize,
		justifyContent: "center",textAlign: "center",
		paddingLeft:30,paddingBottom:20,paddingRight:20,

	},
	ApplyCardView:
	{
		backgroundColor:COLORS.colourNumberTwo,
		
		borderRadius:15,
		width:'95%', marginLeft:10,marginRight:15,
		
	},




	// ================================================================
	// ================================================================
	// ================================================================
	// ================================================================

		// Profile screen
	// ================================================================
	// ================================================================
	// ================================================================
	// ================================================================

	LogInPinView:
	{
		flexDirection:'row',
	},
	UserProfileView:
	{
		backgroundColor:COLORS.colourNumberThree,
		height:140,borderRadius:30,
		marginLeft:9,marginRight:9,
		flexDirection:"row"
	},
	UserProfileImageView:
	{
		marginTop:10,marginLeft:10,
	},
	UserProfileNameView:
	{
		marginTop:30,marginLeft:10,
		
	},
	// DashBoardView:
	// {
	// 	flex: 1, flexDirection:'row',
	// 	borderRadius:28, 
	// 	marginLeft:10,marginRight:10, 
	// },

	// DashBoardMainCardsView:
	// {
	// 	backgroundColor:COLORS.colourNumberTwo,
	// 	flexDirection:"row",
	// 	width:'100%'
	// },
	// DashBoardMainCardsView1:{ borderTopStartRadius:30,borderTopEndRadius:30},
	// DashBoardMainCardsView2:{ borderBottomStartRadius:30,borderBottomEndRadius:30},

	// DashBoardCardsView:
	// {
	// 	backgroundColor:COLORS.colourNumberThree,
	// 	borderRadius:20,
	// 	width:150,height: 165,
	// 	marginTop:8,marginLeft:8,
	// 	marginRight:8,marginBottom:8,
	// },
	// CardTextLabelInnerView1:{marginTop:40,},

// ============================= table
mainTableOuterView:
{
	marginRight:10,marginLeft:10,
},
mainTableTitleHandleView:
{
	backgroundColor:COLORS.colourNumberThree,
	borderRadius:0,
	borderBottomColor:COLORS.colourNumberTwo,
	borderBottomWidth:2,
	width:150,height: 45,
	marginLeft:10,
},
tableTitleHandleText: {
	color: COLORS.white,
	fontSize: 20,marginTop:8,
	justifyContent: "center",textAlign: "center",
},
mainTableView:
{
	flexDirection:'row',
	backgroundColor: COLORS.colourNumberThree,
},
tableTrView:
{
	paddingBottom: 8, paddingTop:8,
	textAlign: "center",
	borderBottomColor:COLORS.colourNumberTwo,
	borderBottomWidth:2,
	height:65,
},
trTdText:
{
	flexDirection: 'row',fontSize:18,
	paddingBottom:5,marginTop:8, 
	paddingLeft:10, paddingRight:10,
	color:COLORS.white,
},


// ================================================================
// ================================================================
	// splash screen
// ================================================================
// ================================================================
mainViewSplah: {
	paddingTop: 23,
	flex:1,
	backgroundColor: COLORS.colourBodyColor,

},
clubHomeSScreenView:
{
	marginBottom:20,
	flexDirection:'column',
	marginLeft:'20%', marginRight:'20%',
	width:'60%',
},
clubHomeScreenImage:
{
	
	marginLeft:20,
	marginRight:20,
	width:180,height:180,
},
splashScreenView:
{
	marginTop:'50%',
	flexDirection:'column',
	justifyContent: 'center',
	alignContent:'center',
	width:'90%',
},
splashScreenImage:
{
	marginLeft:60,
	marginRight:60,
	width:240,height:240,
},
splashScreenTextView:
{
	flexDirection: 'row',
	justifyContent:'center',
	marginLeft:30,
	// marginRight:'20%'
},
splashScreenText:
{
	marginTop:30,
	fontSize:30,
	color:COLORS.colourNumberOne,
},

// Drawer items.......

drawerMainUserView:
{
	// width: 100, height: 100,
	marginBottom:10, marginTop:-10,
	backgroundColor:COLORS.colourNumberOne
},
drawerUserView:
{
	
	width: 100, height: 100,
	marginLeft:30, marginTop:10, marginBottom:20,
	
},

drawerIcon:
{
	color:COLORS.white,
	width:120,height:120,
	marginLeft:20,

},
drawerUserName:
{
	marginLeft:30,fontSize:20,
	marginBottom:10,marginTop:15,
	color:COLORS.white, 
	fontWeight:'bold',

},



// ================================================================
// ================================================================
	// screen header
// ================================================================
// ================================================================
topNavigationHeader:
{
	flexDirection: 'row',
	backgroundColor: COLORS.colourNumberOne,
	height:65,
},
topNavigationHeaderTextView:
{
	height: 55,
},

topNavigationHeaderText:
{
	fontSize: 18, color: '#fff',
	marginLeft:5, marginTop:10,
},
openDrawerMenuView:
{
	width: 50, height: 50,
	marginLeft:-25,marginTop:5, marginBottom:10,
},
openChatBtn:
{
	width: 54, height: 54,
	// marginLeft:30,
	borderRadius:10,
	backgroundColor:COLORS.colourNumberThree,
},
mainChatView:
{
	flexDirection: 'row',
	justifyContent: 'center', 
	alignItems: 'center',
	width: 56, height: 56,
	position: 'absolute',right: 5,top: 5,
},
chatCustomerText: {
	color: COLORS.colourNumberOne,
	paddingLeft:10,fontSize: 18,
},
chatReplayText: {
	color: COLORS.colourNumberOne,
	paddingLeft:10,fontSize: 18,
},
mainMenuView:
{
	flexDirection: 'row',
	justifyContent: 'center', 
	alignItems: 'center',
	width: 54, height: 54,
	marginLeft:16,
},
openDrawerbtn:
{
	width: 54, height: 54,
	marginLeft:30,
	borderRadius:10,
	backgroundColor:COLORS.colourNumberThree,
},
opeMenuIcone:
{
	marginLeft:14,marginTop:10,
	color:COLORS.white,
},
productTopTitleNameView:
{
	flexDirection: 'row',
	justifyContent: 'center', 
	alignItems: 'center',
	marginLeft:'20%',
},
productTopTitleName:
{

	fontSize: OTHERS.fontsize20,
	color:COLORS.white,
},




ImageVideoMainCardView:
{
	marginLeft:10,marginRight:10,
	// borderBottomEndRadius:20,
	borderBottomLeftRadius:20,
	borderBottomRightRadius:20,
	borderTopRightRadius:20,

	backgroundColor:COLORS.colourNumberTwo,
},
ServiceNameListMainView2:
{
	backgroundColor:COLORS.colourNumberOne,
	paddingTop: 5,height: 40, marginLeft:20,marginRight:20,
	justifyContent: "center", marginTop:10,
	borderRadius:10, flexDirection:"row",
	// borderBottomEndRadius:2,
},
ServicesText1: 
{
	paddingLeft:5,paddingRight:5,
	color: COLORS.white,
	fontSize: OTHERS.bigbtnfontsize,
	
	// justifyContent: "center",textAlign: "center",
},
EstateImage:
{
	width:'100%', borderRadius:20, marginTop:20, marginLeft:5, height:230,
},
ImageSliderView:
{
	height:230, width:'95%',
	marginLeft:5,marginBottom:20,
	// backgroundColor:COLORS.white,
},
ImageVideoTitleHandleView:
{
	backgroundColor:COLORS.colourNumberTwo,
	height:40, width:100,
	borderTopRightRadius:25,
},
ImageVideoHandleText:
{
	color:COLORS.white,marginLeft:20,
	fontSize:FONTSIZES.holidayHomesTitleTextFontSize,
},
ImageVideoView:
{
	// backgroundColor:COLORS.colourNumberTwo,
	// height:300,

},


pickerSelectionInputView: {
	margin: 5, flex: 1,
	height: 40,
	width:'90%',
	textAlign:'left',
	// borderWidth: 3,
	// borderRadius: 50,
	// borderColor:COLORS.colourNumberOne,
	// borderBottomWidth:3,
	// borderWidth: 3,
	// borderRadius: 50,
	// borderColor:COLORS.colourNumberOne,
},
pickerSelectioninputs:
{
	marginTop: -10,marginLeft:10,
	height: 40,color:COLORS.colourNumberOne,
	fontSize:20,width:'90%',
},
pickerSelectionInputView1: 
{
	margin: 5, flex: 1,
	height: 40,
	width:'90%',
	textAlign:'center',
	borderWidth: 3,
	borderRadius: 50,
	borderColor:COLORS.colourNumberOne,
},
pickerSelectioninputs1:
{
	marginTop: -10, alignContent:'center',
	marginLeft:20,
	height: 40,color:COLORS.colourNumberOne,
	fontSize:20,width:'90%',
},

PhoneInput:
{
	flexDirection:'row',
},





// ================================================================
// ================================================================
	// Loan Screen
// ================================================================
// ================================================================

uploadedImageView:{ flex: 1, alignItems: 'center', justifyContent: 'center' },
LoanAppTitle:
{
	backgroundColor:COLORS.colourNumberOne,
height:50,
},

myText: 
{
	fontSize: OTHERS.bigbtnfontsize,
	justifyContent: "center",textAlign: "center",
},
myText1: {color:COLORS.white,},
myText2: {color:COLORS.colourNumberOne,},
nextBtn: {
	// color: COLORS.white,
	// fontSize: OTHERS.bigbtnfontsize,
	marginLeft:180,
	marginTop:-20,
	// justifyContent: "center",textAlign: "center",
},
backBtn: {
	marginLeft:30,
	marginTop:-20,
},

PhotoUploadBtn: 
{
	margin: 15,
	height: 40,
	color:COLORS.white,
	fontSize:18,
	width:'90%',
	textAlign:'center',
	borderWidth: 3,
	borderRadius: 50,
	borderColor:COLORS.colourNumberOne,
},
PhotoUploadBtnText: 
{
	color: COLORS.colourNumberOne,
	fontSize: 19,
	marginTop:0,
	justifyContent: "center",textAlign: "center",
},



});
