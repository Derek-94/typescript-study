interface User {
    age: number,
    name: string
}

let seho: User = {
    age: 33,
    name: "seho"
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: "captain",
    age: 100
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number) : number
}

let sum: SumFunction;

sum = function(a, b){
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ["a", "b"];

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let objRegex: StringRegexDictionary = {
    cssFile: /\.css$/
}

Object.keys(objRegex).forEach(function(value) {});

// 인터페이스 확장
interface Student {
    name: string,
    age: number;
}

interface graduantee extends Student{
    lan: string;
}

const tmp: graduantee = {
    lan : "C++",
    name: "Derek",
    age: 28
}