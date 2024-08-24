## promiseについて

promiseのわかりやすいサンプルコード
```js
var sample = new Promise(function(resolve, reject) {
    setTimeout(function() {resolve();
    }, 3000);
});

sample.then(function(value) {
    console.log("Promise成功!");
});

console.log("先に出力");
```

処理の流れとして通常通り処理が実行されるのなら
上から下に処理が実行されるので

1. Promise成功!が出力される
2. 先に出力が出力される

だが、非同期処理になっているので通常の処理とは異なり

1. 先に出力が出力される
2. Promise成功!が出力される(3秒後に実行されるため)

これが非同期処理と呼ばれるもので、
時間がかかる処理が完了する前に次に控えている別の処理が実行されている様子がわかります。

