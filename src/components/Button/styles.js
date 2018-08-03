import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    height: 31,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  'button-outline': {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.small,
  },

  'text-outline': {
    color: colors.primary,
  },
});

export default styles;