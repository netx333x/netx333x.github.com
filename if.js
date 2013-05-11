// JavaScript Document

//CHECK 01

var now = new Date();
var hour = now.getHours();

// 分岐する場合は分岐箇所をできるだけ小さくする。
// 下の記法は三項演算子と言い、簡単な条件で代入するものを変えるときなどに使える。
var ampm = hour < 12 ? '午前' : '午後';

hour %= 12;

window.alert('今は' + ampm + hour + '時です');
