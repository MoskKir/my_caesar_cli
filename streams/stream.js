const chalk = require('chalk')
const { Writable, Transform } = require('stream')
const fs = require('fs')

const caesarCipher = require('../models/caesarCipher')

const readable = function(filePath) {
    if(filePath === undefined) {
        console.log(chalk.bgGreen.black('> Please write your text: '))
        return process.stdin
    }

    const readFile = fs.createReadStream(filePath, 'utf8')
    readFile.on('error', () =>
        console.error(chalk.bgRed.black(`  Incorrect this path: '${ filePath }', or read file does not exists  `))
    )
    return readFile
}

const writable = function(filePath) {
    if(filePath === undefined) {
        class WritableStream extends Writable {
            _write(chunk, encoding, callback) {
                console.log(chalk.bgBlue.black('> Your output text:') + `\n${ chunk.toString() }`)

                callback()
            }
        }

        return new WritableStream({ highWaterMark: 2 })
    }

    if(fs.existsSync(filePath)) {
        return fs.createWriteStream(filePath, { flags: 'a' })
    } else {
        console.error(chalk.bgRed.black(`  Incorrect this path: '${ filePath }', or write file does not exists  `))
        process.exit()
    }
}

const transformable = function(shift, actionType) {
    class TransformableStream extends Transform {
        _transform(chunk, encoding, callback) {
            try {
                const resultString = caesarCipher(
                    chunk.toString('utf8'),
                    shift,
                    actionType
                )

                callback(null, resultString)
                console.log(chalk.bgGreen.black(`
                \n (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  
                `) +  
                '\n\n  mm danone  ' + 
                    chalk.green(' \u2713 \n') +
                    chalk.bgWhite('\n                ') +
                    chalk.bgRed('\n                ') +
                    chalk.bgWhite('\n                ') 
                )
            } catch (err) {
                callback(err)
            }
        }
    }

    return new TransformableStream({ highWaterMark: 2 })
}

module.exports = {
    readable,
    writable,
    transformable
}
