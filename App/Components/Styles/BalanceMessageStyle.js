import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
		paddingHorizontal: 10
  },
	messageText: {
		color: '#333',
		fontSize: 14,
		marginTop: 15,
		marginBottom: 5,
		fontStyle: 'italic',
		textAlign: 'center'
	},
	messageTextError: {
		color: '#e74c3c',
	},
	messageTextWhite: {
		color: '#2c3e50'
	}
})
