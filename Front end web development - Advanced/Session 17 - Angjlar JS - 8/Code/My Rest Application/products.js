angular.module("exampleApp", ["ngResource"])
.constant("baseUrl", "http://localhost:5500/products/")
.controller("defaultCtrl", function($scope,$http,baseUrl, $resource){
	$scope.displayMode = "list";
	$scope.currentProduct = null;
	
	$scope.productsResource = $resource(baseUrl + ":id", {id : "@id"});
	$scope.listProducts = function(){
		/*$scope.products = [
			{id:0, name:"Dummy 1", category:"Test", price: 1.23},
			{id:1, name:"Dummy 2", category:"Test", price: 1.45},
			{id:2, name:"Dummy 3", category:"Test", price: 1.67}
		];*/
		/*$http.get(baseUrl).success(function(data){
			$scope.products = data;
		});*/
		$scope.products = $scope.productsResource.query();
	}

	$scope.deleteProduct = function(product){
		/*$http({
			method:"DELETE",
			url: baseUrl + product.id
		}).success(function(){
			$scope.products.splice($scope.products.indexOf(product), 1);
		});*/
		product.$delete().then(function(){
			$scope.products.splice($scope.products.indexOf(product), 1);
		});
		$scope.displayMode = "list";
	}

	$scope.createProduct = function(product){
		/*$scope.products.push(product);
		$scope.displayMode = "list";*/
		new $scope.productsResource(product).$save().then(function(newProduct){
			$scope.products.push(newProduct);
			$scope.displayMode = "list";
		});
	}

	$scope.updateProduct = function(product){
		/*$http({
			url:baseUrl + product.id,
			method: "PUT",
			data : product
		}).success(function(modifiedProduct){
			for(var i=0; i < $scope.products.length; i++){
			if($scope.products[i].id == modifiedProduct.id){
				$scope.products[i] = modifiedProduct;
				break;
			}
			$scope.displayMode = "list";
		}
		});*/
		product.$save();
		$scope.displayMode = "list";
	}

	$scope.editOrCreateProduct = function(product){
		$scope.currentProduct = product ? product : {};
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
		/*$scope.currentProduct = {};
		$scope.displayMode = "list"*/
		if($scope.currentProduct && $scope.currentProduct.$get){
			$scope.currentProduct.$get();
		}
		$scope.currentProduct = {};
		$scope.displayMode = "list";
	}

	$scope.listProducts();
});