const insertSpaceBeforeCapital = (str) => {
  let tmp = str.split("");
  for (let i = 1; i < tmp.length; i++) {
    console.log(str[i]);
    if (tmp[i] === tmp[i].toUpperCase()) {
      tmp[i - 1] += " ";
    }
  }
  return tmp.join("");
};

console.log(insertSpaceBeforeCapital("helloWrosfS"));
