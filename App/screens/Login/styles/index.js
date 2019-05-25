
// 1ro importar react y/o componentes nativos
import {  StyleSheet } from 'react-native';

//2do importar themes
import { Colors, Metrics, Images } from '@bm-mas-themes';


export const loginStyles =  StyleSheet.create({

	checkOptionContainer: {
		width: '100%',
		margin: 'auto',
		fontFamily: 'gotham-regular',
		flexDirection: 'row',
		flexWrap: 'nowrap', 
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
		paddingTop: 12,
	},
	checkOptionInlineText: {
		width: '70%',
		fontSize: 14,
		paddingLeft:10,
		textAlign: 'justify',
		alignSelf: 'center',
		color: Colors.white,
	},
	checkOptionInlineSwitch: {
		width: '20%',
		paddingRight: 30,
		alignSelf: 'center',
		backgroundColor: 'red'
	},
	loginScrollViewContainer: {
		flexGrow: 0,
		width: '100%',
		minHeight: '100%',
		justifyContent: 'center',
	},
	loginContainer: {
		maxWidth: 350,
		width: '90%',
		alignSelf:'center'
	},
	loginImageLogo: {
		width: 140,
		height: 140,
		resizeMode: 'contain',
		marginTop: 20,
		marginBottom: 10,
		alignSelf: 'center', 
	},
	loginWelcomeText: {
		width: 300,
		fontSize: 15,
		lineHeight: 15,
		color: Colors.blueText,
		alignSelf: 'center',
		fontFamily: 'gotham-medium',
		textAlign: 'center',
	},
	loginPasswordFogotText: {
		fontSize: 19,
		fontFamily: 'gotham-regular',
		textAlign: 'center',
		color: Colors.white, 
		marginTop: 15,
		marginBottom: 20,
	},
	loginButton: {
		width: 200,
		margin: 'auto',
		alignSelf: 'center',
		backgroundColor: Colors.orange,
		borderRadius: 30,
		paddingLeft: 10,
		paddingRight: 10,
		marginTop: 20,
		marginBottom: 30,
	},
	loginButtonText: {
		width: '100%',
		fontFamily: 'gotham-bold',
		color:Colors.white,
		textAlign: 'center',
		fontSize: 20,
		lineHeight: 50,
	},
	loginFormContainer: {
		alignItems: 'center',
		alignContent: 'center',
	},
	loginFormInputElement: {
		flexDirection:'row',
		height: 40,
		maxWidth: 250,
		borderWidth: 1,
		borderColor: Colors.white,
		margin: 0,
		marginTop: 25,
		borderRadius: 5,
		padding: 0,
		overflow: 'hidden',
		backgroundColor: Colors.white,
	},
	loginFormInputContainer: {
		height: 40,
	},
	loginFormInputsContainer: {
		flex: 1,
		borderRadius: 15,
		borderColor: 'transparent',
	},
	loginFormInputs: {
		fontSize:20,
		lineHeight:15,
		fontFamily: 'gotham-bold',
		color: Colors.orangeText,
		textAlign: 'center', 
		backgroundColor: 'transparent',
		overflow: 'hidden'
	},
	loginLogo: Images.logo,
	colorOrange: {color: Colors.orange},
	colorInactive: {color:Colors.inactive},
	colorWhite: {color:Colors.white},
	colorBlack: {color:Colors.black},
	colorOrangeText: {color:Colors.orangeText},
});