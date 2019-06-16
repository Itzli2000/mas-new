import {  StyleSheet } from 'react-native';
import { Colors, Metrics } from './../../../themes';

export const NewSignatureStyles = {
  row:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  newSignatureContainer: {
    flex: 1,
    minHeight: '100%',
    borderRadius: 5,
    backgroundColor: Colors.greenStart,
    textAlign: 'center',
    margin: '5%',
  },
  newSignatureTitle : {
    fontSize: 22,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: 'gotham-bold',
    marginTop: 15,
    lineHeight: 25,
  },
  newSignatureCanvas: {
    width: '80%',
    backgroundColor: Colors.white,
    height: 130,
    borderRadius: 5,
    margin: 'auto',
    marginTop: 10,
    paddingLeft: 10,
  },
  newSignatureInput: {
    width: '80%',
    backgroundColor: Colors.white,
    height: 30,
    borderRadius: 5,
    margin: 'auto',
    marginTop: 10,
    paddingLeft: 10,
  },
  newSignatureFooter: {
    marginTop: 40,
    marginBottom: 30,
  },
  surveyIconStyles: {
    padding:15,
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 55 : 65),
  },
};