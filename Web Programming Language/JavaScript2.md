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
- 이터러블과 이터레터들보다 ㅏ간결하게 구현 가능
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