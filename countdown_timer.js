/**
 * 数値が1桁だったら2桁の文字列にして返す
 * 
 * @param {*} value 
 */
function __setDoubleFigures(num) {
  var res;
  if (num < 10) {
    res = "0" + num;
  } else {
    res = num;
  }
  return res;
}

/**
 * 数値でなかった場合にゼロを返す
 * 
 * @param {*} num 
 */
function __returnZeroNotNumber(num) {
  if (isNaN(num)) {
    return 0;
  }
  return num;
}

/**
 * カウントダウンを実行する
 */
function execCountdown() {
  var dateString = "2019-11-17 00:00:00";
//   // 日付と時間に分ける
//   var splitDateTime = dateString.split(" ");
//   // 年・月・日に分ける
//   var dateAry = splitDateTime[0].split("-");
//   // 時・分・秒に分ける
//   var timeAry = splitDateTime[1].split(":");

  

//   var year  = __returnZeroNotNumber(dateAry[0]);
//   var month = __returnZeroNotNumber(dateAry[1] - 1);
//   var date  = __returnZeroNotNumber(dateAry[2]);
//   var hour  = __returnZeroNotNumber(timeAry[0]);
//   var min   = __returnZeroNotNumber(timeAry[1]);
//   var sec   = __returnZeroNotNumber(timeAry[2]);

  // 現在日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
  var nowDate = new Date();
  var timeNow = nowDate.getTime();
 
  // 指定日時を数値(1970-01-01 00:00:00からのミリ秒)に変換
  var targetDate = new Date(dateString);
//   var targetDate = new Date(year, month, date, hour, min, sec);
  var timeTarget = targetDate.getTime();
 
  // 表示を準備
  var deadlineYear  = targetDate.getFullYear();
  var deadlineMonth = __setDoubleFigures(targetDate.getMonth() + 1);
  var deadlineDate  = __setDoubleFigures(targetDate.getDate());
  var deadlineHour  = __setDoubleFigures(targetDate.getHours());
  var deadlineMin   = __setDoubleFigures(targetDate.getMinutes());
  var deadlineSec   = __setDoubleFigures(targetDate.getSeconds());

  var msg1 = "期限の" + deadlineYear + "/" + deadlineMonth + "/" + deadlineDate;
      msg1 += " ";
      msg1 += deadlineHour + ":" + deadlineMin + ":" + deadlineSec;
 
// ========================================================

  // 日数(ミリ秒)の差を計算
  var dateDiff = timeTarget - timeNow;
  if (timeTarget < timeNow) {
     // 期限が過ぎた場合は -1 を掛けて正の値に変換
     dateDiff *= -1;
  }
 
  // 差のミリ秒を、日数・時間・分・秒に分割
  var pastDays = dateDiff / ( 1000 * 60 * 60 * 24 ); // 日数
  dateDiff  = dateDiff % ( 1000 * 60 * 60 * 24 );
  var pastHour = dateDiff / ( 1000 * 60 * 60 ); // 時間
  dateDiff  = dateDiff % ( 1000 * 60 * 60 );
  var pastMin  = dateDiff / ( 1000 * 60 ); // 分
  dateDiff  = dateDiff % ( 1000 * 60 );
  var pastSec  = dateDiff / 1000; // 秒

  var msg2 = Math.floor(pastDays) + "日"
           + Math.floor(pastHour) + "時間"
           + Math.floor(pastMin) + "分"
           + Math.floor(pastSec) + "秒";
 
  // 表示文字列の作成
  var msg = "";
  if (timeTarget > timeNow) {
     // まだ期限が来ていない場合
     msg = msg1 + "までは、あと" + msg2 + "です。";
  } else {
     // 期限が過ぎた場合
     msg = msg1 + "は、既に" + msg2 + "前に過ぎました。";
  }
 
  console.log(msg);

  // 作成した文字列を表示
  document.getElementById("RealtimeCountdownArea").innerHTML = msg;
}

// 1秒ごとに実行
setInterval('execCountdown()',1000);
