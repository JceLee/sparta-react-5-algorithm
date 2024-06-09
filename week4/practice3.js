// 문제 정의:
// 주어진 문자열을 뒤집으시오.

// 조건
// 꼭 재귀함수(Recursion) 형식으로 해답을 작성해야 합니다.

// 예시:
// 입력: "hello"
// 출력: "olleh"
// 설명: "hello"를 뒤집으면 "olleh"가 됩니다.
// 입력: "world"
// 출력: "dlrow"
// 설명: "world"를 뒤집으면 "dlrow"가 됩니다.
// 입력: "recursion"
// 출력: "noisrucer"
// 설명: "recursion"을 뒤집으면 "noisrucer"가 됩니다.

function reverseString(str) {}

// 테스트 코드
function testReverseString() {
  const testCases = [
    { input: "hello", expected: "olleh" },
    { input: "world", expected: "dlrow" },
    { input: "recursion", expected: "noisrucer" },
    { input: "a", expected: "a" },
    { input: "", expected: "" },
    { input: "JavaScript", expected: "tpircSavaJ" },
    { input: "madam", expected: "madam" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseString(input);
      if (result !== expected)
        throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseString();
