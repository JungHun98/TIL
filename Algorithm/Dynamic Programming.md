# Dynamic Programming

- Divide and Conquer(분할 정복)과 비슷한점
  - 한 문제의 인스턴스를 더 작은 인스턴스로 나눈다.
- Divide and Conquer(분할 정복)과 다른점

  - 작은 인스턴스들을 먼저 해결하고, 그 해를 이후 다시 사용한다. (배열을 이용한 반복문 사용)
  - Dynamic Programming은 Bottom-Up 작은 문제의 인스턴스로 부터 큰 문제의 인스턴의 해를 구함, Divide and Conquer는 Top Down

- Dynamic Programming 풀이 법
  - Step 1: 큰 문제에 대해 문제를 해결하기위한 재귀식을 구한다.
    - 알고리즘 작성전에 선행되어야 하는 단계
  - Step 2: bottom-up방식으로 작은 인스턴스를 해결한 뒤 작은 문제의 해를 이용해 큰 문제의 해를 구한다.

# Dynamic Programming Example

## 1. The Binomial Coefficient(이항 정리)

- n개의 원소에서 순서에 무관하게 k개를 선택하는 경우의 수<br>
  C(n, k) = $\frac{n!}{k!(n-k)!}$ 이를 재귀식으로 나타내면<br>

  - C(n, k) = C(n - 1, k) + C(n, k - 1) (0 < k < n)
  - C(n, k) = 1 (k = 0 or k = n)

- 이항 정리를 Dynamic Programming으로 표현하기
  - 문제의 해를 담을 배열을 정한다. B[i][j]
  - 앞서 만든 재귀식을 배열에 적용한다.<br>
    B[i][j] = B[i-1][j-1]+B[i-1][j] 0<j<i <br>
    B[i][j] = 1 j=0 or i=j
  - 설계한 재귀식을 바탕으로 알고리즘을 구현한다.
  ```java
  public static int bin2(int n, int k){
    index i, j;
    int[][] B = new int[0..n][0..k];
    for(i = 0; i <= n; i++){
      for(j = 0; j <= min(i,k); j++)
        if(j == 0 || j == i)
          B[i][j] = 1;
        else
          B[i][j] = B[i-1][j-1]+B[i-1]
    }
    return B[n][k];
  }
  ```
  - Time Complexity
    - 기본 연산: B[i][j] 업데이트 연산
    - Input Size: n, k
    - i가 0부터 시작해 i <= K 일때 까지는 i만큼 반복, i > k이후에는 모두 k+1만큼 기본연산이 반복된다. 따라서 총 반복회수는<br>
    ```
    1+2+3+ ... + k + (k+1) + ...
    + (k+1) ... + (k+1)
    = K(k+1)/2 + (k+1)(n-k+1)
    = (2n-k+2)(k+1)/2
    ```
    - n, k에 의해서 시간복잡도가 결정되므로 이항 정리 알고리즘의 시간복잡도는 Θ(nk)

## 2. Floyd’s Algorithm for Shortest Paths

- 그래프의 각 vertex에서 모든 vertex를 지나는 최소 경로를 찾는 알고리즘.
  - 모든 조합의 vertex 최단 경로를 찾음
- 모든 vertex를 하나씩 따져가며 최단경로를 찾게되면 상당히 비효율적이다.
  - 최소 Θ(n!)의 시간복잡도를 갖는다.
### Floyd’s Algorithm
- 간선의 가중치를 이차원배열로 나타내는 테이블을 사용해 알고리즘을 구현한다.
  ![](./img/2.JPG)
  
  - 가장 큰 인스턴스: 경유하는 vertex에 제한이 없음
  - 작은 인스턴스: 경유하는 vertex의 제한을 두는 인스턴스

  D<sup>(k)</sup>[i][j]는 {v<sub>1</sub>, v<sub>2</sub>, …, v<sub>k</sub>}를 지나는 v<sub>i</sub>부터 v<sub>j</sub>까지의 최소경로를 저장하는 배열이다.<br>
  EX) D<sup>(2)</sup>[2][5]는 {v<sub>1</sub>, v<sub>2</sub>, v<sub>3</sub>}를 지나는 v<sub>2</sub>에서 v<sub>5</sub>까지의 최단 경로 = 14<br>
  D<sup>(3)</sup>[2][5]는 v<sub>3</sub>를 통과하는 경로가 없기 때문에 D<sup>(2)</sup>[2][5]의 값과 같다.

