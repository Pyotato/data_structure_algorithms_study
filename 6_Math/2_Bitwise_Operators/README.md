# Bitwise Operators

- 프로그래밍을 하다보면 주로 실수(floats)나 정수(Integer)들을 자주 다룸

- 이진법을 사용하면 수가 2의 제곱근인지 빠르게 판단이 가능함

  - 16은 2ⁿ으로 표현 가능한 수 인가 ?
    - 16 === 10000 ===2⁴
    - 파이썬에서는 bin()함수를 통해서 이진수로 변환가능함
    - [javascript에서 10진수를 이진수로 변환하는 방법 feat.toString(2)]()

- `AND` 와 `OR` 연산 (ft. 파이썬)
  - AND 논리연산: 둘다 true일 경우만 true 리턴
    - true `AND` true === true
    - false `AND` true === false
    - false `AND` false === false
  - OR 논리 연산 : 하나라도 true면 true 리턴
    - true `OR` true === true
    - false `OR` true === true
    - false `OR` false === false
- `&` 비트연산자 와 `|` 비트 연산자 (ft. 파이썬)`

  ```
  //0b10와 0b11에 &(AND)비트 연산을 한다면?

      1 0 ₂ === 2
      1 1 ₂ === 3
        ㄴ 비교했을때 false & true이므로 => false (0)
      ㄴ  비교했을때 true & true이므로 => true (1)
      따라서 10₂ ===2 리턴

    //0b10와 0b11에 |(OR)비트 연산을 한다면?

     1 0 ₂ === 2
     1 1 ₂ === 3
        ㄴ 비교했을때 false | true이므로 => true (1)
    ㄴ  비교했을때 true & true이므로 => true (1)
    따라서 10₂ ===2 리턴

  ```

- XOR , NOT, right shift, left shift 와 같이 다른 비트연산자들도 있음
- 비트연산자 유용성

  - 🥰[숫자가 짝수인지 홀수인지 판단해야할때]()
  -

- 🤔js 관련 개념은 뭐가 있을까 하다가 생각난 것들 정리
  - 논리연산자
  - 비트연산자
  - truthy & falsy
