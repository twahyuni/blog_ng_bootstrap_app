app.controller('ModalCtrl', ['$scope', '$uibModalInstance', 'data', function($scope, $uibModalInstance, data) {
  $scope.post = angular.copy(data.post);

  $scope.save = function () {
    $uibModalInstance.close($scope.post);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };
}]);