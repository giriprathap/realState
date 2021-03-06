import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import Colors from '../../../Constants/Colors';

const window = Dimensions.get('window');

export default StyleSheet.create({

    settingContainerStyle: {
        width: null,
        height: null,
        marginTop: 20,
        flex: 1,
        backgroundColor:Colors.WHITE,
        borderTopColor: Colors.TRANSLUCENT_BLACK,
        borderBottomColor: Colors.TRANSLUCENT_BLACK,
        borderLeftColor: Colors.TRANSPARENT,
        borderRightColor: Colors.TRANSPARENT,
        borderWidth: 1,
        paddingTop:20,
        paddingLeft:10
    },
    tabContainerScrollViewStyle: {
        marginRight: 20,
        paddingRight: 20,
    },
    tabContainerStyle: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        borderTopColor: Colors.TRANSLUCENT_BLACK,
        borderBottomColor: Colors.TRANSLUCENT_BLACK,
        borderWidth: 0,
        marginTop: 0,
        marginBottom: 15,
    },
    tabTextViewContainerStyle: {
        height: 48,
        justifyContent: 'center'
    },
    tabTextViewStyle: {
        height: 47, justifyContent: 'center', alignItems: 'center'
    },
    tabLabelTextStyle: {

        color: Colors.SKY_BLUE_BUTTON_BACKGROUND,
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 20,

    },
    tabLabelDiselectTextStyle: {
        color: Colors.BLACK,
        fontSize: 18,
        fontWeight: '400',
        marginLeft: 20,
    },
    tabIndicatorStyle: {
        backgroundColor: Colors.SKY_BLUE_BUTTON_BACKGROUND,
        height: 3,
        marginLeft: 20,
        marginBottom: -6,
        marginTop: 6,
    },
    profileContainer: {
        padding: 20,
        alignItems: 'center',
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',

    },
    userImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editTextContainer: {
        height: 26,
        width: 120,
        backgroundColor: Colors.EDIT_PROFILE_BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        position: 'absolute',
        bottom: 0,
    },
    editTextStyle: {
        fontSize: 9,
        color: Colors.WHITE,
        textAlign: 'center',
        width: 100,
        position: 'absolute',
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 5,
    },
    userNameContainerStyle: {
        flexDirection: 'row',
    },
    userNameTextStyle: {
        color: Colors.PROPERTY_TITLE_COLOR,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    editImageStyle: {
        marginLeft: 5,
    },
    emailTextStyle: {
        color: Colors.PROPERTY_SUB_TITLE_COLOR,
        fontSize: 14,
        textAlign: 'center',
    },
    bottomViewStyle: {
        height: 60,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roundedBlueSaveButtonStyle: {
        borderRadius: 100,
        height: 40,
        backgroundColor: Colors.SKY_BLUE_BUTTON_BACKGROUND,
        justifyContent: 'center',
        marginLeft: 5,
    },
    saveButtonTextStyle: {
        height: 16,
        width: window.width * 0.7,
        color: Colors.WHITE,
        fontSize: 13,
        fontWeight: 'bold',
        lineHeight: 16,
        textAlign: 'center',
    },
    textStyle: {
        width: window.width * 0.8,
        color: Colors.ADD_PROPERT_LABEL_TEXT_COLOR,
        backgroundColor: Colors.TRANSPARENT,
        fontSize: 14,
        fontWeight: '500',

    },

});