- 재귀식 구하기

  - 최단경로를 구할 때 고려해야 하는 두 가지 경우가 있다.

  1. 최단경로가 집합 {v<sub>1</sub>, v<sub>2</sub>, …, v<sub>k</sub>}에서 v<sub>k</sub>를 지나지 않는 경우(D<sup>(k)</sup>[i][j])에는 결국 최단경로가 D<sup>(k-1)</sup>[i][j]과 같게 된다. 따라서 위와같은 경우는<br>
     D<sup>(k)</sup>[i][j] = D<sup>(k-1)</sup>[i][j]
  2. 최단경로가 집합 {v<sub>1</sub>, v<sub>2</sub>, …, v<sub>k</sub>}에서 v<sub>k</sub>를 지나는 경우에는 v<sub>i</sub>~v<sub>k</sub>의 최단경로와 v<sub>k</sub>~v<sub>j</sub>의 최단 경로를 더한 값이된다.<br>
     D<sup>(k)</sup>[i][j] = D<sup>(k-1)</sup>[i][k] + D<sup>(k-1)</sup>[k][j]
  3. 최종적으로 구하고자 하는 최단 경로는 두 가지 경우중에서 더 작은 값을 최단경로로 선택한다. 따라서 최종적인 재귀식은<br>
     D<sup>(k)</sup>[i][k] = min(D<sup>(k-1)</sup>[i][j], D<sup>(k-1)</sup>[i][k] + D<sup>(k-1)</sup>[k][j])

  ```java
  // 재귀식에서 변수가 k, i, j 세 개지만 최종적인 k값에서의 결과 값을 도출해 내는 것이 목적이므로 이전값을 이용해 계산한 결과를 2차원 배열에 업데이트하는 것만으로 충분하다
  // 없는 경로는 infinite, 매우 큰 값으로 설정
  public static void floyd(int n, number[ ][ ] W, number[ ][ ] D){
    index i, j, k;
    D = W;
    for(k=1; k <= n ;k++)
      for (i=1; i <= n ; i++)
        for (j=1; j <= n ; j++)
           D[i][j]=min(D[i][j], D[i][k]+D[k][j]);
  }
  ```
  ```java
  // 최단 경로를 방문하는 vertex의 순서
  public static void floyd(int n, number[ ][ ] W, number[ ][ ] D, number[][] P){
    index i, j, k;
    D = W;
    for(k=1; k <= n ;k++)
      for (i=1; i <= n ; i++)
        for (j=1; j <= n ; j++)
          if (D[i][k] + D[k][j] < D[i][j]){
            D[i][j] = D[i][k] + D[k][j];
            p[i][j] = k; // i부터 j까지 경유하는 노드중에서 가장 큰 값인 k를 기억함, 재귀적으로 경로 출력 가능
          }
  }

  public static void path(index q, r){
    if(P[q][r] != 0){
      path(q, P[q][r]); // q~P[q][r] 최단 경로 출력
      system.out.print(P[q][r] + " ");
      path(P[q][r], r); // P[q][r]~r 최단 경로 출력
    }
  }
  ```
  시간 복잡도는 n<sup>3</sup>임을 알 수 있다.

## Dynamic Programming and Optimization Problem

- Dynamic Programming을 사용하기 위한 조건은 Principle of Optimality을 만족해야 한다.
  - Principle of Optimality: 전체문제의 최적의 해가 부분문제들의 최적의 해로부터 만들어져야 한다.

