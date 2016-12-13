/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var BucketList = __webpack_require__(1);
	
	
	window.onload = function() {
	
	  var url = 'http://restcountries.eu/rest/v1';
	  var request = new XMLHttpRequest();
	  request.open("GET", url);
	
	  request.onload = function(){
	    if(request.status === 200) {
	      var jsonString = request.responseText;
	      var countries = JSON.parse(jsonString);
	      populateList(countries);
	      console.log(countries);
	
	
	      var selectBox = document.querySelector('#country-list');
	      selectBox.onchange = function( event ) {
	        console.log( "gets here" )
	        console.log( event.target.value );
	        var country = countries[event.target.value].name;
	        console.log(country);
	      };
	    }
	  };
	  request.send();
	
	
	  var populateList = function(countries) {
	    var select = document.getElementById('country-list');
	      for (i = 0; i < countries.length; i++) {
	        var option = document.createElement('option');
	        var country = countries[i];
	        option.innerText = country.name;
	        option.value = i;
	        select.appendChild(option);
	      }
	    }
	  }; 
	  // var handleSelectChanged = function( event ) {
	  //   console.log( "gets here" )
	  //   console.log( event );
	  //   // var country = countries[event.target.value];
	  // }
	
	
	  // var bucketList = new BucketList();
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var BucketList = function() {
	  
	};
	
	
	
	
	module.exports = BucketList;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map