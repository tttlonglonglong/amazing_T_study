


/*@flow*/
function add(x, y) {
    return x + y
}

add("aaaaa", 11)

// @flow   
// @ts-check  
function foo(x: number): number {
    return x + 10
}
foo(1111)



function split(str) {
    return str.split(' ')
}

split('s')


var arr: Array<number> = [1, 2, 3]

arr.push(1)

class Bar {
    x: string;           // x 是字符串
    y: string | number | void;  // y 可以是字符串或者数字
    z: boolean;
    // void : 可传可不传
    constructor(x: string, y: string | number | void) {
        this.x = x
        this.y = y
        this.z = false
    }
}

var bar: Bar = new Bar('hello', 4)

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
    a: 'hello',
    b: 11,
    c: ['hello', 'world'],
    d: new Bar('hello', 3)
}