function logText1<T>(text: T): T {
    console.log(text);
    return text;
}

logText1<string>("hi");

function logText(text: string) {
    console.log(text);
    return text;
}

function logNumber(num : number) {
    console.log(num);
    return num;
}
// 비효율적이다. 타입 때문에 이렇게 두가지로 써야하는것.

// 그렇다면 union 을 쓰는게 좋은가? 아래처럼.
function logTextUnion(text: string | number) {
    console.log(text);
    return text;
}

// 반환값의 타입이 string | number 이라서 각각의 api들을 사용하지 못한다.
// 즉, 반환값에 문제가 생긴다.
logTextUnion(10);
logTextUnion("hi");

// 그렇다면 제네릭으로 해서 해결해보자.
function logTextGeneric<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logTextGeneric<string>("Hi");
// 이렇게 api를 사용할 수 있다. string에 대한 api를 쓸 수 있게 됐다.
str.split("");

// @@ 정의할때는 타입을 비워두었다가 호출 시점에 어떤 타입이 들어갈건지 결정.

// interface 에 제너릭 선언.
interface Dropdown {
    value: string,
    selected: boolean
}

const example1: Dropdown = {value: "abc", selected: false};
// value 가 string이 아니면 오류가 남.

interface DropdownGeneric<T> {
    value: T,
    selected: boolean
}

const example2: DropdownGeneric<number> = {value: 10, selected: true};
// 호출 시에 타입을 넣어준다.

// 제너릭의 타입 제한
// 원래는 아래 text.length는 수행되지 않음. 사용자만 T로 string이 들어오는 걸 알고,
// typescript 측에서는 모르니까 T type에는 length라는 api가 없다고 뜸. 
// T를 배열로 만들면서 가능하게 함.
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(t => {
        console.log(t);
    })
    return text;
}

logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLengthInherit<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLengthInherit("abc");
// logTextLengthInherit(100); -> 에러 발생. 숫자 100에는 length api 가 없음.
logTextLengthInherit({length: 10}); 
// 위는 length속성만 있으면 되는거니까 가능.

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string,
    price: number,
    stock: number
}

// ShoppingItem에 있는 key들중에 한가지가 바로 제네릭이 될 것이다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption("name");