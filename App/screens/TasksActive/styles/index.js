import {  StyleSheet } from 'react-native';
import { Colors, Metrics, Images } from './../../../themes';

export const TasksActiveStyles = {
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
  spaceElement: {
    justifyContent: 'space-around',
  },
  taskActiveContainer: {
    width: '100%',
    maxWidth: '94%',
    margin: '3%',
    marginTop: 15,
    borderRadius: 5,
    minHeight: (Metrics.screenWidth <= 600 ? Metrics.screenHeight - 220 : Metrics.screenHeight - 300),
    flex: 1,
    flexGrow: 1,
    backgroundColor: Colors.greenStart,
    textAlign: 'center',
  },
  buttonTitle: {
    color:'black', 
    fontSize: (Metrics.screenWidth <= 600 ? 13 : 20),
    padding: 5
  },
  taskActiveButton: {
    width: '80%',
    height: 40,
    margin: 'auto',
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderWidth: 0,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  taskColumn: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  }, 
  surveyIconStyles: {
    padding:15,
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 55 : 65),
  },
  surveyBox: {
    width: '100%',
    maxWidth: 300,
  },
  surveyObservations: {
    fontSize: (Metrics.screenWidth <= 600 ? 17 : 25),
    color: Colors.white,
    textAlign: 'left',
    marginTop: 0,
    fontWeight: 'bold',
    fontFamily: 'gotham-bold',
  },
  surveyObservationsText: {
    backgroundColor: Colors.white,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
};