function inherit = function(childConstructor, parentConstructor) {
  function tempConstructor() {};
  tempConstructor.prototype = parentConstructor.prototype;
  childConstructor.superClass_ = parentConstructor.prototype;
  childConstructor.prototype = new tempConstructor();
  childConstructor.prototype.constructor = childConstructor;
};
