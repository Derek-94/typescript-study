class Person {
    private name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const personObj = new Person("Derek", 29);