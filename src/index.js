module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;
  let array = str.split('');
  let stack = [];

  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (array[k] == bracketsConfig[i][0]) {
        if(stack[stack.length-1] == array[k] && bracketsConfig[i][0] == bracketsConfig[i][1]) {
          stack.pop();
          break;
        }
        stack.push(bracketsConfig[i][0]);
      } else if (array[k] == bracketsConfig[i][1] && stack[stack.length-1] == bracketsConfig[i][0]) {
        stack.pop();
      }
    }
  }

  if (stack.length == 0) return true;
  return false;
}
