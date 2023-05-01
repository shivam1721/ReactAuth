import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, Image, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {navigation.navigate("Register")}

  const forgotPassword = () => {navigation.navigate("ForgotPassword")}

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }


  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 150, height: 150 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        
      </View>

      <Button
        title="Forgot Password?"
        //onPress={this.goToForgotPassword}
        onPress={forgotPassword}
        titleStyle={{
          color: '#ff0000'
        }}
        type="clear"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/*
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      */}
      <View style={styles.registerHereWrapper}>
                <Text style={styles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={(e) => navigation.navigate('Register')}>
                    <Text style={styles.registerHere}>Register Here!</Text>
                </TouchableOpacity>
            </View>
      </View>

      
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#ff0000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#ff0000',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#ff0000',
    fontWeight: '700',
    fontSize: 16,
  },
  noAccountText: {
    textAlign: 'center',
    color: '#888888'
},
registerHereWrapper: {
    marginTop: 120
},
registerHere: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: '400'
}
})