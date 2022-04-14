# Dynamic Programming

- Divide and Conquer(분할 정복)과 비슷한점
  - 한 문제의 인스턴스를 더 작은 인스턴스로 나눈다.
- Divide and Conquer(분할 정복)과 다른점

  - 작은 인스턴스들을 먼저 해결하고, 그 해를 이후 다시 사용한다. (배열을 이용한 반복문 사용)
  - Dynamic Programming은 Bottom-Up, Divide and Conquer는 Top Down

- Dynamic Programming 풀이 법
  - Step 1: 큰 문제에 대해 문제를 해결하기위한 재귀식을 구한다.
  - Step 2: bottom-up방식으로 작은 인스턴스를 해결한 뒤 작은 문제의 해를 이용해 큰 문제의 해를 구한다.

# Dynamic Programming Example

## 1. The Binomial Coefficient(이항 정리)

- n개의 원소에서 k개를 선택하는 경우의 수<br>
  C(n, k) = $\frac{n!}{k!(n-k)!}$ 이를 재귀식으로 나타내면<br>

  - C(n, k) = C(n - 1, k) + C(n, k - 1) (0 < k < n)
  - C(n, k) = 1 (k = 0 or k = n)

- 이항 정리를 Dynamic Programming으로 표현하기
  - 문제의 해를 담을 배열을 정한다. B[i][j]
  - 앞서 만든 재귀식을 배열에 적용한다.<br>
    B[i][j] = B[i-1][j-1]+B[i-1][j] 0<j<i <br>
    B[i][j] = 1 j=0 or i=j
  - 설계한 재귀식을 바탕으로 알고리즘을 구현한다.
  ```
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
    - 기본 연산: B[i][j] 업데이트
    - Input Size: n, k
    - i가 0부터 시작해 i <= K 일때 까지는 i만큼 반복, i > k이후에는 모두 k+1만큼 기본연산이 반복된다. 따라서 총 반복회수는<br>
    ```
    1+2+3+ ... + k + (k+1) ...
    + (k+1)
    = K(k+1)/2 + (k+1)(n-k+1)
    = (2n-k+2)(k+1)/2
    ```
    - n, k에 의해서 시간복잡도가 결정되므로 이항 정리 알고리즘의 시간복잡도는 Θ(nk)
