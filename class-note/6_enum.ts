enum Shoes {
    Nike,
    Adidas
}

let myShoes = Shoes.Nike;

// 예제
enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer: string) {
    if (answer === Answer.Yes) {
        console.log("정답입니다.");
    }
    if (answer === Answer.No) {
        console.log("오답입니다.")
    }
}

askQuestion(Answer.Yes);
askQuestion("Y");