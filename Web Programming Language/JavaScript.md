# JavaScript

- JavaScript는 객체 기반의 스크립트 프로그래밍언어다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다.
- 특징
    - 인터프린터 언어다.(컴파일 과정이 없음)
    - 동적 자료형을 가진다.(숫자, boolean, 객체, 함수를 변수에 대입 가능)
        - 오료가 발생 할 수 있음(ex. 함수의 매개변수 타입이 호환되지 않는 경우)
    - 객체지향을 지원하지만 prototype을 기반으로 만들어짐(c, java와는 다름)
- 용도
    - 웹 사이트에 사용할 목적으로 만들어졌다.
    - HTML, CSS는 마크업 언어이기 때문에 배치하고 장식하는 용도로 밖에 사용할 수 없다.
    - HTML, CSS가 어떤 동작을 하게 만드려면 Javascript를 사용해야한다.
    - 백엔드, 모바일 어플, 인공지능 등 다양한 분야에 사용함
 
- 스크립트 프로그래밍 언어란 응용 소프트웨어를 제어하는 컴퓨터 프로그래밍 언어를 가리킨다. 스크립트언어는 응용 프로그램과 독립하여 사용된다. 다른 언어는 컴파일 된 후 독립적으로 작동하는 하나의 완전한 응용 프로그램이지만, 스크립트 언어는 다른 응용 프로그램 안에 삽입되어 해석되는 방식으로 작동한다.<br>
APP : web browser, script : javascript

# 자료형

- console: 자바스크립트의 기능이 아니고 환경의 기능이다.
    - 개발 편의를 위해 제공하는 기능이다.
    - 웹 브라우저와 node.js에서 구현이 다르다.
    - log, info, wran, error가 자주 사용되는 메소드

## 숫자와 문자
- 자바스크립트에서는 큰따옴표("")나 작은 따옴표('')가 붙지 않은 숫자는 숫자로 인식한다.

```js
console.log(1 + 1); //결과 2

/* 수의 연산 */

Math.pow(3, 2); // 9 3^2
Math.round(10.6); // 11 반올림
Math.ceil(10.6); // 11 올림
Math.floor(10.6); // 10 내림
Math.sqrt(9); // 3 제곱근
N * Math.random(); // 0~N.0 사이의 랜덤한 숫자(실수)
```
- 1과 "1"은 다른 데이터 형식이다. (typeof value => value의 데이터 형식을 문자열로 반환)
- float
    - 0.1 + 0.2 = 0.300000001 원하는 결과가 아니다.(부동소수점을 사용하기 때문임)
    - 2로 나눈 소수를 연산한다면 원하는 값을 얻을 수 있다.
```js
/* 문자의 표현 */

console.log("Hello world"); // Hello world
console.log('Hello world'); // Hello world

// 문자열에서 따옴표를 표시하는 법 1 (다른 종류의 따옴표 사용하기)
console.log('Hello " world'); // Hello " world
console.log("Hello ' world"); // Hello ' world

// 문자열에서 따옴표를 표시하는 법 2 (따옴표 앞에 \추가하기 사용하기)
console.log("Hello \" world"); // Hello " world
console.log('Hello \' world'); // Hello ' world

// 문자열 결합
console.log("hello" + " world"); // hello world
console.log(1 + 1); // 2
console.log('1' + '1'); // 11
console.log('1' + 1); // 11, 다른 자료형에 문자열을 결합하면 그 자료형을 문자열로 변환하여 결합한다.

// 백틱 ' ` '
let age = 20;
let name = 'Tom';

console.log(`age: {$age}, name: {$name}`); //age: 20, name: Tom
```
- 문자열 데이터 타입은 여러가지 속성과 함수을 가지고 있다.<br>
ex) "string".length, "string".indexOf(data) ...

## 변수와 상수
### 변수
- 변수는 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다. 변수에 담겨진 값은 다른 값으로 바꿀 수 있다.
```js
var a = 1; // 변수 선언 a, a는 값이 저장되어있는 메모리를 참조하는 변수
           // 자바스크립트는 변수에 다양한 자료형을 대입 할 수 있어 저장될 메모리가 다르다. 따라서 참조를 사용한다.
console.log(a); // 1

let a = 1, b = 2, c = 3; //여러개 선언

