import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CalculatorApp = () => {
  const [num1, setNum1] = useState(''); 
  const [num2, setNum2] = useState(''); 
  const [result, setResult] = useState(null); 


  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by 0',
  };

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    setResult(operations[operation](n1, n2)); 
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <View style={styles.container}>

      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Num 1" 
        value={num1} 
        onChangeText={setNum1} 
      />
      <TextInput 
        style={styles.input} 
        keyboardType="numeric" 
        placeholder="Num 2" 
        value={num2} 
        onChangeText={setNum2} 
      />


      {result !== null && <Text style={styles.result}>Result: {result}</Text>}

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('add')}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('subtract')}>
          <Text style={styles.buttonText}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('multiply')}>
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculation('divide')}>
          <Text style={styles.buttonText}>Divide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#f4f4f4' 
  },
  input: { 
    width: '80%', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 15, 
    borderRadius: 5, 
    paddingHorizontal: 10 
  },
  result: { 
    marginTop: 20, 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  buttons: { 
    width: '80%', 
    marginTop: 20 
  },
  button: {
    backgroundColor: '#4CAF50', 
    borderRadius: 10,            
    paddingVertical: 12,         
    marginBottom: 10,            
    alignItems: 'center',        
    justifyContent: 'center',    
  },
  buttonText: {
    color: '#fff',               
    fontSize: 16,                
    fontWeight: 'bold',          
  },
});

export default CalculatorApp;
