import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text>Bad Jokes</Text>
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
