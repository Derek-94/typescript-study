// 인터페이스 호환
interface Developer12 {
    name: string,
    skill: string
}

interface Person12 {
    name: string
}

let dev: Developer12;
let per: Person12;

dev = per; // dev는 per보다 더 크다. 에러난다!
// per 에는 skill property가 없으므로 할당 할 수 없다.
// per는 dev의 부분집합이므로.

per = dev; // 이건 가능하다.

class Personclass {
    name: string;
    skill: string
}
dev = new Personclass(); // 이건 가능.


// 함수
let adding = function(a: number) {
    // console.log(a);
}

let suming = function(a:number, b: number) {
    // return a + b;
}
// suming 이라는 함수의 구조는 add 함수의 구조보다 더 크다. 

adding = suming; // error!
suming = adding; // 이건 가능. 넓은 범위에다가 작은 범위로 호환은 가능하다.


// 제너릭
interface Empty<T> {
    // 비운다.
}

let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;
// 이거는 가능하다. 저건 비었으니까.

interface NotEmpty<T> {
    data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
// 속성은 동일하지만 타입이 다르므로 불가능하다.