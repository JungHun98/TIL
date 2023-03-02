# 객체 깊게 다루기
## Object
1. Object 클래스
- 생성자 함수
  ```js
  new Object(); // 빈객체 생성
  new Object(/*vlaue*/); // value에 해당하는 래핑 클래스로 객체 생성
  ```

2. 주요 정적 메서드
   1. `assign`-인자로 주어진 객체의 프로퍼티들을 대상 객체에 붙여넣음
    ```js
    const intro1 = {
      name: '홍길동'
    };
    const intro2 = { ...intro1 };

    console.log(intro1, intro2);

    const personal = {
      age: 25,
      married: false
    };

    const career = {
      job: '개발자',
      position: '팀장'
    }

    Object.assign(intro1, personal); // 바꿀 대상, 추가 할 프로퍼티가 있는 객체
    // 같은 프로퍼티가 존재하는 경우 덮어쓴다.
    // 얕은 복사
    console.log(intro1);

    // 둘 이상의 원본에서 가져올 수도 있음
    Object.assign(intro2, personal, career);
    console.log(intro2);
    ```
    2. `keys`, `values`, `entries`- 객체의 키 / 값 / [키, 값]을 배열로 변환
    ```js
    const obj = {
      x: 1,
      y: 2,
      z: 3
    };

    console.log(
      Object.keys(obj), // [x, y, z]
      Object.values(obj), // [1, 2, 3]
      Object.entries(obj), //[ ['x', 1], ['y', 2], ['z', 3] ]
    );

    // 배열에 사용할 경우
    const arr = [1, 2, 3, 4, 5];

    console.log(
      Object.keys(arr), // index
      Object.values(arr), // 값
      Object.entries(arr) // idex, 값 배열
    );

    const str = 'ABCDEFG';
    // 객체가 아닐 경우 객체로 변환
    ```
    3. `preventExtensions`-프로퍼티 추가 금지
    4. `seal`-프로퍼티 추가와 삭제 금지
    5. `freeze`-객체 동결(읽기 전용으로 변환)
      - 얕게 동결
      - 동결한 객체에 객체를 값으로 갖는 요소가 있을 경우 그 객체는 수정 할 수 있음
## 프로퍼티 어트리뷰트
1. 프러퍼티 어트리뷰트
   - 객체의 프로퍼티가 생성될 때 엔진에 의해 자동 정의되는 상태
   - 프로퍼티에는 데이터 프로퍼티(값), 접근자 프로퍼티가 존재한다.(get, set)
   - 데이터 프로퍼티의 어트리뷰트
    - `value`: 프로퍼티의 값
    - `Wrtiable`: 값 갱신 여부
    - `Enumerable`: 열거 가능 여부
    - `Configurable`: 프로퍼티의 제거, 어트리뷰트 수정가능 여부

## JSON
- 복잡한 구조를 가질 수 있는 데이터를 한 줄의 문자열로 표현

# 이터러블과 제너레이터
## Set
- 중복되지 않는 값들의 집합
- 동일한 값을 여러 번 포함할 수 없음
- 값들의 순서가 무의미함
1. 기본 사용법
```js
const set1 = new Set(/*Entry, 배열*/); // 배열일 경우 중복된 값을 하나만 가진다.

set1.add(/*Entry*/); // Set에 항목 추가, 결과 Set을 반환함(참조)
set1.has(/*Entry*/); // Set에 항목 존재 여부
set1.delete(/*Entry*/); // Set에 항목 제거, 제거 성공 true반환 실패 false반환

// keys, values, entries 메서드 - 값 / 값 / [값=>값] 반환
// keys를 values와 같은 취급함
set1.keys();
set1.values();
set1.entries();

set1.clear(); // Set clear

// set에 참조형 데이터를 저장하는 경우 내용이 같아도 참조값이 달라 저장된다.
```
2. 이터러블로서의 Set
```js
const arr = ['A', 'B', 'C', 'D', 'E'];
const set = new Set(arr);

// for of 문
for (item of set){
  // ...
}

// 스프레드
const newArr = [... set]; // Set의 내용들을 펼처 배열로 변환

// 디스트럭처링
const [x, y] = set; // 1, 2번째 값 대입

//forEach
set.forEach(/*함수*/);
```

