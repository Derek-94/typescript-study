// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
    return a + b;
}

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수를 정의하는 방식
function sumFinal(a: number, b: number) : number {
    return a + b;
}

// 함수의 optional 파라미터
function log(a: string, b?: string, c?: string) {
    
}

// parameter가 1개여도 가능. 물음표가 들어가있으므로.
log("hello")