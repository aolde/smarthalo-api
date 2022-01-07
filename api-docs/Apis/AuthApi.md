# AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkEmail**](AuthApi.md#checkEmail) | **POST** /auth/local/checkEmail | 
[**forgotPassword**](AuthApi.md#forgotPassword) | **POST** /auth/forgot | 
[**login**](AuthApi.md#login) | **POST** /auth/local/login | 
[**refreshToken**](AuthApi.md#refreshToken) | **POST** /auth/local/refresh_tokens | 
[**signup**](AuthApi.md#signup) | **POST** /auth/local/signup | 


<a name="checkEmail"></a>
# **checkEmail**
> String checkEmail(inline\_object\_2)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline\_object\_2** | [**inline_object_2**](../Models/inline_object_2.md)|  |

### Return type

**String**

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="forgotPassword"></a>
# **forgotPassword**
> String forgotPassword(inline\_object\_3)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline\_object\_3** | [**inline_object_3**](../Models/inline_object_3.md)|  |

### Return type

**String**

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="login"></a>
# **login**
> UserResponse login(inline\_object)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline\_object** | [**inline_object**](../Models/inline_object.md)|  |

### Return type

[**UserResponse**](../Models/UserResponse.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="refreshToken"></a>
# **refreshToken**
> inline_response_200 refreshToken(inline\_object\_1)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inline\_object\_1** | [**inline_object_1**](../Models/inline_object_1.md)|  |

### Return type

[**inline_response_200**](../Models/inline_response_200.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="signup"></a>
# **signup**
> UserResponse signup(SignupRequest)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **SignupRequest** | [**SignupRequest**](../Models/SignupRequest.md)|  |

### Return type

[**UserResponse**](../Models/UserResponse.md)

### Authorization

[SecurityHeader](../README.md#SecurityHeader)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

