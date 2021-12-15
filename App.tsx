import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

type Data = {
  jokes: [string]
}

const App: React.FC = () => {
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
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>Bad Jokes</Text>
        </View>
        <View>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Text>{data?.jokes[0]}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
