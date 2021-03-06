import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    Alert,
    Platform,
    TextInput,
    ScrollView,
    AsyncStorage
} from 'react-native';
import {

    getTenantList,

} from "../../../Action/ActionCreators";

import {

    showLoading,
    resetState,
    nameChanged,
    cityChanged,
    stateChanged,
    postalCodeChanged,
    callTenantListOnClearFilter

} from "../TenantScreenAction";

import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../../CommonStyle/CommonStyle';
import Colors from '../../../Constants/Colors';
import Strings from '../../../Constants/Strings';
import ImagePath from '../../../Constants/ImagesPath';
import FilterScreenStyle from './FilterScreenStyle';
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-checkbox';
import Toast, { DURATION } from 'react-native-easy-toast';
import * as Progress from 'react-native-progress';
import DatePicker from 'react-native-datepicker'
import API from '../../../Constants/APIUrls';
import Moment from 'moment';
let propertyType = [{
    value: 'Sale',
}, {
    value: 'Rental',
}];

var errorMsg = [];

class FilterScreen extends Component {
    constructor() {
        super();
        this.state = {


        };
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }
    componentWillMount() {

    }

    onNameChange(text) {

        this.props.nameChanged(text);
    }

    onStateChange(text) {

        this.props.stateChanged(text);
    }

    onCityChange(text) {

        this.props.cityChanged(text);
    }

    onPostalCodeChanged(text) {

        this.props.postalCodeChanged(text);
    }


    callClearFilter() {
        this.props.resetState();
        this.props.callTenantListOnClearFilter('Yes');
    }


    callGetTenantList(APIName) {
        AsyncStorage.getItem("SyncittUserInfo").then((value) => {

            if (value) {

                var userData = JSON.parse(value);
                var authToken = userData.token;

                var postData = {
                    agency_id: userData.data.agency_id,
                    request_by_role: userData.data.role_id,
                    user_id: userData.data._id,
                    city: this.props.tenantScreenReducer.cityChangeText,
                    firstname: this.props.tenantScreenReducer.nameChangeText,
                    state: this.props.tenantScreenReducer.stateChangeText,
                    zip_code: this.props.tenantScreenReducer.postalCodeChangeText,
                }

                if (this.props.tenantScreenReducer.nameChangeText == ''&&this.props.tenantScreenReducer.cityChangeText==''
                    &&this.props.tenantScreenReducer.nameChangeText==''&&this.props.tenantScreenReducer.stateChangeText==''
                    &&this.props.tenantScreenReducer.postalCodeChangeText=='') {
                    alert(Strings.ERROR_SEARCH_VALIDATION);
                } else {
                    console.log('tenats req data==', JSON.stringify(postData));
                    this.props.showLoading();
                    this.props.getTenantList(authToken, postData, APIName);
                }
            }
        }).done();
    }



    render() {

        return (
            <View style={FilterScreenStyle.scrollViewContainerStyle}>

                <View style={FilterScreenStyle.addPropertyInputContainer}>

                    <View style={FilterScreenStyle.searchViewStyle}>
                        <Image source={ImagePath.SEARCH_ICON} style={FilterScreenStyle.searchImageStyle} />
                        <TextInput
                            placeholder={Strings.MY_FILE_FILTER_PLACE_HOLDER}
                            underlineColorAndroid={Colors.TRANSPARENT}
                            style={FilterScreenStyle.searchTextInputStyle} 
                            onChangeText={this.onNameChange.bind(this)}
                            value={this.props.tenantScreenReducer.nameChangeText}
                            />
                    </View>

                    <Text style={FilterScreenStyle.labelStyle}>
                        {Strings.STATE_PROVINANCE}
                    </Text>

                    <View style={FilterScreenStyle.stateViewStyle}>
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid={Colors.TRANSPARENT}
                            style={FilterScreenStyle.stateTextInputStyle}
                            onChangeText={this.onStateChange.bind(this)}
                            value={this.props.tenantScreenReducer.stateChangeText}

                        />
                    </View>
                    <Text style={FilterScreenStyle.labelStyle}>
                        {Strings.CITY}
                    </Text>

                    <View style={FilterScreenStyle.stateViewStyle}>
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid={Colors.TRANSPARENT}
                            style={FilterScreenStyle.stateTextInputStyle}
                            onChangeText={this.onCityChange.bind(this)}
                            value={this.props.tenantScreenReducer.cityChangeText}
                        />
                    </View>

                    <Text style={FilterScreenStyle.labelStyle}>
                        {Strings.POSTAL_CODE}
                    </Text>

                    <View style={FilterScreenStyle.stateViewStyle}>
                        <TextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='number-pad'
                            maxLength={4}
                            underlineColorAndroid={Colors.TRANSPARENT}
                            style={FilterScreenStyle.stateTextInputStyle}
                            onChangeText={this.onPostalCodeChanged.bind(this)}
                            value={this.props.tenantScreenReducer.postalCodeChangeText}
                        />
                    </View>

                    {/* 
                    <Text style={FilterScreenStyle.labelStyle}>
                        {Strings.DATE_ADDED}
                    </Text>

                    <View style={FilterScreenStyle.stateViewStyle}>
                        <DatePicker
                            style={FilterScreenStyle.datePickerStyle}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format='MMM DD YYYY'
                            minDate={this.state.minDate}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 0,
                                    position: 'absolute',
                                    left: 5,
                                    borderBottomWidth: 0,
                                    borderLeftWidth: 0,
                                    borderTopWidth: 0,
                                    borderRightWidth: 0,
                                }
                                // ... You can check the source to find the other keys. 
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View> */}

                    <View style={FilterScreenStyle.buttonContainerStyle}>

                        <TouchableOpacity onPress={() => this.callClearFilter()}>
                            <Text style={FilterScreenStyle.clearFiltersLabelStyle}>
                                {Strings.CLEAR_FILTERS}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.callGetTenantList(API.GET_TENANT_LIST)}>
                            <View style={FilterScreenStyle.roundedBlueProceedButtonStyle}>
                                <Text style={FilterScreenStyle.proceedButtonTextStyle}>
                                    {Strings.SUBMIT}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* {

                    this.props.tenantScreenReducer.isScreenLoading ?
                        <View style={CommonStyles.circles}>
                            <Progress.CircleSnail color={[Colors.BLACK, Colors.BLACK, Colors.BLACK]} />
                        </View>
                        : null

                } */}
                <Toast ref="toast"
                    position='bottom'
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log('tenantScreenReducer mapStateToProps= ', JSON.stringify(state));
    return {
        tenantScreenReducer: state.tenantScreenReducer
    }
}

export default connect(
    mapStateToProps,
    {
        getTenantList,
        showLoading,
        resetState,
        nameChanged,
        cityChanged,
        stateChanged,
        postalCodeChanged,
        callTenantListOnClearFilter
        
    }

)(FilterScreen);



