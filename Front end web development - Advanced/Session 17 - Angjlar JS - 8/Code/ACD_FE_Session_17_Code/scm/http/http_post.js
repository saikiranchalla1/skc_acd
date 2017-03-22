var postData = {text: 'some text'};
// The next line gets appended to the URL as params
// so it would become a post request to /api/user?id=5
var config = {params: {id: '5'}};
$http.post('api/user', postData, config
).success(function(data, status, headers, config) {
// Do something successful
}).error(function(data, status, headers, config) {
// Handle the error
});

