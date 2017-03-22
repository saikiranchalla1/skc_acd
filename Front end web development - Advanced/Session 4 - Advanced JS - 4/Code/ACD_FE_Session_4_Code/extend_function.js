var  extend = function(childConstructor, parentConstructor) {
  function tempConstructor() {};
  tempConstructor.prototype = parentConstructor.prototype;
  childConstructor.superClass_ = parentConstructor.prototype;
  childConstructor.prototype = new tempConstructor();
  childConstructor.prototype.constructor = childConstructor;
};
var Parent = function(){

}
Parent.prototype = {
	alertMsg:function(msg){
		alert(msg);
	}
}
Parent.prototype.foo = 'Bar';
var Child = function(){

}
extend(Child,Parent);
var childOb = new Child();
childOb.alertMsg("Hi..i m child object");

