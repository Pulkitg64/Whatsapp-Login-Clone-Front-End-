import React , {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Picker} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const PhoneNumber = () => {
	const [selectedValue, setSelectedValue] = useState("+94");
	
	//var data = [["+91", "+92", "+93", "+94"]]
   return(
   	<View style={styles.lbg}>
   	<Text style={styles.text1}>WhatsApp Messenger <Text>{selectedValue} </Text></Text>
   	<Text style={styles.text2}>Enter your mobile number to Login or Register</Text>
   	<View style={styles.phno} >
	<View style = {styles.dropdown}>
	<RNPickerSelect
			onValueChange={function(value){ 
				setSelectedValue(value)
			}}
		
            items={[
                { label: '+91', value: '+91' },
                { label: '+92', value: '+92' },
                { label: '+93', value: '+93' },
            ]}
        />
	</View>
   	<TextInput 
    placeholder="Your Mobile Number"
	keyboardType={'numeric'}
	
   	style={styles.text4}/>
	
	   </View>
   	</View>
	);
};

const styles=StyleSheet.create({
	dropdown:{
		width: 80,
		height: 50,
		borderWidth: 1,
		borderRadius : 5,
		borderColor : '#dcdcdc',
	
	},

	lbg : {
		backgroundColor : '#ffffff',
		marginTop : 10,
		marginLeft : 10,
		marginRight : 10,
		borderTopLeftRadius : 5,
		borderTopRightRadius : 5
	},
	text1 : {
		fontWeight : 'bold',
		marginTop : 22,
		marginLeft : 20,
		marginRight : 10,
		fontSize : 20
	},
	text2 : {
		marginTop : 3,
		marginLeft : 20,
		marginRight : 10,
		marginBottom : 7,
		fontSize : 14
	},
	phin : {
		marginLeft : 40
	},
	text3: {
      fontSize: 18,
      fontWeight: '900',
      margin : 8
	},
	icon : {
		marginTop: 13,
		marginRight: 10
	},
	text4 :
	{   
		alignItems: 'flex-end',
		fontSize: 18,
		paddingLeft: 10,
		borderWidth : 1,
		marginLeft: 10,
		marginRight : 10,
		paddingRight:20,
		borderRadius : 5,
		borderColor : '#dcdcdc'
	},
	phno : {
		flexDirection : 'row',
		marginTop : 20,
		justifyContent : 'flex-start',
		marginLeft: 20
	},
	 container: {
		 //flex : 1,
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		//width: 0,
    borderWidth: 1,
		borderColor: '#dcdcdc',
		borderRadius:5
  }
});

export default PhoneNumber;