(function(angular){

var controllers = angular.module('app.controllers.main', ['app.services.main']);
controllers.controller('MainController', ['$scope', '$location','$routeParams', 'MainService', function($scope, $location,$routeParams,MainService){

	$scope.text='';
	//获取id

//任务列表
$scope.todos = MainService.todos();
//添加任务
	$scope.add =  function (){
	if(!$scope.text){
		return;
	}
	MainService.add($scope.text);

	$scope.text = '';
};
//移除任务
$scope.remove = function(id){
	MainService.remove(id);
};

// 清空已完成的任务
$scope.clear =  function(){
	var newTodos = MainService.clear();
	$scope.todos = newTodos;
}
$scope.toggle = MainService.save;

//判断是否存在已完成
$scope.exitCompleted = MainService.exitCompleted;
//当前编辑那个元素
   $scope.currentEditingId = -1;
    $scope.editing = function(id) {
      $scope.currentEditingId = id;
    };
    $scope.save = function() {
      $scope.currentEditingId = -1;
    };

//全选或全不选

$scope.toggleAll = MainService.toggleAll;

$scope.selector = {};
var path = $routeParams.status;
console.log(path);
switch(path){
	case 'active':
		$scope.selector = {completed: false};
		break;
	case 'completed':
		$scope.selector = {completed: true};
		break;
	default:
		$scope.selector = {};

}
//比较器
$scope.equalCompare = function(source,target){
	// console.log(target);
	// console.log(source);
	return target === source;
}


}]);


})(angular);
