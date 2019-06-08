import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from './../../../themes';

export const PriceListStyles = {
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
  categoriePickerButton:{ 
    width: (Metrics.screenWidth <= 600 ? 150 : 200), 
    color: 'white',
    fontSize: (Metrics.screenWidth <= 600 ? 15 : 20),
    padding: 5,
    paddingLeft: 15,
    alignItems: 'center',
  },
  homeFirstSection: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  homeCardIconPicker: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    marginRight: (Metrics.screenWidth <= 600 ? 10 : 15),
    justifyContent: 'center',
    alignItems: 'center',
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
  categorieFloatSection:{
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex: 100,
    backgroundColor: Colors.menuBackground,
    opacity: 0.9,
    alignItems: 'center',
  },
  CategorieHide: {
    right:'-120%',
  },
  CategorieShow: {
    right:0,
  },
  darkPicker: {
    backgroundColor: Colors.black,
    color: Colors.white,
    borderRadius:20,
    marginLeft:10,
  },
  filterIcon: Images.filterIcon,
  filterArrow: Images.arrow,
  orangeColor: { color: Colors.orange },
  orangeStart: { color: Colors.orangeStart },
  orangeStop: { color: Colors.orangeStop },
  userStart: { color: Colors.userCardStart },
  userEnd: { color: Colors.userCardStop },
  green: { color: Colors.green },
  redStart: { color: Colors.startRed },
  redEnd: { color: Colors.endRed },

};