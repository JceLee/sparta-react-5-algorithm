# 애너그램 확인 문제

## 문제 정의
두 단어 A와 B가 주어졌을 때, A의 알파벳 순서를 바꾸어 B를 만들 수 있는지 확인하라. 가능하다면 `true`, 아니라면 `false`를 반환하라.

### 조건
- 대소문자를 구분하지 않는다.
- 공백은 무시한다.
- 두 단어의 길이는 같아야 한다.

### 예시
- 입력: "listen", "silent"
  - 출력: true
- 입력: "hello", "bello"
  - 출력: false

## 기존 코드
```javascript
function isAnagram(a, b) {
  // 두 단어의 공백을 제거하고 소문자로 변경 후 단어의 길이가 같은지 확인 후 다르면 false
  // 두 단어의 문자열 카운트 객체 생성
  const newA = a.replace(/ /g, "").toLowerCase();
  const newB = b.replace(/ /g, "").toLowerCase();
  if (newA.length !== newB.length) {
    return false;
  }
    // 두 단어의 빈도 계산 (반복문)
  const charCountA = {};
  const charCountB = {};
  for (let char of newA) {
    charCountA[char] = (charCountA[char] || 0) + 1;
  }
  for (let char of newB) {
    charCountB[char] = (charCountB[char] || 0) + 1;
  }
    // 두 객체가 동일한지 확인
  for (let char in charCountA) {
    if (charCountA[char] !== charCountB[char]) {
      return false;
    }
  }
  return true;
}
```

## 리팩토링
```javascript
function isAnagram(a, b) {
  // 두 단어의 공백을 제거하고 소문자로 변경 후 단어의 길이가 같은지 확인
  const newA = a.replace(/ /g, "").toLowerCase();
  const newB = b.replace(/ /g, "").toLowerCase();
  
  if (newA.length !== newB.length) {
    return false;
  }
  
  const charCount = {};
  
  // 첫 번째 문자열의 문자 빈도수 계산
  for (let char of newA) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // 두 번째 문자열의 문자 빈도수를 감소시키며 비교
  for (let char of newB) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  
  return true;
}
```

## 주요 개선점
- 중복 계산 제거: 두 번째 문자열의 빈도수를 별도로 계산할 필요 없이, 첫 번째 문자열의 빈도수에서 감소시키는 방법을 사용.
- 코드 간결화: 한 번의 반복문으로 두 번째 문자열의 빈도수를 비교하며 감소시키는 방법을 사용하여 코드의 간결성과 효율성을 높임.