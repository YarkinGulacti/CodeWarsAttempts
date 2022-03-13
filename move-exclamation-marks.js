const remove = (s) => s.split('').reduceRight((t, cv, ci, arr) => t === '!' || cv === '!' ? t += '!' : t = cv.concat(t));

console.log(remove('Hi! !Hi Hi!'));