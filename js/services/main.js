(function(angular){
	var services = angular.module("app.services.main",[]);
	services.service('MainService', function($window){

		 var storage = $window.localStorage;
      var todos = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [];

	 this.save = function() {
        storage['my_todo_list'] = JSON.stringify(todos);
      }
		//初始化任务列表数据
		var todos = [];
	this.todos = function(){
		return todos;
	}
	//获取id
	var getId = function(){
	var id = Math.random();
	for (var i = 0; i < todos.length; i++) {
		 if(todos[i].id === id){
		 	  id = getId();
		 }
	}
	return id;
}

	//添加任务
	this.add = function(text){
		todos.push({
		id:getId(),
		text:text,
		completed:false
	});
		this.save();
	}

	//移除任务
	this.remove = function(id){
		for (var i = 0; i < todos.length; i++) {
			if(id === todos[i].id){
					todos.splice(i,1);
			}
	}
	this.save();
	}
	//清空任务列表
	this.clear = function(){
		var result = [];
		for (var i = 0; i < todos.length; i++) {
			if(!todos[i].completed){
					result.push(todos[i]);
			}
		}
		todos = result;
		this.save();
		return todos;

	}

	//判断任务是否已完成
	this.exitCompleted = function(){
			for (var i = 0; i < todos.length; i++) {
			if(todos[i].completed){
				return true;
			}


		}
		return false;
	}

	//全选或全不选
	 var now = true;
	this.toggleAll = function(){
		for (var i = 0; i < todos.length; i++) {
		todos[i].completed = now;
		}
		now = !now;
		this.save();
	}




	});


})(angular)
