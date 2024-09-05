const sushiOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        let stock = 1;
        if(stock >= 1) {
            resolve("🍣");
        } else {
            reject("売切れ");
        }
    }, 2000);
});

sushiOrder.then(message => {
    console.log("成功：" + message);
}).catch(errorMessage => {
    console.log("エラー：" + errorMessage);
});

// console.log(sushiOrder);→実行してみると、Promise { <pending> }と表示される。
// では上記問題を解説するには.then()メソッドを使う必要がある。
// .thenメソッドを実行することで.then()メソッドの引数に渡した関数が実行される。