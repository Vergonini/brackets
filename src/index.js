module.exports = function check(str, bracketsConfig) {
  let array = str.split('');
  let config = bracketsConfig;
  let stack = [];

  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < config.length; i++) {
      if (array[k] == config[i][0]) {
        if(stack[stack.length-1] == array[k] && config[i][0] == config[i][1]) {
          stack.pop();
          break;
        }
        stack.push(config[i][0]);
        break;
      } else if(array[k] == config[i][1]) {
        if (stack[stack.length-1] == config[i][0]) {
          stack.pop();
          break;
        }
      }
    }
  }
  
  if (stack.length == 0) return true;
  return false;
}
