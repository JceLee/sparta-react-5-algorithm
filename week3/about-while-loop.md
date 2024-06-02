# 코딩 테스트에서 While 루프 사용하기

## 소개

프로그래밍에서 루프는 코드 블록을 여러 번 반복할 수 있게 해주는 기본적인 구조입니다. `while` 루프는 가장 일반적으로 사용되는 반복 구조 중 하나입니다. 특정 조건이 참인 동안 계속해서 코드 블록을 실행합니다. 코딩 테스트와 실제 프로그래밍 작업에서 `while` 루프를 효과적으로 사용하는 방법을 이해하면 문제 해결 능력을 크게 향상시킬 수 있습니다.

## 기본 개념

JavaScript에서 `while` 루프의 구문은 다음과 같습니다:

```javascript
while (조건) {
  // 실행할 코드
}
```

여기서 `조건(condition)`은 루프의 각 반복 전에 평가됩니다. `조건(condition)`이 참이면 루프 내부의 코드가 실행됩니다. 이 과정은 `조건(condition)`이 거짓이 될 때까지 반복됩니다. (`breakpoint` 라고 합니다.)

## 예제 1: 기본 While 루프

숫자 1부터 5까지 출력하는 간단한 예제를 보겠습니다:

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## 설명:

- 변수 i는 1로 초기화됩니다.
- while 루프는 i가 5 이하인지 확인합니다.
- 루프 내부에서 현재 i의 값을 출력합니다.
- 변수 i는 1씩 증가합니다.
- i가 5보다 커질 때까지 루프가 계속됩니다.

```javascript
function sumOfNaturalNumbers(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

console.log(sumOfNaturalNumbers(5)); // 출력: 15
```

## 설명:

- sum을 0으로, i를 1로 초기화합니다.
- while 루프를 사용하여 i의 값을 sum에 더하고, i가 n을 초과할 때까지 반복합니다.
- 각 반복 후 i를 증가시킵니다.

```javascript
function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = str.length - 1;

  // 왼쪽 포인터가 오른쪽 포인터보다 작을 때까지 반복합니다.
  while (left < right) {
    // 왼쪽 포인터와 오른쪽 포인터의 문자가 다르면 회문이 아닙니다.
    if (str[left] !== str[right]) {
      return false;
    }
    // 포인터를 움직입니다.
    left++;
    right--;
  }

  // 모든 문자가 일치하면 회문입니다.
  return true;
}
```

## 설명:

- `left` 포인터가 `right` 포인터보다 작을 때까지 반복합니다.
- 문자열의 양 끝에서부터 문자를 비교하여 다르면 `false`를 반환합니다.
- 문자가 같으면 `left`를 증가시키고 `right`를 감소시켜 다음 문자로 이동합니다.
