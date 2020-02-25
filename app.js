const Parser = require('./parser.js');
const m_parser = new Parser();

var m_fileToParse = 'vehicles.csv';
var array = m_parser.ParseCSV(m_fileToParse);
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