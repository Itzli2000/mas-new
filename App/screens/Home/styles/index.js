import {  StyleSheet } from 'react-native';
import { Colors, Metrics } from './../../../themes';

export const HomeStyles =  StyleSheet.create({
  fullCardTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardIconStyles: {
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 33 : 30),
    lineHeight: (Metrics.screenWidth <= 600 ? 35 : 32),
    marginLeft: 5,
  },
  fixedIcon: {
  },
  cardTitleStyles: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft:10,
    fontFamily: 'gotham-bold',
    color: Colors.white,
    fontSize: (Metrics.screenWidth <= 600 ? 14 : 20),
    lineHeight: (Metrics.screenWidth <= 600 ? 20 : 32),
    minHeight: 30,
  },
	homeCardInnerColumn: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingBottom: (Metrics.screenWidth <= 600 ? 5 : 15),
	},
	homeCardInnerColumnLeft: {
		width: '55%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
	},
	homeCardInnerColumnRight: {
		width: '45%',
    justifyContent: 'space-around',
    alignItems: 'center',
	},
	homeCardInnerFlatItem: {
		padding: 5,
		fontSize: (Metrics.screenWidth <= 600 ? 13 : 15),
		height: 30,
		color: '#000',
	},
	homeCardBody: {
    flex: 1,
		fontSize: 14,
    marginTop: 5,
    paddingTop: 10,
    marginBottom: 5,
		fontFamily: 'gotham-regular',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		color: Colors.white,
	},
  userCardfloatMenu:{
    width:'100%',
    height:'100%',
    position:'absolute',
    zIndex: 100,
    backgroundColor: Colors.menuBackground,
    opacity: 0.9,
    alignItems: 'flex-start',
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