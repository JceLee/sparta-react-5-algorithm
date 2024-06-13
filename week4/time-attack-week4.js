// 문제 정의:
// 주어진 문자열에서 특정 문자의 출현 횟수를 계산하시오.

// 조건
// 꼭 재귀함수(Recursion) 형식으로 해답을 작성해야 합니다.

// 예시:
// 입력: "hello", 'l'
// 출력: 2
// 설명: 문자열 "hello"에서 문자 'l'은 두 번 출현합니다.
// 입력: "programming", 'm'
// 출력: 2
// 설명: 문자열 "programming"에서 문자 'm'은 두 번 출현합니다.
// 입력: "recursion", 'x'
// 출력: 0
// 설명: 문자열 "recursion"에서 문자 'x'은 출현하지 않습니다.
// 입력: "mississippi", 's'
// 출력: 4
// 설명: 문자열 "mississippi"에서 문자 's'은 네 번 출현합니다.

// countOccurrences(str, char)
// 주어진 문자열 str에서 주어진 문자 char의 출현 횟수를 재귀적으로 계산하여 반환합니다.
function countOccurrences(str, char) {}

// 테스트 코드
function testCountOccurrences() {
  const testCases = [
    { input: ["hello", "l"], expected: 2 },
    { input: ["programming", "m"], expected: 2 },
    { input: ["recursion", "x"], expected: 0 },
    { input: ["mississippi", "s"], expected: 4 },
    { input: ["hello", "o"], expected: 1 },
    { input: ["aaaa", "a"], expected: 4 },
    { input: ["", "a"], expected: 0 },
    { input: ["abcde", "z"], expected: 0 },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = countOccurrences(input[0], input[1]);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testCountOccurrences();
