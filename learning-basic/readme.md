## 1. varよりもletとconst使おう

- varは最初のリリース(1995年から)
- let,constはES6(2015年から)

### varよりletとconstの方がいい

letとconstを使うとグローバル変数が影響しないんだが
varを使うとglobal変数に影響することがある,,,,

varを使用した時
if内で再度宣言している変数dataが最初に宣言した変数data
に影響してしまっている
```js
var data = "こんにちわ！";
var condition = true ;

if (condition) {
  var data = 123; //数値型で再宣言してる
  console.log(data);
}

console.log(data); // 123が返される グローバル変数が更新された
```


// letを使った時
```js
let data ="こんにちわ!";
let condition = true ;
if (condition){
    let data =123;
    console.log(data); //123が返される
}

console.log(data); // こんにちわ！が返される
```

### varだと定数が定義できない

varだけだと
```js
var GRAVITY = 9.81; 引力は定数に定義する
GRAVITY =15; 定数にしたいのに変更できてしまう、、、、
condole.log("引力 = $(GRAVITY)m/s")
```

constを使うと
```
const GRAVITY = 9.81; 引力は定数に定義する
GRAVITY =15; 定数にしたいのに変更できてしまう、、、、
condole.log("引力 = $(GRAVITY)m/s")
```
## 2. if文で厳密に比較する「===」

==だけだと型が違ってもtrueが返ってくる,,,
```js
console.log(0 == "0") // true
console.log(1 == true) // true
console.log(null == undefined) // true
```

===だけだと型が違うと判定してくれてfalseが返ってくる
```js
console.log(0 === "0") // false
console.log(1 === true) // false
console.log(null === undefined) // false
```
## 3. ショートハンドの悪い習慣

良いコード 波かっこでforを囲んだ場合
悪いコード 波かっこでforを囲んでいない
```js
for (let i = 0; i < 5; i++ )
    console.log("実行された"+ i + "回目");
    console.log("あれ一回しか実行されない"+ i + "回目");
```

```js
for (let i = 0; i < 5; i++ ){
    console.log("実行された"+ i + "回目");
    console.log("それも実行された"+ i + "回目");
}
```

実行結果
![実行結果画面](<スクリーンショット 2024-08-18 23.37.20.png>)

## 5. グローバル変数の宣言
まとめる

## 6. for文内での変数宣言
まとめる

## 10. newキーワードについて

悪いコード newで宣言している
```js
var arr = new Array();
var obj = new Object();
```

良いコード リテラル構文を使用している
```js
var arr = [];
var obj = {};
```

