const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)

// Sync -- Blocking....
// fs.writeFileSync('output.txt', 'Hi there');

// Async --- non-blocking.....
// fs.writeFile("output.txt", 'Hi there 2', (err, data) => {});

// const result = fs.readFileSync("./contacts.txt", 'utf-8');
// console.log(result)

// fs.readFile("./contacts.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(data);
//   }
// });

// fs.appendFileSync("./output.txt", new Date().getDate().toLocaleString());

// fs.appendFileSync("./output.txt", `${Date.now()} Hey There 2\n`);

// fs.cpSync("./output.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./output.txt").isFile());

// fs.mkdirSync("my-docs/s/ddfd/my-docs")

// console.log(1)
// console.log(fs.readFileSync("./contacts.txt", "utf-8"));
// console.log(2)

// console.log(1);
// fs.readFile("./contacts.txt", "utf-8",(err, data) => {
//     console.log(data);
// })
// console.log(2);
// console.log(3);
// console.log(4);

//Default thread pool size = 4
//Max threads ? 8 Core = 8
