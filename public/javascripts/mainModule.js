angular.module("procom", ['ngTagsInput'])
    .controller("mainController", function($scope, $http, $window){
        $scope.loadTags = function(query) {
            return $http.get('/javascripts/tags.json');
        };
        $scope.postFeedback=function(name, email, message, tags){
            $http.post("/contact", {name: name, message: message, email: email, tags: tags}).success(function(response){
                console.log("feedback successfully given");
            });
            $window.location.href="/index1.html";

        };
        $http.get("/getNewsFeed").success(function(response){
            $scope.feed=response.feed;
        });
        $http.get("/loggedIn").success(function(response){
            if(response!=0){
                $scope.showForm=true;
            }
        });

        console.log($scope.tags);
        $scope.logout=function(){
            $http.get("/logout").success(function(response){
                console.log("logged out successfully")
            });
        }
    })
    .controller("feedbackController", function($scope, $http){
        var tagPromise= $http.get('/javascripts/tags.json').success(function(response) {
            $scope.loadTags=response;
        });
        $scope.hasRight=false;
        $http.get("/loggedIn").success(function(response){
            if(response!=0){
                $scope.hasRight=true;
            }
        });
        $http.get("/getFeedback").success(function(response){
            if(response.feedback.length>0){
                $scope.noFeedback=true;
            }
            $scope.feedback=response.feedback;
        });
        $scope.getTag=function(tag){
            $http.get("/getTag?tag="+tag).success(function(response){
                $scope.tag=tag;
                $scope.tagFeedback=response.feedback;
                console.log($scope.tagFeedback);
                $scope.tagFlag=true;
            });
        }
    });