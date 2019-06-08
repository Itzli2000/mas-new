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
    fontSize: 17,
    fontFamily: 'gotham-bold',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: Colors.black,
    margin: 0,
  },
  transparentCardColumn: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  colorGray: { color: Colors.gray },
};