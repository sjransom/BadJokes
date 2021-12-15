import React from 'react'
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'

import { styles } from './styles'
import colours from '../assets/colours'
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont()

export const Welcome = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        { justifyContent: 'flex-start', backgroundColor: colours.accent }
      ]}>
      <View style={styles.welcomeImageWrapper}>
        <Image source={require('../assets/images/welcome.png')} />
      </View>

      <View style={styles.appNameWrapper}>
        <Text style={styles.appNameText}>Bad Jokes</Text>
      </View>

      <View style={styles.actionsWrapper}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home')
          }}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? colours.accent : colours.secondary
            }
          ]}>
          <Text style={styles.buttonText}>Generate Jokes</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? colours.accent : colours.secondary
            }
          ]}>
          <Text style={styles.buttonText}>Play Game</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate('SavedJokes')
          }}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? colours.accent : colours.secondary
            }
          ]}>
          <Text style={styles.buttonText}>Saved Jokes</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Welcome
