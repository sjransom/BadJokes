import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text>Bad Jokes</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home
