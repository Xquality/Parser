const Parser = require('./parser.js');
const m_parser = new Parser();

var m_fileToParse = 'vehicles.csv';
var array = m_parser.ParseCSV(m_fileToParse);
if (array != null) {
    if (array.length > 0) {
        var numEntries = 0;

        array.forEach(entry => {

            if (entry === "" || entry == null) {
                return;
            }
            else
                numEntries++;
        })

        console.log("\nNum of objects/entries: " + numEntries);
        array.forEach(obj => {
            console.log(obj);
        })
    }
}
else
{
    console.log("File " + m_fileToParse + " doesn't exist");
}