// 문제 주소 https://school.programmers.co.kr/learn/courses/30/lessons/92342#

function solution(n, info) {
  function findLionCase(n, apeachInfo, lionInfo, i) {
    const lionCase = [];
    if (i === 10) {
      lionInfo[i] = n;
      const copy = lionInfo.map((el) => el);
      return [copy];
    }
    lionCase.push(...findLionCase(n, apeachInfo, lionInfo, i + 1));
    if (n - (apeachInfo[i] + 1) >= 0) {
      lionInfo[i] = apeachInfo[i] + 1;
      lionCase.push(
        ...findLionCase(n - (apeachInfo[i] + 1), apeachInfo, lionInfo, i + 1)
      );
      lionInfo[i] = 0;
    }
    return lionCase;
  }

  let apeachScore_ori = info.reduce(
    (acc, cur, i) => acc + (cur === 0 ? 0 : 10 - i),
    0
  );
  const lionInfo = new Array(11).fill(0);
  const lionCases = findLionCase(n, info, lionInfo, 0);
  let maxScore = -1;
  let lionWinInfo = new Array(11).fill(0);
  lionCases.map((lionCase) => {
    let lionScore = 0;
    let apeachScore = apeachScore_ori;
    lionCase.map((cur, i) => {
      if (cur > info[i]) {
        lionScore += 10 - i;
        if (info[i] > 0) {
          apeachScore -= 10 - i;
        }
      }
    });
    if (lionScore - apeachScore > maxScore) {
      lionCase.forEach((el, idx) => (lionWinInfo[idx] = el));
      maxScore = lionScore - apeachScore;
    } else if (maxScore === lionScore - apeachScore) {
      let i = 0;
      while (i < 11) {
        if (lionWinInfo[10 - i] < lionCase[10 - i]) {
          lionCase.forEach((el, idx) => (lionWinInfo[idx] = el));
          i = 10;
        }
        if (lionWinInfo[10 - i] > lionCase[10 - i]) {
          i = 10;
        }
        ++i;
      }
    }
  });
  if (maxScore <= 0) {
    return [-1];
  }
  return lionWinInfo;
}
