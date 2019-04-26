
var tbl = document.getElementById("myTable");

var tbl_body = tbl.getElementsByTagName("tbody");

var tblrw = tbl_body.insertRow();

var newCell = tblrw.insertCell(0);

var newText = document.createTextNode('New top row');
newCell.appendChild(newText);
