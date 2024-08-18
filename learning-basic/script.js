// 基礎構文をデバックして動作確認するためのディレクトリ

// 問題として再宣言ができてしまう
// 悪いコード

var data = "こんにちわ！";
var condition = true ;

if (condition) {
  var data = 123; //数値型で再宣言してる
  console.log(data);
} 

console.log(data); // 123が返される　グローバル変数が更新された

// いいコード
// letを代わりに使用する

// let data ="こんにちわ!";
// let condition = true ;
// if (condition){
//     let data =123;
//     console.log(data); //123が返される
// }

// console.log(data); // こんにちわ！が返される

