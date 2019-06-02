import {  StyleSheet } from 'react-native';
import { Colors, Metrics } from './../../../themes';

export const SignatureStyles = {
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
  SignatureLine: {
    marginTop: 7,
    marginBottom: 7,
    marginRight: 5,
  },
  SignatureText1: {
    fontSize: 17,
    fontFamily: 'gotham-bold',
    color: Colors.white
  },
  SignatureText2: {
    fontSize: 15,
    color: Colors.white
  },
  SignatureIcons: {
    marginTop: 0,
    justifyContent: 'space-around',
    width:'30%',
    marginLeft: 'auto',
  },
  SignatureLineIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  SignatureLineIcon: {
    fontSize: 15,
    lineHeight: 30,
    color: Colors.white
  },
  newSignature: {
    margin: 20,
    marginLeft: 'auto',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: Colors.black,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newSignatureIcon: {
    fontSize:30,
  },
  userStart: { color: Colors.userCardStart },
  userStop: { color: Colors.userCardStop },
};