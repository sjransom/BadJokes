import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colours from '../assets/colours'

export const Joke = ({ text }) => {
  console.log('text', text)
  return (
    <View style={styles.jokeWrapper}>
      <Text style={styles.jokeText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  jokeWrapper: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: colours.secondary
  },
  jokeText: {
    color: colours.primary,
    fontFamily: 'Palenquin-Regular',
    fontSize: 20
  }
})

export default Joke
