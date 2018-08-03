import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles/index';


const styles = StyleSheet.create({

    container: {
        padding: metrics.padding,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderColor: colors.lighter,
        flexDirection: 'row',

    },
    
    avatar: {
        width: 68,
        height: 68,
        borderRadius: 34,
        marginRight: metrics.padding,
    },

    profileInfo: {
        flex: 1,

    },

    name: {
        fontWeight: 'bold',
        fontSize: fonts.big,
        marginTop: 5,

    },

    bio: {
        fontSize: fonts.regular,
        color: colors.regular,
        marginTop: 5,

    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    firstButton: {
        marginRight: 10,
    },

});

export default styles;
