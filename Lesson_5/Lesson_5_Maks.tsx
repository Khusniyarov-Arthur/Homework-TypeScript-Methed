const log =<T,>(val: T): T => {
  console.log(val);
  return val;
}

log<string>('строка')
log(5)

const log2 = function <T>(val: T): T {
  console.log(val);
  return val;
}