## Map
- 키와 값의 쌍으로 이루어진 컬렉션
- 객체와 차이
  - 이터러블의 일종
  - 메서드와 프로퍼티 등의 기능차이
  - 객체나 배열 등의 참조값을 키로 사용가능
  - 키와 값을 보다 자주 변경하는 경우 적합하도록 설계됨

1. 기본 사용법
```js
// Map 생성
const map1 = new Map();

// set 메서드 - 키와 값의 쌍 추가(key, value)
map1.set('x', 1);
map1.set(123, 'ABC');
map1.set(true, { a: 1, b: 2 });

console.log(map1);

// [[키 쌍]...] 배열로 생성 + 초기화
const map2 = new Map([
  ['x', 1],
  [123, 'ABC'],
  [true, { a: 1, b: 2 }],
]);

console.log(map2);

// 키의 중복 불허 - 해당 키 있을 시 덮어씀
map2.set('x', 2);

console.log(map2);

// has 메서드 - 요소 포함여부 확인
console.log (
  map2.has('x'),
  map2.has('y')
);

// get 메서드 - 값에 접근
console.log(
  map2.get('x'),
  map2.get(123),
  map2.get(true),

  // 없는 키로 접근시
  map2.get('y')
);

// 💡 참조값도 키로 사용 가능
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

map2.set(objKey, 'OBJ_KEY');
map2.set(arrKey, 'ARR_KEY');

console.log(map2);

// ⚠️ [참조값]이 키임에 유의
// 💡 5-1강의 객체와 비교해 볼 것
console.log(
  map2.get({ x: 1, y: 2 }), // 객체의 내용이 key값이 아님에 주의
  map2.get([1, 2, 3])
);

// delete 메서드 - 요소 제거 & 성공 여부 반환
console.log(
  map2.delete('x'),
  map2.delete(objKey),
  map2.delete({x: 3, y: 4})
);

console.log(map2);

// add 메서드는 결과 맵을 반환
// 💡 메서드 체이닝을 할 수 있다는 의미
const map3 = map2
.set(1, 'X')
.set(2, 'Y')
.set(3, 'Z');

console.log(map2, map3);

// size 프로퍼티 - 요소의 개수
console.log(
  map2.size
);

// keys, values, entries 메서드 - 키 / 값 / [키, 값] 반환
console.log(
  map2.keys(),
  map2.values(),
  map2.entries()
);

// clear 메서드 - 모든 요소들을 삭제
map2.clear();

console.log(map2, map3);
```

2. 이터러블로서의 Map
```js
const arr = [
  ['🐶', '강아지'],
  ['🐱', '고양이'],
  ['🐯', '호랑이'],
  ['🐵', '원숭이'],
  ['🐨', '코알라']
];
const map = new Map(arr);

//for ... of
for ([key, value] of map) {
  console.log(key, value);
}

// 스프레드
const newArr = [...map];

console.log(newArr);

// 디스트럭쳐링
const [x, y] = map;
console.log(x);
console.log(y);


```

## 이터러블
1. 이터러블 프로토콜
- 반복 순회 기능을 사용하는 주체간의 동일된 규칙
- 공통 기능들: `for ... of`, 스프레드 문법(... obj), 배열 디스트럭쳐링

- 이터러블 - 이터러블 프로토콜 객체
  - 배열, 문자열 Set, Map 등 ...
  - 키 `Symbol.iterator`의 값으로 이터레이터를 반환하는 메서드를 가짐
  - 이터러블을 만드려면 `Symbol.iterator`을 키로 이터레이터(특정함수)를 설정해야한다.