var first = "coding";
alert(first+" everybody"); // coding everybody 
```
- 자바스크립트의 변수 선언방식에 var, let이 있다.
    - 
### 상수
- 상수는 당장 값이 바뀔 수 없다.
```js
const PI = 3.14;
Pi = 3.14159 ///오류
```
# 연산자
- 연산자란 값에 대해서 어떤 작업을 컴퓨터에게 지시하기 위한 기호. `a = 1` (a라는 변수에 1을 대입한다. "=" 는 대입연산자)
- JavaScript에서는 참과 거짓을 판별할 데이터 타입이 있는데 boolean이라고 한다. 종류는 `true`와 `false`가 있다.
- 비교 연산자 : 주어진 값들이 같은지, 다른지, 큰지, 작인지를 구분하는 연산자다. 비교 연산자로 연산한 결과는 `true`와 `false` 중의 하나다.
    - `==` 동등 연산자. 대입 연산자와 다르다. 값이 서로 같다면 `true`, 그렇지 않으면 `false`를 반환
        ```
        console.log(1 == 2); //false
        console.log(1 == 1); //true;

        console.log("one" == "two"); //true;
        console.log("one" == "one"); //true;

        ```
    - `===` : 좌항과 우항의 값, 데이터 형식까지 비교한다.

        ```
        console.log(1 == '1'); //true;
        console.log(1 === '1'); //false;

        // ==는 데이터의 형식이 다르더라도 의미가 같으면 true를 반환한다.
        
        console.log(null == undefine); // true
        console.log(null === undefine); // false

        console.log(true == 1); // true
        console.log(true == 2); // false
        console.log(true === 1); // false

        console.log(NaN === NaN) // false
        //NaN은 계산할 수 없다는 것을 의미한다. ex) 1/0
        ``` 
        - JavaScript에서 동등 연산자를 사용하게되면 예상치 못한 오류가 발생할 수 있으므로 `===`와 `!==`를 사용하도록하자.
    - 부정과 부등호 `!=, !==, >, >=, <, <=`
        - 부등호를 문자열에 사용하면 사전순으로 나중에 오는 것이 큰 값이다.

    - 산술연산자: `+, -, *, /, %, **`
        - 숫자에는 자유롭게 사용가능
        - 다른 자료형을 연산할 때 위 산술연산자를 사용한다면 `Nan`
        - 문자열을 숫자로 변환할 수 있음
            ```
            +'100' // 100(number)
            ```

# 블록문과 스코프
- 블록문 : `{ }`로 묶은 단위, 새로운 스코프를 생성한다.
    - 조건문, 반복문도 블록문을 선언해 새로운 스코프를 생성한다.
- 스코프: 데이터를 사용할 수 있는 영역
- 함수 단위 스코프의 변수 타입: `var`
- 블록 단위 스코프의 변수 타입: `let`, `const`
- 다른 스코프 변수들의 이름이 같을 경우 가까운 블록에서 할당된 값이 우선된다.(블록 스택)

```js
let a = 0;
let b = 1;
let c = 2;

console.log(a, b, c); // 0 1 2

{    
    let a = 'A';
    let b = 'B';
    console.log(a, b, c); // A B 2
    {
        let a = '가';
        console.log(a, b, c); // 가 B 2
    }
    console.log(a, b, c); // A B 2 
}

console.log(a, b, c); // 0 1 2
```
# 조건문
- 주어진 조건에 따라서 프로그램을 다르게 동작하는 것이다. `if(boolean)`
```
//if문의 괄호 안에는 true or false의 값만 들어올 수 있다.

if(true or false){
    // code ...
}
```
- if만으로는 좀 더 복잡한 상황을 처리하는데 부족하다.
```
if(true or false){
    console.log(1);
}
else{
    console.log(2);
}

// if의 값이 true라면 if문의 코드가 실행되고 false라면 else문의 코드가 실행된다.

if(true or false){
    console.log(1);
}
else if(true or false){
    console.log(2);
}
else{
    console.log(3);
}

/* 
if의 값이 true인 경우 1 출력
if의 값이 false고 else if의 값이 true인 경우 2출력
if의 값이 false고 else if의 값이 false인 경우 3출력
*/
```

- 조건문안에 비교연산이 들어갈 수 있다.
```
if(id=='Harry'){
    console.log('아이디가 일치 합니다.');
} 
else {
    console.log('아이디가 일치하지 않습니다.');
}
```

- 논리 연산자: boolean을 연산할 수 있다.
```
if(A && B){
    // code.
}
// A와 B의 식이 모두 true라면 조건문이 if문 실행, 그렇지 않으면 false 


if(A || B){
    // code.
}
// A와 B의 식 둘중 하나라도 true라면 if문 실행, 모두 false면 false

if(!A){
    // code.
}
// A가 false라면 !A는 true, A가 false라면 !A는 true가 된다.

// &&와 ||는 중접해 사용할 수 있다.
if((A && B) || C){
    ...
}

if((A || B) && C)
```

- boolean의 대체제
```
if(0){
    // false
}

if(1){
    // true
}

var a;

if('' || undefined || a || null || NaN){
    // 빈 문자열, undefined, 빈 변수, null, NaN은 모두 false로 취급함.
}
```

# 반복문
- 반복문은 컴퓨터에게 반복적인 작업을 지시하는 방법이다.
1. while 문
```js
while(조건){
    // code.
}

var i = 0;

while(i < 3){
    //반복이 실행될 때마다 Hello world!가 출력된다.
    console.log("Hello world!");
    // i의 값이 1씩 증가한다.
    i = i + 1;
}
// Hello world!
// Hello world!
// Hello world!

// 조건을 만족하는 동안 while문 안쪽의 code 실행, 반복 횟수를 특정할 수 없을 때 사용하는게 좋다.
```

2. for문
```js
for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
    //code.
}

for(var i = 0; i < 3; i++){
    console.log("Hello world! " + i);
}
//위쪽 while문과 같은 실행

