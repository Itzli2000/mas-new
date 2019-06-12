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
    minHeight: Metrics.screenHeight - 100,
    felx: 1,
  },
  photoON: {
    width: '100%',
    height: Metrics.screenHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  photoOff: {
    width: '100%',
    height: Metrics.screenHeight,
    position: 'absolute',
    bottom: 0,
    left: -Metrics.screenWidth,
  },
  imageCaptureHeader: {
    backgroundColor: Colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },
  captureIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow:'hidden',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
  },
  imageCaptureHeaderText: {
    color: Colors.white,
    fontSize: 20,
    marginLeft: 15,
  },
  imageCaptureBreadcrumb:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  imageCaptureIconContainer:{
    backgroundColor: Colors.orange,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  imageCaptureIcon:{
    fontSize: 25,
    lineHeight: 40,
    color: Colors.white,
  },
  imageCaptureIconText: {
    color: Colors.black,
    fontSize: 30,
    marginLeft: 10,
  },
  imageCaptureBodyContainer:{
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: Colors.orange,
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
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
  },
  imageCaptureText: {
    backgroundColor: Colors.white,
    margin: 10,
    borderRadius: 15,
    color: Colors.black,
    paddingLeft: 10,
    marginBottom: 50,
  },
};