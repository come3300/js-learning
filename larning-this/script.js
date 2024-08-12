// thisとは?
// thisはコードを実行しているオブジェクトを指します

// 1. method => Object {}
// 2. function => Window / Global

const person = {
    firstName: "ケビン",
    languages: ["英語", "日本語"],
    showLanguages() {
        this.languages.forEach((language) => {
            console.log(this.firstName, language);
        });
    },
    greet() {
        setTimeout(() => {
            console.log("Hello", this.firstName);
        }, 1000);
    }
}

person.greet();


