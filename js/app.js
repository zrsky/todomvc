(function(angular) {
  'use strict';

var myApp = angular.module('MyToDoMvc',['ngRoute', 'app.controllers.main']);

 myApp.config(['$routeProvider', function($routeProvider){
 	$routeProvider
 	.when('/:status?', {
 		templateUrl: 'main_tmpl',
 		controller: 'MainController'
 	})
 	.otherwise({
 		redirectTo:'/'
 	});
 }]);

// myApp.controller('MainController', ['$scope', '$location','$routeParams', function($scope, $location,$routeParams){

// 	$scope.text='';

// 	function getId(){
// 	var id = Math.random();
// 	for (var i = 0; i < $scope.todos.length; i++) {
// 		 if($scope.todos[i].id === id){
// 		 	  id = getId();
// 		 }
// 	}
// 	return id;
// }

// 	$scope.todos = [
// 		{
// 			id:Math.random(),
// 			text: '学习',
// 			completed: false
// 		},
// 		{
// 			id:Math.random(),
// 			text: '睡觉',
// 			completed: false
// 		},
// 		{
// 			id:Math.random(),
// 			text: '吃饭',
// 			completed: false
// 		},
// 	];

// 	$scope.add =  function (){
// 	if(!$scope.text){
// 		return;
// 	}
// 	$scope.todos.push({
// 		id:getId(),
// 		text:$scope.text,
// 		completed:false
// 	});
// 	$scope.text = '';
// };

// $scope.remove = function(id){
// 	for (var i = 0; i < $scope.todos.length; i++) {
// 			if(id === $scope.todos[i].id){
// 					$scope.todos.splice(i,1);
// 			}
// 	}
// }

// // 清空已完成的任务
// $scope.clear = function(){
// 	var result = [];
// 		for (var i = 0; i < $scope.todos.length; i++) {
// 			if(!$scope.todos[i].completed){
// 					result.push($scope.todos[i]);
// 			}
// 	}
// 	$scope.todos = result;

// }
// //判断是否存在已完成
// $scope.exitCompleted = function(){
// 	for (var i = 0; i < $scope.todos.length; i++) {
// 			if($scope.todos[i].completed){
// 				return true;
// 			}


// 	}
// 	return false;
// }
// //当前编辑那个元素
//    $scope.currentEditingId = -1;
//     $scope.editing = function(id) {
//       $scope.currentEditingId = id;
//     };
//     $scope.save = function() {
//       $scope.currentEditingId = -1;
//     };

// //全选或全不选
//   var now = true;
// $scope.toggleAll = function(){
// 	for (var i = 0; i < $scope.todos.length; i++) {
// 		$scope.todos[i].completed = now;
// 	}
// 	now = !now;
// }

// // $scope.selector = {};
// // // console.log($location);
// // $scope.$location = $location;
// // // console.log($location.$$path);
// // $scope.$watch("$location.$$path", function(now,old){
// // 	switch(now){
// // 		case '/active':
// // 			$scope.selector = {completed: false};

// // 			break;
// // 		case '/completed':
// // 			$scope.selector = {completed: true};
// // 			break;
// // 		default:
// // 			$scope.selector = {};
// // 			break;
// // 	}
// // })

// // $scope.equalCompare = function(source,target){
// // 	// console.log(target);
// // 	// console.log(source);
// // 	return target === source;
// // }

// $scope.selector = {};
// var path = $routeParams.status;
// console.log(path);
// switch(path){
// 	case 'active':
// 		$scope.selector = {completed: false};
// 		break;
// 	case 'completed':
// 		$scope.selector = {completed: true};
// 		break;
// 	default:
// 		$scope.selector = {};

// }
// $scope.equalCompare = function(source,target){
// 	// console.log(target);
// 	// console.log(source);
// 	return target === source;
// }


// }]);



// myApp.controller('routeController',function($scope, $routeParams){
// $scope.selector = {};
// $scope.path = $routeParams.status;
// switch(path){
// 	case '/active':
// 		$scope.selector = {completed: false};
// 		break;
// 	case '/completed':
// 		$scope.selector = {completed: true};
// 		break;
// 	default:
// 		$scope.selector = {};

// }
// })

})(angular);
