function myFunc(){
			document.getElementById("myPara").innerHTML = add();
		}
		
		var add = (function(){
			var counter = 0;
			return function() {return counter+=1;};
		})();

		function init(){
			var name = "AcadGild";
			function displayName(){
				console.log(name);
			}
			return displayName;
		}
		var myFunc = init();
		myFunc();