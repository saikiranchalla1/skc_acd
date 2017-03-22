function loadEventDetails()
{
    var eventDetails={};
    
	$('#evntName').text(eventDetails.name);
	$('#evntDate').text(eventDetails.date);
	$('#evntTime').text(eventDetails.time);
	$('#evntAddress').text(eventDetails.location.address);
	$('#evntCity').text(eventDetails.location.city);
	$('#evntPin').text(eventDetails.location.pin);
    $( "#sessionTmpl" ).tmpl( eventDetails.sessions ).appendTo( "#sessions" );
    

    //load the data using the jquery ajax from the server.

    $.ajax({
        url: "Data/1",
        type:'Get',
        dataType: "application/json",
        success: function(data){
            eventDetails = JSON.parse(data);
        },
        error:function(xhr,status,error){
            console.log('unable to get the eventdetails' + error);
        }
    });
	
}
