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
`use strict`; // 자바스크립트 문서 최상단에 작성 - 문서 전체에 적용됨
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

# 스코프와 바인딩
## 렉시컬(static)과 클로져
1. 렉시컬(정적) 스코프
  - 변수나 상수가 코드상 어디에서 지정되었는가에 따라 그 사용 범위를 결정
  - 함수가 코드상 어디에서 정의되었는가에 따라 그 상위 스코프를 결정
  - 호출한 곳을 기준으로 하는 동적 스코프와 상반되는 개념
```js
const x = 1;
const y = 1;
const z = 1;

function func1 () {
  const y = 2;
  const z = 2;

  console.log('2', x, y, z);
  func2();
}

function func2 () {
  const z = 3;

  console.log('3', x, y, z);
}


console.log('1', x, y, z)
func1();

// 1 1 1 1
// 2 1 2 2
// 3 1 1 3
```
- `func2`을 호출한 블록에서의 `y`값은 `2`
- `func2`을 정의된 블록에서의 `y`값은 `1`
- 정의된 블록을 기준으로 상위 스코프의 값이 사용됨

2. 렉시컬 환경
  - 전체 문서, 함수, 블록을 실행하기 전 만들어지는 내부 객체
  - 각 스코프의 고유 값들과 외부 스코프에 대한 참조를 포함
### 구성요소
  - 환경 레코드 - 해당 스코프의 데이터들
  - 외부 렉시컬 환경에 대한 참조

3. 클로저
  - 내부 함수에서 외부 함수의 값에 접근할 수 있다는 개념
```js
function func1 () {
  const word = 'Hello';

  function func2 () {
    console.log(word);
  }
  
  return func2;
}

const logHello = func1();

logHello();
// Hello
```
- `logHello`에는 `func1` 안의 함수인 `func2`가 반환되어 지정됨
- `func1`의 실행이 끝났음에도 불구하고, 해당 스코프 내의 값이 살아있음
- `func2`와 `func2`가 선언된 환경의 조합: 클로져

## this의 동적 바인딩
1. 전역에서의 `this`
```js
console.log(this);
```
- 브라우저의 콘솔창: `window`객체
- Node.js의 REPL: `global`객체
- `.js`문서로 작성 후 실행 - 빈 객체
  - Node.js에서 각 `.js`문서들은 모듈로서 실행되기 때문

2. 함수에서의 `this`
```js
function func () {
  console.log(this); // globalThis
}

func();

function func () {
  console.log(this); // globalThis
}

func(); //undifined
```
- 객체에 속하지 않은 함수에서는 `this`사용이 의미 없음

3. 객체 안에서의 `this`
```js
// 객체 리터럴 - 해당 객체를 가리킴
const obj = {
  x: 123,
  getX: function () {
    return this.x;
  }
}

console.log(obj.getX()); //123

// 생성자 함수 - 생성될 인스턴스를 가리킴
function Person (name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function  () {
    return `저는 ${this.name}, ${this.age}세입니다.`
  }
}

console.log(
  new Person('홍길동', 20).introduce()
);
// 저는 홍길동, 20세입니다.

// 클래스 선언 - 생성될 인스턴스를 가리킴
class YalcoChicken {
  constructor (name, no) {
    this.name = name;
    this.no = no;
  }
  introduce () {
    return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
  }
}

console.log(
  new YalcoChicken('강남', 17).introduce()
);
// 안녕하세요 17호 강남점입니다!
```

2. 동적 바인딩
  - 자바스크립트의 독특한 동작방식
  - `this`가 가리키는 대상이 함수의 호출 주체 또는 그 방식에 따라 달라짐
```js
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  }
};

const italian = {
  favorite: '피자'
};

console.log(
  korean.makeStew(true, 1)
); // 매운 김치찌개 1냄비

// 이탈리아인에게 한국인이 찌개 끓이는 법을 알려줌
italian.makeStew = korean.makeStew;

console.log(
  italian.makeStew(false, 2)
); // 순한 피자찌개 2냄비

// this가 가리키는 객체가 korean에서 italian으로 바뀌어 버림
```
### 해결방법들
1. `call`을 사용한 함수 호출
```js
console.log(
  italian.makeStew.call(korean, false, 2)
);
```

