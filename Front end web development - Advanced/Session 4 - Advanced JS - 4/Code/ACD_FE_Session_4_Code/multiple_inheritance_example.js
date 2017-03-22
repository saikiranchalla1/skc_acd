
	function A(){

	};

	A.prototype.name = "A instance";
	A.prototype.getName = function(){
    	return this.name;
	};

	function B(){

	};
	B.prototype.name = "B instance";

	function C(){

	};
	// default name from B
	C.prototype.name = B.prototype.name;
	
	// getName from A
	C.prototype.getName = A.prototype.getName;
	
	// new method for C
	C.prototype.setName = function(name){
	    this.name = name;
	};

	var c = new C();
	c.getName(); // B instance
	c.setName("Andrea");
	c.getName(); // Andrea