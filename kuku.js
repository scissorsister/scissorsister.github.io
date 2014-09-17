var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");


var dat = new Date();
var currdate = dat.getDate();
var currmonth = dat.getMonth();
var curryear = dat.getFullYear();

document.write(m_names[currmonth]+" "+currdate+" "+curryear+",");