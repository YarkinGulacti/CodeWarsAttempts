const solution = (str) => str.split('').reduce((p, c, i) => c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90 ? p += ` ${c}` : p += c);

console.log(solution('camelCasing'));

