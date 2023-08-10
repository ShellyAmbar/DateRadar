import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  DatePickerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  wrapper: {
    flexDirection: 'row',
  },
  scrollContainer: {
    flex: 1,
  },
  button: {
    width: '100%',
  },
  topOpacity: {width: '100%', position: 'absolute', top: 0, zIndex: 1},
  bottomOpacity: {width: '100%', position: 'absolute', bottom: 0, zIndex: 1},
});

export default styles;
