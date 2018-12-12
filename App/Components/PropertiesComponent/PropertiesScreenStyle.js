import {
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import Colors from '../../Constants/Colors';
const window = Dimensions.get('window');
export default StyleSheet.create({


  managePropertyViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 15
  },
  tabContainerScrollViewStyle: {
        marginRight: 20,
        paddingRight: 20,
  },
  managePropertyTextStyle: {
    color: Colors.LIGHT_GRAY_TEXT_COLOR,
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: '500'
  },

  propertyImageViewStyle: {
    height: window.height * 0.4,
    width: window.width,

  },

  propertyImageStyle: {
    height: window.height * 0.4,
    width: window.width
  },

  propertyTitleViewStyle: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    width: window.width
  },

  propertyTitleTextStyle: {

    color: Colors.PROPERTY_TITLE_COLOR,
    fontWeight: '600',
    fontSize: 18
  },

  propetySubTitleViewStyle: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: window.width - 30
  },

  propertySubTitleTextStyle: {
    color: Colors.PROPERTY_SUB_TITLE_COLOR,
    fontSize: 14
  },

  propertyInfoContainerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    paddingBottom: 20
  },

  propertyInfoSubViewContainer: {
    flexDirection: 'row'
  },

  propertyBedroomViewContainer: {
    flexDirection: 'row'
  },

  propertyWashrooViewContainer: {
    flexDirection: 'row',
    paddingLeft: 20
  },

  propertyValueTextStyle: {
    color: Colors.PROPERTY_SUB_TITLE_COLOR,
    fontSize: 14,
    paddingLeft: 10
  },

  userImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  noticeBoardContainerViewStyle: {


    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,

  },
  propertyListViewContainerStyle: {


    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,

  },

  noticeBoardTitleTextStyle: {

    color: Colors.NOTICE_BOARD_TEXT_TITLE_COLOR,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21
  },

  noticeBoardListViewContainer: {

    marginTop: 20
  },
  noticeBoardItemContainerView: {
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 20
  },
  scrollViewStyle: {
    paddingBottom: window.height * 0.3
  },

  tabLabelTextStyle: {

    color: Colors.SKY_BLUE_BUTTON_BACKGROUND,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 25,
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
  tabContainerStyle: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    borderTopColor: Colors.TRANSLUCENT_BLACK,
    borderBottomColor: Colors.TRANSLUCENT_BLACK,
    borderLeftColor:Colors.TRANSPARENT,
    borderRightColor:Colors.TRANSPARENT,
    borderWidth: 1,
    marginTop: 15,
  },
  listContainerStyle: {
    marginTop: 15,
  },
  tabTextViewStyle: {
    height: 47, justifyContent: 'center', alignItems: 'center'
  },

  tabTextViewContainerStyle: {
    height: 48, justifyContent: 'center'
  },

  refineResultContainerStyle: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center'
  },

  dropDownViewStyle: {
    height: 38,
    width: 165,
    margin: 20,
    paddingLeft: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.ADD_PROPERTY_INPUT_VIEW_COLOR,
    borderRadius: 4,
    backgroundColor: Colors.DROP_DOWN_BACKGROUND_COLOR,
  },

  refineResultTextStyle: {
    marginTop: 20,
    marginLeft: 20,
    height: 17,
    color: '#3991EE',
    fontSize: 14,
  },
  filterViewTextStyle: {
    marginTop: 20,
    marginLeft: 25,
    height: 17,
    color: '#7F829F',
    fontSize: 14,

  },
  imageListMainContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  imageListContainerStyle: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 20,
  },

  userListImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  listMainContainerStyle: {
    marginTop: 15,
    backgroundColor: Colors.WHITE,

  },
  likeImageViewStyle: {
    position: 'absolute',
    top: 15,
    left: 20,
  },

  refineResultArrowStyle: {
    marginLeft: 15,
    marginTop: 20,
  },

  refineResultArrowUpStyle: {
    marginLeft: 15,
    marginTop: 25,
    transform: [{ rotate: '180deg' }],
  },

  refineResultBottomBarStyle: {
    backgroundColor: Colors.REFINE_RESULT_TEXT_COLOR,
    marginLeft: 20,
    height: 1,
  },

  topCoverImageContainer: {
    height: window.height * 0.4,
    backgroundColor: Colors.LISTING_BG_COLOR,
    width: window.width,
  },
});