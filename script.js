
let Row = null;
function FormSubmit() {
  var formData = Data();
  if (Row == null) insertNewRecord(formData);
  else updateRecord(formData);
  resetForm();
} 

function Data() {
  const formData = {};

  formData["fname"] = document.getElementById("fname").value;
  formData["lname"] = document.getElementById("lname").value;
  formData["Address"] = document.getElementById("Address").value;
  formData["Pincode"] = document.getElementById("Pincode").value;
  formData["Gender"] = document.getElementById("Gender").value;
  formData["Food"] = document.getElementById("Food").value;
  formData["State"] = document.getElementById("State").value;
  formData["Country"] = document.getElementById("Country").value;
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("userlist")
    .getElementsByTagName("tbody")[0];

  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Address;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Pincode;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.Gender;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.Food;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.State;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.Country;
}

function resetForm() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Pincode").value = "";
  document.getElementById("Gender").value = "";
  document.getElementById("Food").value = "";
  document.getElementById("State").value = "";
  document.getElementById("Country").value = "";
}
