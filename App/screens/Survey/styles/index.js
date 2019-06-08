import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from './../../../themes';

export const SurveyStyles = {
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
  darkPicker: {
    backgroundColor: Colors.black,
    color: Colors.white,
    borderRadius:20,
    marginLeft:10,
  },
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
  colorWhite: {
    color: Colors.white,
  },
  filterIcon: Images.filterIcon,
  filterArrow: Images.arrow,
};