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

});

export const FullCardComponentStyles =  StyleSheet.create({
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
  screenBackImage: {
    width: '100%', 
    height: '100%',
  },
  greenStart: {color:Colors.greenStart},
  greenStop: {color:Colors.greenStop},
});

export const NotificationsCardStyles =  StyleSheet.create({

});

export const ScreenContainerStyles =  StyleSheet.create({

});

export const SignatureStyles =  StyleSheet.create({

});

export const SplashScreenStyles =  StyleSheet.create({

});

export const SubcategoriesSelectorStyles =  StyleSheet.create({

});

export const TransparentCardStyles =  StyleSheet.create({

});

export const UserCardStyles =  StyleSheet.create({
  screenWidth: {
    width: Metrics.screenWidth,
  },
  screenHeight: {
    height: Metrics.screenHeight,
  },
  mainScrollContainer:{
    backgroundColor:Colors.white,
    marginTop: (Metrics.screenWidth <= 600 ? 80 : 100),
    position: 'relative',
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
    height: (Metrics.screenWidth <= 600 ? 80 : 100),
    paddingTop: (Metrics.screenWidth <= 600 ? 10 : 20),
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
    width: '100%',
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
  userDemo: Images.userDemo,
});

