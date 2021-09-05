function finder() {
var date = document.getElementById("date").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;
var y = new Array(date, month, year);
//alert(y); 

var date = new Date(y.reverse());
date = date.getDay();
alert(date);
var month = [days of the month]

}