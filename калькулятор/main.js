function calculate() {
  var boxes = parseInt(document.getElementById("boxes").value);
  var price = parseFloat(document.getElementById("price").value);
  var weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(boxes) || isNaN(price) || isNaN(weight)) {
    alert("Пожалуйста, введите числовые значения для всех полей.");
    return;
  }

  var emptyBoxWeight = 0.3; // вес пустой коробки
  var totalEmptyBoxWeight = boxes * emptyBoxWeight; // общий вес всех пустых коробок

  var totalPrice = (weight - totalEmptyBoxWeight) * price; // общая стоимость товара

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    "Общий вес всех пустых коробок: " +
    totalEmptyBoxWeight.toFixed(2) +
    " кг<br>" +
    "Общая стоимость: " +
    totalPrice.toFixed(2) +
    " тг";
}
