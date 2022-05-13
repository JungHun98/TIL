## 함수적 종속성을 유지

- 데이터베이스가 업데이트될 때마다 함수적 종속성을 테스트하는데 비용이 많이 들 수 있다.
- 종속성을 효율적으로 테스트할 수 있는 방식으로 데이터베이스를 설계하는 것이 유용하다.
- 한 가지 relation만 고려하여 종속성을 시험한다면 테스트 비용이 저렴하다.
- 함수 종속성을 강제하기 어렵게 만드는 분해는 종속성 보존이 아니라고 한다.
- table을 분리하게 되면 존재하는 함수적 종속성이 깨질 수 있다. 때로는 분해하지 않는게 좋을 수도 있다.

## Boyce-Codd Normal Form

- 한 table(R)에 존재하는 모든 함수적 종속성이 다음을 만족하면 BCNF라고 부른다. (A → B)
- (A → B is trivial) or (A이 R의 superkey이다.)<br>
  Exmaple) ID → building (BCNF, ID is super key), dept_name → building (X)
- 어떤 table에서 함수적 종속성이 존재하는데 그것이 BCNF가 만족하지 않을때, 그 종속성에 포함된 attributes를 따로 분리한다. 이때 함수적 종속성에 관련이 있는 것들은 가능한 모두 분리해야한다.<br>
- Example<br>
  R = (A, B, C), F = (A → B, B → C)
  1. R<sub>1</sub> = (A, B), R<sub>2</sub> = (B, C)
     - R<sub>1</sub> $\cap$ R<sub>2</sub> = {B} and B → BC : 데이터 손실이 일어나지 않고 함수적 종속성이 유지됨.
  2. R<sub>1</sub> = (A, B), R<sub>2</sub> = (A, C)
     - R<sub>1</sub> $\cap$ R<sub>2</sub> = {A} and A → AB: 데이터 손실이 일어나지 않지만 B → C 함수적 종속성이 깨짐.

## Third Normal From(제 3정규형, TNF)

- 한 table(R)에 존재하는 모든 함수적 종속성이 다음을 만족하면 제 3정규형을 만족한다. (A → B)
- (A → B is trivial) or (A이 R의 superkey이다.) (= BCNF 조건)
- B - A, B에만 속한 Atrributes가 R의 candidate key(후보키)다.
  - 각 Attribute는 서로 다른 후보키에 속해있을 수 있고, 한 후보키에 속해 있으면 된다.
- TNF는 BCNF의 조건을 포함하고 있기 때문에 BCNF를 만족하면 TNF를 만족한다. 역은 성립하지 않을 수 있다.
- TNF는 정보가 중복되는 문제, null value를 사용해야하는문제가 있지만 분해하지 않아도 되기때문에 정보손실이 일어나지 않고, 함수적 종속성을 유지할 수 있다.
  ![](./img/TNF.JPG)
- Example
  - (s_ID, i_ID, dept_name)
  - candidate key = (s_ID, i_ID), (s_ID, dept_name)
  - 함수적 종속성: (i_ID → dept_name), (s_ID, dept_name → i_ID)
  - 첫 번째 종속성은 BCNF에 포함되지 않지만 dept_name가 candidate key에 존재한다. 두 번쨰 종속성은 s_ID, dept_name이 superkey이므로 이 table은 제3 정규형을만족한다.

## Goals of Normalization(정규화의 목적)

- relation R이 함수적 종속성 F를 가지고 있다고하자.
- 정규화는 R이 좋은 형태인지 아닌지 판단할 수 있다.
- R이 좋은 형태가 아니라면, R을 분해하여 분해된 reltion들이 좋은 형태인지 판별하고, 정보 손실이 일어나지 않았는지, 함수적 종속성을 유지했는지 판단할 수 있다.

## BCNF는 얼마나 좋은가?

- table에 함수적 종속성이 없다면 BCNF를 만족한다. 이는 불필요한 정보를 추가할 가능성이 있다는 것이다.

## Design Goals

- (BCNF, 정보 무손실, 함수적 종속성 유지)의 조건을 맞출 수 없는경우 (함수적 종속성 유지, 3NF)로 설계하자.
- 함수적 종속성은 중요하지만 SQL에서 테스트하기에는 비용이 크고 비효율적이다. SQL에서는 기본키를 이용해야 함수적 종속성을 표현할 수 있다.
- table을 나눴을 때 join을 많이 한다 -> 3NF, 그렇지 않다 -> BCNF

## Multivalued Dependencies (MVDs)

여러개의 값을 가지는 Attribute를 결정할 수 있는 종속성<br>
표현법: A →→ B
A가 정해졌을 때 B를 여러개 소유하고 있다. B는 Multivalued Attribute이다. A는 B의 모든 조합을 가지고 있다. 만약 모든 조합을 가지고 있지 않다면 다치 종속성은 성립되지 않는다.
