// let tgtjson = '"{"menu":[{"id":10,"name":"神戸牛","せいろ蒸し":[{"id":100,"title":"せいろ蒸し(6000円)"},{"id":101,"title":"せいろ蒸し(8500円)"}],"焼き肉":[{"id":200,"title":"焼き肉(5000円)"},{"id":201,"title":"焼き肉(8000円)"}]},{"id":10,"name":"黒毛和牛","せいろ蒸し":[{"id":300,"title":"せいろ蒸し(2600円)"},{"id":301,"title":"せいろ蒸し(3300円)"}],"焼き肉":[{"id":400,"title":"焼き肉(9800円)"},{"id":401,"title":"焼き肉(28000円)"}]}]}';

// let tgtjson = '{"menu":[{"cate":"神戸牛"},{"subcate":{"name":"せいろ蒸し","submenu":[{"id":1000,"name":"せいろ蒸し(6000円)"},{"id":1100,"name":"せいろ蒸し(8000円)"}]}},{"cate":"黒毛和牛"},{"subcate":{"name":"せいろ蒸し","submenu":[{"id":1000,"name":"せいろ蒸し(6000円)"},{"id":1100,"name":"せいろ蒸し(8000円)"}]}}]}';

// let tgtjson = '{"ハンバーグ":{"分類":"洋食","主成分":"タンパク質"},"カレー":{"分類":"洋食","主成分":"炭水化物"},"親子丼":{"分類":"和食","主成分":"タンパク質"}}';
let tgtjson = '{"黒毛和牛":{"ID":"100","サブカテゴリ":"せいろ蒸し"},"神戸牛":{"ID":"200","サブカテゴリ":"焼き肉"}}';
let myobj = JSON.parse(tgtjson);
// console.log(myobj);
for (item in myobj) {
    console.log(myobj[item]["ID"]);
    // console.log(myobj)
}


// const jsonString = '{"name": "John", "age": 30, "isMarried": false}';
// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.name); // "John"
// console.log(parsedObject.age); // 30
// console.log(parsedObject.isMarried); // false
