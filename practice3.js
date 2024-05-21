// 두 단어가 애너그램인지 확인
// 문제 정의:
// 두 단어 A와 B가 주어졌을 때, A의 알파벳 순서를 바꾸어 B를 만들 수 있는지 확인하라. 가능하다면 true, 아니라면 false를 반환하라.

// 조건:

// 대소문자를 구분하지 않는다.
// 공백은 무시한다.
// 두 단어의 길이는 같아야 한다.
// 예시:

// 입력: "listen", "silent"
// 출력: true
// 입력: "hello", "bello"
// 출력: false


function isAnagram(a, b) {
    // 코드작성공간
}

// 테스트 코드
function testIsAnagram() {
    const testCases = [
        { input: ["listen", "silent"], expected: true },
        { input: ["hello", "bello"], expected: false },
        { input: ["anagram", "nagaram"], expected: true },
        { input: ["rat", "car"], expected: false },
        { input: ["Dormitory", "Dirty room"], expected: true }, // 공백과 대소문자 무시
        { input: ["The eyes", "They see"], expected: true }, // 공백과 대소문자 무시
        { input: ["a gentleman", "elegant man"], expected: true }, // 공백과 대소문자 무시
        { input: ["School master", "The classroom"], expected: true }, // 공백과 대소문자 무시
        { input: ["Conversation", "Voices rant on"], expected: true }, // 공백과 대소문자 무시
        { input: ["Astronomer", "Moon starer"], expected: true }, // 공백과 대소문자 무시
        { input: ["funeral", "real fun"], expected: true }, // 공백과 대소문자 무시
        { input: ["adultery", "true lady"], expected: true }, // 공백과 대소문자 무시
        { input: ["Eleven plus two", "Twelve plus one"], expected: true }, // 공백과 대소문자 무시
        { input: ["apple", "pale"], expected: false } // 길이가 다른 경우
    ];

    testCases.forEach(({input, expected}, index) => {
        try {
            const result = isAnagram(input[0], input[1]);
            if (result !== expected) throw new Error(`Expected ${expected}, but got ${result}`);
            console.log(`Test ${index + 1}: Passed`);
        } catch (error) {
            console.log(`Test ${index + 1}: Failed - ${error.message}`);
        }
    });
}

// 테스트 함수 호출 : 터미널에 node practice3.js 실행
testIsAnagram();
