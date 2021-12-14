class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender?:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const jeongtai = new Human("jeongtai", 15, "male")
const sayHi = (person : Human): string => {
    return `Hello ${person.name}, your are ${person.age}, you are a ${person.gender}!`
};

console.log(sayHi(jeongtai));
export{};