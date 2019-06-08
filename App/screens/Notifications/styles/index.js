import {  StyleSheet } from 'react-native';
import { Colors, Metrics } from './../../../themes';

export const NotificationsStyles = {
  row:{
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
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
  notificacionContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingRight: 5,
    paddingLeft: 15,
    marginBottom: 5,
    paddingBottom: 10,
    justifyContent: 'center',
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  notificationData: {
    width: '100%',
    paddingLeft: (Metrics.screenWidth <= 600 ? 45 : 55),
  },
  notificationTitle: {
    marginTop: 5,
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 20),
    color: Colors.black,
    fontWeight: 'bold',
    lineHeight: (Metrics.screenWidth <= 600 ? 20 : 25),
  },
  notificationSubtilte: {
    fontSize: (Metrics.screenWidth <= 600 ? 13 : 18),
    color: Colors.black,
    marginTop: 3,
    lineHeight: (Metrics.screenWidth <= 600 ? 15 : 25),
    paddingBottom: 10,
    maxWidth: 300,
  },
  notificacionIcon: {
    fontSize:(Metrics.screenWidth <= 600 ? 22 : 25),
    lineHeight:30,
    position: 'absolute',
    left: 15,
    top: 0, 
  },
  notificationObservationsText: {
    backgroundColor: Colors.white,
    margin: 20,
    borderRadius: 20,
    paddingLeft:15,
  },
  colorGray: { color:Colors.gray },
  colorGreen: { color:Colors.greenStart },
  colorOrange: { color:Colors.orangeStart },
  colorRed: { color:Colors.startRed },
};