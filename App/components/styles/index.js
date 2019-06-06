import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from '@bm-mas-themes';

export const CardComponentStyles =  StyleSheet.create({
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
  greenStart: {color:Colors.greenStart},
  greenStop: {color:Colors.greenStop},
  menuIconImage: Images.menuIcon,
});

export const CategoriesSelectorStyles =  StyleSheet.create({
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

export const FullCardComponentStyles =  StyleSheet.create({
  fullCardContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
  fullCardContainerStyle: {
    width: '100%',
    maxWidth: (Metrics.screenWidth <= 600 ? '93%' : 650),
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    minHeight: 130,
  },

  fullCardTitleContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    margin: 'auto',
    marginTop:20,
  },
  cardIconStyles: {
    paddingLeft: 10,
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 30 : 40),
  },
  cardTitleStyles: {
    paddingLeft:10,
    fontFamily: 'gotham-bold',
    color: Colors.white,
    fontSize: 17,
    lineHeight: 17,
  },
  cardBodyStyleRow: {
    padding: 10,
    paddingTop: 0,
    width: '100%',
    flex: 1,
    fontFamily: 'gotham-regular',
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  cardBodyStyleColum: {
    padding: 10,
    paddingTop: 0,
    width: '100%',
    flex: 1,
    fontFamily: 'gotham-regular',
    flexWrap: 'wrap',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  fullCardBody: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.white,
    backgroundColor: 'red'
  },
  screenBackImage: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenStart: {color:Colors.greenStart},
  greenStop: {color:Colors.greenStop},
});

export const NotificationsCardStyles =  StyleSheet.create({
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
  screenBackImage: {
    width: '100%', 
    height: '100%',
  },
  greenStart: {color:Colors.greenStart},
  greenStop: {color:Colors.greenStop},
});

export const ScreenContainerStyles =  StyleSheet.create({
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
  start:{color: Colors.middleWhite},
  stop: {color: Colors.userCardStop},
});

export const SignatureStyles =  StyleSheet.create({
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
  screenBackImage: {
    width: '100%', 
    height: '100%',
  },
  cardBackgorund: {
    justifyContent: 'center',
  },
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
  start: {color:Colors.greenStart},
  stop: {color:Colors.greenStop},
});

export const SplashScreenStyles =  StyleSheet.create({

});

export const SubcategoriesSelectorStyles =  StyleSheet.create({
  column:{
    flexDirection: 'column',
  },
  row:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
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
  menuIconsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (Metrics.screenWidth <= 600 ? 30 : 40),
    height: (Metrics.screenWidth <= 600 ? 30 : 40),
  },
  menuIcons:{
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 25),
    color: Colors.white,
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
  cardfloatMenuData: {
    width: '85%',
    minWidth: (Metrics.screenWidth <= 600 ? 200 : 400),
    maxWidth: (Metrics.screenWidth <= 600 ? 300 : 500),
    overflow: 'hidden',
  },
  imageCaptureHeader: {
    backgroundColor: Colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },
  categorieHeaderText: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 7,
    width: '40%',
  },
  searchBarContainer: {
    backgroundColor: 'transparent', 
    borderWidth: 0, 
    borderBottomColor: 'transparent', 
    width: '60%', 
    borderTopColor: 'transparent'
  },
  searchInputContainer: {
    backgroundColor: 'rgba(255,255,255,1)', 
    borderWidth: 0, 
    borderColor: 'transparent', 
    borderRadius: 10, 
    marginLeft: 'auto', 
    marginRight: 'auto'
  },
});

export const TransparentCardStyles =  StyleSheet.create({
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
  screenBackImage: {
    width: '100%', 
    height: '100%',
  },
});

