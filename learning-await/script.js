const first = function() {
    return new Promise((resolve, reject) => {
        // reject("エラー");
        console.log("1...");
        setTimeout(() => resolve("1が正常に完了しました！"), 1000);
    });
};

const second = function() {
    return new Promise((resolve, reject) => {
        console.log("2...");
        setTimeout(() => resolve("2が正常に完了しました！"), 2000);
    });
};

const main = async () => {
    try {
        const result1 = await first();
        console.log(result1);
        const result2 = await second();
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
};

const main = async () => {
    try {
        const result1 = await first();
        console.log(result1);
        const result2 = await second();
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
};

main();
