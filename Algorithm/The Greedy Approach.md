# The Greedy Approach

- Greedy Algorithm: 어떤 문제 인스턴스의 해가 일련의 선택으로 이루어질 때 선택 순간 최선의 선택을 하면서 최종해를 구하는 알고리즘. 하지만 매 선택마다 최선의 선택을 한다고 해서 반드시 최적의 해를 보장하는 것은 아니다.
- 예를 들어 금액을 최소 개수로 화폐로 바꾸는 문제에서 가장 큰 단위의 화폐를 최대한 많이 포함한다. 그리고 남은 금액에 대해서 문제가 해결 될 때 까지 반복한다.
- General Greedy Approach
  - 선택한 것을 담는 set을 만들고 선택할 때 포함시킨다.
  1. 현재 선택할 수 있는 가장 최선의 해를 선택한다.
  2. 선택한 값이 최적의 해인지 확인한다.
  3. 실제 전체문제의 최적의 해가 되는지 확인한다.
  - 이 과정을 문제가 해결 될때 까지 반복

## Example

- Minimum Spanning Trees

  - Spanning Tree: 원래 그래프에서 Tree형태로 변형한 subgraph
  - Minimum Spanning Trees: 최소의 가중치를 갖는 Spanning Tree
    ![](./img/spanning.JPG)
    G<sub>4</sub>, G<sub>5</sub>는 G<sub>1</sub>의 Minimum Spanning Trees다.

  1. Prim’s Algorithm
     - F: Minimum Spanning Tree의 edge set
     - Y: Minimum Spanning Trees에 포함된 vertax set
     - V: 전체 노드 집합
     - W[i][j] : Weight table
     - nearest[i]: Y에서 V<sub>i</sub>에 가장 가까운 vertex의 index. (1로 초기화)
     - distance[i]: V<sub>i</sub>와 nearest[i]에 저장된 vertex의 가중치 (W[1][i]값으로 초기화)
     ```
      F = 공집합;
      Y = {v1};
      while(문제가 해결되지 않음){

      Y에 포함되지 않으면서 가장 가까이 위치한 노드 선택(그리디)
      Y에 추가
      F에 추가

      if (Y==V) 문제 해결 
      }
     ```
     - 항상 최적의 해를 찾는건가?
     - 그리디 알고리즘은 동적계획법 보다 작성하기는 쉽다. 하지만 최적의 해인지는 증명이 필요하다.
     - promising: 현재 F에서 다른 Edge를 추가했을 때 Minimum Spanning Tree를 만들 수 있다면 최적의 해를 보장한다.

     - 노드를 중심으로 트리 구성
      - 현재 트리와 가장 가까운 노드 추가
  2. Kruskal's Algorithm
    -  edge를 중심으로 트리 구성
      - 가중치가 낮은 edge를 추가
    ```
    F = 공집합(간선 집합)
    V = 연결된 노드들의 집합들, 처음엔 모든 노드들로 집합을 만듦(n 개의 집합)
    그래프의 모든 edge를 오름차순으로 정렬
    while(문제가 해결되지 않는 동안){
      정렬된 list에서 다음 edge선택
      if(그 edge가 V에 포함된 두 집합을 연결하는 edge){
        merge the subsets
        F에 edge추가
      }

      if(모든 subset이 병합){
        문제 해결
      }
    } 
    ```
    - 항상 최적의 해를 보장할까?
    - promising: 현재 F에서 다른 Edge를 추가했을 때 Minimum Spanning Tree를 만들 수 있다면 최적의 해를 보장한다. (Prim 알고리즘과 유사한 증명)