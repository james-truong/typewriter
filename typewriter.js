const sentence = "hello there from lighthouse labs";
let timer = 50;
for (const char of (sentence+'\n')) {
  setTimeout(() =>  (process.stdout.write(char)), timer)
  timer += 50;

}