2. `apply`을 사용한 함수 호출
```js
console.log(
  italian.makeStew.apply(korean, [false, 2])
);
```

3. :star: `bind`를 사용한 `this` 대상 고정
  - `this`의 대상이 동적으로 변하지 않는 함수를 반환
```js
// ⭐ this가 바인딩된 새 함수를 만듦
italian.makeRightStew = korean.makeStew.bind(korean);

console.log(
  italian.makeRightStew(false, 2)
);// 순한 김치찌개 2냄비

// 💡 추가 인자들까지 바인딩 가능 
italian.makeClassicStew = korean.makeStew.bind(korean, true, 1);

console.log(
  italian.makeClassicStew()
); // 매운 김치찌개 1냄비
```

4. 바인딩된 함수를 내보내는 함수
```js
const korean = {
  favorite: '김치',
  makeStew: function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  },
  teachMakingStew: function () {
    return this.makeStew.bind(this);
  }
};

const italian = {
  favorite: '피자'
};

italian.makeStew = korean.teachMakingStew();

console.log(
  italian.makeStew(false, 2)
); // 순한 김치찌개 2냄비
```

5. 생성자 함수일 경우 - 함수 자체를 미리 인스턴스에 바인딩하기
```js
function Korean () {
  this.favorite = '김치';
  this.makeStew = function (isHot, pots) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개 ${pots}냄비`;
  };

  // 💡 여기서 바인딩을 고정시켜버림
  this.makeStew = this.makeStew.bind(this);
}

