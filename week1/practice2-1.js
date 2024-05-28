// 문자열에서 가장 많이 등장한 문자 찾기
// 문제 정의:
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하라. 만약 여러 개라면 그 중 아무거나 반환하라.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 예시:

// 입력: "banana"
// 출력: 'a'


function mostFrequentChar1(s) {
    const char = {};
    let max = 0;
    let maxChar = [];
    for (let i = 0; i < s.length; i++) {
      if (!char[s[i]]) {
        char[s[i]] = 1;
      } else {
        char[s[i]]++;
      }
    }
    for (let i in char) {
      if (char[i] > max) {
        max = char[i];
        maxChar = i;
      }
    }
    return maxChar;
  }

function mostFrequentChar2(s) {
    const charCount = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] ? (charCount[char] += 1) : (charCount[char] = 1);
    }
    let maxChar = "";
    let maxCount = 0;
    for (const char in charCount) {
      if (charCount[char] > maxCount) {
        maxCount = charCount[char];
        maxChar = char;
      }
    }
    return maxChar;
  }

// 테스트 코드
function testMostFrequentChar() {
    const testCases = [
        { input: "banana", expected: ['a'] },
        { input: "appllaaaae", expected: ['a'] },
        { input: "mississippi", expected: ['i', 's'] },
        { input: "mississippiss", expected: ['s'] },
        { input: "aabbcc", expected: ['a', 'b', 'c'] },
    ];

    testCases.forEach(({input, expected}, index) => {
        try {
            const result = mostFrequentChar(input);
            if (!expected.includes(result)) throw new Error(`Expected one of ${expected}, but got ${result}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출 : 터미널에 node practice2-1.js 실행
testMostFrequentChar();
