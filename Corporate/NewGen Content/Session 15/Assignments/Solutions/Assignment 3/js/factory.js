
angular.module('myApp').factory('employeeFactory',function(){

		var employees = [{name : 'John', age: 20, employeeId: 123, salary: 30000},
						{name : 'Michael', age: 22, employeeId: 139, salary: 40000},
						{name : 'Mac', age: 26, employeeId: 193, salary:50000}];

		return {
			
			getEmployees : function(){
				return employees;
			}

		}

})