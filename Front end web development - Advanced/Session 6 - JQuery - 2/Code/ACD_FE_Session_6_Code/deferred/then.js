function getName(empId){
	return $.ajax({
		url:"getemployeename.php",
		type:"POST",
		data: {id:empId}
	})
}
function getTaxId(response){
 	return $.ajax({
		url:"getemployeetaxid.php",
		type:"POST",
		data: {name:response}
	})	
}

function getIncome(response){
 	return $.ajax({
		url:"getemployeeincome.php",
		type:"POST",
		data: {taxid:response}
	})	
}
function showResult(response){
	alert("the employee income is "+response);
	console.log(response);
}
var empId = 12;
getName(empId).then(getTaxId).then(getIncome).then(showResult);
