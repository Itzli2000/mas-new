import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from './../../../themes';

export const TaskStyles = {
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
  darkPicker: {
    backgroundColor: Colors.black,
    color: Colors.white,
    borderRadius:20,
    marginLeft:10,
  },



  filterIcon: Images.filterIcon,
  filterArrow: Images.arrow,
  orangeStart: { color: Colors.orangeStart },
  orangeStop: { color: Colors.orangeStop },
  greenStart: { color: Colors.greenStart },
  greenEnd: { color: Colors.greenStop },
  redStart: { color: Colors.startRed },
  redEnd: { color: Colors.endRed },
};