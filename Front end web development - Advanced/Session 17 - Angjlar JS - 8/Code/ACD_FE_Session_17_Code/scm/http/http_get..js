$http.get('api/user', {params: {id: '5'}
}).success(function(data, status, headers, config) {
	// Do something successful.
}).error(function(data, status, headers, config) {
	//Handle the error here
});

