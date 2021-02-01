interface DeveloperGuard {
    name: string,
    skill: string
}

interface PersonGuard {
    name: string,
    age: number
}

function introduce(): DeveloperGuard | PersonGuard {
    return {name: "Tony", age: 33, skill: "hero"}
}

let tony = introduce();

// console.log(tony.skill) // 안되는 이유 -> 유니온 타입은 공통된 속성만 접근 가능하다!!
// 그래서 tony의 name만 접근 가능.

// 타입 단언을 이용해서 해결 해보자. 가능은 하다.
if((tony as DeveloperGuard).skill) {
    let skill = (tony as DeveloperGuard).skill;
    console.log(skill)
}else if ((tony as PersonGuard).age) {
    let age = (tony as PersonGuard).age;
    console.log(age);
}

// 이렇게 하면 접근은 가능한데.. 너무 복잡하다 

// type guard 를 쓰자.
// 
// 아래 isDeveloper를 통과하고 나면 인자로 넘겼던 target이 Developer 인지 알수 있다.
function isDeveloper(target: DeveloperGuard | PersonGuard): target is DeveloperGuard {
    return (target as DeveloperGuard).skill !== undefined;
}

if(isDeveloper(tony)) {
    tony.skill // 접근가능! Devloper 속석 접근 가능.
} else {
    tony.age // Person 속성까지 접근가능!
}