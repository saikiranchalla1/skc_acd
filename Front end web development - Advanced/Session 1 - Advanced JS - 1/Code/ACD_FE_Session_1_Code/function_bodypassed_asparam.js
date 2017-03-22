function invokeSum(a, b) {
  return a() + b();
}
 invokeSum(
	function () { return 5+4; },
	function () { return 7+9; }
)