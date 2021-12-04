// Creating a big file
// npm install minimist -g -> Installing minimist globally
// node 1_CreateBigFile.js --dest=big.data
// big.data is created automatically by write/append if it isn't already there.

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

let arr = [];
for(let i = 0; i < 50000000; i++){
    arr.push(i);
}

let str = arr.join("\n"); // The array would be converted to a string with a distance of 1 line or whatever is given in between " " Just for funny purposes hahahhafjdljflfjsldjflkdfj fj aj aj;afj a; fa; dkdfa a jf la;j;f j; afjkas j;


fs.writeFileSync(args.dest, str, "utf-8"); // Writing will overwrite the destination file //-> 420MB
fs.appendFileSync(args.dest, str, "utf-8"); // Append won't overwrite, would continue it's working without overwriting. //420MB
fs.appendFileSync(args.dest, str, "utf-8"); // 420MB
fs.appendFileSync(args.dest, str, "utf-8"); // 420MB
// Together they will create a  file of 1.7GB