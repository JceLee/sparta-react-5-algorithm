// 두 문자열의 교집합 문자 집합 구하기
// 문제 정의:
// 두 문자열이 주어졌을 때, 두 문자열에 모두 등장하는 문자를 집합으로 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 결과는 집합(Set) 형태로 반환한다.
// 예시:

// 입력: "apple", "pineapple"
// 출력: new Set(['p', 'l', 'e'])


function commonCharacters(s1, s2) {
    // 작성할 코드
}

// 테스트 코드
function testCommonCharacters() {
    const testCases = [
        { input: ["apple", "pineapple"], expected: new Set(['a', 'p', 'l', 'e']) },
        { input: ["hello", "world"], expected: new Set(['o', 'l']) },
        { input: ["abc", "def"], expected: new Set() },
        { input: ["abcdef", "fedcba"], expected: new Set(['a', 'b', 'c', 'd', 'e', 'f']) },
    ];

    testCases.forEach(({input, expected}, index) => {
        try {
            const result = new Set(commonCharacters(input[0], input[1]));
            const isEqual = expected.size === result.size && [...expected].every(value => result.has(value));
            if (!isEqual) throw new Error(`Expected ${[...expected]}, but got ${[...result]}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출 터미널에 node practice2-2.js 실행
testCommonCharacters();