export const UserCardStyles =  StyleSheet.create({
  screenWidth: {
    width: Metrics.screenWidth,
  },
  screenHeight: {
    height: Metrics.screenHeight,
  },
  MenuHide: {
    left:'-120%',
  },
  MenuShow: {
    left:0,
  },
  fixScreen: {
    maxHeight: Metrics.screenHeight,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  mainScrollContainer:{
    backgroundColor:Colors.white,
    marginTop: (Metrics.screenWidth <= 600 ? 70 : 100),
    position: 'relative',
  },
  mainScrollContent:{
    flexGrow: 0, 
    justifyContent: 'flex-start'
  },
  row:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  column:{
    flexDirection: 'column',
  },
  userCardTopBar: {
    minHeight: (Metrics.screenWidth <= 600 ? 80 : 100),
    width: '100%',
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  topIcons: {
    position: 'absolute',
    height: (Metrics.screenWidth <= 600 ? 70 : 100),
    paddingTop: (Metrics.screenWidth <= 600 ? 20 : 20),
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.userCardStart,
  },
  menuIconContainer:{
    width: (Metrics.screenWidth <= 600 ? 40 : 50), 
    height: (Metrics.screenWidth <= 600 ? 40 : 50),
    marginRight: 10,
    marginRight: 'auto',
    marginLeft: 10,
  },
  userCardfloatMenu:{
    width:'100%',
    height:(Metrics.screenWidth <= 600 ? Metrics.screenHeight - 70 : Metrics.screenHeight - 100),
    position:'absolute',
    top: (Metrics.screenWidth <= 600 ? 70 : 100),
    zIndex: 100,
    backgroundColor: Colors.menuBackground,
    opacity: 0.9,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }, 
  userCardPhotoContainer:{
    width: (Metrics.screenWidth <= 600 ? 110 : 130),
    height: (Metrics.screenWidth <= 600 ? 110 : 130),
    justifyContent:'center',
    alignItems: 'center',
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
    fontFamily: 'gotham-regular',
    fontSize: (Metrics.screenWidth <= 600 ? 12 : 15),
    color: Colors.white,
    textAlign: 'center',
  },
  userCardUserName: {
    marginBottom: (Metrics.screenWidth <= 600 ? 5 : 10),
    fontSize: (Metrics.screenWidth <= 600 ? 26 : 20),
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'gotham-bold',
  },
  userCardUserSubtitle: {
    marginTop: (Metrics.screenWidth <= 600 ? 5 : 10),
    fontSize: (Metrics.screenWidth <= 600 ? 14 : 19),
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'gotham-bold',
  },
  userCardMenuIcon: {
    fontSize: (Metrics.screenWidth <= 600 ? 38 : 50),
    color: Colors.white,
  },
  userCardImageLogo: {
    resizeMode: 'contain',
    width: (Metrics.screenWidth <= 600 ? 60 : 70),
    height: (Metrics.screenWidth <= 600 ? 60 : 70),
    marginRight: 10,
  }, 
  cardTitleIconElem: {
    width: (Metrics.screenWidth <= 600 ? 38 : 50),
    height: (Metrics.screenWidth <= 600 ? 38 : 50),
    marginRight: 10,
    marginLeft: 10,
  },
  userCardNavIcon: {
    resizeMode: 'contain',
    width: (Metrics.screenWidth <= 600 ? 38 : 50),
    height: (Metrics.screenWidth <= 600 ? 38 : 50),
    marginRight: 10,
  },
  menuIconImage: Images.menuIcon,
  logoImage: Images.logo,
  qrImage: Images.qr,
  locationImage: Images.location,
  notificationImage: Images.notification,
  userDemoImage: Images.userDemo,
  userCardStart: {color:Colors.userCardStart}, 
  userCardStop: {color:Colors.userCardStop},
});

export const UserMenu =  StyleSheet.create({
  screenWidth: {
    width: Metrics.screenWidth,
  },
  screenHeight: {
    height: Metrics.screenHeight,
  },
  row:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  column:{
    flexDirection: 'column',
  },
  MenuHide: {
    left:'-120%',
  },
  MenuShow: {
    left:0,
  },
  cardfloatMenuData: {
    marginLeft: (Metrics.screenWidth <= 380 ? 20 : 30),
    minWidth: (Metrics.screenWidth <= 600 ? 230 : 400),
    maxWidth: (Metrics.screenWidth <= 600 ? 300 : 500),
  },
  menuUserData:{
    paddingTop: 15,
    borderBottomColor: Colors.orange,
    borderBottomWidth: 1,
    paddingBottom:7,
    marginBottom:5,
    width:'94%',
    marginLeft: '3%',
  },
  menuUserPhotoContainer: {
    width: (Metrics.screenWidth <= 600 ? 70 : 100),
    height: (Metrics.screenWidth <= 600 ? 70 : 100),
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  menuUserPhoto: {
    width: '100%',
    height: '100%',
  },
  menuUserDataContainer:{
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    marginLeft:15,
  },
  menuUserUserName: {
    marginTop: (Metrics.screenWidth <= 600 ? 10 : 15),
    fontSize: (Metrics.screenWidth <= 600 ? 24 : 25),
    color: Colors.white,
    textAlign: 'left',
    fontFamily: 'gotham-bold',
  },
  menuUserUserSubtitle: {
    marginTop: (Metrics.screenWidth <= 600 ? 0 : 5),
    fontSize: (Metrics.screenWidth <= 600 ? 10 : 19),
    color: Colors.white,
    textAlign: 'right',
    fontFamily: 'gotham-regular',
  },
  menuLinks:{
    color: Colors.white,
    paddingTop:4,
    paddingBottom:4,
    marginLeft: (Metrics.screenWidth <= 600 ? 15 : 20),
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
  collapsibleMenu: {
    marginBottom: 10,
  },
  userDemo: Images.userDemo,
});

