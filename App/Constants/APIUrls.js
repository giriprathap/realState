//const BASE_URL = 'http://52.34.207.5:5095/api/';
const BASE_URL = 'http://52.64.215.66:5095/api/';//Live

//const URL = 'http://52.34.207.5:5095';
const URL = 'http://52.64.215.66:5095';//Live

//const CHAT_CONNECTION_URL='http://52.34.207.5:5094';
const CHAT_CONNECTION_URL='http://52.64.215.66:5094';//Live

//const BASE_URL = 'http://172.10.56.36:5095/api/';//ankur
//const BASE_URL = 'http://172.10.55.104:5095/api/';//LL


const API = {

	USER_LOGIN							: 	BASE_URL + 'userLogin',
	FORGOT_PASSWORD						: 	BASE_URL + 'forgotPassword',
	USER_REGISTRATION					: 	BASE_URL + 'userRegister',
	USER_LOGOUT							: 	BASE_URL + 'userLogout',
	GET_PROPERTY_LIST					: 	BASE_URL + 'allProperty',
	GET_ALL_PROPERTY_LIST				: 	BASE_URL + 'getDatabaseProperty',
	GET_AMENITIES_LIST					: 	BASE_URL + 'getAmenites',
	GET_USER_ROLES_LIST					: 	BASE_URL + 'roles',
	
	CREATE_PRPERTY						: 	BASE_URL + 'createProperty',
	UPLOAD_PROPERTY_IMAGE				: 	BASE_URL + 'uploadMobilePropertyImage',
	GET_PROPERTY_OWNER					: 	BASE_URL + 'getPropertyOwner',
	GET_TENANT_LIST						: 	BASE_URL + 'tenantsList',
	GET_TRADERS_LIST					: 	BASE_URL + 'tradersList',
	SEND_MESSAGE						: 	BASE_URL + 'sendMessage',
	GET_PROPERTY_BY_AGENT				: 	BASE_URL + 'getPropertyByAgentId',
	ADD_NEW_TANENT						: 	BASE_URL + 'addNewTenant',
	GET_USER_PROFILE					: 	BASE_URL + 'getUserDetails',
	ADD_PROPERTY_OWNER					: 	BASE_URL + 'addPropertyOwner',
	GET_PROPERTY_DETAIL					: 	BASE_URL + 'singleProperty',
	GET_USER_ROLES						: 	BASE_URL + 'getUserRoles',
	UPLOAD_USER_IMAGE					: 	BASE_URL + 'uploadAgentImages',
	LIKE_PROPERTY						: 	BASE_URL + 'addToFavouritesProperty',
	GET_USER_PERMISSION					: 	BASE_URL + 'getUserPermission',
	SAVE_PROPERTY_AS_DRAFT				: 	BASE_URL + 'savePropertyAsDraft',

	UPDATE_USER_IMAGE					: 	BASE_URL + 'updateUserPic',
	GET_USER_IMAGE						: 	BASE_URL + 'getUserImage',
	GET_USER_DETAILS					: 	BASE_URL + 'getUserDetails',
	CHANGE_PASSWORD						: 	BASE_URL + 'changePassword',
	UPDATE_NOTIFICATION_SETTING			: 	BASE_URL + 'updateUserNotificationSettings',
	UPDATE_USER_DETAILS					: 	BASE_URL + 'updateUserProfile',
	GET_FAVIOURATE_PROPERTY				: 	BASE_URL + 'getFaviouratePropertyList',
	GET_MAINTENANCE_REQUEST_LIST		: 	BASE_URL + 'maintenanceList',
	GET_TRADERS_OPTION_LIST				: 	BASE_URL + 'tradersOptionList',
	GET_AGENCY_PROPERTY					: 	BASE_URL + 'getAcencyProperties',
	GET_WATCHER_LIST					: 	BASE_URL + 'getWatchersList/',
	UPLOAD_MAINTENANCE_REQ_IMAGE		: 	BASE_URL + 'uploadMobileMaintenanceImage',
	PROPERTY_LIST_FOR_MAINTENANCE_REQ	: 	BASE_URL + 'propertyListForMaintenance',
	GET_MAINTENANCE_REQ_BY_TENANT		: 	BASE_URL + 'maintenanceRequestByTenant',
	ADD_MAINTENANCE_REQ					: 	BASE_URL + 'addMaintenance',
	SAVE_USER_MULTI_ROLE				: 	BASE_URL + 'saveUserMultiRoles',
	GET_NOTICE_BOARD_LIST				:	BASE_URL + 'noticeboardList',
	GET_MAINTENANCE_DETAIL				:	BASE_URL + 'getMaintenanceDetail/',
	GET_NOTIFICATION_LIST				:   BASE_URL + 'notificationList',
	GET_UPLOADED_DOCUMENT				:   BASE_URL + 'getUploadedDocument',
	GET_FAV_UPLOADED_DOCUMENT			:   BASE_URL + 'getFavUploadedDocument',
	ADD_DOCUMENT_TO_FAV					:   BASE_URL + 'addDocumentToFav',
	GET_AGREEMENT_LIST					:   BASE_URL + 'agreementList',
	GET_PROPERTY_OWNER_LIST				:   BASE_URL + 'getOwnerListInProperty/',
	GET_PROPERTY_TENANT_LIST			:   BASE_URL + 'getTenantListInProperty/',
	ADD_AGREEMENT						:   BASE_URL + 'addAgreements',
	GET_AGREEMENT_DETAIL				:   BASE_URL + 'agreementDetail/',
	GET_STATISTICS						:   BASE_URL + 'getStatisticsData',
	UPLOAD_MYFILE_DOC					:   BASE_URL + 'uploadDocumentsFiles',
	UPLOAD_AGREEMENT_DOC				:   BASE_URL + 'uploadMobileAgreementDocs',
	DELETE_AGREEMENT					:   BASE_URL + 'deleteAgreement/',
	FORWARD_MAINTENANCE_REQ				:   BASE_URL + 'forwardMaintenanceRequest',
	GET_PROPERTY_FOR_ADD_TENANT			:   BASE_URL + 'getPropertyForAddingTenant',
	GET_AGREEMENT_BY_PROPERTY			:   BASE_URL + 'getAgreementByProperty/',
	GET_USER_ACTIVE_ROLES				: 	BASE_URL + 'getUserActiveRoles',
	GET_TENANCIES_HISTORY				: 	BASE_URL + 'getTenanciesHistory/',
	GET_AGREEMENT_FOR_PROPERTY			: 	BASE_URL + 'getAgreementForPropertyDetail/',
	GET_MAINTENANCE_HISTORY				: 	BASE_URL + 'getMaintenanceByProperty/',
	GET_MESSAGE_LIST					: 	BASE_URL + 'getChatUsers',
	GET_UNREAD_MESSAGE_LIST				: 	BASE_URL + 'getUnreadChat/',
	GET_NOTICE_BOARD_DETAIL_LIST		: 	BASE_URL + 'noticeBoardDetail/',
	ADD_REVIEW							: 	BASE_URL + 'addReview',
	GET_USER_REVIEW						: 	BASE_URL + 'getUserReview/',
	FILTER_PROPERTY						: 	BASE_URL + 'getAllPropertyBySearch',
	CHAT_URL							: 	URL,
	GET_MESSAGE_LIST					: 	BASE_URL + 'getChatUsers',
	UPLOAD_DOCUMENT_FOR_CHAT			:   BASE_URL + 'uploadDocumentForChat',
	GET_ALL_USER_REVIEW					: 	BASE_URL + 'getTraderAllReviews/',
	GET_USER_ROLE_REVIEW				: 	BASE_URL + 'GetUserRolesReview',
	EDIT_PROPERTY						:   BASE_URL + 'updatePropertyById',
	GENERAL_THREAD_FOR_MAINTENANCE		:   BASE_URL + 'generalThreadForMaintenance',

	GET_PROPERTY_LISTINGS				: 	BASE_URL + 'getSalesProperty',
	GET_TENANTED_PROPERTY_LIST			: 	BASE_URL + 'getTenantedPropertyList',
	GET_FAV_PROPERTY_LIST				: 	BASE_URL + 'getFaviouratePropertyList',

	UPLOAD_BANNER_IMG					:   BASE_URL + 'updateBannerPic',
	UPDATE_AGREEMENT					:   BASE_URL + 'editRentalcases',
	CANCEL_MAINTENANCE_REQ				:   BASE_URL + 'cancelMaintenanceRequest/',

	AGENT_LIST_WITHIN_AGENCY			:   BASE_URL + 'agentsListWithInAgency',
	AGENT_LIST 							:   BASE_URL + 'agentsList',
	GET_FAV_TENANTS 					:   BASE_URL + 'getFavTenants',
	GET_DATABASE_TENANTS 				:   BASE_URL + 'allTenentsFromDatabase',
	ADD_USER_AS_FAV 					:   BASE_URL + 'addToFavouritesUser',
	GET_AGREEMENT_FOR_TENANT_PROFILE 	:   BASE_URL + 'getTenantAgreementsForProfile/',
	TRADERS_JOB_HISTORY 				:   BASE_URL + 'tradersJobHistory',
	GET_FAV_TRADERS						:	BASE_URL + 'getAllSavedTraders',
	GLOBAL_SEARCH						:	BASE_URL + 'gobalSearch',

	ADD_AGENT_BY_AGENCY					:   BASE_URL + 'addAgentsByPrinciple',
	FILTER_MY_FILE						: 	BASE_URL + 'getYourFileBySearch',
	GET_AGENCIES						: 	BASE_URL + 'getAgencies',
	AGENCIES_ASSOCIATION_REQUEST		:	BASE_URL + 'agencyAssociationRequest',
	ACCEPT_OR_DENIED_MAINTENANCE_REQ	:	BASE_URL + 'acceptorDeniedJob',
	
	CHAT_CONNECTION_URL					:	CHAT_CONNECTION_URL,

	//Dev
	// PROPERTY_IMAGE_PATH 				: 	'http://52.34.207.5:5095/property_image/',
	// MAINTENANCE_IMAGE_PATH 				: 	'http://52.34.207.5:5095/maintenance/',
	// USER_IMAGE_PATH 					: 	'http://52.34.207.5:5095/user_image/',
	// DOCUMENTS_PATH 						: 	'http://52.34.207.5:5095/document/',
	// AGREEMENT_PATH 						: 	'http://52.34.207.5:5095/agreement/'


	//Live
	PROPERTY_IMAGE_PATH 				: 	'http://52.64.215.66:5095/property_image/',
	MAINTENANCE_IMAGE_PATH 				: 	'http://52.64.215.66:5095/maintenance/',
	USER_IMAGE_PATH 					: 	'http://52.64.215.66:5095/user_image/',
	DOCUMENTS_PATH 						: 	'http://52.64.215.66:5095/document/',
	AGREEMENT_PATH 						: 	'http://52.64.215.66:5095/agreement/'



	
}

export default API

 