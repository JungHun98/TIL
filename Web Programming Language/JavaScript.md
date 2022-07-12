# JavaScript

- JavaScript는 객체 기반의 스크립트 프로그래밍언어다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 
- 스크립트 프로그래밍 언어란 응용 소프트웨어를 제어하는 컴퓨터 프로그래밍 언어를 가리킨다. 스크립트언어는 응용 프로그램과 독립하여 사용된다. 다른 언어는 컴파일 된 후 독립적으로 작동하는 하나의 완전한 응용 프로그램이지만, 스크립트 언어는 다른 응용 프로그램 안에 삽입되어 해석되는 방식으로 작동한다.<br>
APP : web browser, script : javascript

# 자료형

## 숫자와 문자
- 자바스크립트에서는 큰따옴표("")나 작은 따옴표('')가 붙지 않은 숫자는 숫자로 인식한다.

```
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
```
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
```
- 문자열 데이터 타입은 여러가지 속성과 함수을 가지고 있다.<br>
ex) "string".length, "string".indexOf(data) ...

## 변수
- 변수는 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다. 변수에 담겨진 값은 다른 값으로 바꿀 수 있다.
```
var a = 1; // 변수 선언 a
console.log(a); // 1

var first = "coding";
alert(first+" everybody"); // coding everybody 
```