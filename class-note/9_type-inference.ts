// 타입 추론 기본. 
function getA (a = 10) {
    let c = "hi"
    // 반환은 "10hi" 인 string이다. 마우스를 hovering 하면 나온다.
    return a + c;
}

// 타입 추론 기본 2
interface DropdownInference<T> {
    value: T,
    title:string
}

let shoppingItem: DropdownInference<string> = {
    value : "사과",
    title : "fruit"
}

// 타입 추론 기본 3
interface Dropdown1<T> {
    value: T,
    title: string
}

interface Dropdown2<K> extends Dropdown1<K> {
    description: string,
    tag : K
}

let detailedItem: Dropdown2<string> = {
    title: "abc",
    description: "aa",
    value: "12",
    tag: "aa"
}

// Best Common Type
// 타입스크립트가 해당 코드를 어떤 타입으로 해석하는지 방식.
let arr = [1, 2, true];
// 모든 타입에 대해서 유니온으로 묶어나간다.