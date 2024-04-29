function solution(s) {
  const arr = s.split(" ").sort((a, b) => a - b);
  return [].push(arr[0], arr[arr.length - 1]).join(" ");
}
1;
