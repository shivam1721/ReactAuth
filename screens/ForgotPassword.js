import { StyleSheet } from "react-native";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from '../firebase'
//import Styles from "../styles/Styles";


const ForgotPassword = (props) => {
    const [email, setEmail] = useState("")
    
    

        auth
        .sendPasswordResetEmail(email)
        .then(() => {
            alert("Password reset email sent")
            console.log('Password reset email sent successfully');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
   
        });



    return (
        <View style={Styles.mainView}>
            {/* Logo image */}
            <View style={Styles.fsDisplay}>
                <Image
                    style={Styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={Styles.titleView}>Forgot Password?</Text>
            </View>

          {/* Forgot Password Text */}
            <View style={Styles.fsDisplay}>
              <Text style={Styles.forgotPasswordtxt}>Please enter the email associated with your account: </Text>
            </View>

            {/* Enter Email Box */}
            <View style={Styles.inputDisplay}>
                <View style={Styles.inputWrapper}>
                    <TextInput
                        style={Styles.inputBoxDisplay}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email Address"
                    />
                </View>
            </View>

            {/* Submit Button */}
            <View style={Styles.submitButtonWrapper}>
              <Pressable onPress={(e) => console.log("Submit Clicked!")}>
                    <Text style={Styles.submitText}>Submit</Text>
                </Pressable>
            </View>
            
        

            

        </View> 
    );
}
export default ForgotPassword;

const Styles = StyleSheet.create( {
    logo: {
        width: 80,
        height: 100,
        resizeMode: 'contain'
    },
    fsDisplay: {
        width: '100%',
        height: '26%',
        alignItems: 'center',
        position: 'relative'
    },
    mainView: {
        height: '100%',
        width: '100%',
    },
    titleView: {
        fontSize: 35,
        fontWeight: '300'
    },
    inputDisplay: {
        paddingRight: 40,
        paddingLeft: 40,
        width: '100%',
        height: 200,
        
        // backgroundColor: 'blue'
    },
    inputWrapper: {
        borderWidth: 0.2,
        borderColor: 'red',
        borderRadius: 10,
        width: 310,
        borderRadius: 15,
        marginTop: -80,
        backgroundColor: '#F9F9F9',
        
    },
    inputBoxDisplay: {
        height: 40,
        padding: 10,
        fontSize: 17,
        textAlign: 'center',
        
    },
    forgotPasswordtxt: {
        flex: 1,
        fontSize: 17,
        marginLeft: 50,
        marginRight: 50,
        color: '#393939',
        
    },
    forgotPasswordButtonWrapper: {
        marginTop: 20,
    },
    submitButtonWrapper: {
        backgroundColor: 'red',
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 5,
        marginTop:-30,
        
    },
    submitText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23
    },
   
})

