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
