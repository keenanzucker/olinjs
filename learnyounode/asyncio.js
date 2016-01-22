var fs = require('fs');
var filePath = process.argv[2];
var totalLines = 0;


function readFile(callback)
{
	var buf = fs.readFile(filePath, function(err, textInFile){
		if(err) throw err;
		textInFile = textInFile.toString().split('');

		for (i = 0; i < textInFile.length; i++)
		{
			if (textInFile[i] === '\n')
			{
				totalLines++;
			}
		}
		callback()

	});

}

function printLines()
{
	console.log(totalLines)
}

readFile(printLines);