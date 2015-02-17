angular.module('app').controller('fegUserListCtrl',['$scope', 'fegUser', function($scope, fegUser) {
    $scope.users = fegUser.query();
}]);