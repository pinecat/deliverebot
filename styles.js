import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#062037',
      height: '100%',
    },
    headerText: {
      fontSize: 30,
      marginBottom: 10,
	    justifyContent: 'center',
      color: 'white',
    },
    menuGrid: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '10%',
      width: '30%',
      borderWidth: 0,
      borderRadius: 0,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#575757',
      shadowOffset: {width: 1, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#007bff',
    },
});
