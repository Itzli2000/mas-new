
// 1ro importar react y/o componentes nativos
import {  StyleSheet } from 'react-native';

//2do importar themes
import { Colors , Metrics , Fonts } from '@bm-mas-themes'


export const ApplicationStyles =  StyleSheet.create({
  
  // General styles
  mainScrollContainer:{
    backgroundColor:Colors.white,
    marginTop: (Metrics.screenWidth <= 600 ? 80 : 100),
    position: 'relative',
  },
  mainScrollContent:{
    flexGrow: 1, 
    justifyContent: 'flex-start'
  },
  spaceElement: {
    justifyContent: 'space-around',
  },
  photoON: {
    width: '100%',
    height: Metrics.screenHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  photoOff: {
    width: '100%',
    height: Metrics.screenHeight,
    position: 'absolute',
    bottom: 0,
    left: -Metrics.screenWidth,
  },
  floatRight: {
    marginLeft: 'auto',
    width: '80%',
  },
  darkPicker: {
    backgroundColor: Colors.black,
    color: Colors.white,
    borderRadius:20,
    marginLeft:10,
  },
  textDivider: {
    height: 15,
    borderColor: 'rgba(255,255,255,0)',
    width: '90%',
    margin: 'auto',
    marginBottom: 15,
    borderBottomColor: Colors.white,
    borderWidth: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  column:{
    flexDirection: 'column',
  },
  pbDefault:{
    paddingBottom:20,
  },
  // Card Component Styles
  cardContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  cardContainerStyle: {
    maxWidth: 450,
    width: '90%',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  fullCardContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  fullCardContainerStyle: {
    maxWidth: 650,
    width: '100%',
    borderRadius: 0,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 130,
    marginTop: 20,
  },

  cardBackgorund: {
    justifyContent: 'center',
  },
  cardTitleContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardTitleIcon: {
    resizeMode: 'contain',
    width: (Metrics.screenWidth <= 600 ? 27 : 32),
    height: (Metrics.screenWidth <= 600 ? 27 : 32),
  },
  cardTitleIconElem: {
    width: (Metrics.screenWidth <= 600 ? 30 : 36),
    height: (Metrics.screenWidth <= 600 ? 30 : 36),
    borderRadius: (Metrics.screenWidth <= 600 ? 15 : 18),
    fontSize: 18,
    overflow:'hidden',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullCardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop:20,
  },
  cardIconStyles: {
    paddingLeft:15,
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 23 : 30),
  },
  cardTitleStyles: {
    paddingLeft:10,
    fontFamily: 'gotham-bold',
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 25),
    height: 30,
    lineHeight: 30,
  },
  cardBodyStyle: {
    padding: 10,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
  },
  fullCardBody: {
    fontSize: 17,
    fontFamily: 'gotham-bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white
  },
  // ScreenContainer Component Styles
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Metrics.screenHeight,
  },
  screenBackImage: {
    width: '100%', 
    height: '100%',
  },
  // Float Menu styles
  MenuHide: {
    left:'-120%',
  },
  MenuShow: {
    left:0,
  },
  cardfloatMenuData: {
    flex: 1,
    width: '100%',
  },
  menuIconContainer:{
    width: (Metrics.screenWidth <= 600 ? 40 : 50), 
    height: (Metrics.screenWidth <= 600 ? 40 : 50),
    marginRight: 10,
    marginRight: 'auto',
    marginLeft: 10,
  },
  menuUserData:{
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: Colors.orange,
    borderBottomWidth: 1,
    paddingBottom:15,
    marginBottom:20,
    width:'94%',
    marginLeft: '3%',
  },
  menuUserPhotoContainer: {
    width: (Metrics.screenWidth <= 600 ? 80 : 100),
    height: (Metrics.screenWidth <= 600 ? 80 : 100),
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 50,
    overflow: 'hidden',
  },
  menuUserPhoto: {
    width: '100%',
    height: '100%',
  },
  menuUserDataContainer:{
    width: '65%',
    justifyContent:'center',
    alignItems: 'flex-start',
    marginLeft:15,
  },
  menuUserUserName: {
    marginTop: (Metrics.screenWidth <= 600 ? 10 : 15),
    fontSize: (Metrics.screenWidth <= 600 ? 20 : 25),
    color: Colors.white,
    textAlign: 'right',
    fontFamily: 'gotham-bold',
  },
  menuUserUserSubtitle: {
    marginTop: (Metrics.screenWidth <= 600 ? 7 : 10),
    fontSize: (Metrics.screenWidth <= 600 ? 14 : 19),
    color: Colors.white,
    textAlign: 'right',
    fontFamily: 'gotham-bold',
  },
  menuLinks:{
    color: Colors.white,
    paddingTop:7,
    paddingBottom:7,
    marginLeft: (Metrics.screenWidth <= 600 ? 5 : 15),
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  menuLinksText: {
    fontSize: (Metrics.screenWidth <= 600 ? 20 : 25),
    color: Colors.white,
  },
  menuIcons:{
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 25),
    color: Colors.white,
  },
  menuIconsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (Metrics.screenWidth <= 600 ? 30 : 40),
    height: (Metrics.screenWidth <= 600 ? 30 : 40),
  },
  menuIconsContainerBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (Metrics.screenWidth <= 600 ? 30 : 40),
    height: (Metrics.screenWidth <= 600 ? 30 : 40),
    borderRadius: (Metrics.screenWidth <= 600 ? 15 : 20),
    backgroundColor: Colors.white,
  },
  menuIconsBottom:{
    fontSize: (Metrics.screenWidth <= 600 ? 20 : 30),
    color: Colors.orange,
    padding:4,
  },
  menuListBottom:{
    borderTopColor: Colors.orange,
    borderTopWidth: 1,
    padding: (Metrics.screenWidth <= 600 ? 5 : 15),
    marginTop: (Metrics.screenWidth <= 600 ? 5 : 15),
  },
  // User card styles
  userCardTopBar: {
    minHeight: (Metrics.screenWidth <= 600 ? 80 : 100),
    width: '100%',
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  topIcons: {
    position: 'absolute',
    height: (Metrics.screenWidth <= 600 ? 80 : 100),
    paddingTop: (Metrics.screenWidth <= 600 ? 10 : 20),
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.userCardStart,
  },
  userCardfloatMenu:{
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex: 100,
    backgroundColor: Colors.menuBackground,
    opacity: 0.9,
    alignItems: 'center',
  },
  userCardPhotoContainer:{
    width: (Metrics.screenWidth <= 600 ? '35%' : '20%'),
    height: (Metrics.screenWidth <= 600 ? 100 : 120),
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: (Metrics.screenWidth <= 600 ? 50 : 70),
    // overflow: 'hidden',
    marginLeft: 20,
  },
  userCardDataContainer:{
    width: '65%',
    justifyContent:'center',
    alignItems: 'center',
  },
  userCardPhoto:{
    width: (Metrics.screenWidth <= 600 ? 100 : 120),
    height: (Metrics.screenWidth <= 600 ? 100 : 120),
  },
  userCardDate: {
    fontFamily: 'gotham-bold',
    fontSize: (Metrics.screenWidth <= 600 ? 13 : 17),
    color: Colors.white,
    textAlign: 'center',
  },
  userCardUserName: {
    marginBottom: (Metrics.screenWidth <= 600 ? 15 : 20),
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 20),
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'gotham-bold',
  },
  userCardUserSubtitle: {
    marginTop: (Metrics.screenWidth <= 600 ? 15 : 20),
    fontSize: (Metrics.screenWidth <= 600 ? 14 : 19),
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'gotham-bold',
  },
  userCardMenuIcon: {
    resizeMode: 'contain',
    width: '100%', 
    height: '100%',
  },
  userCardImageLogo: {
    resizeMode: 'contain',
    width: (Metrics.screenWidth <= 600 ? 60 : 70),
    height: (Metrics.screenWidth <= 600 ? 60 : 70),
    marginRight: 10,
  },
  userCardNavIcon: {
    resizeMode: 'contain',
    width: (Metrics.screenWidth <= 600 ? 45 : 60),
    height: (Metrics.screenWidth <= 600 ? 45 : 60),
    marginRight: 10,
  },

  // Home screen component styles
  homeCardIconPicker: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    marginRight: (Metrics.screenWidth <= 600 ? 10 : 15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeCardIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    fontSize: 25,
    overflow:'hidden',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeCardIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    fontSize: 20,
    overflow:'hidden',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 30,
    marginRight:10,
  },
  homeFirstSection: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  homePickerIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
    width:25,
    height: 25,
    resizeMode: 'contain',
    zIndex: 100,
  },
  // Home screen component styles
  fullCardInnerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  fullCardInnerColumnLeft: {
    width: '60%',
  },
  fullCardInnerColumnRight: {
    width: '40%',
  },
  fullCardInnerFlatItem: {
    padding: 5,
    fontSize: (Metrics.screenWidth <= 600 ? 13 : 15),
    height: 30,
    color: '#000',
  },
  // Login check options container styles
  checkOptionContainer: {
    width: '100%',
    margin: 'auto',
    fontFamily: 'gotham-regular',
    flexDirection: 'row',
    flexWrap: 'nowrap', 
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkOptionInlineText: {
    width: '70%',
    fontSize: 14,
    paddingLeft:10,
    textAlign: 'justify',
    alignSelf: 'center',
    color: Colors.white,
  },
  checkOptionInlineSwitch: {
    width: '20%',
    paddingRight: 30,
    alignSelf: 'center',
    backgroundColor: 'red'
  },
  // Survey screen
  surveyContainer: {
    marginTop: 50,
    backgroundColor: Colors.userCardStart,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent:'center',
    alignItems:'center',
  },
  surveyBox: {
    width: '100%',
    maxWidth: 300,
  },
  surveyTitle: {
    fontSize: (Metrics.screenWidth <= 600 ? 20 : 30),
    maxWidth: 270,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: 'gotham-bold',
  },
  surveyObservations: {
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 25),
    color: Colors.white,
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: 'gotham-bold',
  },
  surveyCheck: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width:250,
  },
  surveyCheckText: {
    color: Colors.white,
  },
  surveyObservationsText: {
    backgroundColor: Colors.white,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  surveyIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  surveyIconStyles: {
    padding:15,
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 55 : 65),
  },
  // Full card transparent styles
  
  transparentCardContainer: {
    width: '100%',
    marginTop: 20,
  },
  transparentCardContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.blackTransparent,
    borderBottomWidth: 2,
    borderRadius: 0,
  },
  transparentCardTitleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    width: '100%',
    maxWidth: 400,
    minHeight: 40,
  },
  transparentcardTitleStyles: {
    paddingLeft:50,
    fontFamily: 'gotham-bold',
    color: Colors.black,
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 25),
  },
  transparentcardSubtitleStyles: {
    paddingLeft:50,
    fontFamily: 'gotham-bold',
    color: Colors.black,
    fontSize: (Metrics.screenWidth <= 600 ? 15 : 20),
  },
  transparentCardIconStyles: {
    position: 'absolute',
    top: 0,
    left: 15,
    color: Colors.black,
    fontSize: (Metrics.screenWidth <= 600 ? 30 : 45),
  },
  transparentCardBody: {
    fontSize: 17,
    fontFamily: 'gotham-bold',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: Colors.black,
    margin: 0,
  },
  transparentCardColumn: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  // Visit screen styles
  visitButton: {
    width: 100,
    height: 40,
    marginLeft: 10,
    borderWidth: 0,
    borderRadius: 5,
  },
  buttonGreen:{
    backgroundColor: Colors.green,
  },
  buttonRed:{
    backgroundColor: Colors.red,
  },
  visitTextIn:{
    color: Colors.green,
    fontSize: (Metrics.screenWidth <= 600 ? 15 : 18),
  },
  visitTextOut:{
    color: Colors.red,
    fontSize: (Metrics.screenWidth <= 600 ? 15 : 18),
  },
  visitTextComplete:{
    backgroundColor: Colors.orange,
    color: Colors.white,
    width: 40,
    height: 40,
    marginLeft: 10,
    textAlign: 'center',
    borderRadius: 20,
  },
  visitCompleteIcon: {
    fontSize: 22,
    lineHeight: 40,
    padding: 0,
    margin: 0,
  },
  // Capture image screen
  imageCaptureHeader: {
    backgroundColor: Colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },
  captureIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow:'hidden',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
  },
  imageCaptureHeaderText: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 15,
  },
  imageCaptureBreadcrumb:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  imageCaptureIconContainer:{
    backgroundColor: Colors.orange,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  imageCaptureIcon:{
    fontSize: 25,
    lineHeight: 40,
    color: Colors.white,
  },
  imageCaptureIconText: {
    color: Colors.black,
    fontSize: 30,
    marginLeft: 10,
  },
  imageCaptureBodyContainer:{
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: Colors.orange,
  },
  imageCaptureTitle:{
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'gotham-bold',
    color: Colors.white,
  },
  imageCaptureInputPrice: {
    backgroundColor: Colors.white,
    width: '50%',
    color: Colors.black,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
  },
  imageCaptureText: {
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 15,
    color: Colors.black,
    paddingLeft: 10,
    marginBottom: 50,
  },
  imageCaptureSection:{
    position: 'absolute',
    bottom: 0,
    width: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.userCardStart,
  },
  imageCapturePhotoContainer:{
    width: 150,
    height: 150,
    borderRadius: 50,
    overflow: 'hidden',
  },
  imageCapturePhoto:{
    width:150,
    height:150,
  },
  imageCaptureDataContainer:{
    width: '45%',
    justifyContent:'center',
    alignItems: 'center',
  },
  // Map screen
  mapContainerSection: {
    flex: 1,
    marginTop: 0,
    backgroundColor: Colors.userCardStart,
    justifyContent:'center',
    alignItems:'center',
  },
  mapBox: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  placeStatusText: {
    backgroundColor: Colors.white,
    color: Colors.black,
    marginLeft:15,
    paddingLeft: 8,
    borderRadius:10,
    paddingRight: 20,
    height: 20,
    fontSize: 15,
    lineHeight: 20,
  },
  placeStatusIcon: {
    position: 'absolute',
    right: 0,
    top: 4,
    paddingRight: 5,
  },
  // Tasks screen
  tasksIconHeader: {
    width:30,
    height:30,
    fontSize:20,
    lineHeight:30,
    textAlign: 'center',
    backgroundColor: Colors.orange,
    color: Colors.white,
    borderRadius:15,
    marginRight:10,
  },
  // Tasks Active screen
  taskActiveContainer: {
    width: '100%',
    minHeight: Metrics.screenHeight / 2,
    flex: 1,
    flexGrow: 1,
    backgroundColor: Colors.greenStart,
    textAlign: 'center',
  },
  taskActiveButton: {
    width: '80%',
    height: 40,
    margin: 'auto',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderWidth: 0,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  taskColumn: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  }, 
  // Notifications styles
  notificacionContainer: {
    width: '100%',
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 5,
    justifyContent: (Metrics.screenWidth <= 600 ? 'flex-end' : 'center'),
  },
  notificationData: {
    width: (Metrics.screenWidth <= 600 ? '85%' : '90%'),
    maxWidth: 300,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    paddingLeft: (Metrics.screenWidth <= 600 ? 30 : 35),
  },
  notificationTitle: {
    marginTop: 5,
    fontSize: (Metrics.screenWidth <= 600 ? 15 : 20),
    color: Colors.black,
    fontWeight: 'bold',
    lineHeight: (Metrics.screenWidth <= 600 ? 20 : 25),
  },
  notificationSubtilte: {
    fontSize: (Metrics.screenWidth <= 600 ? 13 : 18),
    color: Colors.black,
    marginTop: 3,
    lineHeight: (Metrics.screenWidth <= 600 ? 20 : 25),
    paddingBottom: 10,
  },
  notificacionIcon: {
    fontSize:(Metrics.screenWidth <= 600 ? 20 : 25),
    lineHeight:30,
    position: 'absolute',
    left: 0,
    top: 0, 
  },
  notificationObservationsText: {
    backgroundColor: Colors.white,
    margin: 20,
    borderRadius: 20,
    paddingLeft:15,
  },
  // Signature styles
  SignatureBodyStyle: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
  },
  SignatureIconElem: {
    position: 'absolute',
    fontSize: 25,
    color: Colors.white,
    top: 10,
    left: 13,
  },
  SignatureLine: {
    marginTop: 7,
    marginBottom: 7,
    marginRight: 5,
  },
  SignatureText1: {
    fontSize: 17,
    fontFamily: 'gotham-bold',
    color: Colors.white
  },
  SignatureText2: {
    fontSize: 15,
    color: Colors.white
  },
  SignatureIcons: {
    marginTop: 0,
    justifyContent: 'space-around',
    width:'30%',
    marginLeft: 'auto',
  },
  SignatureLineIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  SignatureLineIcon: {
    fontSize: 15,
    lineHeight: 30,
    color: Colors.white
  },
  newSignature: {
    margin: 20,
    marginLeft: 'auto',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: Colors.black,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newSignatureIcon: {
    fontSize:30,
  },
  // New signature styles
  newSignatureContainer: {
    height: '100%',
    minHeight: 400,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.greenStart,
    textAlign: 'center',
    margin: '5%',
    marginBottom: 0,
  },
  newSignatureTitle : {
    fontSize: 22,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'gotham-bold',
    marginTop: 15,
  },
  newSignatureCanvas: {
    width: '80%',
    backgroundColor: Colors.white,
    height: 130,
    borderRadius: 10,
    margin: 'auto',
    marginTop: 10,
    paddingLeft: 10,
  },
  newSignatureInput: {
    width: '80%',
    backgroundColor: Colors.white,
    height: 30,
    borderRadius: 10,
    margin: 'auto',
    marginTop: 10,
    paddingLeft: 10,
  },
  newSignatureFooter: {
    marginTop: 40,
    marginBottom: 30,
  },
  // Chat Styles
  chatContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  chatView: {
    height: Metrics.screenHeight / 2,
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  auxChat: {
    width: '100%',
    maxWidth: 250,
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: Colors.greenStart,
    marginLeft: 20,
    marginRight: 'auto',
    padding: 7,
    marginTop: 5,
    marginBottom: 5,
  },
  arrowAux: {
    position: 'absolute',
    top: 0,
    left: -15,
  },
  userChat: {
    width: '100%',
    maxWidth: 250,
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: Colors.userCardStart,
    marginRight: 20,
    marginLeft: 'auto',
    padding: 7,
    marginTop: 5,
    marginBottom: 5,
  },
  arrowUser: {
    position: 'absolute',
    top: 0,
    right: -15,
  },
  auxChatText: {
    color: Colors.white,
  },
  userChatText: {
    color: Colors.white,
  },
  chatInputContainer: {
    flexDirection: 'row',
    width:'100%',
    justifyContent: (Metrics.screenWidth <= 600 ? 'space-around' : 'center'),
    alignItems: 'center',
    backgroundColor: Colors.orangeStart,
    marginTop: 10,
  },
  newChatInput: {
    backgroundColor: Colors.white,
    height: 80,
    width: 200,
    borderRadius: 10,
    margin: 15,
    padding: 10,
  },
  chatButton: {
    width: 100,
    height: 40,
    margin: 'auto',
    alignSelf: 'center',
    backgroundColor: Colors.userCardStart,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  // Float categorie selector stiles
  categoriePickerButton:{ 
    width: (Metrics.screenWidth <= 600 ? 150 : 200), 
    color: 'white',
    fontSize: (Metrics.screenWidth <= 600 ? 15 : 20),
    padding: 5,
    paddingLeft: 15,
    alignItems: 'center',
  },
  categorieFloatSection:{
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex: 100,
    backgroundColor: Colors.menuBackground,
    opacity: 0.9,
    alignItems: 'center',
  },
  categorieHeaderText: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 7,
    width: '40%',
  },
  CategorieHide: {
    right:'-120%',
  },
  CategorieShow: {
    right:0,
  },
  categoriesLinks:{
    color: Colors.white,
    paddingTop:7,
    paddingBottom:7,
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: (Metrics.screenWidth <= 600 ? 190 : 250),
    marginRight: 10,
  },
  categoriesLinksText: {
    fontSize: (Metrics.screenWidth <= 600 ? 20 : 25),
    color: Colors.white,
    width: '100%',
    flexWrap: 'wrap',
    borderColor: 'transparent',
    borderBottomColor: Colors.white,
    borderWidth: 1,
  },
});
