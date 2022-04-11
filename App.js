import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useState, useRef, useEffect} from 'react';

export default function App() {
  let [count, setCount] = useState(300)
  let minius = Math.floor(count/60);
  let seconds = count - minius * 60;
  let timerId= useRef()

  function handleStart() {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
  }

  function handlePause() {
    clearInterval(timerId.current)
  }

  function handleReset() {
    clearInterval(timerId.current);
    setCount(300);
  }

  useEffect(() => {
    if(count === 0) {
      clearInterval(timerId.current)
    }
    
  }, [count])

  return (
    
    <View style={styles.container}>
      <View>
        {seconds <10? <Text>0{minius}:0{seconds}</Text>: <Text>0{minius}:{seconds}</Text> }
        
      </View>

      <View style={styles.button}>
        <Button
          title='Start'
          onPress={handleStart}
        ></Button>
      </View>

      <View style={styles.button}>
        <Button
          title='Pause'
          onPress={handlePause}
        ></Button>
      </View>

      <View style={styles.button}>
        <Button
          title='Reset'
          onPress={handleReset}
        ></Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});
