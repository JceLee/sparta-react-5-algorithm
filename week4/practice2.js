// 문제 정의:
// 주어진 숫자 n에 대해 n의 팩토리얼을 계산하시오.

// 팩토리얼은 다음과 같이 정의됩니다:
// n! = n * (n - 1)!, 단 0! = 1

// 조건
// 꼭 재귀함수(Recursion) 형식으로 해답을 작성해야 합니다.

// 예시:
// 입력: n = 2
// 출력: 2
// 설명: 2! = 2 * 1 = 2
// 입력: n = 3
// 출력: 6
// 설명: 3! = 3 * 2 * 1 = 6
// 입력: n = 4
// 출력: 24
// 설명: 4! = 4 * 3 * 2 * 1 = 24

function factorial(n) {}

// 테스트 코드
function testFactorial() {
  const testCases = [
    { input: 2, expected: 2 },
    { input: 3, expected: 6 },
    { input: 4, expected: 24 },
    { input: 5, expected: 120 },
    { input: 6, expected: 720 },
    { input: 7, expected: 5040 },
    { input: 0, expected: 1 },
    { input: 1, expected: 1 },
    { input: 10, expected: 3628800 },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = factorial(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testFactorial();
