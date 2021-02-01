function logMessageTest(value: string) {
    console.log(value);
}

logMessageTest("hello");

// 특정 변수에 한가지 이상의 타입을 쓰고 싶을때 -> 유니온 타입.
function logMessage1(value: string | number) {
    if(typeof value === "number") {
        value.toLocaleString();
    }
    else {
        value.toString();
    }
    throw new TypeError("value must be string or number");
}

interface DeveloperOperator {
    name : string,
    skill: string
}

interface WorkerOperator {
    name : string,
    age: number
} 

function askSomeone(someone: WorkerOperator | DeveloperOperator) {
    // Developer 와 Person의 공통된 속성인 name만 접근가능함.
    someone.name // 만 접근 가능.
}

askSomeone({name: "Derek", skill: "d"});
askSomeone({name: "Derek", age: 2});

function askSomeone1(someone: DeveloperOperator & WorkerOperator) {
    // Developer 와 Person의 모든 속성에 접근 가능함.
    // Developer 와 Person 의 모든 속성을 합친 개념.
}

askSomeone1({name: "Derek", skill: "webDevelop", age: 30})