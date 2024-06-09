// 문제 정의:

// nums 배열이 주어졌을 때, 앨리스와 밥이 게임을 합니다. 매 라운드마다 앨리스는 nums에서 최소 요소를 제거하고, 그 다음 밥이 같은 작업을 합니다.
// 밥은 제거한 요소를 결과 배열 arr에 추가하고, 그 다음 앨리스가 제거한 요소를 추가합니다. 이 과정을 nums가 비워질 때까지 반복합니다.
// 최종적으로 결과 배열 arr을 반환하세요.

// 다음의 조건을 만족해야 합니다:

// sort, Math.min, indexOf 함수를 사용하지 마세요.

// 예시:

// 입력: [5, 4, 2, 3]
// 출력: [3, 2, 5, 4]

// 설명:
// 첫 번째 라운드에서는 앨리스가 2를 제거하고, 밥이 3을 제거합니다. 밥이 먼저 3을 arr에 추가하고, 앨리스가 2를 추가합니다.
// arr = [3, 2]가 됩니다. 두 번째 라운드에서는 앨리스가 4를 제거하고, 밥이 5를 제거합니다.
// 결과적으로 arr = [3, 2, 5, 4]가 됩니다.

// 입력: [2, 5]
// 출력: [5, 2]

// 설명:
// 첫 번째 라운드에서는 앨리스가 2를 제거하고, 밥이 5를 제거합니다. 밥이 먼저 5를 arr에 추가하고, 앨리스가 2를 추가합니다.
// 결과적으로 arr = [5, 2]가 됩니다.

function minimumNumberGame(nums) {
  // 배열에서 최소값의 인덱스를 찾는 함수
  const findMinIndex = (arr) => {
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  };

  // 결과를 저장할 배열 초기화
  const result = [];

  // nums 배열이 빌 때까지 반복
  while (nums.length > 0) {
    // 앨리스의 최소값 찾기
    const aliceMinIndex = findMinIndex(nums);
    const aliceMinValue = nums.splice(aliceMinIndex, 1)[0];

    // nums 배열이 아직 비어있지 않다면 밥의 최소값 찾기
    if (nums.length > 0) {
      const bobMinIndex = findMinIndex(nums);
      const bobMinValue = nums.splice(bobMinIndex, 1)[0];

      // 밥의 값을 결과 배열에 먼저 추가
      result.push(bobMinValue);
    }

    // 앨리스의 값을 결과 배열에 추가
    result.push(aliceMinValue);
  }

  // 최종 결과 배열 반환
  return result;
}

// 테스트 코드
function testMinimumNumberGame() {
  const testCases = [
    { input: [5, 4, 2, 3], expected: [3, 2, 5, 4] },
    { input: [2, 5], expected: [5, 2] },
    { input: [1, 2, 3, 4], expected: [2, 1, 4, 3] },
    { input: [7, 8, 1, 2, 6, 5], expected: [2, 1, 6, 5, 8, 7] },
    { input: [9, 1, 8, 2, 7, 3], expected: [2, 1, 7, 3, 9, 8] },
    { input: [1, 2], expected: [2, 1] },
    { input: [3, 3, 3, 3], expected: [3, 3, 3, 3] },
    { input: [100, 1, 50, 2], expected: [2, 1, 100, 50] },
    { input: [10, 9, 8, 7, 6, 5], expected: [6, 5, 8, 7, 10, 9] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = minimumNumberGame([...input]);
      if (JSON.stringify(result) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${expected}, but got ${result}`);
      }
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출     'node week3/practice1.js'
testMinimumNumberGame();
