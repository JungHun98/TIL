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
        - JavaScript에서 동등 연산자를 사용하게되면 예상치 못한 오류가 발생할 수 있으므로 ===를 사용하도록하자.
    - 부정과 부등호 `!=, !==, >, >=, <, <=`

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
```
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
```
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
```
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
```
function 함수명(parameter){
    //code .
    
    //return 반환값;
}

fucntion numbering(){
    console.log(1);
} 
// 함수 정의

numbering(); // 1 출력
//함수 호출
```
- 함수는 한 번 정의해두면 여러번 사용할 수 있다. 중복을 제거하는데 유용하게 사용

- 다양한 함수 정의 방법
```
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

// 익명함수 = 함수의 이름이 없고 바로 호출되는 함수, 일회성으로 호출할 때 사용된다.
```