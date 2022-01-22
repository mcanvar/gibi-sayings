const fs = require('fs').promises

const array = require('./v1.0.0/sayings.json')

const arrayOfPromises = array.map(
    (jsonFileContent, index) => {
        return fs.writeFile(
            `./v1.0.0/sayings/${index + 1}.json`, JSON.stringify(jsonFileContent, null, 2)
        )
    }
)

Promise.all(arrayOfPromises)
    .then(() => {
        console.log('Single endpoints created.')
    })
    .catch(err => {
        console.log('Error creating the files: ', err)
    })

console.log('Creating single saying endpoints.')