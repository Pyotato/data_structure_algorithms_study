# FizzBuzz 문제

- fizzBuzz 문제란

  ```
  3의 배수일 경우 Fizz를 출력하고
  5의 배수일 경우 Buzz를 출력해라
  단, 3과 5의 배수일 경우에는 FizzBuzz를 출력해라.

  ```

- 이 문제를 해결하는 핵심은 Modulo Operator
  - Modulo Operator : %연산
    - 즉 나누었을때의 나머지
    - 13 % 5 = 8
    - 8 % 5 = 3
  - Modulo Operator를 사용하면 특정 숫자가 나누려는 숫자의 배수인지 판단할 때 유용함
    - 6 % 3 = 0
    - 6을 3으로 나눴을때 나머지가 0이므로, 6은 3의 배수임을 알 수 있음
