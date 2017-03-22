function fetch(url, onSuccess, onError){

	var asynchoronous = onSuccess ? true : false;
	var req; //XHR - XML HTTP Request

	function processReqChange(){
		if(req.readyState == 4){
			if(req.status == 200){
				if(onSuccess){
					onSuccess(req.responseText, url, req);
				}else if(onError){
					onError(url, req);
				}
			}
		}
	}


	//Creating XHR Object
	if(window.XMLHttpRequest){
		req = new XMLHttpRequest();
	}else{
		req = new ActiveXObject("Micosoft.XMLHTT");
	}


	if(asynchoronous){
		req.onreadystatechange = processReqChange;
	}

	req.open("GET", url, asynchoronous);
	if(asynchoronous){
		return req;
	}else {
		return req.responseText;
	}
}


var testing = fetch("/url");

fetch("url", function(name){
	console.log('Successful');
}, function (name) {
	console.log('Error');
});


