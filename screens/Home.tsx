import React from 'react'
import { SafeAreaView, ScrollView, View, Text } from 'react-native'

import { styles } from './styles'
import FetchData from '../components/FetchData'

export const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>Home</Text>
          <FetchData />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
