// JavaScript Document

//CHECK 01

var now = new Date();
var hour = now.getHours();


if (hour < 12) {
	window.alert('今は午前' + hour + '時です');
} else {
	window.alert('今は午後' + (hour - 12) + '時です');
}