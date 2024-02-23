import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function PasswordItem({ data }) {
  const [visible, setVisible] = useState(false);
 
  const [password] = useState(data);

  function toggleVisibility() {
    
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <Pressable onLongPress={() => removePassword(data)}>
        <Text style={styles.text}>{visible ? password : ''}</Text>
      </Pressable>

      <TouchableOpacity onPress={toggleVisibility}>
        <Ionicons name={visible ? 'eye-off' : 'eye'} size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0e0e',
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});