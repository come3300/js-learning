# promise内での便利な関数について

## promiseのステータス

![alt text](<スクリーンショット 2024-09-03 18.42.03.png>)

- resolve()でPromiseを解決できる
- エラーが処理中に発生した場合にはrejected()処理を拒否できる
- 上記のいずれかが実行されるまではpromiseは待機中(pending)のステータスを維持する

### .resolveと.catchについて

- .resolve→promiseで実行した処理が正常に実行された時の値を返す
- .catch→rejected()でエラーになった時にどういう値を返すのかを定義できる(エラーハンドリング)
## promiseのハンドリングについて

![alt text](<スクリーンショット 2024-09-03 18.51.32.png>)
つまり.catch()で処理しない場合はエラーが発生して、プログラムを終了させるようになっている

## promiseが実装される前のコールバック地獄のサンプルコードについて

![alt text](<スクリーンショット 2024-09-05 7.50.31.png>)

### コールバック地獄をpromiseでリファクタリングすると,,,

![alt text](<スクリーンショット 2024-09-03 18.59.21.png>)

### resolve関数



```js
Promise.resolve（"成功！"）
.then ( (value) => {
console. log(value);
｝）；
```

resolve()メソッドは.then関数内の処理を試したい時に便利

```js
Promise.reject（"成功！"）
.reject ( (value) => {
console. log(value);
｝）；
```
.rejectメソッドは.catch関数内の処理を試したい時に便利


```js
Promise.all([

new Promise((resolve, reject) => setTimeout (reject, 1000, "早い)")),

new Promise((resolve, reject) => setTimeout (reject, 500, "一番早い)")),

new Promise((resolve, reject) => setTimeout (reject, 1500, "遅い)"))

]）
.then ((values) => {
console.1og（"成功！：" + values）;
.catch ((error) => {
console.log（"エラー！：" + error);
});
```

.all関数はpromiseで実行された処理を全て実行した後に配列で処理を返す
処理が止まるとすぐに.catch関数が実行される