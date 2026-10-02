import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

import Logo from './components/Logo';

export default function App() {

  const [fname, setFname] = useState("Shannon");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("13 February 1991");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isValidEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

  function buttonClicked() {
  if (!isValidEmail(email)) {
    setEmailError("Please enter a valid email address");
    return;
  }
  setEmailError("");
  alert("Hello " + fname + " " + lname + ". Your Date of birth is " + dob + ". Email: " + email);
}

  return (
    <View style={styles.container}>
      <Logo />

      <TextInput placeholder="Enter your firstname" onChangeText={setFname} style={styles.input}/>
<TextInput placeholder="Enter your lastname" onChangeText={setLname} style={styles.input}/>
<TextInput placeholder="Enter your date of birth" onChangeText={setDob} style={styles.input}/>

<TextInput
  placeholder="Enter your email"
  onChangeText={setEmail}
  style={styles.input}
/>
{emailError ? <Text style={{color: 'red'}}>{emailError}</Text> : null}

<Text style={styles.text}>Hello {fname} {lname}. You were born on {dob}</Text>

<Button title="SUBMIT" onPress={buttonClicked}/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
justifyContent: 'center',
backgroundColor: '#fff',
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 10,
marginVertical: 8,
},
text: {
fontSize: 16,
marginVertical: 10,
},
});
