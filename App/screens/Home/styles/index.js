import {  StyleSheet } from 'react-native';
import { Colors, Metrics } from './../../../themes';

export const HomeStyles =  StyleSheet.create({
	homeCardInnerColumn: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10,
	},
	homeCardInnerColumnLeft: {
		width: '60%',
	},
	homeCardInnerColumnRight: {
		width: '40%',
	},
	homeCardInnerFlatItem: {
		padding: 5,
		fontSize: (Metrics.screenWidth <= 600 ? 13 : 15),
		height: 30,
		color: '#000',
	},
	homeCardBody: {
		fontSize: 17,
		fontFamily: 'gotham-bold',
		alignItems: 'center',
		justifyContent: 'center',
		color: Colors.white
	},
  userCardfloatMenu:{
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex: 100,
    backgroundColor: Colors.menuBackground,
    opacity: 0.9,
    alignItems: 'center',
  },
  MenuHide: {
    left:'-120%',
  },
  MenuShow: {
    left:0,
  },
  screenWidth: {
    width: Metrics.screenWidth,
  },
  userCardStart: {color:Colors.userCardStart},
  userCardStop: {color:Colors.userCardStop},
  orangeStart: {color:Colors.orangeStart},
  orangeStop: {color:Colors.orangeStop},
  white: {color:Colors.white},
});