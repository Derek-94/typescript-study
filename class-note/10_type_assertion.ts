// 타입 선언 type assertion
let a;
a = 20;
a = "asd";
let b = a as string;
// as string 이 없다면 b의 타입은 any로 추정됨.

// 타입 스크립트보다 개발자가 타입을 더 잘 알고 있으니까, 
// 타입 스크립트 너는 신경 쓰지말고, 내가 as로 정의한 타입으로 생각해라.


// DOM API 조작.
let divTag = document.querySelector("div");
// 윗 줄 divTag에 마우스 hover 하면 타입나온다.

// C:\Users\Derek\Desktop\Programming\learn-typescript\quiz\2_address-book\src\index.ts 여기에 
// @ 110번째 줄!
// 뒤에 as HTMLDIVELEMENT 가 없으면 아래 innerHTML 이 실행 안됨. NULL 일수도 있다고 타입스크립트가 경고함.