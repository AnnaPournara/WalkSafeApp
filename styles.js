import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
      flex: 1
    },
  
    //StartPage
    walk: {
      top: 27,
      left: 20,
      position: "absolute",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontStyle: "italic",
      color: "black",
      textShadowColor: 'grey',
      textShadowOffset: { width: 1, height: 1},
      textShadowRadius: 1,
      fontSize: 20
    },
  
    safe: {
      top: 27,
      left: 60,
      position: "absolute",
      fontFamily: "serif",
      fontWeight: "bold",
      fontStyle: "italic",
      color: "black",
      textShadowColor: 'grey',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
      fontSize: 25
    },
  
    image: {
      top: 20,
      left: 45,
      width: 50,
      height: 50,
      position: "absolute",
      transform: [
        {
          rotate: "50.00deg"
        }
      ],
      opacity: 0.3,
      borderWidth: 0.5,
      borderColor: "#000000"
    },
  
    frontCircles1: {
      width:280,
      height:280, 
      borderRadius:140,
      backgroundColor: "#9975AE", 
      opacity: 0.1,
      position: 'absolute',
      top: 110,
      right: 220
    },
  
    frontCircles2: {
      width:280,
      height:280, 
      borderRadius:140,
      backgroundColor: "#9975AE", 
      opacity: 0.2,
      position: 'absolute',
      top: 420,
      left: 220
    },
  
    start_title: {
      color: '#C9C4C9',
      fontSize: 18,
      fontFamily: 'serif',
      fontWeight: 'bold',
      top: 180
    },
  
    start_text: {
      color: '#C9C4C9',
      fontSize: 16,
      fontFamily: 'serif',
      textAlign: 'justify',
      width: 305,
      top: 183
    },
  
    login: {
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9',
      width: 270,
      height: 45,
      backgroundColor: '#765988',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'white'
    },
    
    signup: {
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9',
      width: 270,
      height: 45,
      backgroundColor: 'black',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'white'
    },
  
    //LoginPage
    circle: {
      width:800,
      height:800, 
      borderRadius:400,
      backgroundColor: "#B0A8B5",
      position: 'absolute',
      top: 170,
      alignSelf: 'center'
    },
  
    loginTitle:{
      fontFamily: 'serif', 
      fontSize:23, 
      fontWeight: 'bold', 
      color: 'white', 
      left: 30, 
      top: 75
    },
  
    emailTitle:{
      fontSize:20, 
      color: '#5C5C5C', 
      left: 30, 
      top: 215
    },
  
    email: {
      color: '#3E3D3D',
      top: 210,
      left: 30,
      fontSize: 18,
      borderBottomWidth: 1,
      width: 330, 
      borderBottomColor: '#4E4E4E',
    },
  
    passwordTitle:{
      fontSize:20, 
      color: '#5C5C5C', 
      left: 30, 
      top: 245
    },
  
    password: {
      color: '#3E3D3D',
      top: 240,
      left: 30,
      fontSize: 18,
      borderBottomWidth: 1,
      width: 330, 
      borderBottomColor: '#4E4E4E'
    },
  
    forgotPassword:{
      fontSize:12, 
      color:'black', 
      alignSelf: 'flex-end', 
      right:30, 
      top: 250, 
      opacity: 0.7
    },
  
    loginButton:{
      top: 360, 
      right: 30, 
      alignSelf: 'flex-end'
    },
  
    rect: {
      width: 140,
      height: 45,
      backgroundColor: '#765988',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'white'
    },
  
    logIn: {
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9', 
      top: 6, 
      left: 15
    },
  
    icon: {
      top: 3,
      right: 10,
      alignSelf: 'flex-end',
      width: 35,
      height: 35,
      position: "absolute",
      opacity: 0.6
    },
  
    //SignupPage
    create: {
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9', 
      top: 6, 
      left: 15
    },
  
    signupTitle:{
      fontFamily: 'serif', 
      fontSize:23, 
      fontWeight: 'bold', 
      color: 'white', 
      left: 30, 
      top: 75
    },
  
    usernameTitle:{
      fontSize:20, 
      color: '#5C5C5C', 
      left: 30, 
      top: 185
    },
  
    signupEmailTitle:{
      fontSize:20, 
      color: '#5C5C5C', 
      left: 30, 
      top: 215
    },
  
    signupPasswordTitle:{
      fontSize:20, 
      color: '#5C5C5C', 
      left: 30, 
      top: 245
    },
  
    createAccountButton:{
      top: 310, 
      right: 30, 
      alignSelf: 'flex-end'
    },
  
    rect2: {
      width: 180,
      height: 45,
      backgroundColor: '#765988',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'white'
    },
  
    username: {
      color: '#3E3D3D',
      top: 180,
      left: 30,
      fontSize: 18,
      borderBottomWidth: 1,
      width: 330, 
      borderBottomColor: '#4E4E4E',
    },
  
  
    //HomePage
    profileImage: {
      width: 35,
      height: 35,
      position: "absolute",
      alignSelf: 'flex-end'
    },
  
    reportIncidentButton: {
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9',
      width: 270,
      height: 45,
      backgroundColor: '#765988',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'white'
    },
  
    recentReportsButton: {
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9',
      width: 270,
      height: 45,
      backgroundColor: 'black',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'white'
    },
  
    //ReportPage
    headersTitle: {
      borderBottomWidth: 2,
      borderRadius: 5, 
      borderColor: '#AB8FBC', 
      top: 12, 
      width: 243, 
      alignSelf: 'flex-start',
      left: 70
    },
  
    reportIncidentHeader:{
      fontFamily: 'serif',
      fontSize: 22,
      color:'#C9C4C9'
    },
  
    fillInFields:{
      top: 40, 
      left: 25, 
      fontFamily: 'serif',
      color:'#C9C4C9'
    },
  
    incidentType:{
      fontFamily: 'serif', 
      fontSize: 18, 
      left: 25, 
      top: 55,
      color:'#C9C4C9'
    },
  
    dateTimeTitle:{
      fontFamily: 'serif', 
      fontSize: 18, 
      left: 25, 
      top: 75,
      color:'#C9C4C9'
    },
  
    dateTimeField:{
      backgroundColor:'#D2C8D8', 
      width: 340, 
      height: 40, 
      borderRadius: 5, 
      left: 25, 
      top: 80, 
      flexDirection:'row'
    },
  
    dropdown: {
      backgroundColor:'#D2C8D8',
      width: 340,
      height: 40,
      borderRadius: 5,
      left: 25,
      top: 60
    },
  
    placeholderStyle: {
      color: '#878787',
      left: 10,
      fontSize: 16,
    },
  
    selectedTextStyle: {
      left: 10,
      fontSize: 16,
      color: '#3E3D3D'
    },
  
    iconStyle: {
      width: 20,
      height: 20,
      right: 5
    },
  
    containerStyle: {
      backgroundColor: '#D2C8D8', 
      borderRadius: 5
    },
  
    fieldPlaceholder:{
      color: '#878787',
      left: 10,
      fontSize: 16,
      fontFamily:'serif', 
      top:8, 
      width:340
    },
  
    incidentLocationTitle:{
      fontFamily: 'serif', 
      fontSize: 18, 
      left: 25, 
      top: 95,
      color:'#C9C4C9'
    },
  
    incidentLocationField:{
      backgroundColor:'#D2C8D8', 
      width: 340, 
      height: 40, 
      borderRadius: 5, 
      left: 25, 
      top: 100, 
      flexDirection:'row'
    },
  
    selectedAddress:{
      color: '#878787',
      left: 10,
      fontSize: 16,
      fontFamily:'serif', 
      width:290, 
      color:'#3E3D3D'
    },
  
    blurBackground:{
      width:'100%', 
      height:'100%', 
      backgroundColor:'grey', 
      opacity:0.7
    },
  
    mapModal:{
      width: 350, 
      height:600, 
      backgroundColor:'white', 
      alignSelf:'center', 
      top: 95, 
      borderRadius:10, 
      position:'absolute'
    },
  
    mapWindow:{
      width:350, 
      height:600, 
      overflow:'hidden', 
      borderRadius:10
    },
  
    closeMapButton:{
      alignSelf:'flex-end', 
      position:'absolute', 
      backgroundColor:'white', 
      width:50, 
      borderTopRightRadius:10, 
      borderBottomLeftRadius:10
    },
  
    closeMapButtonText:{
      color:'grey',
      fontSize:16, 
      alignSelf:'center'
    },
  
    currentLocationButton:{
      alignSelf: 'flex-end', 
      position:'absolute', 
      top:40, 
      right:10, 
      backgroundColor:'white', 
      width:30, 
      height:30, 
      justifyContent:'center', 
      borderRadius:5
    },
  
    mapSearchBar:{
      position:'absolute', 
      width:280, 
      height:170, 
      top: 10, 
      left:10
    },
  
    descriptionTitle:{
      fontFamily: 'serif', 
      fontSize: 18, 
      left: 25, 
      top: 115,
      color:'#C9C4C9'
    },
  
    descriptionField:{
      backgroundColor:'#D2C8D8', 
      width: 340, 
      borderRadius: 5, 
      left: 25, 
      top: 120
    },
  
    detailsTitle:{
      fontFamily: 'serif', 
      fontSize: 18, 
      left: 25, 
      top: 135,
      color:'#C9C4C9'
    },
  
    detailsField:{
      backgroundColor:'#D2C8D8', 
      width: 340, 
      borderRadius: 5, 
      left: 25, 
      top: 140
    },
  
    proceedSubmitButton:{
      top: 180, 
      right: 30, 
      alignSelf: 'flex-end'
    },
  
    proceedSubmitButtonText:{
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9', 
      top: 6, 
      left: 15
    },
  
  
    //ReportPage (continue)
    continueText:{
      top: 60, 
      left: 25, 
      fontFamily: 'serif', 
      fontSize: 18,
      color:'#C9C4C9'
    },
  
    infoText1:{
      fontFamily: 'serif', 
      fontSize: 20, 
      top: 200, 
      width:300, 
      alignSelf:'center', 
      color:'#5C5C5C', 
      fontWeight:'bold'
    },
  
    infoText2:{
      fontFamily: 'serif', 
      fontSize: 16, 
      top: 230, 
      width:300, 
      alignSelf:'center', 
      color:'#5C5C5C'
    },
  
    submitButton:{
      top: 350, 
      alignSelf:'center'
    },
  
    submitButtonText:{
      fontFamily: 'serif',
      fontSize: 20,
      color: '#C9C4C9',
      width: 140,
      height: 45,
      backgroundColor: '#765988',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderRadius: 10,
      borderWidth: 0.4,
      borderColor: 'white',
      fontWeight:'bold'
    },
  
  
    //ProfilePage
    profileHeader:{
      fontFamily: 'serif',
      fontSize: 22, 
      color:'#C9C4C9'
    },
  
    backCircle:{
      width:800,
        height:800, 
        borderRadius:400,
        backgroundColor: "black",
        position: 'absolute',
        top: 100,
        alignSelf: 'center'
    },
  
    user: {
      fontFamily: 'serif',
      fontSize: 18, 
      fontWeight: 'bold',
      top:130,
      left: 30,
      color: 'white'
    },
  
    underLine1:{
      borderBottomWidth: 1, 
      borderColor: '#C9C4C9', 
      width: '100%', 
      top:135, 
      opacity:0.5
    },
  
    userNameField:{
      flexDirection: 'row', 
      top: 155, 
      height:25
    },
  
    userName: {
      fontFamily: 'serif',
      fontSize: 15,
      fontWeight: 'bold',
      top:150,
      left: 30, 
      color: '#C9C4C9'
    },
  
    fieldText:{
      fontFamily: 'serif',
      fontSize: 15,
      fontWeight: 'bold',
      top:0,
      left: 30, 
      color: 'white', 
      width:360
    },
  
    modIcon:{
      alignSelf: 'flex-end', 
      width: 30, 
      height: 30, 
      position:'absolute', 
      opacity: 0.6, 
      bottom:0
    },
  
    underLine2:{
      borderBottomWidth: 1, 
      borderColor: '#C9C4C9', 
      width: '85%', 
      top:155, 
      opacity:0.5, 
      alignSelf:'center'
    },
  
    emailTitle2:{
      fontFamily: 'serif',
      fontSize: 15,
      fontWeight: 'bold',
      top:170,
      left: 30, 
      color: '#C9C4C9'
    },
  
    emailField:{
      flexDirection: 'row', 
      top: 175, 
      height:25
    },
  
    passwordTitle2:{
      fontFamily: 'serif',
      fontSize: 15,
      fontWeight: 'bold',
      top:190,
      left: 30, 
      color: '#C9C4C9'
    },
  
    passwordField:{
      flexDirection: 'row', 
      top: 195, 
      height:25
    },
  
    settingsTitle:{
      fontFamily: 'serif',
      fontSize: 18, 
      fontWeight: 'bold',
      top:230,
      left: 30,
      color: 'white'
    },
  
    settings:{
      fontFamily: 'serif',
      fontSize: 17, 
      fontWeight: '100',
      top:0,
      left: 30,
      color: 'white'
    },
  
    logoutButton:{
      top: 350, 
      alignSelf:'center'
    },
  
    logout: {
      fontFamily: 'serif',
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold', 
      top: 6, 
      left: 10
    },
  
    rect3: {
      width: 190,
      height: 45,
      backgroundColor: '#161616',
      borderRadius: 5
    },
  
    deleteAccountButton:{
      alignSelf: 'flex-end', 
      right: 30, 
      top: 390
    },
  
    deleteAccount: {
      fontFamily: 'serif',
      fontSize: 14,
      color: '#950303',
    },
  
  
    //RecentReportsPage
    recentReportsHeader:{
      fontFamily: 'serif',
      fontSize: 22,
      color:'#C9C4C9'
    },
  
    until:{
      fontFamily: 'serif',
      fontSize: 18, 
      top:50, 
      left:20,
      color:'#C9C4C9'
    },
  
    dropDown:{
      width:170, 
      height:30, 
      top:47, 
      left: 30
    },
  
    reportsMap:{
      width:360, 
      height:'70%', 
      overflow:'hidden', 
      borderRadius:10, 
      alignSelf:'center', 
      top:70
    },

    markerBubble:{
      backgroundColor:'#FFFBFF', 
      width:300, 
      height:'65%',  
      opacity:0.9, 
      borderRadius:10,
      position:'absolute',
      alignSelf:'center',
      top:'20%'
    },

    typeOfIncidentText:{
      fontFamily: 'serif',
      fontSize: 17,
      color:'#353535', 
      fontWeight: 'bold',
      
    },

    typeOfIncidentHeader:{
      borderBottomColor: '#999999',
      borderBottomWidth: 2,
      width: 260,
      height:30,
      top:20,
      justifyContent:'center',
      alignSelf:'center'
      
    },

    dateTimeText:{
      fontFamily: 'serif',
      fontSize: 15,
      color:'#353535',
      alignSelf:'center',
      left:10
    },

    dateTimeHeader:{
      flexDirection: 'row',
      borderBottomColor: '#CBCBCB',
      borderBottomWidth: 1.5,
      width: 260,
      height:'auto',
      top:30,
      alignSelf:'center'
    },

    timeIcon:{
      width: 20,
      height: 20     
    },

    locationHeader:{
      flexDirection: 'row',
      borderBottomColor: '#CBCBCB',
      borderBottomWidth: 1.5,
      width: 260,
      height:'auto',
      top:40,
      alignSelf:'center'
      
    },

    locationIcon:{
      width: 25,
      height: 25     
    },

    locationText:{
      fontFamily: 'serif',
      fontSize: 15,
      color:'#353535',
      alignSelf:'center',
      left:10,
      width: 220
    },

    descriptionHeader:{
      flexDirection: 'row',
      borderBottomColor: '#CBCBCB',
      borderBottomWidth: 1.5,
      width: 260,
      height:'auto',
      top:50,
      alignSelf:'center'
      
    },

    perpetratorIcon:{
      width: 25,
      height: 25     
    },

    descriptionText:{
      fontFamily: 'serif',
      fontSize: 15,
      color:'#353535',
      alignSelf:'center',
      left:10,
      width: 220
    },

    detailsHeader:{
      flexDirection: 'row',
      borderBottomColor: '#CBCBCB',
      borderBottomWidth: 1.5,
      width: 260,
      height:'auto',
      top:60,
      alignSelf:'center'
      
    },

    detailsIcon:{
      width: 25,
      height: 25     
    },

    detailsText:{
      fontFamily: 'serif',
      fontSize: 15,
      color:'#353535',
      alignSelf:'center',
      left:10,
      width: 220
    },

    markerLabel:{
      color:'red', 
      padding:3, 
      borderWidth:0.5, 
      borderRadius:10, 
      borderTopLeftRadius:0, 
      backgroundColor:'white', 
      fontSize:11
    },

    findSafestRoute:{
      width:360, 
      height: 50, 
      backgroundColor:'#9975AE',
      top:'13%',
      alignSelf:'center',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      justifyContent:'center'
    },
    
    findSafestRouteText:{
      fontFamily: 'serif',
      fontSize: 16,
      color:'white',
      alignSelf:'center',
      fontWeight:'bold'
    },

    findSafestRouteWindow:{
      width:360, 
      height:380, 
      backgroundColor:'#9975AE', 
      marginTop:'auto',
      alignSelf:'center',
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },

    closeSafestRouteWindow:{
      alignSelf:'center', 
      position:'absolute',  
      width:40,
      height:30,
      top:0,
      borderBottomWidth:1,
      justifyContent:'center',
      borderRadius: 20
    },

    closeSafestRouteWindowIcon:{
      width: 20,
      height: 15,
      alignSelf:'center'
    },

    findSafestRouteText2:{
      fontFamily: 'serif',
      fontSize: 14,
      color:'white',
      alignSelf:'center',
      marginTop:40
    },

    select:{
      width:290,
      height:40,
      backgroundColor: '#C0A1D3',
      marginTop: 5,
      borderRadius: 10,
      alignSelf: 'center',
      flexDirection: 'row'
    },

    selectText:{
      fontFamily: 'serif',
      fontSize: 15,
      color:'white',
      left: 10,
      width :290,
      top:8
    },

    proceedButton:{
      width:70,
      height: 35,
      backgroundColor: '#694F78',
      borderRadius:10,
      borderWidth:0.5,
      borderColor: 'white',
      alignSelf: 'flex-end',
      marginTop: 15,
      right:15
    },

    proceedButtonIcon:{      
      width: 50,
      height: 35,
      alignSelf:'center'
    },

    selectHeaderText:{
      fontFamily: 'serif',
      fontSize: 14,
      color:'white',
      left: 40,
      marginTop:10
    },

    selectHeader:{
      flexDirection:'row', 
      width:290, 
      justifyContent:'space-between'
    },

    useCurrentLocationButton:{
      backgroundColor:'#805599', 
      borderRadius:10, 
      borderBottomWidth:0.8, 
      marginTop:10
    },

    useCurrentLocationButtonText:{
      fontFamily:'serif', 
      fontSize:10, 
      margin:3,
      color:'#C9C4C9'
    },

    clearButton:{
      top:20, left:10, 
      borderBottomWidth:0.5, 
      width:100, 
      borderRadius:10, 
      height:20
    },

    clearButtonText:{
      alignSelf:'center', 
      color:'black', 
      opacity:0.5, 
      fontFamily:'serif'
    },

    loadingWindow:{
      width:'100%', 
      height:'100%', 
      position:'absolute'
    },

    loadingAnimation:{
      width:200,
      height:100, 
      backgroundColor:'white', 
      position:'absolute', 
      alignSelf:'center', 
      top:'40%', 
      borderRadius:10, 
      justifyContent:'center'
    },

    loadingAnimationText:{
      color:'black', 
      fontFamily:'serif',
      fontSize:18, 
      opacity:0.5, 
      alignSelf:'center'
    },

    routePointMarker:{
      backgroundColor:'purple', 
      width:23, 
      height:23, 
      borderRadius:12.5, 
      justifyContent:'center', 
      borderWidth:0.5
    },

    routePointMarkerText:{
      fontSize:18, 
      color:'white', 
      alignSelf:'center', 
      bottom:2
    }
  
  });

export default styles;