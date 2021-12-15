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
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  jokeWrapper: {
    marginBottom: 50
  },
  button: {
    backgroundColor: colours.secondary,
    borderRadius: 25,
    marginVertical: 10
  },
  buttonText: {
    color: colours.primary,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Palanquin-SemiBold',
    paddingVertical: 8
  },
  welcomeImageWrapper: {
    alignItems: 'center',
    marginTop: 100
  },
  appNameWrapper: {
    alignItems: 'center',
    marginTop: 50
  },
  appNameText: {
    fontFamily: 'Palanquin-Bold',
    fontSize: 48,
    color: colours.primary
  },
  actionsWrapper: {
    marginTop: 100
  },
  savedJokesHeader: {
    alignSelf: 'center',
    fontFamily: 'Palanquin-SemiBold',
    fontSize: 24
  },
  jokesWrapper: {
    marginTop: 20
  }
})
