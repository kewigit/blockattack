flag = false;
function OnButtonClick(){
(function (fld, pF, px, dx, dy, lifes, score) {

  var cycle = setInterval(function ()
  {
        //PassageID = setInterval('showPassage()',1000);
    var value  = score++;
        timer.innerHTML = value;
    var bx = pF(ball.style.left = pF(ball.style.left) + dx + 'px') | 0,
        by = pF(ball.style.top = pF(ball.style.top) + dy + 'px') | 0,
        row = ((by - 30) / 14) | 0, col = (bx / 32) | 0;

    if (bx < 0 && dx < 0 || bx >= 314 && dx > 0)
      dx *= -1;

    if (bx + 6 >= px && bx <= px + 58 && by >= 259 && by <= 264) {
        dy *= -1;
      if (bx <= px + 15){
        dx = -6;
      }
      else if (bx >= px + 37){
        dx = 6;
      }
      else if (Math.abs(dx) === 6){
       dx = (dx * 2 / 3) | 0;
      }
    }
    if (by < 0){//天井
      dy *= -1;
    }
    if (by >= 288 && !--lifes){
      lifesNode.innerHTML = 0;
      
    clearInterval(cycle), alert('Game over!');
    //ajax送信
    $.ajax({
        url : "ajax.php",
        type : "POST",
        //dataType:"json",
        data : {post_data_1: value},
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax通信に失敗しました");
        },
        success : function(response) {
            console.log("ajax通信に成功しました");
            console.log(response);
	    $('#response').html(response);
        }
    });

   }
    if (by >= 288 && lifes){
     dy *= -1, lifesNode.innerHTML = lifes;
    }
    /*if (by >= 18 && by <= 100 && fld[row * 10 + col].className != 'removed') {
      dy *= -1, fld[row * 10 + col].className = 'removed';
      if (dx < 0 && (bx % 32 < 10 || bx % 32 > 22)){
        dx *= -1;
      }
      if (dx > 0 && ((bx + 12) % 32 < 10 || (bx + 12) % 32 > 22)){
        dx *= -1;
      }*/
    //  if (score == 50){
      //  clearInterval(cycle), alert('Victory!');
     // }
  }, 1000 / 60);
  document.addEventListener('mousemove', function (e) {
    px = (e.pageX > 40) ? ((e.pageX < 290) ? e.pageX - 40 : 256) : 0;
    paddle.style.left = px + 'px';
  }, false);
  }
  (field.children, parseFloat, 129, -4, -4, 3, 0));
}
