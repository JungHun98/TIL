# Database design using E-R model
## 설계 단계
- 사용자가 어떤 데이터가 필요할 지 알아야한다.
- 데이터 모델을 활용해서 필요한 데이터를 스키마로 변환
- 스키마를 잘 설계한다면 데이터에 대해서 해야 할 연산을 결정
- 데이터 베이스 구현
  - 데이터베이스 스키마 설계
  - 테이블을 어떻게 만들까? 테이블에 어떤 데이터를 저장 할까?

##  설계시 주의할 점
- 데이터의 중복: 같은 정보가 여러 테이블에서 나타낼 수 있음, 데이터 불일치 문제가 발생할 수 있다. (데이터 수정 시 다른 테이블에 있는 같은 데이터들을 모두 수정해야 함)
- 불완전한 스키마를 만들면 안된다: 해야 할 작업을 할 수 없게 됨, 원하는 기능을 구현하기 어렵거나 구현 못할 수도 있음
- 좋은 설계기법들 중 어떤 걸 선택해야 할까

## Entity Relationship Model

- Entity: 다른 것들과 구분 가능한 것
  - attributes로 구분 가능
- Relationship: Entity 사이의 관계를 나타내는 것

# Entity Relationship
## Entity Set
- Entity: 다른 객체들과 구분되는 다른 오브젝트 (instance)
  - attributes로 표현됨
- Entity Set: 같은 특성들을 공유하는 Entity의 집합 (type)
- Entity에서 primary key를 만들 수 있다.

- Entity Set은 사각형으로 나타낸다.
- attributes들은 사각형 안에 표기하고 primary key는 밑줄로 나타냄

## Relationship Set
- 개체들 사이에 존재하는 관계들의 집합
- ER 다이어그램에서 마름모 모양으로 나타냄
- attributes를 가질 수 있음
  - 다이어 그램에서 관계 집합에서 점선으로 표현

## Roles
- 하나의 개체 집합에서 관계가 발생한다면 역할을 구분해 줘야한다.

## 관계집합에서의 차수
- 어떠한 개체 집합에 몇개의 개체가 연결되어있는 가로 판단
- 이진 관계: 개체-개체, 두 개의 개체가 관계를 맺는 것
- 두 개 이상의 개체가 하나의 관계를 맺는다면 Non-binary

## Complex Attribute
- simple Attribute : 일반 Attribute
- composit Attribute: 하위 Attribute를 갖는 Attribute
- Dmain: Attribute에 저장 될 수 있는 값

## Cardinality Constraints
- One to one: 개체 하나 씩만 관계에 참여할 수 있음
- One to many: 하나의 개체가 여러개의 개체와 관계에 참여
- Many to one: 여러개의 개체가 하나의 개체와 관계에 참여
- Many to many: 여러개의 개체가 여러개의 개체와 관계에 참여
- 관계에 참여하지 않는 개체가 존재할 수 있다.

### ER 다이어그램에서 표시하기
- One은 화살표로 나타내고 Many는 직선으로 나타낸다.
- 반드시 모든 개체가 관계에 참여해야 하는 개체집합은 두개의 직선으로 표현한다.
  - Partial Participation
- minimum ... maximum: minimum~maximum 사이에 개수로 관계에 참여해야 한다.

### Primary Key
1. 개체 집합에서의 기본키
    - 개체를 유일하게 식별해줄 수 있는 attribute의 집합을 선택한다.
    - 기본키는 여러개의 attribute 가능
2. 관계 집합에서의 기본키
    - 관계를 유일하게 식별해 줄 수 있는 개체 쌍을 선택함
    - 주로 관계에 참여하는 개체 집합의 기본키쌍을 사용한다.
    - 관계의 제약 조건에 따라서 기본키를 선택할 수 있다.
      - 제약조건에 one이 존재한다면 many 쪽의 개체집합의 기본키 사용
      - many to many는 양 쪽의 기본키를 모두 사용
