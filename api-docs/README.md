# Documentation for SmartHalo API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**checkEmail**](Apis/AuthApi.md#checkemail) | **POST** /auth/local/checkEmail | 
*AuthApi* | [**forgotPassword**](Apis/AuthApi.md#forgotpassword) | **POST** /auth/forgot | 
*AuthApi* | [**login**](Apis/AuthApi.md#login) | **POST** /auth/local/login | 
*AuthApi* | [**refreshToken**](Apis/AuthApi.md#refreshtoken) | **POST** /auth/local/refresh_tokens | 
*AuthApi* | [**signup**](Apis/AuthApi.md#signup) | **POST** /auth/local/signup | 
*RidesApi* | [**deleteRide**](Apis/RidesApi.md#deleteride) | **DELETE** /api/v2/rides/{ride_id} | Delete ride by ID
*RidesApi* | [**getRide**](Apis/RidesApi.md#getride) | **GET** /v2/users/me/rides/{ride_id} | Get ride by ID
*RidesApi* | [**getUserRides**](Apis/RidesApi.md#getuserrides) | **GET** /api/v1/users/rides | Get user rides
*RidesApi* | [**updateRide**](Apis/RidesApi.md#updateride) | **PATCH** /v2/users/me/rides/{ride_id} | Update ride by ID
*RidesApi* | [**uploadUserRides**](Apis/RidesApi.md#uploaduserrides) | **POST** /api/v1/users/rides/sync | Upload user rides
*UserApi* | [**getUser**](Apis/UserApi.md#getuser) | **GET** /api/v1/users/whoami | Get User
*UserApi* | [**sendConfirm**](Apis/UserApi.md#sendconfirm) | **POST** /api/v1/users/sendConfirm | Send Confirm
*UserApi* | [**updateUser**](Apis/UserApi.md#updateuser) | **POST** /api/v1/users/update | Update User


<a name="documentation-for-models"></a>
## Documentation for Models

 - [CloudMarker](./Models/CloudMarker.md)
 - [CloudRide](./Models/CloudRide.md)
 - [CloudRide_data](./Models/CloudRide_data.md)
 - [CloudSignificantMarker](./Models/CloudSignificantMarker.md)
 - [FitnessIntegrations](./Models/FitnessIntegrations.md)
 - [PastRide](./Models/PastRide.md)
 - [PatchRideRequest](./Models/PatchRideRequest.md)
 - [PatchRideRequest_data](./Models/PatchRideRequest_data.md)
 - [RideMarker](./Models/RideMarker.md)
 - [RideUploadLocation](./Models/RideUploadLocation.md)
 - [RideUploadPayload](./Models/RideUploadPayload.md)
 - [SHLocation](./Models/SHLocation.md)
 - [SHUser](./Models/SHUser.md)
 - [SignupRequest](./Models/SignupRequest.md)
 - [UserEmailRequest](./Models/UserEmailRequest.md)
 - [UserResponse](./Models/UserResponse.md)
 - [UserUpdateRequest](./Models/UserUpdateRequest.md)
 - [inline_object](./Models/inline_object.md)
 - [inline_object_1](./Models/inline_object_1.md)
 - [inline_object_2](./Models/inline_object_2.md)
 - [inline_object_3](./Models/inline_object_3.md)
 - [inline_response_200](./Models/inline_response_200.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="SecurityHeader"></a>
### SecurityHeader

- **Type**: API key
- **API key parameter name**: x-consumer-token
- **Location**: HTTP header

