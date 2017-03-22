$(function(){
	$.ajax("data.txt", {
		success:function(response){
			$("#container").append(response);
		},
		error: function(request,errorType,errorMsg) {
			alert("the error message is "+ errorMsg);
		}
	});
});