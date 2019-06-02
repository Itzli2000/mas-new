
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
  // Signature styles
  // New signature styles
  // Chat Styles
  // Float categorie selector stiles
});