2. 이터레이터
  - `next`메서드를 통해 이터러블을 순회하며 값을 반환
  ```js
  const arr = [1, 'A', true, null, {x: 1, y: 2 }];
  const arrIterator = arr[Symbol.iterator]();

  // 펼쳐서 메서드 살펴볼 것
  console.log(arrIterator);

  console.log(
    arrIterator.next // 함수의 형태
  );
  arrIterator.next(); // ⭐ 반복 실행해 볼 것, 차례대로 값을 반환
  // {value: 값, done: 순회 종료 여부}
  ```

3. 이터러블 만들어보기
```js
const iterable = {
  [Symbol.iterator] () {
    // code ...

    return {
      next () {
        return {
          value: //value
          done: // done
        }
      }
    }
  }
}

// for ... of, 스프레드 문법(... obj), 배열 디스트럭쳐링 사용 가능
```

## 제너레이터
- 함수 내 코드들을 모두 실행하지 않고 외부 호출자에게 제어권을 양도
- 이터러블과 이터레터들보다 간결하게 구현 가능
```js
// 이터러블의 기능을 갖고 표현은 이터러블보다 더 직관적임
function* genFunction () {
  console.log('하나를 반환합니다.');
  yield '하나';

  console.log('둘을 반환합니다.');
  yield '둘';

  console.log('셋을 반환합니다.');
  yield '셋';
}

const genFunc = genFunction();

// 반복 수행해 볼 것
// 💡 아래의 코드가 블록의 코드에 대한 제어권을 가짐
console.log( genFunc.next() );
```

2. 제너레이터 객체
- 제너레이터 함수의 결과값으로 반환
- 이터레이터이자 이터러블
```js
 function* genFunction () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let genObj = genFunction();
```
- `next`메서드를 실행하면 다음 `yield`까지 실행 후 중지
- `yield`의 값을 `value`로 반환
- 끝까지 실행 후 `done: true`

# 문제들에 대비하기
## 에러 핸들링
1. 자바스크립트의 에러 핸들링
- `try ... catch`문
  ```js
  console.log('에러 발생 전');

  try {
    // 에러 방생 여지가 있는 코드
    // 이곳에서 발생한 에러는 프로그램을 멈추지 않음
    (3).split('');
  }catch(e){
    // 에러 발생시 실행할 코드
    // 발생한 오류 객체(e)를 인자로 받음
    console.log('eroor!!', e);
  }

  console.log('에러 발생 후');

  // 활용
  const arr = ['ABC', '가나다', 123, '123'];

  function getLetterArray (str) {
    // 💡 인자로 어떤 타입의 값이 주어질지 모르는 상황
    try {
      return str.split('');

    } catch (e) {
      console.error('🛑 에러!!', e);
      return [];
    }
  }

  arr.forEach(i => {
    console.log(getLetterArray(i));
  });
  ```
- `try ... catch ... finally` 문
  - `finally` 블록
    - 오류 발생 여부와 관계없으 한 번 실행되는 코드
    - `try`나 `catch`문에 `return`이 있더라도 반드시 실행됨

  ```js
  function connect () { console.log('☀️', '통신 연결'); }
  function disconnect () { console.log('🌙', '통신 연결 해제'); }
  function sendArray (arr) { console.log('전송', arr); }

  function sendStringAsArray (str) {
    connect(); // ☀️ 통신 연결

    try {
      sendArray(str.split(''));
      return true;

    } catch (e) {
      console.error('🛑 에러!!', e);
      return false;

    } finally {
      // 💡 전송 성공 여부와 관계없이 연결은 끊어야 함
      // 반드시 실행되는 코드
      disconnect();
      console.log('- - - - - - - -');
    }

    // ❓ 이곳에 넣는 것과 무엇이 다른가?
    // catch문이 실행되고 나서 함수 종료 밑 명령어들은 실행되지 않는다.
    // 아래로 대체하여 실행해 볼 것
    // disconnect();
    // console.log('- - - - - - - -');
  }

  ['ABC', '가나다', 123, '123'].forEach(i => {
    console.log(
      sendStringAsArray(i) 
      ? '[성공]' : '[실패]', '\n\n'
    );
  });
  ```
