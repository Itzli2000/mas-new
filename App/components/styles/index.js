
// 1ro importar react y/o componentes nativos
import {  StyleSheet } from 'react-native';

//2do importar themes
import { Colors, Metrics, Images } from '@bm-mas-themes';

export const CardComponent =  StyleSheet.create({

    
	
});



export const CategoriesSelector =  StyleSheet.create({

	
	
});




export const FullCardComponent =  StyleSheet.create({

	
	
});




export const NotificationsCard =  StyleSheet.create({

	
	
});


export const UserCardStyles =  StyleSheet.create({
  flex: {
    flex: 1
  },
  screenWidth: {
    width: Metrics.screenWidth,
  },
  screenHeight: {
    width: Metrics.screenHeight,
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
    width: Metrics.screenHeight,
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
  userDemo: Images.userDemo,
});