function Italian () {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();

italian.makeStew = korean.makeStew;

console.log(
  italian.makeStew(false, 2)
);// 순한 김치찌개 2냄비

// 임의로 특수한 동작을 시킬 때
// call함수 첫번째인자에 임의 객체를 전달한다.
console.log(
  korean.makeStew.call({favorite = '된장'}, true, 2);
); // 매운 된장찌개 2냄비
```

### :star: 배열 메서드의 `thisArg`
- 콜백으로 주어진 함수 내에서 `this`가 가리킬 대상
- 보통 콜백함수 다음 인자로 넣음
```js
function recommendForYou (me) {
  const products = [
    { sex: 'F', size: 'M' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'M' },
    { sex: 'U', size: 'S' },
    { sex: 'M', size: 'L' },
    { sex: 'F', size: 'S' },
  ];

  products
  .map((itm, idx) => {
    return { ...itm, idx } 
  })

  // ⚠️ 화살표 함수 대신 function 선언 함수 사용 주목
  // this가 객체 me를 바라봄
  .filter(function ({sex, size}) {
    return ['U', this.sex].includes(sex)
    && size === this.size
  }, me) // 💡 thisArg

  .forEach(function ({idx}) {
    console.log(`${this.name}님, ${++idx}번은 어떠세요?`);
  }, me); // 💡 thisArg
}

const peter = {
  name: '피터',
  sex: 'M',
  size: 'L'
};

const jane = {
  name: '제인',
  sex: 'F',
  size: 'S'
};

recommendForYou(peter);
recommendForYou(jane);
```
## this의 정적 바인딩(화살표 함수의 this)
### 객체의 메서드 종류별 비교
```js
const obj = {
  // function 선언 함수
  func1: function () { return true; },

  // 메서드
  func2 () { return true; },

  // 화살표 함수
  func3: () => true
}

console.log(
  obj.func1(), // true
  obj.func2(), // true
  obj.func3()  // true
);

console.log(obj.func1);
console.log(obj.func2);
console.log(obj.func3);

const func1 = new obj.func1(); // 함수 - 인스턴스 생성
const func2 = new obj.func2(); // 메소드 - 오류(생성자가 아님)
const func3 = new obj.func3(); // 화살표 함수 - 오류(생성자가 아님)
```

### :star: 화살표 함수와 `this`
  - `function` 함수나 메서드의 동적 바인딩과 다르게 동작
  - 함수가 어디서 선언되었는가에 따라 다름 - 가장 근접한 상위 스코프에 바인딩 고정
  - 즉 `this`를 정적으로 바인딩함
1. 객체 리터럴에서
  - 객체 리터럴의 화살표 함수는 가리키는 기본 스코프가 나머지 둘과 다름
```js
const obj = {
  x: 1,
  y: 2,

  func1: function () {
    console.log('1.', this);
  },
  func2 () {
    console.log('2.', this);
  },
  func3: () => {
    console.log('3.', this);
  }
}

// this가 해당 객체를 가리킴
obj.func1();
obj.func2();

// 💡 this가 상위 스코프를 가리킴
obj.func3();

const outer = {
  a: true,
  b: false,

  func: function () {
    const inner = {
      x: 1,
      y: 2,

      func1: function () {
        console.log('1.', this);
      },
      func2 () {
        console.log('2.', this);
      },
      func3: () => {
        console.log('3.', this);
      }
    }

    // this가 inner를 가리킴 
    inner.func1();
    inner.func2();

    // this가 outer를 가리킴
    inner.func3();
  }
}

outer.func();
```

2. 생성자 함수와 클래스에서
  - 기본적으로는 가리키는 대상이 동일(해당 인스턴스)
* :star: 동적으로 바인딩하는 타 방식과의 차이 확인
```js
function Korean () {
  this.favorite = '김치';

  this.makeStew = function (isHot) {
    return `${isHot ? '매운' : '순한'} ${this.favorite}찌개`;
  };
  this.fryRice = (isHot) => {
    return `${isHot ? '매운' : '순한'} ${this.favorite}볶음밥`;
  };
}

function Italian () {
  this.favorite = '피자';
}

const korean = new Korean();
const italian = new Italian();

console.log(korean.makeStew(true)); // 매운 김치찌개
console.log(korean.fryRice(true)); // 매운 김치볶음밥

italian.makeStew = korean.makeStew;
italian.fryRice = korean.fryRice;

console.log(italian.makeStew(false)); // 순한 피자찌개
console.log(italian.fryRice(false));  // 매운 김치볶음밥(정적 바인딩)
```
- 클래스도 마찬가지

# 프로토타입
## 프로토타입의 개념
1. 프로토타입
- 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍을 지원하는 언어
- 오늘날에는 클래스가 더 널리 사용되지만, 사용하기에 따라 보다 강력하고 효율적

### :star: 자바스크립트의 모든 객체는 `Prototype`을 가짐
```js
const obj = {};

console.log(obj); 
// [[Prototype]]이 존재
// 프로토타입에 존재하는 메소드들은 빈 객체도 사용할 수 있다.
```
2. `Object` - 모든 것의 조상
- 아래 각 객체의 `[[Prototype]]`의 `[[Prototype]]`이 `Object`임
- 프로토타입 체인
  - 특정 객체에 호출된 프로퍼티가 없다면 프로토타입을 거슬러 올라감
  - ex) 배열에는 `valueOf`가 없지만 그 프로토타입인 `Object`에는 존재하므로 호출 가능(프로토타입 상속)

3. 코드로 프로토타입에 접근하기
- `Object.getPrototypeOf`
  - 수정할 때는 `Object.setPrototypeOf` 사용

```js
console.log(
  Object.getPrototypeOf({})
);
```
- :star: 생성자 함수에서는 `prototype`으로 프로토타입 접근 가능
```js
function Person (name) {
  this.name = name;
}

// 인스턴스들에 공유될 프로토타입에 다음과 같이 접근
console.log(Person.prototype);

// 생성자 함수로 동작하지 않는 빌트인 객체는 undifined
console.log(
  Math.prototype
);
```
4. 인스턴스 vs 프로토타입 프로퍼티
```js
function YalcoChicken (name, no) {
  this.name = name;
  this.no = no;
}

// 공통된 요소들은 프로토타입 프로퍼티로
YalcoChicken.prototype.titleEng = 'YalcoChicken';

YalcoChicken.prototype.introduce = function () {
  return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
}

YalcoChicken.prototype.introEng = function () {
  return `Welcome to ${this.titleEng} at ${this.name}!`;
};

const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1.introduce());
console.log(chain1.introEng());

