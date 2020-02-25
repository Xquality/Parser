const Parser = require('./parser.js');
const m_logger = new Parser();

var m_fileToParse = 'fredy.csv';
var array = m_logger.ParseCSV(m_fileToParse);
if (array != null) {
    if (array.length > 0) {
        console.log("\nNum of objects/entries: " + array.length);
        array.forEach(obj => {
            console.log(obj);
        })
    }
}
else
{
    console.log("File " + m_fileToParse + " doesn't exist");
}