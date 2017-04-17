# SeerNetAudioApIs.EllipsisApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asyncIsDepressed**](EllipsisApi.md#asyncIsDepressed) | **POST** /api/v1/audio/async/ellipsis/is_depressed | Find if a person is depressed from audio.
[**syncIsDepressed**](EllipsisApi.md#syncIsDepressed) | **POST** /api/v1/audio/sync/ellipsis/is_depressed | Find if a person is depressed from audio.


<a name="asyncIsDepressed"></a>
# **asyncIsDepressed**
> AsyncResponse asyncIsDepressed(body)

Find if a person is depressed from audio.

Find if a person is depressed from audio.

### Example
```javascript
var SeerNetAudioApIs = require('seer_net_audio_ap_is');
var defaultClient = SeerNetAudioApIs.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new SeerNetAudioApIs.EllipsisApi();

var body = new SeerNetAudioApIs.Audio(); // Audio | Audio object that needs to be featurized.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.asyncIsDepressed(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be featurized. | 

### Return type

[**AsyncResponse**](AsyncResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="syncIsDepressed"></a>
# **syncIsDepressed**
> &#39;Boolean&#39; syncIsDepressed(body)

Find if a person is depressed from audio.

Find if a person is depressed from audio.

### Example
```javascript
var SeerNetAudioApIs = require('seer_net_audio_ap_is');
var defaultClient = SeerNetAudioApIs.ApiClient.default;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix = 'Token';

var apiInstance = new SeerNetAudioApIs.EllipsisApi();

var body = new SeerNetAudioApIs.Audio(); // Audio | Audio object that needs to be featurized.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncIsDepressed(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Audio**](Audio.md)| Audio object that needs to be featurized. | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
