// 문제 주소 https://school.programmers.co.kr/learn/courses/30/lessons/42860
function solution(name) {
  const alphabet_number = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 12,
    P: 11,
    Q: 10,
    R: 9,
    S: 8,
    T: 7,
    U: 6,
    V: 5,
    W: 4,
    X: 3,
    Y: 2,
    Z: 1,
  };

  let moveNumber = 0; // alphabet_number[name[0]]
  let moveRight = 0;
  let moveLeft = 0;
  let moveCur = name.length;
  let moveMin = name.length - 1;

  for (let i = 0; i < name.length; ++i) {
    //첫 위치부터 시작하면 조이스틱이 오른쪽, 왼쪽으로 이동하지 않아도 되기 때문에 문제가 생김
    const alphabet = name[i];
    moveNumber = moveNumber + alphabet_number[alphabet];
    if (name[i + 1] == "A") {
      moveRight = i;
      moveLeft =
        name.length - (name.slice(i + 1).match(/(A)+/g)[0].length + i + 1);
      moveCur =
        moveRight > moveLeft
          ? moveRight + moveLeft * 2
          : moveRight * 2 + moveLeft;
      if (moveMin > moveCur) {
        moveMin = moveCur;
      }
    }
  }
  return moveMin + moveNumber;
}

/*
A는 바꿀 필요가 없으니까 좌우에 A 또는 탐색이 완료된 곳을 제외하고 가장 가까운 곳으로 이동해야 함 
조이스틱 조작횟수에 영향을 미치는 변수: 알파벳, 커서 이동
알파벳 횟수는 alphabet_number로 처리 
커서이동은 A의 존재에 따라 달라짐
A가 연속적으로 존재하는 첫 위치: 커서가 오른쪽으로 이동해야 하는 횟수(=moveRight)
A가 연속적으로 존재하는 마지막 위치: 커서가 왼쪽으로 이동해야 하는 횟수(=moveLeft)
moveRight > moveLeft ? moveRight+moveLeft*2 : moveRight*2+moveLeft 해서 커서가 최소로 이동하게 설정 
*/
