var module = angular.module("myApp", ["ngResource"]);
module.constant('baseUrl', "http://localhost:5000/products/");
module.controller('defaultController', function($scope, $http, baseUrl, $resource){
	$scope.displayMode = "list";

	$scope.currentProduct = null;

	$scope.productsResource = $resource(baseUrl + ":id" , {id : "@id"});
	$scope.listProducts = function(){
		// $scope.products = [
		// 	{id:0, name:'Dummy1', category:"Test", price:1.25},
		// 	{id:0, name:'Dummy1', category:"Test", price:1.25},
		// 	{id:0, name:'Dummy1', category:"Test", price:1.25}
		// ];


		// $http.get(baseUrl).success(function(data){
		// 	$scope.products = data;
		// });
		
		$scope.products = $scope.productsResource.query();
	}

	$scope.deleteProduct = function(product){
		// $scope.products.splice($scope.products.indexOf(product), 1);
		// $http({
		// 	method : "DELETE",
		// 	url: baseUrl + product.id
		// }).success(function(){
		// 	$scope.products.splice($scope.products.indexOf(product), 1);
		// });
	
		product.$delete().then(function(){
			$scope.products.splice($scope.products.indexOf(product), 1);
		});
	}

	$scope.createProduct = function(product){
		// $scope.products.push(product);
		// $scope.displayMode = "list";
		//console.log(product);
		// $http.post(baseUrl, product).success(function(newProduct){
		// 	$scope.products.push(newProduct);
		// 	$scope.displayMode = "list";
		// });

		new $scope.productsResource(product).$save().then(function(newProduct){
			$scope.products.push(newProduct);
			$scope.displayMode = "list";
		});
	}

	$scope.updateProduct = function(product){
		// for (var i = 0; i < $scope.products.length; i++) {
		// 	if($scope.products[i].id == product.id){
		// 		$scope.products[i] = product;
		// 		break;
		// 	}
		// }
		// $http({
		// 	method : "PUT",
		// 	url: baseUrl + product.id,
		// 	data : product
		// }).success(function(modifiedProduct){
		// 	for (var i = 0; i < $scope.products.length; i++) {
		// 		if($scope.products[i].id == modifiedProduct.id){
		// 			$scope.products[i] = modifiedProduct;
		// 			break;
		// 		}
		// 	}
		// });
		product.$save();
		$scope.displayMode = "list";
	}

	$scope.editOrCreateProduct = function(product){
		$scope.currentProduct = product ? angular.copy(product) : {};
		$scope.displayMode = "edit";
	}

	$scope.saveEdit = function(product){
		if(angular.isDefined(product.id)){
			$scope.updateProduct(product);
		}else{
			$scope.createProduct(product);
		}
	}

	$scope.cancelEdit = function(){
		if($scope.currentProduct && $scope.currentProduct.$get){
			$scope.currentProduct.$get();
		}
		$scope.currentProduct = {};
		$scope.displayMode = "list";
	}

	$scope.listProducts();
});








