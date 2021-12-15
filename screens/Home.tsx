import React, { useState } from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'

import { styles } from './styles'
import FetchData from '../components/FetchData'
import colours from '../assets/colours'
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont()

export const Home = ({ navigation }) => {
  const [like, setLike] = useState(false)

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Icon name="star" size={52} color={colours.secondary} />
          <Pressable
            onPress={() => {
              navigation.navigate('Welcome')
            }}>
            <Icon name="close-outline" size={36} color={colours.secondary} />
          </Pressable>
        </View>
      </SafeAreaView>

      {/* Joke */}
      <View style={styles.jokeWrapper}>
        <FetchData />
        <Pressable
          onPress={() => {
            setLike(!like)
          }}>
          <Icon
            name={like ? 'star' : 'star-outline'}
            size={36}
            color={colours.secondary}
          />
        </Pressable>
      </View>

      {/* Actions */}
      <View>
        <Pressable
          style={({ pressed }) => [
            styles.button,
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
