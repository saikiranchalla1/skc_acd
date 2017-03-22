function TicketGenerator(transportMode,classType){
  var generateTicket = function(destination1,destination2){
    return classType+transportMode+"--"+destination1+"123"+destination2;
  }
  return generateTicket;
}

var flightTicketGenerator = TicketGenerator("Flight","Business");
var shipTicketGenerator = TicketGenerator("Ship","Executive");
console.log(flightTicketGenerator("Chennai","Mysore"));
console.log(shipTicketGenerator("singapore","USA"));




