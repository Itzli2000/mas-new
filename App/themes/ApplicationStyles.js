
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
  // Full card transparent styles
  
  // Visit screen styles
  // Capture image screen
  // Map screen
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
  // Notifications styles
  // Signature styles
  // New signature styles
  // Chat Styles
  // Float categorie selector stiles
});
