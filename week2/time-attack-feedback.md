# 피드백 및 개선사항

학생들이 제출한 코드에서 몇 가지 공통적인 문제점과 개선할 점을 피드백으로 제공하겠습니다. 이 피드백을 통해 학생들이 더 나은 코드를 작성할 수 있도록 도울 수 있습니다.

## 1. 필수적으로 알아두면 좋을 정규식 + 대소문자 처리

여러 학생들이 팰린드롬 판별 함수를 잘 작성했습니다.
또한 대소문자를 구분하지 않기 위해 `toLowerCase()`를 사용하고, 알파벳과 숫자만을 남기기 위해 정규식을 사용한 방법이 적절합니다.

```javascript
str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
```

## 2. 양쪽 끝에서부터 비교하기

단순히 양 끝에서 비교하는 방식이 가장 효율적입니다.

### 예시 코드:

```javascript
function isPalindrome(str) {
  let string = str.replace(/[^a-zA-Z]/gi, "").toLowerCase();
  let reversedstr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedstr += string[i];
  }
  return string === reversedstr;
}
```

```javascript
function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
```

## 3. 문자열 정렬 및 비교

일부 학생들이 사전 순서로 정렬한 후 팰린드롬을 찾는 방식으로 코드를 작성했습니다.
이 과정에서 **localeCompare**를 활용한 점은 좋았으나, 굳이 정렬할 필요 없이 비교 과정에서 사전 순서대로 더 앞서는 것을 선택하는 것이 더 효율적입니다.

### 예시 코드:

```javascript
function findLongestPalindrome(words) {
  words.sort((a, b) => a.localeCompare(b));
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i].toLowerCase().replace(/[^a-z0-9]/g, ""))) {
      if (words[i].length > result.length) {
        result = words[i];
      }
    }
  }
  return result;
}
```

```javascript
function findLongestPalindrome(words) {
  let longestPalindrome = "";
  for (let word of words) {
    if (isPalindrome(word)) {
      if (
        word.length > longestPalindrome.length ||
        (word.length === longestPalindrome.length && word < longestPalindrome)
      ) {
        longestPalindrome = word;
      }
    }
  }
  return longestPalindrome;
}
```

## 4. 불필요한 변수 사용 자제

중간 결과를 담는 배열(result)을 사용하여 다시 정렬하는 방식은 메모리와 성능 측면에서 비효율적일 수 있습니다.
(사실.. 크게 문제되는 부분은 아니지만, 좋은 습관은 아닙니다.)
이를 피하고 한 번의 순회로 해결하는 것이 좋습니다.

```javascript
function findLongestPalindrome(words) {
  let result = [];
  words.forEach((word) => {
    if (isPalindrome(word)) {
      result.push(word);
    }
  });
  if (result.length === 0) return "";
  result.sort();
  result.sort((a, b) => b.length - a.length);
  return result[0];
}
```

```javascript
function findLongestPalindrome(words) {
  let longestPalindrome = "";
  for (let word of words) {
    if (isPalindrome(word)) {
      if (
        word.length > longestPalindrome.length ||
        (word.length === longestPalindrome.length && word < longestPalindrome)
      ) {
        longestPalindrome = word;
      }
    }
  }
  return longestPalindrome;
}
```

## 5. 경계 조건 처리

입력 배열이 빈 배열일 경우나, 문자열이 빈 문자열일 경우도 잘 처리했는지 확인해보세요.
초기 검증 과정을 넣어주는 것은 '코딩테스트' 에서 뿐만 아니라, 실제 프로덕트 개발환경에서도 매우 중요합니다.

```javascript
function findLongestPalindrome(words) {
  if (words.length === 0) return "";

  function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let longestPalindrome = "";
  for (let word of words) {
    if (isPalindrome(word)) {
      if (
        word.length > longestPalindrome.length ||
        (word.length === longestPalindrome.length && word < longestPalindrome)
      ) {
        longestPalindrome = word;
      }
    }
  }
  return longestPalindrome;
}
```
