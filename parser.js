//Parser class
class Parser
{
    ParseCSV(file)
    {
        const fs = require('fs');

        if (fs.existsSync(file))
        {
            //File exists
            const data = fs.readFileSync(file).toString().trim();
            const headersSplit = data.split('\n', 1).toString().split(','); //Weed out the headers and split them into separate headers
            const table = data.split('\n').slice(1); //Prep rest of CSV file into table

            var ObjectArray = []

            for (var u = 0; u < table.length; u++)
            {
                if (table[u] != null) {
                    if (table[u].length > 1) {
                        var column = table[u].split(',');
                        var info = new Object(); //Instantiate new Object
                        for (var i = 0; i < headersSplit.length; i++) {
                            if (column[i] != '' && column[i] != null) {
                                //Column is valid here
                                var thisEntry = headersSplit[i].trim(); //Get the header name and trim out any unwated stuffs
                                info[thisEntry] = column[i].trim(); //Add property to object
                            }
                        }

                        if (info != null)
                            ObjectArray[u] = info; //Add instantiated object to array if it isn't null
                    }
                }
            }

            return ObjectArray; //Return the array of objects created from parsing the CSV
        }
        else return null; //No file, so return null
    }
}

module.exports = Parser; //Export the function for use in other scripts