// 프로토타입 레벨의 함수를 인스턴스 레벨에서 덮어쓰기 가능(오버라이딩)
const chain4 = new YalcoChicken('평양', 456);
chain4.introduce = function () {
  return `어서오시라요, ${this.no}호 ${this.name}점입네다!`;
}

console.log(chain4.introduce());
```
## 프로토타입과 상속
1. 프로토타입으로 상속하기
- `Object.create` 메서드: 주어진 것을 프로토타입으로 갖는 객체 생성
```js
function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle (name, sound, prey) {
  this.name = name;
  this.sound = sound;
  this.prey = prey;
}

// ⚠️ 순서 주의! 상속을 먼저 받음
Eagle.prototype = Object.create(Bird.prototype);
// Eagle.prototype = Bird.prototype; // 💡 비교해 볼 것, 상속이 아닌 같은 레벨의 클래스가 되어버림

// 상속 이후 자신의 프로토타입 작성
Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}
```
2. 부모의 생성자 활용하기
- 생성자에서 중복되는 부분 위임
- `class`에서는 `contructor`에서 `super`사용
```js
function Bird (name, sound) {
  this.name = name;
  this.sound = sound;
}
Bird.prototype.fly = function () {
  console.log(`${this.name} ${this.sound} 비행중`);
}

function Eagle (name, sound, prey) {
  // 💡 call 호출방식 사용
  Bird.call(this, name, sound); // this는 Eagle의 인스턴스
  this.prey = prey
}

Eagle.prototype = Object.create(Bird.prototype);

Eagle.prototype.hunt = function () {
  console.log(`${this.name} ${this.prey} 사냥중`);
}

const eagle = new Eagle('독돌이', '푸드덕', '토끼');
console.log(eagle);

eagle.fly();
eagle.hunt();
```
3. 클래스로 구현
### :star: 클래스 역시 프로토타입을 기반으로 구현됨
- 클래스와 프로토타입
  - 클래스의 메서드는 프로토타입으로 들어가게됨
  - `extends`-프로토타입 상속도를 만듦
```js
class Bird {
  constructor (name, sound) {
    this.name = name;
    this.sound = sound;
  }
  // 메소드, 프로토타입
  fly () {
    console.log(`${this.name} ${this.sound} 비행중`);
  }
}

class Eagle extends Bird {
  constructor (name, sound, prey) {
    super(name, sound);
    this.prey = prey;
  }
  // 프로토타입
  hunt () {
    console.log(`${this.name} ${this.prey} 사냥중`);
  }
}

const bird = new Bird('새돌이', '파닥파닥');
const eagle = new Eagle('독돌이', '푸드덕', '토끼');

console.log(bird);
console.log(eagle);
```
4. Mixin - `Object.assign`으로 조립하기
- 상속 - 한 부모로부터만 물려받음
- 믹스인 - 여럿을 조합하여 가져올 수 있음
```js
const runner = {
  run : function () {
    console.log(`${this.name} 질주중`);
  }
}
const swimmer = {
  swim: function () {
    console.log(`${this.name} 수영중`);
  }
}
const flyer = {
  fly: function () {
    console.log(`${this.name} 비행중`);
  }
}
const hunter = {
  hunt: function () {
    console.log(`${this.name} 사냥중`);
  }
}

class Owl {
  constructor (name) {
    this.name = name;
  }
}

class FlyingFish {
  constructor (name) {
    this.name = name;
  }
}

class PolarBear {
  constructor (name) {
    this.name = name;
  }
}

// 여러가지 조합의 객체를 프로토타입으로 설정
Object.assign(Owl.prototype, flyer, hunter);
Object.assign(FlyingFish.prototype, flyer, swimmer);
Object.assign(PolarBear.prototype, runner, swimmer, hunter);

const owl = new Owl('붱돌이');
const f_fish = new FlyingFish('날치기');
const p_bear = new PolarBear('극곰이');

