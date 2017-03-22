function doAsyncTask() {
	var deferredObject = $.Deferred();
	setTimeout(function() {
		console.log("time out complete");
		deferredObject.resolve();
	}, 3000);
	return deferredObject.promise();
}
var promise = doAsyncTask();
promise.done(successFunc);
promise.fail(failFunc);
function successFunc(){
	alert("Async Task Successful");
}
function failFunc(){
	alert("Async Task Failed");
}