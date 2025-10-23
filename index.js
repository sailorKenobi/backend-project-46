//https://github.com/tj/commander.js?tab=readme-ov-file#automated-help
import { Command } from "commander"
import parseData from './src/file_utils.js'

const program = new Command()
program.description('Compares two configuration files and shows a difference.')
program.argument('<filepath1>')
program.argument('<filepath2>')
program.option('-V, --version', 'output the version number')
program.option('-f, --format [type]', 'output format')

program.parse(process.argv)

program.action((filepath1, filepath2) => {
  //console.log('action call')
  parseData(filepath1)
  parseData(filepath2)
})

//parseData('./files/file1.json')
//const options = program.opts()
//if (options.help)
//    console.log(program.helpInformation())