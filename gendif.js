//https://github.com/tj/commander.js?tab=readme-ov-file#automated-help
import { Command } from "commander"

const genDiff = (filepath1, filepath2) => {
  //TODO: add something usefull
}

export default genDiff

const program = new Command()
program.description('Compares two configuration files and shows a difference.')
program.argument('<filepath1>')
program.argument('<filepath2>')
program.option('-V, --version', 'output the version number')
program.option('-f, --format [type]', 'output format')

program.parse(process.argv)

//const options = program.opts()
//if (options.help)
//    console.log(program.helpInformation())