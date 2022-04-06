# Structured Query Language(SQL)

- DML, Intergrity, View definition, Transaction control, Embedded SQL and dynamic SQL, Authorization들로 이루어져 있다.

## Data Definition Language(DDL)

- Schema, Attributes의 type, Integrity, Indices(색인), 보안과 권한을 설정할 수 있다.

- Domain Types in SQL
  - `char(n).` n의 크기로 고정된 문자열
  - `varchar(n)` 최대 n의 크기까지의 가변길이 문자열
  - `int`, `smallint` 정수, 작은 정수
  - `numeric(p,d)` p개의 숫자를 소수점 d자리까지 정확하게 기억하는 Type
  - `real, double, precision` 실수
  - `float(n)` 최소 n개의 정수로 이루어진 실수

## Create Table Construct

- SQL Table은 `create table` 명령어로 생성 할 수 있다.<br>

  ```
  create table instructor (
                  ID char(5),
                  name varchar(20),
                  dept_name varchar(20),
                  salary numeric(8,2))
  ```

  table 이름이 instructor이고 ID, Name, dept_name, salary의 Attributes,각각 char, varcahr, varcahr, numeric의 Domain을 갖는 table을 생성한다.

- Integrity Constraints in Create Table
  - SQL은 무결정 제약 조건을 위반하는 데이터베이스 업데이트를 방지한다.
  - primary key (A1, ..., An ) : 기본키 설정
  - foreign key (Am, ..., An ) references r : 외래키 설정
  - not null : null로 setting 불가능
  ```
  create table instructor (
                  ID char(5),
                  name varchar(20) not null,
                  dept_name varchar(20),
                  salary numeric(8,2),
                  primary key (ID),
                  foreign key (dept_name) references department);
  ```

## Updates to tables

- Insert
  ```
  insert into instructor values ('10211', 'Smith', 'Biology', 66000);
  <!-- instructor table에 해당 tuple을 삽입 -->
  ```
- Delete
  ```
  delete from student
  <!-- student table의 모든 tuple 삭제 -->
  ```
- Drop Table
  ```
  drop table r
  <!-- r table 영구 삭제 -->
  ```
- Alter
  ```
  alter table r add A D
  <!-- r table에 새로운 Attribute, Domain type 추가, 처음에는 모두 null로 초기화 된다. -->
  ```

## Basic Query Structure

- 쿼리문은 대소문자를 구분하지 않는다.
- The select Clause

  - select 절은 쿼리 결과에 원하는 Attribute를 나열한다. (관계 대수에서 projction에 해당함)
  - where (instructor.ID, dept_name) = (teaches.ID, 'Biology'); 처럼 튜플단위로 비교가 가능함.
  - where salary <strong>between</strong> 90000 and 100000 (90000 <= salary <= 100000)

  ```
  select name
  from instructor
  <!-- instructor table에서 name을 모두 가져옴 -->

  select distinct dept_name
  from instructor
  <!-- instructor table에서 dept_name을 중복 없이 가져옴 -->

  select *
  from instructor
  <!-- instructor table의 모든 atrributes를 가져옴 -->

  select ID, name, salary/12
  from instructor
  <!-- select문에서 사직연산이 가능함. salary에서 12를 나눈 몫을 가져옴 -->
  ```

- The where Clause

  - where절은 결과가 충족해야하는 조건을 지정한다.(관계 대수에서 select에 해당함)
  - where절에서 논리 연산, 비교연산이 가능하다.

  ```
  select name
  from instructor
  where dept_name = 'Comp. Sci.'
  <!-- instructor table에서 dept_name가 Comp. Sci.인 사람의 이름을 가져옴 -->

  select name
  from instructor
  where dept_name = 'Comp. Sci.' and salary > 70000
  <!-- instructor table에서 dept_name가 Comp. Sci.인 사람 중 연봉이 70000보다 큰 사람의 이름을 가져옴 -->
  ```

- The from Clause

  - from 절은 쿼리에 관련된 관계를 나열한다.(관계 대수에서 e Cartesian product에 해당함)

  ```
  select *
  from instructor, teaches
  <!-- instructor, teaches의 Cartesian product를 가져옴 -->

  select name, course_id
  from instructor , teaches
  where instructor.ID = teaches.ID
  <!-- instructor, teaches의 Cartesian product를 그냥 가져오면 무의미한 데이터가 추가되므로 where절을 같이 사용하여 무의미한 데이터를 없앨 수 있음 -->

  ```

- The Rename Operation

  - as절은 table 및 attribute의 이름을 변경할 수 있음

  ```
  select distinct T.name
  from instructor as T, instructor as S
  where T.salary > S.salary and S.dept_name = 'Comp. Sci.’
  <!--  instructor table을 T와 S로 변경하여 간결하게 사용한다. -->
  ```

- String Operations

  - SQL에서 문자열 비교를 위한 문자열 일치연산자('%', '\_')가 포함됨
  - Example
    - 'Intro%' Intro로 시작하는 문자열
    - '%Comp%' Comp가 포함되어 있는 문자열
    - '\_ \_ \_' 정확히 3개의 문자로 이루어진 문자열
    - '\_ \_ \_ %' 3개 이상의 문자로 이루어진 문자열

- Ordering the Display of Tuples

  - 가져온 데이터를 정렬할 수 있음.

  ```
  select distinct name
  from instructor
  order by name
  <!-- 이름순으로 오름차순 정렬(order by name desc은 내림차순 정렬) -->
  ```

- Set Operations

  - union(두개의 table결합)
  - intersect(두개의 table에서 공통된 것을 추출)
  - exept(하나의 table에만 존재하는 데이터 추출)
  - 집합 연산은 중복된 데이터를 알아서 제거하여 추출한다. 집합 연산뒤에 all문을 사용하면 중복된 데이터를 제거하지 않고 추출한다.

- Null Values
  - null은 알려지지 않은 값(nukown)이다.
  - null은 사칙 연산, 비교 연산으로 판단하면 잘못된 결과를 가져올 수 있다.
  - null은 is null 또는 is not null로만 판별해야한다.
