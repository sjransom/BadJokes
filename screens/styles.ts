import { StyleSheet } from 'react-native'
import colours from '../assets/colours'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: 'space-between',
    backgroundColor: colours.primary
  },
  headerWrapper: {
    paddingTop: 20
  },
  nextButton: {
    backgroundColor: colours.secondary,
    borderRadius: 25
  },
  buttonText: {
    color: colours.primary,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Palanquin-SemiBold',
    paddingVertical: 8
  }
})
