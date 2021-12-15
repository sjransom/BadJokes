import React from 'react'
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'

import { styles } from './styles'
import colours from '../assets/colours'
import Icon from 'react-native-vector-icons/Ionicons'

import Joke from '../components/Joke'

Icon.loadFont()

const jokes = [
  {
    id: 1,
    text: "What's the best thing about Switzerland? \nI don't know but the flag is a big plus"
  },
  {
    id: 2,
    text: "Hear about the new restaurant called Karma?. \nThere's no menu: you get what you deserve."
  }
]

export const SavedJokes = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        { justifyContent: 'flex-start', backgroundColor: colours.accent }
      ]}>
      <View style={styles.headerWrapper}>
        <Text style={styles.savedJokesHeader}>Saved Jokes</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Welcome')
          }}>
          <Icon name="close-outline" size={36} color={colours.primary} />
        </Pressable>
      </View>

      <View style={styles.jokesWrapper}>
        {jokes.map(joke => (
          <Joke key={joke.id} text={joke.text} />
        ))}
      </View>
    </View>
  )
}

export default SavedJokes
