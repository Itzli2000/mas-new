import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from './../../../themes';

export const VisitsStyles = {
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
  floatRight: {
    marginLeft: 'auto',
    width: '80%',
  },
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
  transparentCardBody: {
    fontSize: 14,
    fontFamily: 'gotham-bold',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: Colors.black,
    margin: 0,
  },
  transparentCardColumn: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  visitButton: {
    height: 'auto',
    margin: 'auto',
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonTitle: {
    fontSize: 15,
    lineHeight: 16,
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
    alignSelf: 'flex-end',
  },
  visitCompleteIcon: {
    fontSize: 22,
    lineHeight: 40,
    padding: 0,
    margin: 0,
  },
  colorGray: { color: Colors.gray },
};