var BucketList = require('./bucket_list/bucket_list.js');


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



