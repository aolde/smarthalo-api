# RidesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRide**](RidesApi.md#deleteRide) | **DELETE** /api/v2/rides/{ride_id} | 
[**getRide**](RidesApi.md#getRide) | **GET** /v2/users/me/rides/{ride_id} | 
[**getUserRides**](RidesApi.md#getUserRides) | **GET** /api/v1/users/rides | 
[**updateRide**](RidesApi.md#updateRide) | **PATCH** /v2/users/me/rides/{ride_id} | 
[**uploadUserRides**](RidesApi.md#uploadUserRides) | **POST** /api/v1/users/rides/sync | 


<a name="deleteRide"></a>
# **deleteRide**
> Boolean deleteRide(ride\_id, x-access-token)



    Delete ride by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ride\_id** | **Float**|  | [default to null]
 **x-access-token** | **String**|  | [default to null]

### Return type

**Boolean**

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getRide"></a>
# **getRide**
> CloudRide getRide(ride\_id, include, x-access-token)



    Get ride by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ride\_id** | **Float**|  | [default to null]
 **include** | **String**|  | [default to null]
 **x-access-token** | **String**|  | [default to null]

### Return type

[**CloudRide**](../Models/CloudRide.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserRides"></a>
# **getUserRides**
> List getUserRides(x-access-token)



    Get user rides

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x-access-token** | **String**|  | [default to null]

### Return type

[**List**](../Models/PastRide.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateRide"></a>
# **updateRide**
> CloudRide updateRide(ride\_id, x-access-token, PatchRideRequest)



    Update ride by ID

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ride\_id** | **Float**|  | [default to null]
 **x-access-token** | **String**|  | [default to null]
 **PatchRideRequest** | [**PatchRideRequest**](../Models/PatchRideRequest.md)|  |

### Return type

[**CloudRide**](../Models/CloudRide.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="uploadUserRides"></a>
# **uploadUserRides**
> List uploadUserRides(x-access-token, RideUploadPayload)



    Upload user rides

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x-access-token** | **String**|  | [default to null]
 **RideUploadPayload** | [**List**](../Models/RideUploadPayload.md)|  |

### Return type

[**List**](../Models/array.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

