var resultField = $("#result");

function insertNumber(number) {
  var exixtingNumber = resultField.val();
  resultField.val(exixtingNumber + number);
}

function clearResult() {
  resultField.val("");
}
function calculate() {
  var result = eval(resultField.val());
  resultField.val(result);
}
function deleteNumber() {
  var presentvalue = resultField.val();
  if (presentvalue != "") {
    resultField.val(presentvalue.slice(0, -1));
  }
}
