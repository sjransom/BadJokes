import React from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'

import { styles } from './styles'
import FetchData from '../components/FetchData'
import colours from '../assets/colours'
// import Feather from 'react-native-vector-icons/Feather'

// Feather.loadFont()

export const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          {/* <Feather name="heart" size={24} /> */}
          <Text>Header</Text>
        </View>
      </SafeAreaView>

      {/* Joke */}
      <View>
        <FetchData />
      </View>

      {/* Actions */}
      <View>
        <Pressable
          style={({ pressed }) => [
            styles.nextButton,
            {
              backgroundColor: pressed ? colours.accent : colours.secondary
            }
          ]}>
          <Text style={styles.buttonText}>Generate Next</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Home
