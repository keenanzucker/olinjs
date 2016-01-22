var fs = require('fs');
var filePath = process.argv[2];


var totalLines = 0;

var buf = fs.readFileSync(filePath);

var textInFile = buf.toString();
var textInFile = textInFile.split('');

// console.log(textInFile);

for (i = 0; i < textInFile.length; i++)
{
	if (textInFile[i] === '\n')
	{
		totalLines++;
	}
}

console.log(totalLines);

