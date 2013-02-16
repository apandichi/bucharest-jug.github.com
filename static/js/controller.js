function bjugController($scope, $http) {

    $scope.load = function (url) {
        alert(url)
        $http.get(url).success( function(data){
            $scope.content = data;
        })
    }
}