# JavaScriptで知っとくと便利な配列関数 10選

```js
const studies = [
    { language: 'HTML', hours: 10 },
    { language: 'CSS', hours: 20 },
    { language: 'JavaScript', hours: 150 },
    { language: 'Node.js', hours: 60 },
    { language: 'React', hours: 100 },
    { language: 'SQL', hours: 50 },
    { language: 'Python', hours: 120 },
    { language: 'TypeScript', hours: 30 },
    { language: 'Java', hours: 110 },
    { language: 'C#', hours: 10 }
];
```

上記コードに対して書くメソッドを使うとどういう処理が出るのかを
解説していく


## 1. forEach
```js
studies.forEach((study) => {
    console.log(study.language); //languageのみが全て順に出力される
    console.log(study.hours); //hoursのみが全て順に出力される
});
```
forEachを使わずに出力すると,,,

```js
for(let i = 0; i < studies.length; i++){
    console.log(studies[i].hours);
}
```

上記のように書くこともできるよね,,,

## 2. map

map関数を使うと既存の定義されている配列から別の新しい配列を定義できる

```js
const doubledHours = studies.map((study) => {
    return 2 * study.hours;
});

console.log(doubledHours);//勉強時間を2倍にした配列が出力される
```

## 3. filter

条件に満たした配列の値を返してくれる
```js
const filterStudies = studies.filter((study) => {
    return study.hours > 50;
});

console.log(filterStudies);//勉強時間が50時間より多い時間だけを返してくれる
```

## 4. slice

```js
const slicedStudies = studies.slice(2,5); //配列の順番が2~5番目の配列の値を返してくれるようになる
console.log(slicedStudies);//勉強時間が50時間より多い時間だけを返してくれる
```

## 5. sort
```js
const sortedStudies = studies.sort((a,b) => {
    return a.hours - b.hours;
});

console.log(sortedStudies); //勉強時間が少ない順に出力される
// return a.hours - b.hours;の結果の意味がよくわからない

```

### デメリット

元の変数も処理を実行した結果が反映される
→変数studiesも勉強時間が少ない順で出力されるので周囲が必要
```js
const sortedStudies = studies.sort((a,b) => {
    return a.hours - b.hours;
});

console.log(studies); //この変数も勉強時間が少ない順になってしまう,,,

```

* 対策としてslice関数を使って元の関数をコピーしておくと良い
```js
const sortedStudies = studies.slice().sort((a,b) => { //
    return a.hours - b.hours;
});

console.log(studies); //この変数も勉強時間が少ない順になってしまう,,,

```

## 6. find

0番目から順番に対象の値が入っている配列の番号(何番目か)を返す
```js
const foundStudy = studies.find((study) => { //
    return study.hours > 50;
});

console.log(foundStudy); //2番目の{ language: 'JavaScript', hours: 150 }が返される
```

## 7. findIndex

0番目から順番に対象の値が入っている配列の番号(何番目か)を返す
```js
const foundStudies = studies.findIndex((study) => { //
    return study.hours > 50;
});

console.log(foundStudies); //2番目の{ language: 'JavaScript', hours: 150 }が対象になるので2が返される
```

## 8. some
条件を満たす値が配列内にあればtrue なければfalseが返ってくる

```js
const isLongStudy = studies.some((study) => { //
    return study.hours > 50;
});

console.log(isLongStudy); //勉強時間が50時間より大きい値があればtrueが返ってくる → つまりtrueが返ってくる
```

## 9. every
配列ないの全ての値が条件を満たす場合trueを返す,1つでも満たさない場合はfalseを返す

```js
const allLongStudy = studies.every((study) => { //
    return study.hours > 50;
});

console.log(allLongStudy); //勉強時間が50時間より大きい値に全てなっていればtrueが返ってくる → つまりfalseが返ってくる
```

## 10. reduce
配列全体を一つの値にまとめるために使う
例えば配列ないの要素の値を計算したり、配列内のマックスの値を調査したりできる

```js
const totalHours = studies.reduce((accumulator,currentValue) => { //
    return accumulator + currentValue.hours //一つずつ勉強時間が足されていく
},0);

console.log(totalHours); //勉強時間の合計値660が返ってくる
```

accumulator;累積値として扱う 今回勉強時間の合計なので0
currentValue;現在の要素を表す
