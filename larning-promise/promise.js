function checkStock(callback) {
    console.log("在庫確認...");
    return new Promise((resolve, reject) => {
        setTimeout(() => { callback(); }, 1000);
    });
}

function prepare(callback) {
    console.log("準備...");
    return new Promise((resolve, reject) => {
        setTimeout(() => { callback(); }, 2000);
    });
}

function serve(callback) {
    console.log("提供...");
    return new Promise((resolve, reject) => {
        setTimeout(() => { callback(); }, 1000);
    });
}

checkStock(() => {
    prepare(() => {
        serve(() => {
            console.log("完成！");
        });
    });
});