console.log(owl);
console.log(f_fish);
console.log(p_bear);
```

# 비동기 프로그래밍
## 비동기의 개념과 타임아웃
## 프로미스
### 콜백 지옥(callback hell)
```js
setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
      setTimeout(() => {
        console.log(3);
        setTimeout(() => {
          console.log(4);
          setTimeout(() => {
            console.log(5);
          }, 500);
        }, 500);
      }, 500);
  }, 500);
}, 500);
```
- 연속적으로 비동기 코드를 써야 하는 경우
- 위와 같이 콜백 함수 안에 또 다른 콜백 함수를 널어야 하는 상황 발생 - 콜백지옥
- 실전에서는 더더욱 복잡하고 난해해짐
### 프로미스
- 어떤 과정 이후 주어진 동작을 실행할 것이란 약속
- 중첩된 비동기 코드를 직관적이고 연속적인 코드로 작성할 수 있도록 함
```js
const borrow = 20;

// 빌린 돈의 10%를 더해 값겠다는 약속
// reject는 지금 사용하지 않음(실패했을 때 반환 할 값)
// resolve-프로미스가 성공했을 때 반환 할 값을 넣어줌
const payWith10perc = new Promise((resolve, reject) => {
  resolve(borrow * 1.1);
});

// then.. => 프로미스 반환
// "프로미스가 성공했을 때" 반환 받을 값을 인자(result)로 하는 함수를 실행
// resolve에서 받은 값을 활용해 어떤 행동을 한다.
payWith10perc
.then(result => {
  console.log(result + '만원');
});
```
```js
const borrow = 20;

const payWith10perc = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // 💡 돈을 값을 수 없게 되었을 때
      reject('사업 망함'); // 보통 실패사유나 관련 설명을 넣음
    }
    resolve(borrow * 1.1);
  }, 1000); // 1초 후 갚겠음
});

payWith10perc
.then(result => {
  console.log(result + '만원');
}
// 💡 두 번째 인자로 reject를 받는 콜백을 넣을 수 있지만
// 아래처럼 catch로 진행하는 것이 더 깔끔함
)
.catch(msg => {
  console.error(msg);
})
.finally(() => {
  console.log('기한 종료');
});
```
## 프로미스의 병렬 진행
- 여러 프로미스를 병령 처리하기 위한 Promise의 정적 메서드들
```js
// 다섯 주자들이 동시에 질주
// 데드라인(밀리초) 안에 들어오지 못하면 탈락
let DEADLINE = 1450;

function getRunPromise (name) {
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE) {
        console.log(`🚩 ${name} 도착 - ${(time)/1000}초`);
        resolve({name, time});

      } else {
        reject((`${name} 시간초과`));
      }
    }, time);
  });
}

console.log(
  '철수,영희,돌준,정아,길돈'
  .split(',')
  .map(getRunPromise)
);
```
1. `all`
  - 프로미스의 배열을 인자로 받아 동시에 진행
  - 모두 성공하면 `resolve`된 값들을 배열로 반환 - then으로 받음
  - 하나라도 실패하면 `catch`실행
  ```js
  // 한 명이라도 탈락하면 전체 탈락
  Promise.all(
    '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getRunPromise)
  )
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });
  ```
2. allSettled
  - 주어진 프로미스들의 결과를 배열로 출력
  - 실패 유무 관계없이 `then`으로 배열 반환
  ```js
  Promise.allSettled(
    '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getRunPromise)
  )
  .then(console.log)
  // ⚠️ catch는 동작하지 않음
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });
  ```
3. `any`
  - 가장 먼저 성공한 프로미스의 결과를 `then`으로 반환
  ```js
  Promise.any(
    '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getRunPromise)
  )
  .then(console.log)
  // ⚠️ 모두 실패해도 catch는 동작하지 않음
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });
  ```
4. `race`
  - 성공이든 실패든 첫 결과물을 `then` 또는 `catch`로 반환
  ```js
  Promise.race(
    '철수,영희,돌준,정아,길돈'
    .split(',')
    .map(getBombRunPromise)
  )
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log('- - 경기 종료 - -');
  });
  ```
## async & await
### `async` 함수
- 프로미스를 기반으로 동작
- 마치 동기 코드처럼 직관적으로 코딩 할 수 있음
```js
function getMult10Promise (number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 10);
    }, 1000);
  });
}

