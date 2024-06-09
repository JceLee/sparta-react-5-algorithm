// 문제 정의:

// 주어진 숫자 n에 대해 n번째 피보나치 수를 계산하시오.

// 피보나치 수는 다음과 같이 정의됩니다:
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// 조건
// 꼭 재귀함수(Recursion) 형식으로 해답을 작성해야 합니다.

// 예시:
// 입력: n = 2
// 출력: 1
// 설명: F(2) = F(1) + F(0) = 1 + 0 = 1.
// 입력: n = 3
// 출력: 2
// 설명: F(3) = F(2) + F(1) = 1 + 1 = 2.
// 입력: n = 4
// 출력: 3
// 설명: F(4) = F(3) + F(2) = 2 + 1 = 3.

function fibonacci(n) {}

// 테스트 코드
function testFibonacci() {
  const testCases = [
    { input: 2, expected: 1 },
    { input: 3, expected: 2 },
    { input: 4, expected: 3 },
    { input: 5, expected: 5 },
    { input: 6, expected: 8 },
    { input: 7, expected: 13 },
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 10, expected: 55 },
    { input: 20, expected: 6765 },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = fibonacci(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testFibonacci();
