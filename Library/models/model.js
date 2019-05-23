var histArr = [];
if ( localStorage.getItem('histKey') ) {
	histArr = localStorage.getItem('histKey').split(",").splice(-10,10);
}

var myLib = {};


function checkId (col_item, arr_item) {
		return col_item.id == arr_item.id;
}

function setOrder(col_item, arr_item, index, cb) {
	if (cb(col_item, arr_item)){
		col_item.style.order = +index;
	}
}

function CheckParam (collection, arr, cb, cb2) {
	for (var k = 1; k < collection.length; k++) {
		for (var c = 0; c < arr.length; c++) {
			cb(collection[k], arr[c], c, cb2);
		}
	}
}