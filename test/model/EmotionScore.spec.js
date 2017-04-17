/**
 * SeerNet Audio APIs
 * OpenAPI Specification of SeerNet audio APIs
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SeerNetAudioApIs);
  }
}(this, function(expect, SeerNetAudioApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SeerNetAudioApIs.EmotionScore();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EmotionScore', function() {
    it('should create an instance of EmotionScore', function() {
      // uncomment below and update the code to test EmotionScore
      //var instane = new SeerNetAudioApIs.EmotionScore();
      //expect(instance).to.be.a(SeerNetAudioApIs.EmotionScore);
    });

    it('should have the property emotion (base name: "emotion")', function() {
      // uncomment below and update the code to test the property emotion
      //var instane = new SeerNetAudioApIs.EmotionScore();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new SeerNetAudioApIs.EmotionScore();
      //expect(instance).to.be();
    });

  });

}));