async function doAsyncWorks () {
  // 비동기 작업들이 동기적으로 효현됨
  // await - 프로미스의 결과를 받을 때 까지 기다려
  const result1 = await getMult10Promise(1);
  console.log(result1);

  const result2 = await getMult10Promise(2);
  console.log(result2);

  const result3 = await getMult10Promise(3);
  console.log(result3);
}

doAsyncWorks();
console.log('💡 이 문구가 먼저 출력됨'); // 비동기 작업이기 때문에 console.log가 먼저 출력됨
```
- `await` - 코드의 진행을 멈추고 프로미스로부터 답을 받아냄
- `await`은 `async` 함수 또는 모듈 내에서만 사용 가능
  ```js
  async function doAsyncWorks () { /* ...  */ }
  ```
## 네트워크 통신에서의 활용
1. Fetch API
  - Web API에서 제공하는 기능
  - 네트워크 통신으로 원격에 요청을 보내고 답을 받아오는 프로미스를 반환
  - 네크워크로부터 리소스를 받아오기 위한 다양하고 강력한 기능들 제공
  - 어떤 웹 페이지가 열린 상태에서 그곳에서 사용될 추가적인 데이터를 서버로부터 요청해올 때 새로고침 없이 새로운 데이터를 받아올 수 있음
  - 필요에 따라 추가적인 요청을 보내 받은 데이터를 바탕으로 웹 페이지를 업데이트하는 기술 - ajax
  ```js
  // 💡 결과가 Promise의 인스턴스임 확인
  console.log(
    fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
  );

  fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
  .then(response => {
    console.log(response);
    return response;
  })
  .then(response => response.json())
  .then(console.log);
  ```
  - 반환되는 결과 (response)
    - 요청의 결과에 대한 정보들을 담은 객체
    - `json`메서드 - 결과의 body로 받은 텍스트를 JSON으로 변환하여 반환

# 코드파일 다루기
## HTML에 불러오는 방법들
1. 헤드에 스크립트로 로드
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>
  <script src="./script.js"></script>
</head>
<body>
  <span>변경 전...</span>
</body>
</html>
```
- html 문서는 위에서 아래로 파싱됨
- js파일이 로드되고 실행될 때는 아직 `body` 부분이 로드되지 않음
- 스크립트의 크기가 클 경우 그 아래 요소들의 로드가 지연됨

2. body 요소들 아래에 로드
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>
</head>
<body>
  <span>변경 전...</span>
  <script src="./script.js"></script>
</body>
</html>
```
- 스크립트가 마지막에 로드

3. onload 이벤트 사용
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>
  <script src="./script.js"></script>
</head>
<body>
  <span>변경 전...</span>
</body>
</html>
```
```js
window.onload = function () {
  document.querySelector('span').innerText = '텍스트 변경됨';
}
```
- 스크립트를 실행하기 위한 onload 이벤트 등록필요
- 문서의 동기적 로드 문제 여전함

4. async/defer 로드 - 비동기로드
- HTML을 파싱하는 도중 js파일을 로드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>

  <script async src="./script1.js"></script>
  <script defer src="./script2.js"></script>
</head>
<body>
  <span>변경 전...</span>
</body>
</html>
```
```js
document.querySelector('span').innerText = '텍스트 변경됨';
```
- async 방식은 js파일이 모두 로드된 시점에 js 파일을 바로 실행한다.
- :star: `defer`방식은 HTML 파싱하고 있는 동시에 js파일을 비동기적으로 로드하고, HTML의 파싱이 완료된 후에 js파일을 실행한다.

## 모듈과 라이브러리
### 페이지에 자바스크립트 파일을 여럿 로드할 때 문제점들
1. 네임스페이스 문제
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>
  <script defer src="./script1.js"></script>
  <script defer src="./script2.js"></script>
</head>
<body>
</body>
</html>
```
```js
// script1
const x = 1;

console.log(x);
```
```js
// script2
const x = 2;

console.log(x);
```
- 같은 상수나 변수명이 둘 이상의 파일에서 사용되었으므로 오류 발생
  - HTML에서 js를 여려개 로드해서 사용할 때 식별자들의 공간이 공유되기 때문
