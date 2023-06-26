let myTotal = 0; // 現在の合計値
let myInput = ""; // 現在入力している値
let myCalc = "+"; // 合計と入力値の演算子
let myFlg = 1; // １回前に入力したもの 0:数字 1:演算子

function num_click(value) { // 0～9または小数点ボタンを押した時の処理
  if (document.cal.display.value == "0") //最初に０が入力されないようにする
    myInput = ""
  else
    myFlg = 0;
    myInput += value;
  document.cal.display.value = myInput;
}

function ope_click(value) { //演算子を押した時の処理
  if (myFlg == 0) {
    myFlg = 1;
    myInput += value;
    document.cal.display.value = myInput;
  }
}

function c_click() { // クリアボタン[C]を押した時の処理
  myTotal = 0; // 合計クリア
  myCalc = "+"; // 演算子クリア
  myInput = ""; // 現在入力している値をクリア
  document.cal.display.value = myTotal; // ０を表示
}


function e_click() { //イコールを押した時の処理

  document.cal.display.value = eval(document.cal.display.value);
}
