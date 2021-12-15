import React, { useEffect, useState } from 'react'

import { ActivityIndicator, Text, View } from 'react-native'
import colours from '../assets/colours'

type Data = {
  jokes: [string]
}

const Fetch: React.FC = () => {
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

  console.log(data)

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text
          style={{
            fontSize: 36,
            fontFamily: 'Palanquin-SemiBold',
            color: colours.accent
          }}>
          {data?.jokes[0]}
        </Text>
      )}
    </View>
  )
}

export default Fetch
