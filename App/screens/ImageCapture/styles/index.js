import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from './../../../themes';

export const ImageCaptureStyles = {
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
  mainScreenContainer: {
    flex: 1,
    height: '100%',
    position: 'relative',
  },
  imageCaptureHeader: {
    backgroundColor: Colors.black,
    height: 'auto',
  },
  imageCaptureBodyContainer:{
    flex: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: Colors.greenStart,
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
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  imageCaptureText: {
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 5,
    color: Colors.black,
    paddingLeft: 10,
    marginBottom: 50,
  },
  surveyIconStyles: {
    padding:15,
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 55 : 65),
  },
};