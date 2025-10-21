import { Command } from "commander"

const genDiff = (filepath1, filepath2) => {
  //TODO: add something usefull
}

export default genDiff

const program = new Command()
program.option('-V, --version', 'output the version number')
program.option('-h, --help', 'display help for command')
program.parse(process.argv)

const options = program.opts()
if (options.help)
    console.log(program.helpInformation())