- 다른 파일에 상수/변수명이나 함수명이 중복 사용되지 않았는지 확인해야 함
- 규모가 큰 웹페이지를 분업하여 만들 때 특히 큰 어려움

2. 파일의 순서 문제
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>
  <script defer src="./script1.js"></script>
  <script defer src="./script2.js"></script>
</head>
<body>
</body>
</html>
```
```js
// script1
const x = 1;

console.log(x);
```
```js
// script2
const y = 2;

console.log(x, y);
```
- HTML에서 로드하는 js파일의 순서가 바뀐다면 오류발생
- 다른 파일의 코드가 필요할 경우 순서에 의존적임
- 한 파일의 코드가 다른 파일의 변수에 영향을 미칠 수 있음
- 결국 큰 하나의 `js`파일을 나눠 작성하는 것에 불과함

### 모듈 사용하기
1. 기본 사용법
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>제대로 파는 자바스크립트</title>

  <!-- 💡 모듈로서 로드 -->
  <script type="module" src="./main.js"></script>
</head>
<body>
  <script>
    console.log('모듈은 defer 방식으로 로드됩니다.');
  </script>
</body>
</html>
```
- 모듈로서 로드할 파일에는 `type="module"`속성을 넣어줌
- 모듈은 자동으로 `defer`로 로드됨
- 실행코드가 들어있는 파일만 로드하면 됨

```js
// module1.js
export const x = 1;
export const y = 2;

export const person = {
  name: '홍길동',
  age: 20
}
```
:star: `export`
- 따라오는 식별자를 다른 모듈에서 사용할 수 있도록 공개함
  - 다른 모듈에서 사용하려면 `import`해줘야 함
- 상수, 변수, 함수, 클래스 모두 export가능

```js
// main.js
import { x, y, person } from './module1.js';

console.log(x, y);
console.log(person);
```
:star: `import`
- 타 모듈에서 공개한 식별자를 자신의 스코프로 로드
- 모듈의 요소들을 객체 디스트럭처링 방식으로 가져올 수 있음

```js
import { 
  x as a,
  y as b,
  person as individual
} from './module1.js';

console.log(a, b);
console.log(individual);
```
- 위와 같이 원하는 이름으로 바꾸어 가져올 수 있음

2. 여러 모듈 가져와 사용하기
```js
// 💡 필요한 것만 선별하여 가져오기
import { x, y } from './module1.js';
import { add, mult } from './module2.js';
import { Eagle } from './module3.js';

console.log(
  add(x, y), mult(x, y)
);

const eagle = new Eagle('독돌이', '푸드덕', '토끼');
eagle.hunt();
```

3. 하나의 모듈 객체로 묶어서 가져오기
```js
import * as funcs from './module4.js';
// module4에서 export된 모든 것을 funcs라는 객체로 import하겠다

// 💡 로그 살펴볼 것!
console.log(funcs);

funcs.logResult(
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .filter(funcs.isOdd)
  .map(funcs.square)
  .join(', ')
);
```

4. 이름없는 하나의 값으로 반환하기
```js
// 💡 default를 사용하면 let, const 사용 불가
// 식별자 사용불가
export default {
  x: 1,
  arry: [1, 2, 3, 4, 5],
  obj: {
    a: true,
    b: false
  },
  isEven: x => !(x % 2),
};
```
- 한 모듈에서 하나만 사용가능
- 일반적으로 특정 줒의 기능들을 하나의 객체로 담아 공개
```js
import mod5 from './module5.js';

console.log(mod5);

console.log(
  mod5.arry
  .filter(mod5.isEven)
  .join(', ')
);
```
- `default`로 공개된 것을 `import`할 때는 `{}`로 감싸지 않음