2. Errro 객체
- 에러 발생 시 던져지는 thrown 객체
- 에러에 대한 정보를 담고 있음
- 에러가 발생하지 않아도, 직접 생성하여 던지기 가능
- 기본 생성과 사용법
```js
const error = new Error('뭔가 잘못됐어');

console.error(error);

// 두 번째 인자로 이유를 명시할 수도 있음
const error = new Error(
  '뭔가 잘못됐어',
  { cause: '뭘 잘못했으니까' }
);

console.error(error);

// 기본 인스턴스 프로퍼티와 메서드
console.log(error.name);
console.log(error.message);

// cause를 입력했을 경우
console.log(error.cause);
```
- 에러의 종류
  - 모두 Error로부터 상속받음
  - `SyntaxError`: 문법에 이상이 있음
  - `TypeError`: 주어진 명령에 적절한 자료형이 아닐 때
  - `ReferenceError`: 잘못된 값을 참조했을 때
  - `RangeError`: 유효한 범위를 벗허나는 숫자가 사용되었을 때
  ```js
  // 오류 종류에 따라 대처하기
  errorFuncs.forEach(func => {
  try {
    func();

  } catch (e) {
      if (e instanceof TypeError) {
        console.error('자료형 확인하세요.');
        return;
      }
      if (e instanceof ReferenceError) {
        console.error('선언 안 된 거 쓴 거 없는지 확인하세요.');
        return;
      }
      console.error('아니, 뭘 한 거에요?');
    }
  });
  ```
3. 에러 버블링
- 다른 함수를 호출했을 때
  - 에러 발생시 해당 함수에서 잡지 않으면 호출한 곳으로 던져짐
  - 다중 호출시 에러를 핸들링하는 코드가 있는 호출자까지 전달됨
  ```js
  function func1 () {
  throw new Error('에러');
  }

  function func2 () {
    func1();
  }

  function func3 () {
    func2();
  }

  function func4 () {
    try {
      func3();

    } catch (e) {
      console.error(e);
    }
    console.log('실행완료');
  }

  func4();
  
  //Error: 에러
  //  at func1 (<anonymous>:2:9)
  //  at func2 (<anonymous>:6:3)
  //  at func3 (<anonymous>:10:3)
  //  at func4 (<anonymous>:15:5)
  //  at <anonymous>:23:1

  // 에러는 가능한 발생 한 곳 가까이서 처리하는 것이 좋음
  ```

## 구시대의 유물 var
### :star: 정말 중요한 내용이다
- `var`: `let`과 `const`가 생기기 전 변수 선언에 사용되던 문법
  - 각종 문제점들을 갖고 있으므로 오늘날에는 사용하지 않을 것을 권장

- 선언 없이도 사용 가능
```js
notDeclared = 1; // 미리 선언한 부분이 없을 시 var로 만들어짐
console.log(notDeclared);

// num이 var로 선언된 것
for (num of [1, 2, 3]) {
  console.log(num);
}
```

- 재선언 가능
  - 실수가 발생할 여지가 굉장히 많다
```js
let a = 1;
let a = 2; // ⚠️ 오류

const b = 1;
const b = 2; // ⚠️ 오류

var c = 1;
var c = 2;
```

- 블록 레벨 스코프 무시
  - 논리 오류가 발생할 가능성이 높다
```js
// let은 블록 단위의 스코프
let num1 = 1;
{
  let num1 = 2;
  {
    let num1 = 3;
  }
}

console.log(num1); // 1

// var는 그딴 거 없다
// 함수단위 스코프
var num2 = 1;
{
  var num2 = 2;
  {
    var num2 = 3;
  }
}

console.log(num2); // 3

// for문의 스코프도 무시
for (var i = 0; i < 5; i++) {
  var pow2 = i ** 2;
  console.log(pow2);
}

console.log(i, pow2); // 5 16, i가 for문 바깥에서 출력이 된다?!
```

