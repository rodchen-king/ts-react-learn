function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';

let isDone: boolean = true;
let number: number  = 1;
let name: string = "rodchen";

// 数组
let list: number[] = [1, 2, 3]
let listArray: Array<number> = [1, 2, 3]

// 元祖 Tuple
let x: [string, number]
x = ['hello', 10]

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[0] = 'world';
console.log(x[0])


// 枚举值
enum Color {Red, Green, Blue}               // 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
let c: Color = Color.Green;
console.log(c)                              // 1

// enum Color {Red = 1, Green = 2, Blue = 4}   // 手动设置值 
// let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let colorName: string = Color[2];

// console.log(colorName);                     // 显示'Green'因为上面代码里它的值是2


// any
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.


function warnUser(): void {
  console.log("This is my warning message");
}


// null undefined
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
let u: undefined = undefined;
let n: null = null;


// 类型断言
// “尖括号”语法
// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;

// as 语法，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;


console.log(sayHello(user));

export default sayHello