// Hello world! 1
// Hello world! 2
// Hello world! 3

//for문은 반복 횟수를 특정할 수 있을 때 사용하는게 좋다.
```

3. 반복문의 제어
- 반복문을 언제까지 실행할 것이냐?
```js
for(var i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log("Hello world! " + i);
}

// Hello world! 1
// Hello world! 2
// Hello world! 3
// Hello world! 4

// break는 현재 반복문을 종료시키고 바깥으로 빠져나가는 역할을 한다.

for(var i = 0; i < 10; i++){
    if(i === 5){
        continue는;
    }
    console.log("Hello world! " + i);
}

// Hello world! 1
// Hello world! 2
// Hello world! 3
// Hello world! 4
// Hello world! 6
// Hello world! 7
// Hello world! 8
// Hello world! 9

// continue는 반복문을 중지하고 다음 동작을 실시한다.
```

# 함수
- 함수란 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여준다.
```js
function 함수명(parameter){
    //code .
    
    //return 반환값;
}

function numbering(){
    console.log(1);
} 
// 함수 정의

numbering(); // 1 출력
//함수 호출
```
- 함수는 한 번 정의해두면 여러번 사용할 수 있다. 중복을 제거하는데 유용하게 사용

- 다양한 함수 정의 방법
```js
var numbering = function (){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }   
}
numbering(); //123456789 출력

// 변수에 함수를 대입 할 수 있다. 변수이름으로 함수를 호출할 수 있다.

(function (){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }   
})();

```
## 일급 객체
- 함수를 변수와 같이 다루는 언어에 있는 개념
- 자바스크립트의 함수도 일급 객체(함수는 기본적으로 객체)
- 일급객체의 특성
    1. 상수 또는 변수에 할당 될 수 있음
    2. 다른 함수에 인자로 전달될 수 있음
    3. 다른 함수의 결과값으로서 반환될 수 있음
```js
let person = [
    //함수1
    //함수2
    //함수3
    //함수4
]

for(fucn of person){
    fucn();
}
//함수를 배열에 저장 할 수 있다.
```
- 콜백함수: 함수에 인자로 전달된 함수
- 익명함수: 함수의 이름이 없고 바로 호출되는 함수, 일회성으로 호출할 때 사용된다.

## 매개변수
- 함수의 매개변수 수보다 많은 인자를 넣으면 에러를 발생시키지 않고 초과된 매개변수는 사용하지 않는다.
- default parameter: 매개변수로 전달되지 않았을 때 사용하는 값
- arguments: 함수 내에서 사용가능한 지역변수
    - 함수에 전달된 매개변수(값, 객체, 함수)를 배열처럼 저장하고 사용할 수 있다.
 - rest parameters: `...변수그룹명`, 특정 매개변수들 뒤에 정해지지 않은 수의 매개변수들을 받을 때 사용한다.
    - 함수 선언 시 마지막 인자로만 사용 할 수 있다.

## 함수 추가 내용
- 중첩된 함수 사용가능
    - 함수 안에 또 다른 함수를 선언하고 호출 할 수 있다.
- 재귀함수: 자기 자신을 또 다시 호출하는 함수
- 즉시 실행 함수: 함수의 스코프를 제어하기 위해 사용한 이전 방법
    ```js
    (function (){
        //...
    })();
    ```
- 불변성: 함수의 매개변수가 원시타입이라면 참조하는 것이 아니라 복사한다.
- 좋은 함수는 외부에 영향을 받지 않는다. 매개변수만을 제어해서 새 값을 반환하는 것이 좋은 함수이다.
# 원시 타입과 참조 타입
- 원시 타입
     - 원시 타입은 깊은 복사가 자동으로 일어남(int, float, string, boolean ...)
- 참조 타입(메모리 공간의 주소를 저장하고 있는 변수 일때)
    - 단순히 대입 연산자만을 사용하면 깊은 복사가 이루어 지지 않고, 얕은 복사가 일어난다. (Object, Array)

# 배열
- 배열이란 연관된 데이터를 모아서 전체적으로 관리하기 위해 사용하는 데이터 타입. 변수가 하나의 데이터를 저장하기 위한 것이라면 배열은 여러 개의 데이터를 하나의 변수에 저장하기 위한 것이라고 할 수 있다.
```js
// 배열 선언
var member = ['hello', 'world'];

console.log(member[0]); // hello
console.log(member[1]); // world
// 배열의 데이터는 배열[index]로 접근 할 수 있다.
// 배열의 index는 0부터 시작해서 (배열의 요소 개수 - 1)까지의 정수이다. 

member.length // 배열의 크기를 반환함. 2

for(var i = 0; i < member.length; i++){
    console.log(member[i]);
}

for(const elem of member){
    // 원본 배열 값에 영향이 가지 않음
    console.log(elem);
}
//배열의 모든 요소를 출력하는 코드
```
- 배열은 데이터를 추가, 삭제, 수정이 가능하다.
```js
var li = ['a', 'b', 'c', 'd'];
li.push('e');
// li에 'e'가 추가되어 배열의 요소는 ['a', 'b', 'c', 'd', 'e']가 된다.

