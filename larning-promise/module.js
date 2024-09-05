const fs = require('fs').promises;

const result = fs.readFile("stock2.json", "utf-8");
// console.log(result);→ Promise { <pending> }と表示される。
result.then(content => {
    console.log(content);
}).catch(error => {
    console.log("エラー：" + error);
});
