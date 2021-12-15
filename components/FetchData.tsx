import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

type Data = {
  jokes: [string]
}

const Fetch: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Data>()

  const [saved, setSaved] = useState<any[]>([])

  const getJokes = async () => {
    try {
      const response = await fetch(
        'https://z2aeyohis1.execute-api.eu-west-1.amazonaws.com/default/jokes'
      )
      const jokes = await response.json()
      setData(jokes)
      setSaved(oldArray => [jokes.jokes, ...oldArray])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {
      // error reading value
    }
  }

  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  storeData(saved)

  useEffect(() => {
    async function getSavedJokes() {
      await getData()
    }
    getSavedJokes()
    getJokes()
  }, [])

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text>{data && data.jokes ? data.jokes[0] : 'No jokes :('}</Text>
      )}
    </View>
  )
}

export default Fetch
