function checkStock(callback) {
    console.log("在庫確認...");
    setTimeout(() => { callback(); }, 1000);
}

function prepare(callback) {
    console.log("準備...");
    setTimeout(() => { callback(); }, 2000);
}

function serve(callback) {
    console.log("提供...");
    setTimeout(() => { callback(); }, 1000);
}

checkStock(() => {
    prepare(() => {
        serve(() => {
            console.log("完成！");
        });
    });
});
