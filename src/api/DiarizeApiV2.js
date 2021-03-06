/**
 * DeepAffects
 * OpenAPI Specification of DeepAffects APIs
 *
 * OpenAPI spec version: 0.1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AsyncResponse', 'model/Audio', 'model/DiarizeAudio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncResponse'), require('../model/Audio'), require('../model/DiarizeAudio'));
  } else {
    // Browser globals (root is window)
    if (!root.DeepAffects) {
      root.DeepAffects = {};
    }
    root.DeepAffects.DiarizeApiV2 = factory(root.DeepAffects.ApiClient, root.DeepAffects.AsyncResponse, root.DeepAffects.Audio, root.DeepAffects.DiarizeAudio);
  }
}(this, function(ApiClient, AsyncResponse, Audio, DiarizeAudio) {
  'use strict';

  /**
   * Diarize service.
   * @module api/DiarizeApiV2
   * @version 0.1.0
   */

  /**
   * Constructs a new DiarizeApi.
   * @alias module:api/DiarizeApiV2
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the asyncDiarizeAudio operation.
     * @callback module:api/DiarizeApiV2~asyncDiarizeAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AsyncResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diarize an audio file
     * Diarize an audio file.
     * @param {module:model/DiarizeAudio} body Audio object that needs to be diarized.
     * @param {module:api/DiarizeApiV2~asyncDiarizeAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AsyncResponse}
     */
    this.asyncDiarizeAudio = function(body, webhook, callback, request_id) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling asyncDiarizeAudio");
      }


      var pathParams = {
      };
      var queryParams;
      if(request_id === undefined){
            queryParams = {
                "webhook": webhook
            };
      }
      else{
            queryParams = {
                "webhook": webhook,
                "request_id": request_id
            };
      }
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['UserSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AsyncResponse;

      return this.apiClient.callApi(
        '/audio/generic/api/v2/async/diarize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
