# UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUser**](UserApi.md#getUser) | **GET** /api/v1/users/whoami | 
[**sendConfirm**](UserApi.md#sendConfirm) | **POST** /api/v1/users/sendConfirm | 
[**updateUser**](UserApi.md#updateUser) | **POST** /api/v1/users/update | 


<a name="getUser"></a>
# **getUser**
> SHUser getUser(x-access-token)



    Get User

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x-access-token** | **String**|  | [default to null]

### Return type

[**SHUser**](../Models/SHUser.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="sendConfirm"></a>
# **sendConfirm**
> String sendConfirm(x-access-token, UserEmailRequest)



    Send Confirm

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x-access-token** | **String**|  | [default to null]
 **UserEmailRequest** | [**UserEmailRequest**](../Models/UserEmailRequest.md)|  |

### Return type

**String**

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> String updateUser(x-access-token, UserUpdateRequest)



    Update User

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x-access-token** | **String**|  | [default to null]
 **UserUpdateRequest** | [**UserUpdateRequest**](../Models/UserUpdateRequest.md)|  |

### Return type

**String**

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

