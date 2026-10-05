import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  const [fm, setFm] = useState('D');
  const [dm, setDm] = useState("D");
  const [ooad, setOoad] = useState("D");
  const [ma, setMa] = useState("D");
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 30;
  var totalGradeScores = 0;
  
  function clickMe(){
    alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone
    //get the student's gradePoints for SSWD, multiply it by the credits 
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+sswd)
    var sswd_cr = gradePoints[sswd] * credits;
    
    //get the student's gradePointsfor Ob, multiply it by the credits
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+ob)
   var ob_cr = gradePoints[ob] * credits;
   var fm_cr = gradePoints[fm] * credits;
   var dm_cr = gradePoints[dm] * credits;
   var ooad_cr = gradePoints[ooad] * credits;
   var ma_cr = gradePoints[ma] * credits;


    //calculate the gpa as the totalsGradeScores divided by the totalPossibleCredits
    //Output the calculated GPA result to the user using an alert (you must concatenate the gpa)
totalGradeScores = sswd_cr + ob_cr  + fm_cr + dm_cr + ooad_cr + ma_cr; 
  gpa = totalGradeScores/ totalPossibleCredits ; 
  alert("GPA "+gpa);

  }

const styles = StyleSheet.create({
  container: {
    padding: "5%",
  },

  row: {
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
    padding: "2%",
  },

  label: {
    marginRight: "5%",
  },

  textInput: {
    marginLeft: "5%",
    padding: "2%",
  }
});


return (
    <SafeAreaView style={styles.container}>
      <View><Text style={{flexDirection: "row", fontWeight: "bold", fontSize: 24, textAlign:"center", marginTop: "%10"}}>GPA Calculator</Text></View>


      <View style={styles.row}>
        <Text style={styles.label}>SSWD</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setSswd}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Organisational Behaviour</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setOb}/>
      </View>
      <View style={styles.row} >
        <Text style={styles.label}>Financial Management</Text>
        <TextInput styel={styles.textInput} placeholder="Grade" onChangeText={setFm}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Digital Marketing</Text>
        <TextInput style={styles.textInput}   placeholder="Grade" onChangeText={setDm}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Object Oriented Analysis & Design</Text>
        <TextInput  style={styles.textInput} placeholder="Grade" onChangeText={setOoad}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mobile Applications</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={setMa}/>
      </View>
      <View >
        <Button title="submit" onPress={clickMe}/>
      </View>
    </SafeAreaView>
  );
}
