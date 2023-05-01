import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, Image, TextInput, TouchableOpacity, View, Button } from 'react-native'
import { auth } from '../firebase'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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

  
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
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
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.inputContainer}>
      <Text style={styles.titleView}>Welcome!</Text>
      <TextInput
          placeholder="FirstName"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="LastName"
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={styles.input}
        />
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerHereWrapper}>
                <Text style={styles.noAccountText}>Already have an account?</Text>
                <TouchableOpacity onPress={(e) => navigation.navigate('Login')}>
                    <Text style={styles.registerHere}>Login Here!</Text>
                </TouchableOpacity>
      </View>

      
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    textAlign: 'center',
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center'
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
  registerHereWrapper: {
    marginTop: 70
},
registerHere: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: '400'
}
})