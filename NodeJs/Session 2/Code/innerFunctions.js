function outerFunc(param){

	function innerFunc(innerParam){
		return innerParam * 10;
	}

	return innerFunc(param);
}

outerFunc(10);