5. 모듈에서는 `awit`을 바로 사용 가능
```js
// async를 사용하지 않아도 사용가능
// 모듈은 async에 감싸진채 실행
const raceResults = await fetch(
  'https://showcases.yalco.kr/javascript/mockserver/race-result'
)
.then(response => response.json())

console.log(raceResults);
```
:star: 외부 라이브러리 로드
```js
import Big from 'https://unpkg.com/big.js@6.2.1/big.mjs';
// mjs => module js
console.log(Big);
```
## 웹팩과 바벨
### 1. 웹팩
- 번들러 - 다수의 파일을 소수의 파일로 압축
- 어플리케이션이 로딩 및 실행 속도 향상
- 각종 플러그인과 옵션을 사용하여 코드를 다양한 방법으로 변환/압축 가능

### :star: 프로젝트에 사용해보기

0. 소스 저장소 분리하기
- `src` 폴더 만들고 `.js`파일을 모두 이동
1. 프로젝트에 웹팩 설치
```
npm install webpack webpack-cli --save-dev
```
2. 웹팩 설정 파일
```js
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/main.js',
  // 이 파일을 기준으로 포함된 모든 파일들을 입력으로 압축해서
  output: {
    filename: 'main.js',
    // 여기에 출력한다
    path: path.resolve(__dirname, 'dist'),
  },

  // 💡 추가설정들
  watch: true, // 파일 수정 후 저장시 자동으로 다시 빌드
  experiments: {
    topLevelAwait: true // 모듈 await 가능하도록
  }
};
```
- `./src/main.js`파일과 연결된 모든 모듈들을 `./dist/main.js`파일로 통합

3. 빌드 명령 추가
```js
// package.json
  "scripts": {
    "build": "webpack"
  },
```
- 웹팩으로 빌드할 때 `"type":"module"`을 지워주어야 함
4. 빌드 및 실행
```
npm run build
```
- `./dist/main.js`파일 확인
- HTML파일에서 `script`의 `src`를 `./dist/main.js`로 변경

### 2. 바벨
- 자바스크립트를 보다 오래된 환경에서 동작할 수 있는 버전으로 컴파일
- 기타: 타입스크립트에서 컴파일러 사용

## JSDoc
- 자바스크립트 코드에 주석을 달기 위한 마크업 언어
  - 객체, 함수, 변수에 대한 설명
- 에디터, IDE에서는 작성된 내용에 따라 코드 힌팅 등의 기능 제공
- 마치 타입스크립트 등의 언어처럼 인자 등의 자료형 제안
- 도구를 통해 웹 문서 등으로 출력될 수 있음
- `.js`파일에서 `/**`을 입력하면 사용 가능
### 기본 주석
```js
/** 코드의 제목으로 사용될 문자열 */
const TITLE = 'JSDoc 사용하기';
```
### `@type`-자료형 명시, `@const`-상수임을 명시
```js
/**
 * 원주율
 * @type {number}
 * @const
 */

/**
 * 원주율
 * @const {number}
 */
const PI = '3.14';
```
### `@param`-인자
```js
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} 두 수의 합
 */
const add = (x, y) => x + y;
```
### `@typedef`, `@property` - 커스텀 객체 타입 지정
```js
/**
 * @typedef {Object} PersonObj 사람 객체
 * @property {string} name 이름
 * @property {number} age 나이
 * @property {boolean} married 기혼여부
 */

/**
 * 
 * @param {string} name 이름
 * @param {number} age 나이
 * @param {boolean} married 기혼여부
 * @returns {PersonObj}
 */
function getPersonObj (name, age, married) {
  return {name, age, married}
}
```
### `@constructor`, `@class`-생성자 용도로 작성된 함수, 클래스
- `new`키워드와 함께 사용하여 객체를 생성함
- 클래스의 생성자에는 `@constructs`
```js
/**
 * 사람 객체 생성 함수
 * @constructor 
 * @param {string} name 
 * @param {number} age 
 */
function Person (name, age) {
  this.name = name;
  this.age = age;
}

/**
 * 새 클래스
 * @class
 */
class Bird {
  /**
   * @constructs
   * @param {string} name 
   */
  constructor (name) {
    this.name = name;
 }
}
``` 

### `@todo`-이후 해야 할 일 표시
### `@see`, `@link`-참조, 링크
### `@readonly`-읽기 전용
### `@deprecated`-사라지게 될 기능