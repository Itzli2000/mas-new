import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from './../../../themes';

export const VisitsMapStyles = {
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
  imageCaptureHeader: {
    backgroundColor: Colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageCaptureHeaderText: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 15,
  },
  mapContainerSection: {
    flex: 1,
    marginTop: 0,
    backgroundColor: Colors.userCardStart,
    justifyContent:'center',
    alignItems:'center',
  },
  mapView: {
    height: 200, 
    width: '100%',
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
  surveyBox: {
    width: '100%',
    maxWidth: 300,
  },
  surveyObservations: {
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 25),
    color: Colors.white,
    textAlign: 'left',
    marginTop: 15,
    fontWeight: 'bold',
    fontFamily: 'gotham-bold',
  },
  surveyObservationsText: {
    backgroundColor: Colors.white,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
  },
  surveyIconStyles: {
    padding:15,
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 55 : 65),
  },
};