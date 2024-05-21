// 문제 1: 문자열 내 각 문자의 개수 반환
// 문제 정의:
// 주어진 문자열에서 각 문자가 몇 번 등장하는지 세어라. 결과는 객체 형태로 반환한다.

// 조건:

// 대소문자를 구분한다.
// 공백도 하나의 문자로 간주한다.
// 빈 문자열이 주어질 수도 있다.
// 예시:

// 입력: "hello world"
// 출력: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}

// 입력: "hello World"
// 출력: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'W': 1, 'r': 1, 'd': 1}



function countCharacters(s) {
    // 함수 countCharacters(문자열 s):
    // characterCount = 빈 객체 {}
  
    // 반복문 i = 0에서 s.length까지:
    //     문자 = s[i]
    //     만약 characterCount[문자]가 존재하지 않으면:
    //         characterCount[문자] = 1
    //     그렇지 않으면:
    //         characterCount[문자] += 1
  
    // 반환 characterCount
  
    const characterCount = {};
  
    for (let i = 0; i < s.length; i++) {
      if (!characterCount[s[i]]) {
        characterCount[s[i]] = 1;
      } else {
        characterCount[s[i]] += 1;
      }
    }
    return characterCount;
  }

// 테스트 코드
function testCountCharacters() {
    const testCases = [
        { input: "hello world", expected: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1} },
        { input: "banana", expected: {'b': 1, 'a': 3, 'n': 2} },
        { input: "", expected: {} },
        { input: "aabbcc", expected: {'a': 2, 'b': 2, 'c': 2} },
    ];

    testCases.forEach(({input, expected}, index) => {
        try {
            const result = countCharacters(input);
            const isEqual = JSON.stringify(result) === JSON.stringify(expected);
            if (!isEqual) throw new Error(`Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출 : 터미널에 node practice1.js 실행
testCountCharacters();
