function id(x){
	return x;
}


function id(x, cc){
	
	cc(x);
}


function factorial(n){
	if(n == 0 ){
		return 1;
	}else{
		return n * factorial(n - 1);
	}
}

//CPS - factorial
function factorialCps(n, ret){
	if(n == 0){
		ret(1);
	}else{
		factorialCps(n - 1, function (a){
			ret(n * a);
		})
	}
}

factorialCps(10, function (n){
	alert(n);
});




