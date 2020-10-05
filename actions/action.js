const { pipeline } = require('stream')
const { readable, writable, transformable } = require('../streams/stream')
const chalk = require('chalk')

const actions = function({ shift, input, output, action }) {
    const readableStream = readable(input)
    const writableStream = writable(output)
    const transformableStream = transformable(shift, action)

    pipeline(readableStream, transformableStream, writableStream, err => {
        if(err) {
            console.error(chalk.bgRed.black('  Something went wrong, see error description above  '))
        }
    })
}

module.exports = actions