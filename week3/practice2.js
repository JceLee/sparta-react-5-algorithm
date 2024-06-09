// 문제 정의:

// 주어진 정수 배열 nums에서 두 원소의 합이 특정 값 target에 가장 가까운 경우의 합을 반환하는 함수를 작성하세요.
// 정수 배열 nums와 정수 target이 주어집니다.
// 배열에서 두 원소의 합이 target에 가장 가까운 경우의 합을 반환합니다.
// 배열은 최소 두 개의 원소를 포함하고 있습니다.

// 다음의 조건을 만족해야 합니다:

// 가장 가까운 경우가 두가지 있을 경우, 작은 값을 반환합니다.
// while 문을 사용하여 구현합니다.

// 문제에서 '가장 가까운 경우의 합'을 구하는 것은 목표값 target과 가장 가까운 값을 찾는 것을 의미합니다.
// 따라서 합이 target과 정확히 같은 경우는 이 문제의 의도에 맞지 않습니다.
// 즉, 두 원소의 합이 target과 같은 경우는 제외됩니다

// 예시:

// closestSum([1, 2, 3, 4, 5], 7); // 6 (최대한 가까운 경우: 1 + 5 = 6)
// closestSum([-1, 2, 1, -4], 1); // 0 (최대한 가까운 경우: -1 + 1 = 0)

function closestSum(nums, target) {
  // 배열을 오름차순으로 정렬합니다. 이렇게 하면 투 포인터 접근법을 사용할 수 있습니다.
  nums.sort((a, b) => a - b);

  // 왼쪽 포인터는 배열의 첫 번째 요소를 가리킵니다.
  let left = 0;
  // 오른쪽 포인터는 배열의 마지막 요소를 가리킵니다.
  let right = nums.length - 1;
  // 가장 가까운 합을 저장할 변수를 초기화합니다.
  let closestSum = Infinity;
  // 가장 가까운 차이를 저장할 변수를 초기화합니다.
  let closestDiff = Infinity;

  // 두 포인터가 서로 교차하기 전까지 반복합니다.
  while (left < right) {
    // 현재 두 포인터가 가리키는 원소의 합을 계산합니다.
    const sum = nums[left] + nums[right];
    // 합과 타겟 값의 차이를 계산합니다.
    const diff = Math.abs(target - sum);

    // 타겟 값과 정확히 같은 경우를 제외하기 위해 diff가 0인 경우를 건너뜁니다.
    if (diff === 0) {
      // 오른쪽 포인터를 하나 줄입니다.
      right--;
      continue; // 현재 반복을 건너뛰고 다음 반복으로 넘어갑니다.
    }

    // 현재 차이가 가장 작은 차이보다 작거나, 차이가 같고 합이 더 작은 경우
    if (diff < closestDiff || (diff === closestDiff && sum < closestSum)) {
      // 가장 가까운 합과 차이를 업데이트합니다.
      closestSum = sum;
      closestDiff = diff;
    }

    // 현재 합이 타겟 값보다 작으면, 왼쪽 포인터를 오른쪽으로 이동시켜 더 큰 값을 찾습니다.
    if (sum < target) {
      left++;
    } else {
      // 현재 합이 타겟 값보다 크면, 오른쪽 포인터를 왼쪽으로 이동시켜 더 작은 값을 찾습니다.
      right--;
    }
  }

  // 최종적으로 가장 가까운 합을 반환합니다.
  return closestSum;
}

// 테스트 코드:
function testClosestSum() {
  const testCases = [
    { nums: [1, 2, 3, 4, 5], target: 7, expected: 6 },
    { nums: [-1, 2, 1, -4], target: 1, expected: 0 },
    { nums: [10, 22, 11, 4, 5], target: 12, expected: 14 },
    { nums: [0, 0, 0, 0, 0], target: 5, expected: 0 },
    { nums: [3, 7, 8, 1], target: 100, expected: 15 },
  ];

  testCases.forEach((testCase, index) => {
    const { nums, target, expected } = testCase;
    try {
      const result = closestSum([...nums], target);
      if (result !== expected) {
        throw new Error(
          `Test case ${
            index + 1
          } failed: Expected ${expected}, but got ${result}`
        );
      }
      console.log(`Test case ${index + 1}: Passed`);
    } catch (error) {
      console.error(error.message);
    }
  });
}

// 테스트 함수 호출
testClosestSum();