li.concat(['f', 'g']);
// li에 ['f', 'g']가 추가되어 배열의 요소는 ['a', 'b', 'c', 'd', 'e', 'f', 'g']가 된다.

li.unshift('z');
// li 시작지점에 'z'가 추가되어 배열의 요소는 ['z', 'a', 'b', 'c', 'd', 'e', 'f', 'g']가 된다.

li.splice(1, 0, 'x');
// li index 1 지점에 'x'가 추가되고 index 1부터 0개 만큼 데이터를 삭제하여 배열의 요소는 ['z', 'x', 'a', 'b', 'c', 'd', 'e', 'f', 'g']가 된다.

li.shift(); 
//배열의 첫번 째 요소를 제거한다. ['x', 'a', 'b', 'c', 'd', 'e', 'f', 'g']

li.pop();
//배열의 가장 뒤 요소를 제거한다. ['x', 'a', 'b', 'c', 'd', 'e', 'f']

li.sort()
//배열을 정렬한다.(오름차순) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'x']
li.reverse()
// 배열을 내림차순으로 정렬한다.
```

# 객체(Object)
- 객체는 데이터에 대한 색인(index)을 숫자를 포함해 여러가지로 표현 할 수 있다.
- 배열은 index를 정수로 표현했다. 객체는 문자열, 정수 등 다양하게 표현할 수 있다.
- 다른 프로그래밍언어에서는 associative array또는 map, dictionary라는 데이터 타입이 객체에 해당한다.

```js
//객체의 선언 1
//객체에 저장된 데이터는 property : value의 형태를 갖는다.
var grade = {'egoing' : 10, 'k8805' : 6, 'sorialgi' : 80};

//객체의 선언 2
var grade = {}; //빈 객체 선언
var grade = new Object();

grade['egoing'] = 10;
grade['k8805'] = 6;
grade['sorialgi'] = 80;

//egoing, k8805, sorialgi가 10, 6, 80의 index다.
//data type은 Object

console.log(grade['egoing']); // 10 출력
// 배열에서 데이터를 가져올 때 처럼 대괄호([])안에 index를 삽입한다.

console.log(grade.k8805); // 6 출력
// 객체는 이런 식으로도 값을 가져올 수 있다.

// 객체와 반복문

for(key in grade){
    console.log("key : ," + key + " value : " + grade[key]);
}
// 변수 key에는 객체의 key값을 하나씩 저장하여 반복문을 실행한다.
// for-in 반복문은 객체의 모든 key값을 꺼낸다. 

// key : egoing, value : 10
// key : k8805, value : 6
// key : sorialgi, value : 80
```
- 객체의 데이터는 배열과 달리 순서가 없다.
- 객체에는 객체를 담을 수도 있고, 함수를 담을 수도 있다.
    - key값으로는 사용하면 안된다.
- 객체는 const로 선언해도 객체의 데이터를 수정 할 수 있다. 하지만 새로운 객체를 참조할 수는 없다.

```js
var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name+':'+this.list[name]);
        }
    }
};
// this는 객체 자신(this === grades)을 가리킨다.

grades.show(); //grades의 show호출

// egoing : 10
// k8805 : 6
// sorialgi : 80

let idx = 0;
const  obj = {
  ['key-' + ++idx]: `value-${idx}`, // key-1:value-1
  ['key-' + ++idx]: `value-${idx}`, // key-2:value-2
  ['key-' + ++idx]: `value-${idx}`, // key-3:value-3
  [idx ** idx]: 'POWER' // 27:POWER
}

console.log(obj);

delete obj.27 //property 삭제

// ES6 추가 문법
// 객체 선언 시 프로퍼티 키와 대입할 상수/변수명이 동일할 시 단축 표현
function createProduct (name, price, quantity) {
  return { name, price, quantity };
}

const product1 = createProduct('선풍기', 50000, 50);
const product2 = createProduct('청소기', 125000, 32);

console.log(product1, product2);
// { name:선풍기, price:50000, quantity:50 }
// { name:청소기, price:125000, quantity:32 }

// ⭐️ 메서드 정의
const person = {
  name: '홍길동',
  
  salutate (formal) {
    return formal
    ? `안녕하십니까, ${this.name}입니다.`
    : `안녕하세요, ${this.name}이에요.`;
  }
}

console.log(person.salutate(true));
```
## 생성자
```js
// 생성자 함수 
function YalcoChicken (name, no) {

  this.name = name;
  this.no = no;
  this.introduce = function () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

// 인스턴스 생성
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);
// new를 붙이지 않으면 undefined반환됨

// 프로토타입
// 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
// 이미 만들어진 객체에 추가되는 property
YalcoChicken.prototype.introEng = function () {
  return `Welcome to Yalco Chicken at ${this.name}!`;
};

/* 
    객체를 반환하는 함수는 하나의 객체를 만들 뿐이고 생성자 함수는 인스턴스를 만든다. 인스턴스는 프로토타입을 활용할 수 있다.(객체지향)
    
*/

