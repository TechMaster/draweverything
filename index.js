/***
 * function initDraw(param1, param2) return (xxx, yyyy)
 *
 * function drawLine(row, length, drawPoint) return string
 *
 * function drawPoint(row, col) return boolean. true draw + sign, false draw space
 */
let rows, cols;

function initDraw() {
  rows = 20;
  cols = 20;
}
/***
 *
 * @param row {Number}
 * @param col {Number}
 * @return {Boolean} True vẽ + False vẽ
 */
function drawAll() {
  return true;
}

function drawStar(rowIndex, colIndex) {
  if (rowIndex % 2 ===0) {
    return colIndex % 2 === 0;
  } else {
    return colIndex % 2 !== 0;
  }
}

function drawBox(rowIndex, colIndex, rows, length) {
  let thick = 2;
  return (rowIndex < thick || rowIndex >= rows - thick || colIndex < thick || colIndex >= length - thick);

}


function drawLine(rowIndex, cols, drawFunction) {
  let str = "";
  for (let colIndex = 0; colIndex < cols; colIndex++) {
      str = str.concat(drawFunction(rowIndex, colIndex, rows, cols) ? '+' : ' ');
  }
  return str;
}
function drawEverything() {
  //TODO: Nhập dữ liệu từ người dùng

  //TODO: validate dữ liệu nếu thấy bất hợp lý thì throw error hoặc thoát chương trình

  initDraw();

  for (let i = 0; i < rows; i++) {
    console.log(drawLine(i, cols, drawBox));
  }
}

drawEverything();