## 3. Optimal Binary Search Trees
### 어렵지만 숙지해두면 다른 동적계획법 문제들은 상대적으로 쉬워질듯
- 이진트리
  - 각각의 노드는 하나의 키 값을 갖는다.
  - 루트노드의 키 값은 왼쪽 서브 트리의 키 값들이 항상 자신보다 작거나 같다. 
  - 루트노드의 키 값은 오른쪽 서브 트리의 키 값들이 항상 자신보다 항상 크거나 같다
  ```java
  // 이진 트리 탐색
  boolean found = false;
  p = tree;
  while (!found){
    if (p.key == target){
      found = True;
    }
    else if(target < p.key){
      p = p.left
    }
    else{
      p = p.right
    }
  }
  ```
  - key<sub>1</sub>, key<sub>2</sub>, ... key<sub>n</sub>이 이진 트리의 ket 값으로 저장되어있다고 가정하자 (key<sub>1</sub><=key<sub>1</sub><= ... <=key<sub>n</sub>)
  - 검색 key로서 key<sub>i</sub>가 사용될 확률을 p<sub>i</sub>라 하자
  - 원하는 key를 찾기 위해 비교하는 횟수의 평균을 최소화하는 이진트리 = Optimal Binary Search Tree (p<sub>1</sub>c<sub>1</sub>+p<sub>2</sub>c<sub>2</sub>+ ... p<sub>i</sub>c<sub>i</sub> 값의 최소화)
  - 검색 key로 사용될 확률이 높은 key를 tree 상단에 위치하도록 한다.
   
  ### Dynamic Programming을 적용하자
  1. 재귀식 구하기
    - 전체 n개의 key중에서 key<sub>i</sub>~key<sub>j</sub>의 key만 저장하는 서브트리로 인스턴스를 나눈다. A[i][j]에 최소 평균 비교횟수를 저장(A[i][i] = p<sub>i</sub>)
    - 전체 n개의 key를 저장하는 Optimal binary search tree를 찾아보자
    - root 노드를 key<sub>1</sub>~key<sub>k</sub>~key<sub>n</sub>까지 모두 고려하여 최소 비교횟수를 갖는 것을 해로 삼는다.
    - key<sub>k</sub>를 root노드로 삼았을 때 key<sub>1</sub>~key<sub>k-1</sub>서브트리와 key<sub>k+1</sub>~key<sub>n</sub>의 최소 평균 비교 횟수를 더해주면 전체 트리의 최소 평균 회수를 구할 수 있다.
    - A[1][k-1] + p<sub>k</sub> + A[k+1][n] + 서브트리에서의 비교횟수
    - A[1][n]의 값은 ??
      - min<sub>1<=k<=n</sub>(A[1][k-1]+A[k+1][n]) + sum(p<sub>1</sub>~p<sub>n</sub>)
    - 재귀식
      - A[i][j] = min<sub>i<=k<=j</sub>(A[i][k-1]+A[k+1][j]) + sum(p<sub>i</sub>~p<sub>j</sub>)
      - A[i][i] = p<sub>i</sub>
      - A[i][i-1] = A[j+1][j] = 0
      ```java

      ```

## 4. Traveling SalesPerson Problem
- V<sub>1</sub>에서 출발하여 모든 경로를 방문하고 돌아오는 최단 경로를 구하는 문제
- 동적 계획법으로 접근 해야하니 먼저 재귀식을 새우자
- V를 {v<sub>1</sub> ~ v<sub>n</sub>} 모든 노드의 집합이라고 하자
  - A는 V의 부분집합이다.
- W는 노드들의 경로 길이를 저장하는 배열이다.
- D[v<sub>i</sub>][A]는 v<sub>i</sub>에서 시작하여 A의 모든 노드를 방문하고 v<sub>1</sub>으로 가는 최단 경로를 저장한다.
- 최단경로 점화식은 어떻게 구할까?
  - 우리가 필요한 값: min<sub>2<=j<=n</sub>(W[1][j] + D[v<sub>j</sub>][V - {v1, v<sub>j</sub>}])
    - v<sub>j</sub>에서 출발하여 v<sub>1</sub>과 v<sub>j</sub>를 제외한 모든 노드들을 방문한 최단 경로 + v<sub>j</sub> ~ v<sub>1</sub>의 경로의 최소값(2<=j<=n)
    - 하지만 점화식의 형태는 아니다.
    - D[v<sub>i</sub>][A] = min<sub>j는 A에 속한 것중 하나</sub>(W[i][j] + D[v<sub>j</sub>][V - {v<sub>j</sub>}]) (A가 공집합이 아닌경우)
    - D[v<sub>i</sub>][] = W[i][1] (A가 공집합인 경우) (가장 작은 문제의 인스턴스, A에 속한 노드가 많아질수록 큰 인스턴스)
    - A의 크기가 0인 경우 부터 시작해서 n-1가 될때까지 재귀식을 계산한다.