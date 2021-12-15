import React, { useEffect, useCallback, useState } from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'

import { styles } from './styles'
import FetchData from '../components/FetchData'
import colours from '../assets/colours'
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont()

export type Data = {
  jokes: [string]
}

export const Home = ({ navigation }: any) => {
  const [like, setLike] = useState(false)
  const [isLoading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Data>()

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://z2aeyohis1.execute-api.eu-west-1.amazonaws.com/default/jokes'
      )
      const jokes = await response.json()
      setData(jokes)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  const onPressGenerate = useCallback(() => {
    getMovies()
  }, [])

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
        <FetchData data={data} isLoading={isLoading} />
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
          onPress={onPressGenerate}
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
