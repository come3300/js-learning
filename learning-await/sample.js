var sample = new Promise(function(resolve, reject) {
    setTimeout(function() {resolve();
    }, 3000);
});

sample.then(function(value) {
    console.log("Promise成功!");
});

console.log("先に出力");