- 호이스팅
```js
console.log(hoisted1); // 💡 오류발생 X, 대신 undefined 반환

var hoisted1 = 'Hello'; // 호이스팅

console.log(hoisted1);

console.log(hoisted2); // ⚠️ 오류

let hoisted2 = 'Hello';

console.log(hoisted2);
```
- `let`도 호이스팅은 되지만 `var`처럼 `undifined`로 초기화 되지는 않는다.

## 엄격 모드(strict mode)
### 'use strict'
- 기존의 느슨한 모드에서 허용되던, 문제를 유발할 수 있는 코드들에 오류를 발생시킴
1. 선언되지 않는 변수 사용시 오류 발생
```js
`use strict`; // 자바스크립트 문서 최당산에 작성 - 문서 전체에 적용됨
```
```html
<!-- 문서, script 태그별로만 적용됨 - 여러 `.js`파일이 페이지에 사용될 시 각각 작성해야 한다. -->
<!DOCTYPE html>
<html lang="ko">
<head>
<script src="./1.js"></script>
<script src="./2.js"></script>
</head>
</html>
```
```js
// 1.js
'use strict';
x = 1;
console.log(x); // 오류 발생
```
```js
// 2.js
y = 2;
console.log(y); // 오류 발생하지 않음
```
```js
notDec1 = 1;

function strictFunc () {
'use strict';

 notDec2 = 2;
 console.log(notDec2);
}

console.log(notDec1);
strictFunc();
```
- 위와 같이 함수 최상단에 작성하면 해당 함수에만 적용된다.

2. 변수, 함수, 인자 등 발생할 수 있는 문제
```js
// 실제로 지워지지도 않지만 오류를 발생시키지도 않음

let toDelete1 = 1;
delete toDelete1;

console.log('1.', toDelete1);

function funcToDel1 () { console.log(true); }
delete funcToDel1;

console.log('2.', funcToDel1);
```
```js
'use strict';

let toDelete2 = 1;
delete toDelete2;

// Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
```
```js
// 인자명 중복시 오류발생
'use strict';

function add(x, x) {
  return x + x;
}

console.log(add(1, 2));
//Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```
- 실무에서의 엄격 모드
   - 클래스나 모듈 사용시 엄격 모드가 기본으로 적용돔
   - 모든 문제를 방지하는 수단이 되지는 않는다.
   - 기존 코드에 엄격모드 사용시 예기치 못한 오류 발생 가능성이 있으니 주의해야한다.

## 옵셔널 체이닝
### 유효하지 않을 수 있는 참조에 의한 문제들
- 네트워크 요청 등, 어떤 값이 들어올지 모르는 상황에서 에러가 발생하는 상황
```js
// undefined로부터 값에 접근할 때
let undefObj;
console.log(undefObj.x);

// null부터 값에 접근할 때
let nullObj = null;
console.log(nullObj.x);

// 무효한 배열에 접근할 때
let undefArry;
console.log(undefArry[1]);

// 존재하지 않는 함수를 호출할 때
let noFunc = {}
noFunc.func();
```
- `?.` - 옵셔널 체이닝 연산자
  - 호출 대상이 `undefined`나 `null`이어도 오류를 발생시키지 않고 `undefined`을 반환함
  - 있을지 없을지 모르는 것으로부터 값을 읽거나 실행할 때 사용한다.
```js
let undef = undefined;

console.log(
  undef?.x,
  undef?.['x'],
  undef?.[1],
  {}.func?.()
);
// undefined undefined undefined undefined


// 옵셔널 체이닝을 사용한 방법
const result = notSure();

console.log(
  result?.prop1?.prop2?.prop3
);

// 유무가 불확실한 함수를 호출할 때도 유용하다.
const objs = [
  { func () { console.log(1) } },
  {},
  { func () { console.log(2) } },
  {},
  { func () { console.log(3) } },
]

objs.forEach(o => o.func?.());
```