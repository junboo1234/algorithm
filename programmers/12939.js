function solution(s) {
  const arr = s.split(" ").sort((a, b) => a - b);
  const result = [];
  result.push(arr[0]);
  result.push(arr[arr.length - 1]);
  result.join(" ");
  return result.join(" ");
}
