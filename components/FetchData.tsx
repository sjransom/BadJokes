import React from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'

import colours from '../assets/colours'

interface Props {
  data: any
  isLoading: boolean
}

const Fetch: React.FC<Props> = ({ data, isLoading }) => {
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.text}>
          {data && data.jokes ? data.jokes[0] : 'No jokes :('}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontFamily: 'Palanquin-SemiBold',
    color: colours.accent
  }
})

export default Fetch
