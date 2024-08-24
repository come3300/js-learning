// 概要について
// 非同期処理を実装するにあたって
// Promiseを使った非同期処理の実装方法
// Async/Awaitを使った非同期処理の実装方法
// を比較して

// どっちの方がベストアンサーなのかを比較する
// →結論:Async/Awaitを使った方がいい

// TODO
// 以下の関数を調べること
// - Promise
// - .then
// - Async/Await


const first = function() {
    return new Promise((resolve, reject) => {
        // reject("エラー"); // エラーになる,,,（rejectは正常に実行されない）  // ※3
        console.log("1...");
        setTimeout(() => resolve("1が正常に完了しました！"), 1000); // ※1
    });
};

const second = function() {
    return new Promise((resolve, reject) => {
        console.log("2...");
        setTimeout(() => resolve("2が正常に完了しました！"), 2000);// ※2
    });
};

// ** 確認1 
// どちらも日同期処理を返す関数
// 最初にconsole.logが走ってその後にsetTimeoutが発火して非同期処理を再現している,,,,

// first().then(result => {
//     console.log(result);
//     // ※1→実行した1秒後に"1が正常に完了しました！"が表示される
//     return second();
// }).then(result => {
//     console.log(result);
//     // ※2→実行した2秒後に"2が正常に完了しました！"が表示される
// }).catch(error => {
//     console.log(error); // ※3 エラーが発生した場合に表示される
// });

// ** ここまでの処理でPromiseの.thenのデメリット
// 1. thenのネストが深くなり、可読性が悪くなる
// 2. エラーハンドリングが複雑になる
// 3. 途中でエラーが発生した場合、それ以降の処理が実行されない
// 4. デバック試験管理と保守等が大変になる,,,,
// 要はいけてないコードになっちゃう,,,

// ** 確認2
// 以下の処理をAsync/Awaitを使って書き換える
// const main = async () => {
//↑上記のasyncについて: asyncは関数の前につけることで、その関数が非同期関数であることを示し、Promiseを返すようになる
//     try {
//         const result1 = await first();

// ↑上記のawaitについて: awaitはPromiseを返す関数の前につけることで、その関数が完了または拒否されるまで待機する。完了したらPromiseが持っている結果を返すl
// ※awaitはasync関数内でしか使えない

//         console.log(result1);
//         const result2 = await second();
//         console.log(result2);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const main = async () => {
//     try {
//         const result1 = await first();
//         console.log(result1);
//         const result2 = await second();
//         console.log(result2);
//     } catch (error) {
//         console.log(error);
//     }
// };

// main();
