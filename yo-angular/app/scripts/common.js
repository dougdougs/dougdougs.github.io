'use strict';



//SOUNDCLOUD API GET PARAMETRIZADO

  app.service('SoundCloudApiService', function($http, $window, $q) {

      this.get = function(endpoint, params) {

          var url = 'https://api.soundcloud.com/me/' + endpoint + '.json' + params + '&oauth_token=' + SC.accessToken();

          return $http.get(url)
            .then(function(response) {
                if (typeof response.data === 'object') {
                    return response.data;
                } else {
                    // invalid response
                    return $q.reject(response.data);
                }

            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            });
      };

      this.getUser = function() {
          var url = 'https://api.soundcloud.com/me.json?oauth_token=' + SC.accessToken();

          return $http.get(url)
                      .then(function(response) {
                          if (typeof response.data === 'object') {
                              return response.data;
                          } else {
                              // invalid response
                              return $q.reject(response.data);
                          }

                      }, function(response) {
                          // something went wrong
                          return $q.reject(response.data);
                      });
      };
  });



    function PlaySong(){
      var streamURl = $("this").attr("data-song-url");
      $(".song-url").click(
        $("#playerTrack").attr("src", streamUrl)
      )
    };