// 본사의 정보와 업무
// 인스턴스로 접근할 수 없는 기능이다. (static)
YalcoChicken.brand = '얄코치킨';
YalcoChicken.contact = function () {
  return `${this.brand}입니다. 무엇을 도와드릴까요?`;
};

const chain1 = new YalcoChicken('판교', 3);
console.log(YalcoChicken.contact());
console.log(chain1.contact()); //오류
```
# 클래스
```js
class YalcoChicken {
    //생성자
    // 생성자는 하나만 선언가능
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () { // 💡 메서드
  // 프로토 타입에 메소드가 저장됨
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }

  this.introduce () {
    // this를 붙이면 인스턴스가 가질 수 있는 메소드
  }
}

const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

// 필드: 생성자 밖에서 this없이 인스턴스의 프로퍼티 정의
// 필드값이 지정되어 있으므로 constructor 메서드 필요없음
// 각각의 인스턴스에 초기화된다.(수정 될 수 있음)
class Slime {
  hp = 50;
  op = 4;
  attack (enemy) {
    enemy.hp -= this.op;
    this.hp += this.op/4;
  }
}

class YalcoChicken {

  // 정적 변수와 메서드
  static brand = '얄코치킨';
  static contact () {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }

  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(YalcoChicken);
console.log(YalcoChicken.contact());
```
- class는 호이스팅되지 않는다.
- new를 붙여서 인스턴스를 생성하지 않으면 오류발생

## 접근자 프로퍼티와 은닉
```js
const person1 = {
  age: 17,

  get koreanAge () {
    // 특정 프로퍼티를 원하는 방식으로 가공하여 내보낼 때 사용
    return this.age + 1;
  },

  set koreanAge (krAge) {
    // 특정 프로퍼티에 값이 저장되는 방식을 조작하거나 제한하는데 사용
    // 필드와 setter의 이름이 같게 되면 무한 호출 오류가 발생할 수 있다.
    this.age = krAge - 1;
  }
}

// 외관은 메소드처럼 보이지만 호출할 때는 일반 프로퍼티처럼 사용한다.
console.log(person1, person1.koreanAge); //get 호출, 값을 반환

person1.koreanAge = 20; //set 호출
// setter는 정상적인 값을 대입해야만 수정이 일어나도록 구현해야한다.
console.log(person1, person1.koreanAge);

// 은닉화
class Employee {
  #name = ''; // private필드, 클래스 내에서만 접근가능
  #age = 0;
  constructor (name, age) {
    this.#name = name;
    this.#age = age;
  }
}

const emp1 = new Employee('김복동', 32);

console.log(emp1.#name); // ⚠️ 오류 발생

// 상속
class Bird {
  wings = 2;
}

// Bird상속, wings 값 포함
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  swim () { console.log('수영중...'); }
}

// Penguin상속, wings, swim()의 기능을 포함
class EmperorPenguin extends Penguin {
  size = 'XXXL';
}

// 자식 클래스에서 부모 클래스의 필드값을 변경할 수 있다.(오버라이딩)
class Bird {
  wings = 2;
  canFly = true;
  travel () { console.log('비행중...') }
}
class Eagle extends Bird {
  claws = 2;
}
class Penguin extends Bird {
  canFly = false;
  travel () { console.log('수영중...') }
}

class YalcoChicken {
  no = 0;
  menu = { '후라이드': 10000, '양념치킨': 12000 };

  constructor (name, no) {
    this.name = name;
    if (no) this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
  order (name) {
    return `${this.menu[name]}원입니다.`
  }
}

class ConceptYalcoChicken extends YalcoChicken {
  #word = '';
  constructor (name, no, word) {
    super(name, no);
    this.#word = word;
  }
  introWithConcept () {
    // 부모 클래스의 메소드 호출
    return super.introduce() + ' ' + this.#word;
  }
  order (name) {
    // 부모 클래스의 메소드 호출
    return super.order(name) + ' ' + this.#word;
  }
}

const pikaChain = new ConceptYalcoChicken('도봉', 50, '피카피카~');
```
## 스프레드와 디스트럭쳐링
```js
const class1 = {
  x: 1, y: 'A', z: true
};

const class2 = { ...class1 }; 
// 클래스 프로퍼티 가져오기, 프로퍼티가 참조형이라면 얕은복사가 일어남

// 아래의 참조복사 코드와 다름!
// const class2 = class1;

console.log(class2);


const obj1 = {
  x: 1, y: 2, z: 3
};

const x = obj1.x;
const y = obj1.y;
const z = obj1.z;

console.log(x, y, z); // 1 2 3

// 디스트럭쳐링, 위 코드와 같은 결과
const {x, y, z} = obj1;

console.log(x, y, z); // 1 2 3

// 일부만 가져오는 것도 가능하다.
const {x, z} = obj1;

console.log(x, z);

const array1 = [1, 2, 3, 4, 5];

// const length = array1.length;
const { length } = array1;

console.log(length);

// 디스트럭쳐링 (적절히 활용)
function introduce({age, married, job, name}) {
  // 순서 무관
  // 객체만을 인자로 받아도 된다.
  // 이 프로퍼티들을 갖는 객체를 인자로 받아 이 프로퍼티만 사용하겠다는 의도 드러냄

  console.log(`제 이름은 ${name}, `
    + `나이는 ${age}세구요. `
    + `직업은 ${job}, `
    + `${married ? '기혼' : '미혼'}입니다.`
  )
}

const person1 = {
  job: '개발자',
  age: 28,
  married: false,
  name: '김철수',
  blood: 'O'
};

introduce(person1);
```
# 모듈
- 프로그램은 작고 단순한 것에서 복잡한 것으로 진화한다. 그 과정에서 코드의 재활용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법들이 사용된다. 그 중의 하나가 코드를 여러개의 파일(모듈)로 분리하는 것이다.
    - 자주 사용되는 코드를 별도의 파일로 만들어서 재활용할 수 있다.
    - 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
    - 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
    - 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
    - 한번 다운로드된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을 로드 할 때 시간과 트래픽을 절약 할 수 있다.

```html
 <!-- 모듈화 예시 코드 -->

