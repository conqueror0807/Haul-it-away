var names = ['vivek', 'sampreeth', 'sandeep', 'vaibhav'];
var qualifi = ['MBBS', 'MBBS', 'MD', 'MD'];
var age = [24, 25, 26, 27];
var gender = ['Male', 'Male', 'Female', 'Female'];
var cont = ['9876543210', '9876543211', '9876543212', '9876543213'];
var email = ['yvvivek9@gmail.com', 'sampreethreddy09@gmail.com', 'sandeepkumarreddy230704@gmail.com'];

var table = document.getElementsByClassName("mytable");
// for (let index = 0; index < names.length; index++) {
//     var row = table.insertrow(i+1);
//     var cell1 = row.insertcell(0);
//     cell1.innerHTML = i+1;
//     var cell2 = row.insertcell(1);
//     cell2.innerHTML = names[i];
//     var cell3 = row.insertcell(2);
//     cell3.innerHTML = qualifi[i];
//     var cell4 = row.insertcell(3);
//     cell4.innerHTML = age[i];
//     var cell5 = row.insertcell(4);
//     cell5.innerHTML = gender[i];
//     var cell6 = row.insertcell(5);
//     cell6.innerHTML = cont[i];
//     var cell7 = row.insertcell(6);
//     cell7.innerHTML = email[i];
// }
var row = table.insertrow(1);
var cell1 = row.insertcell(0);
var cell2 = row.insertcell(1);
var cell3 = row.insertcell(2);
var cell4 = row.insertcell(3);
var cell5 = row.insertcell(4);
var cell6 = row.insertcell(5);
var cell7 = row.insertcell(6);