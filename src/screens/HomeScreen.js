import React from 'react';
import {Text, View, StyleSheet,ScrollView} from 'react-native';
import PhoneNumber from '../components/PhoneNumber';
import NavigationComponent from '../components/NavigationComponent';

const HomeScreen = () => {
   return(
	   <ScrollView>
   	<View style={styles.container} >
   	<View style={styles.ubg} >
   	<Text style={styles.text} >WhatsApp</Text>
   	<PhoneNumber />
   	</View>
   	<View style={styles.lbg}>
   	<NavigationComponent content="Or connect with social account" nvgt="Password"/>
   	</View>
	</View>
	</ScrollView>
	);
};

const styles=StyleSheet.create({
	container: {
		flex: 1
	},
	ubg : {
		backgroundColor : '#465a65',
		flex : 2,
		justifyContent : 'space-between'
	},
	lbg : {
		backgroundColor : '#ffffff',
		flex: 3
	},
	text : {
		fontSize : 40,
		textAlign:'center',
		marginTop : 55,
		color : '#ffffff',
		fontWeight : 'bold'
	}
});

export default HomeScreen;