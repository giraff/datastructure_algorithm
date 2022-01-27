
// 1. 클래스 구문
class Polygon {
    constructor(height, width) {
        this.area = height * width;
    }
}

// 클래스 사용 : new 연산자 
console.log(new Polygon(4,3).area);
// expected output : 12

/**
 * [ 구문 ]
 * 
 *  class name [extends] {
 *      // class body
 *  }
 */

// class expression

/**
 * class 표현식은 ES6에서 클래스를 정의하는 한 방법
 * function 식과 비슷하게, class 식은 기명(named) 또는 익명(unnamed) 일 수 있음
 * 기명인 경우 클래스명은 클래스 body 에서만 지역(local) 이다.
 * js class는 prototype(원형) 기반 상속을 사용하며 주어진 이름의 새로운 클래스를 만든다
 */

// 2. 클래스 표현식
const Rectangle = class {
    constructor(height, width) {
        // class 변수
        this.height = height;
        this.width = width;
    }

    // class 함수
    area() {
        return this.height * this.width;
    }
};

console.log(new Rectangle(4,3).area());
// expected output : 40

/**
 * [ 구문 ]
 *  var myClass = class [className] [extends] {
 *      // class body
 *  }
 */

// [익명 클래스]
var Foo = class {
    constructor() {}
    bar() {return 'Hello World';}
};

var instance = new Foo();
instance.bar(); // "Hello World"
Foo.name; // "", 익명 클래스라서 name에 값이 존재 하지 않는다


// [유명 클래스] 
// NamedFoo라고 이름을 지은 class 식을 만들었다면 
// NamedFoo라는 이름은 오직 class 자체 범위에서만 볼 수 있다
var Foo = class NamedFoo {
    constructor() {}
    whoIsThere() {return NamedFoo.name;} // class 자체 범위를 벗어나지 않음
}

var bar = new Foo();
bar.whoIsThere();  // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo가 정의되지 않음 (class 자체 범위를 벗어남)
Foo.name; // "NamedFoo";