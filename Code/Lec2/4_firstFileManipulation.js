// Read a file -> Capitalize each letter in it -> Write the output on another file
let minimist = require('minimist'); // No need to install npm again, because the package is already installed in our current directory.
let args = minimist(process.argv);

// node firstFile --source="f1.txt" --dest="f2.txt" //Again, Quotations aren't neccesary.

// Here args.source will be f1.txt and args.dest = f2.txt

let fs = require('fs'); // Inbuilt Module in NodeJS -> FileSystem
let stext = fs.readFileSync(args.source,'utf-8'); //utf-8 to convert the text into readable code, not machine code. //To read the passed file.
// console.log(stext);

let words = stext.split(" "); // An array word. // Will split everything that is seperated by " ". 
// string has split.

// console.log(words);

for(let i = 0; i < words.length; i++){
    words[i] = words[i].toUpperCase();
}

let dtext = words.join(" "); // To join the split up words, seperated by " ".
// Array has join.
// console.log(dtext);

fs.writeFileSync(args.dest, dtext,"utf-8"); //Will create the destination file consisting of dtext in utf-8 format.
// f2.txt is an autogenerate file by the above command. //Fun fact -> You can delete all the data in f2.txt, and everytime you'll run the command, f1.txt content will appear there in capitilized form.