function TicketGenerator(transportMode){
  var generateTicket = function(destination){
    return transportMode+"--"+destination+"123";
  }
  return generateTicket;
}

var flightTicketGenerator = TicketGenerator("Flight");
var shipTicketGenerator = TicketGenerator("Ship");
console.log(flightTicketGenerator("Chennai"));
console.log(shipTicketGenerator("singapore"));