 <!-- 모듈화 이전 -->
<!DOCTYPE html>
<html>
<head>   
</head>
<body>
    <script>
        function welcome(){
            return 'Hello world';
        }
        alert(welcome());
    </script>
</body>
</html>


 <!-- 모듈화 -->
<!DOCTYPE html>
<html>
<head>
    <script src ="greeting.js"></script> 
    <!-- greeting.js파일을 읽어와서 실행한다. 태그안쪽에 js코드를 입력한것과 동일한 동작을 한다.-->
</head>
<body>
    <script>
        alert(welcome());
    </script>
</body>
</html>


 <!-- greeting.js 파일
function welcome(){
    return 'Hello world';
} -->
```

# 라이브러리
- 라이브러리는 모듈과 비슷한 개념이다. 모듈이 프로그램을 구성하는 작은 부품으로서 로직을 의미한다면 라이브러리는 자주 사용되는 로직을 재사용하기 편리하도록 잘 정리한 일연의 코드들의 집합을 의미한다고 볼 수 있다.
- 라이브러리는 하나의 목적을 정해두고 그 목적을 쉽게 달성할 수 있게 도와주는 코드들이다. 예시) 웹 브라우저 제어 라이브러리
- ex) jQuery
```
// 라이브러리 불러오기
<script src="libraryPath"></script>

<script>
    // 라이브러리로 코드 작성하기
</script>
```

## 주요 빌트인 객체
### 전역 객체(global object)
- window(브라우저의 전역객체), global(node.js에서의 전역객체)
  - globalThis(브라우저, node.js의 전역객체)
- 호스트 객체

### 표준 빌트인 객체
- 자바스크립트 표준 사양에 정의된 객체들 - 어떤 환경에서든 사용 가능
- 전역프로퍼티로 제공됨
  - globalThis를 붙이지 않고 사용가능
- window 객체는 자바스크립트의 표준 빌트인 객체를 포함하고 있음

### 래퍼 객체(wrapper object)
```js
const str = 'abcd';

str.length;
str.toUpperCase();
str[0];
```
- 원시값이 어떻게 프로퍼티를 갖고 있을까?
- 원시값에서 객체를 사용하듯 래퍼 객체가 원시값을 감싸서 인스턴스로 만들고 래퍼 객체의 기능을 사용한 뒤에 원시 객체로 다시 돌아간다.

## 빌트인 전역 프로퍼티와 함수
### 빌트인 전역 프로퍼티
- 스스로 다른 프로퍼티나 메소드를 갖지 않고 값만 반환
- Infinity, NaN, undifined 등의 원시값들은 이 프로퍼티들을 가리킴(null은 포함되지 않는다)
  - `global.property`
### 빌트인 전역 함수
- `eval`: 문자열로 된 코드를 받아 실행
  - 특별한 경우가 아니면 사용 x, 코드의 보안이 약해지고 속도가 느려짐

- `isFinite`: 유환수 여부 반환
  - infinity가 아니면 true반환
  - 문자열, NaN은 false 반환

- `isNaN`: NaN 여부 반환
  - 숫자로 인식할 수 없는 값은 true반환
  - Number타입이 아닌 경우 Number로 변환하여 평가

- `parseFloat`: 인자로 받은 값을 실수로 변환
- `parseInt`: 인자로 받은 값을 정수로 변환(타입은 실수)
- `encodeURI`, `encodeURIComponent`
  - URI는 아스키 문자 셋으로만 구성되어야 한다.
  - URI에서 아스키가 아닌 문자와 일부 특수문자를 포함한 URI를 유효하게 인코딩
  - `encodeURI`는 전체 URI를 인자로 전달(URI 전체 변환)
  - `encodeURIComponent`는 아스키 코드가 아닌 부분만 인자로 전달(검색어 변환)
- `decodeURI`, `decodeURIComponent`: URI 디코딩

## String 객체
### 생성자 함수
```js
const str1 = new String();
const str2 = new String('hello world');

str2.valueOf(); // 원시값 반환

const fromNum = new String(123); // '123'
const fromBool = new String(true); // 'true'
const fromArr = new String([1,2,3]) // '1,2,3"
const fromObj = new String({x: 1, y: 2}); // '[object Object]'
```
### 유사 배열 객체
```js
let myStr = 'hello';
myStr.length;
myStr[0];

myStr[0] = '1'; // 문자열의 내용은 변경되지 않음
```

### 주요 인스턴스 메소드
- `toUpperCase`, `toLowerCase`
  - 대문자 변환 문자열 반환, 소문자 변환 문자열 반환, 기존의 문자열은 변경되지 않음
- `charAt`, `at`
  - 인자로 주어진 인덱스의 문자 반환
- `indexOf`, `lastIndexOf`
  - 인자로 주어진 문자열이 앞, 또는 뒤에서 처음 나타나는 인덱스 반환
  - 포함되지 않을 시 `-1` 반환
- `includes`, `startWith`, `endsWith`
  - 인자로 주어진 문자열 포함여부를 불리언으로 반환
- `search`
  - 인자로 받은 정규표현식과 일치하는 첫 부분의 인덱스 반환
  - 없을 시 `-1`반환
- `subString`
  - 인자로 전달받은 인덱스를 기준으로 자른 문자열 반환
- `slice`
  - 인자로 전달받은 인덱스를 기준으로 자른 문자열 반환
  - 뒤에서 부터 자를 수 있다.
- `split`
  - 인수로 주어진 문자열이나 정규표현식으로 분리하여 배열을 반환
  - 두 번째 인자는 배열의 최대 길이를 설정
- `trim`, `trimStart`, `trimEnd`
  - 문자열의 공백제거
- `repeat`
  - 주어진 인자만큼 문자열을 반복하여 반환
- `replace`, `replaceAll`
  - 첫 번째 인자로 받은 문자열 또는 정규식을 두 번째 인자로 치환한 결과를 반환

## Number 객체
### 생성자 함수
```js
const numObj1 = new Number();
const numObj2 = new Number(123);
const numObj3 = new Number(-123.45);

new Number(1/2) // NaN
// 숫자의 형태가 아니라면 NaN
```
### 정적 프로퍼티
- `EPSILON`: Number 형에서 표현 가능한 가장 작은 양의 실수
- `NaN`
  - 전역 객체 globalThis의 NaN값과 같은 값
  - Not a Number
### 정적 메소드
- `isFinite`, `isNaN`
  - 인자에는 반드시 숫자 타입만 전달해야 원하는 결과를 얻음
- `parseInt`, `parseFloat`
- `isInteger`, `isSafeInteger`
  - (안전한) 정수 여부 확인
### 인스턴스 메소드
- `toExponential`
  - 지수 표기법으로 나타내는 문자열을 반환
  - 인자를 넣으면 자릿수를 정할 수 있음
- `toFixed`
  - 최대 인자값으로 주어진 정수만큼 소수점 이하를 반올림하여 문자열로 반환
- `toString`
  - 문자열 값 반환
  - 인자가 주어지면 해당 수의 진수로 표현

## Math 객체
### 주요 정적 프로퍼티
- Number 타입만 지원
- `PI`, `E` ...

### 정적 메소드
- `abs`: 절대값
- `ceil` 올림, `round` 반올림, `floor` 내림, `trunc` 정수부만
- `pow` 첫 번째 인자를 두 번째 인자로 거듭제곱
- `max`, `min` - 인자들 중 최대값과 최소값
- `rand` - 0~1 무작위 값

## Date 객체
### 생정자 함수
```js
const now = new Date(); // 한국 표준시 문자열 반환
new Date(0) //그리니치 평균시
new Date(Y, M, D, H, M, S, Ms) // 전달받은 인자를 사용해 날짜 반환
```
### 정적 메소드
- `now` 현재 시간
- `parse` 주어진 시간의 밀리초 숫자값 반환
### 인스턴스 메소드
- `toString`, `toDateString`, `toTimeString`
  - 전체, 날짜만, 시간만 나타내는 문자열 출력
- `toLocaleString`
  - 인자로 주어진 언어 코드를 기준으로 표현한 문자열 반환
### 단위별 setter, getter 메소드들
```js
for (i of [
  [ '연:', now.getFullYear() ],
  [ '월:', now.getMonth() ], // 0 ~ 11
  [ '일:', now.getDate() ],
  [ '요일:', now.getDay() ], // 0부터 일월화수목금토 
  [ '시:', now.getHours() ],
  [ '분:', now.getMinutes() ],
  [ '초:', now.getSeconds() ],
  [ '밀리초:', now.getMilliseconds() ]
]) {
  console.log(i[0], i[1]);
}

now.setFullYear(2022);
now.setMonth(7);
now.setDate(20);
// 💡 요일은 setter가 없음
now.setHours(14);
now.setMinutes(35);
now.setSeconds(47);
now.setMilliseconds(789);

console.log(now.toString());
```

# 배열
## 자바스크립트 배열의 특징과 생성
### 자바스크립트의 배열은 다르다
- 배열의 형태와 동작을 흉내내는 특수 객체
- 한 배열에 다양한 자료형의 데이터가 들어갈 수 있음
- 다른언어의 배열과 같이 연속나열된 데이터 구조가 아니다
- 접근은 상대적으로 느림, 중간요소의 추가나 제거는 빠름
- 특정 자료형 배열도 존재한다.(메모리의 활용과 속도가 중요할 경우 사용)

### 배열 생성
```js
const arr1 = [/*elements*/];
const arr2 = new Array(/*length or elements*/);

const arr3 = Array.of(/*elements*/);
const arr4 = Array.from(/*유사 배열 객체(문자열, 객체, 집합)*/);
// 객체의 경우 value값으로 배열 생성
// 단, 참조타입 요소는 얕은 복사가 일어남

const arr5 = Array.from(/*유사 배열 객체(문자열, 객체, 집합)*/ , /*매핑 함수*/); //각 요소마다 함수를 거쳐 배열을 생성함
```

## 배열의 기본 메소드
### 특정값을 반환하는 기본 메소드
```js
Array.isArray(/*Object*/); // 배열인지 여부 판단

arr.at(/*index*/); //index에 해당하는 요소 반환
arr.includes(/*element*/); //배열안에 인자로 전달된 값이 있는지 확인
// 참조형을 인자로 전달하면 참조하는 주소를 비교함, 내용만 같아서 false를 반환

arr.indexOf(/*element*/); // 첫 번째 값의 인덱스
arr.lastIndexOf(/*element*/); // 뒤에서 첫 번째 값의 인덱스
// 없을 시 -1반환

arr.join(/*string*/); // 배열의 요소마다 인자로 전달된 문자열을 삽입한 문자열 반환, 인자가 없다면 쉼표
```

### 배열을 변경하는 메소드
```js
arr.push(/*element*/); //배열 끝에 값 추가, 새롭게 만들어진 배열의 길이 반환
arr.unshift(/*element*/); //배열 앞에 값 추가, 새롭게 만들어진 배열의 길이 반환

arr.pop(); // 배열의 마지막 요소를 반환하고 제거
arr.shift(); // 배열의 첫 번째 요소를 반환하고 제거

arr.splice(start, end, /*elements, ...(추가되는 요소)*/) // 원하는 위치에 요소들을 추가 및 삭제
delete arr[1] //해당 프로퍼티를 없애고 empty값을 남김, 배열의 요소를 삭제할 때는 사용하지 않는다.

arr.fill(/*value*/, /*start, end*/); // 배열을 인자값으로 채움

arr.reverse(); //배열의 순서를 뒤집고 뒤집은 배열을 반환, 기존의 배열도 변환됨
```

### 새 배열을 반환하는 메소드
```js
arr.concat(arr2 /*, elements*/); // arr + arr2 + elements의 배열을 반환, 원본 배열은 영향받지 않음

arr.slice(/*start, end*/); // 인자로 주어진 범주의 값을 잘라 반환

arr.flat(/*level*/) // 고차원 배열의 경우 level만큼 풀어(defualt = 1)배열의 요소만을 표현

// 배열의 요소가 참조형일 경우 얕은 복사가 일어난다.
```

### 배열의 고차함수 메소드
- 다른 함수를 인자로 받음
- 함수형 프로그래밍 - 변수 사용 없이 순회 작업들을 코딩
```js
arr.forEach(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 각각의 요소를 인자로 콜백함수 실행, 배열의 요소를 변경할땐 사용 자제

arr.map(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 각 요소를 주어진 콜백함수로 처리한 새 배열 반환

// 콜백함수로에 인자로 넣었을 때 true를 반환하는
arr.find(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 첫 번째 값 반환
arr.findLast(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 마지막 값 반환
arr.findIndex(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 첫 번째 값의 인덱스 반환
arr.findLastIndex(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 마지막 값의 인덱스 반환

arr.some(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 요소들 중 하나라도 true를 반환는가 여부
arr.every(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 요소들 모두 true를 반환한하는가 여부

arr.filter(/*함수(현재 값, 현재 값의 인덱스, 해당배열)*/); // 요소들 중 true를 반환하는 요소들만 선택한 배열 반환

arr.reduce(/*함수(이전값, 현재값, 현재 인덱스, 해당배열)*/); // 이전값과 현재 값을 누적 연산, 누적 연산된 값은 이전값에 저장된다.
arr.reduceRight();

arr.sort(/*함수(앞 값, 뒤 값)*/); //원본 배열 수정
// 기본값 오름차순 정렬, 숫자의 배열일 경우 문자열로 암묵적으로 변환하여 정렬함
// 콜백함수를 넣어줘야 숫자들을 정확히 정렬 할 수 있음. (a, b) => a - b
// 숫자가 아닌 경우 직접 반환값을 명시해줘야 함
```

## 배열의 스프레드와 디스트럭쳐링
### 스프레드

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // arr1과 arr2는 같은 값을 가짐

console.log(...arr1); // 1 2 3
// 참조형 데이터의 깊은 복사 불가
```

### 디스트럭쳐링
```js
const arr = [1, 2, 3];
const [x, y, z] = arr;
const [x, y] = arr;

console.log(x, y, z); // 1 2 3
console.log(x, y); // 1 2
```