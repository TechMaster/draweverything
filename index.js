/***
 * function initDraw(param1, param2) return (xxx, yyyy)
 *
 * function drawLine(row, length, drawPoint) return string
 *
 * function drawPoint(row, col) return boolean. true draw + sign, false draw space
 */


/***
 *
 * @param row {Number}
 * @param col {Number}
 * @return {Boolean} True vẽ + False vẽ
 */
function drawPoint(row, col) {

}
/***
 *
 * @param row
 * @param length
 * @param drawPoint
 */
function drawLine(row, length, drawPoint) {

}
function drawEverything() {
  //TODO: Nhập dữ liệu từ người dùng

  //TODO: validate dữ liệu nếu thấy bất hợp lý thì throw error hoặc thoát chương trình


  let rows, length = initDraw();

  for (let i = 0; i < rows; i++) {
    drawLine(i, length, drawPoint)
  }
}

drawEverything();