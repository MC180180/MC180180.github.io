// 获取计算器的元素
var calculator = document.querySelector(".calculator");
var keys = calculator.querySelector(".calculator__keys");
var display = calculator.querySelector(".calculator__display");

// 定义一些变量来存储计算器的状态
var previousKeyType = "";
var firstValue = "";
var operator = "";
var secondValue = "";

// 监听键盘的点击事件
keys.addEventListener("click", function (event) {
  // 如果点击的不是按钮，直接返回
  if (!event.target.matches("button")) return;

  // 获取点击的按钮和它的值
  var key = event.target;
  var keyValue = key.textContent;

  // 获取显示屏的值
  var displayValue = display.textContent;

  // 根据按钮的类型执行不同的操作
  var type = key.dataset.action;
  if (type === "number") {
    // 如果显示屏的值是0或者上一次按的是运算符，就替换显示屏的值，否则就追加值
    if (displayValue === "0" || previousKeyType === "operator") {
      display.textContent = keyValue;
    } else {
      display.textContent += keyValue;
    }
    // 更新上一次按键的类型为数字
    previousKeyType = "number";
  } else if (type === "operator") {
    // 如果上一次按的是运算符，就更新运算符，否则就执行计算
    if (previousKeyType === "operator") {
      operator = keyValue;
    } else {
      // 获取第一个操作数和运算符
      firstValue = displayValue;
      operator = keyValue;
      // 清空显示屏，等待输入第二个操作数
      display.textContent = "";
    }
    // 更新上一次按键的类型为运算符
    previousKeyType = "operator";
  } else if (type === "decimal") {
    // 如果显示屏的值没有小数点，就追加一个小数点
    if (!displayValue.includes(".")) {
      display.textContent += ".";
    }
    // 更新上一次按键的类型为小数点
    previousKeyType = "decimal";
  } else if (type === "clear") {
    // 清空所有变量和显示屏的值
    previousKeyType = "";
    firstValue = "";
    operator = "";
    secondValue = "";
    display.textContent = "0";
  } else if (type === "calculate") {
    // 获取第二个操作数
    secondValue = displayValue;
    // 根据运算符执行相应的计算，并显示结果
    var result = calculate(firstValue, operator, secondValue);
    display.textContent = result;
    // 更新上一次按键的类型为等号
    previousKeyType = "calculate";
  }
});

// 定义一个计算函数，根据运算符执行相应的计算，并返回结果
function calculate(firstValue, operator, secondValue) {
  var result = 0;
  firstValue = Number(firstValue);
  secondValue = Number(secondValue);
  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "×":
      result = firstValue * secondValue;
      break;
    case "÷":
      result = firstValue / secondValue;
      break;
  }
  return result;
}