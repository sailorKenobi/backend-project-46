#!/usr/bin/env node

import { Command } from "commander" //https://github.com/tj/commander.js?tab=readme-ov-file#automated-help
import parseData from '../src/file_utils.js'
import _ from "lodash"

const genDiff = (data1, data2) => {
  const objKeys = _.union([ ...Object.keys(data1), ...Object.keys(data2)])
  const sortedKeys = _.sortBy(objKeys)
  
  let res = '{\n'
  for (const key of sortedKeys) {
    let addString = ''
    if (!_.has(data1, key)) {      
      addString = `  + ${key}: ${data2[key]}\n`
    }
    else if (!_.has(data2, key)) {
      addString = `  - ${key}: ${data1[key]}\n`
    }
    else {  //Поле точно есть в обоих объектах
      if (data1[key] === data2[key])
        addString = `    ${key}: ${data1[key]}\n`
      else
        addString = `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}\n`
    }
    res += addString
  }
  res += '}'
  //console.log(res)
  return res
}

const program = new Command()

const gendiff = program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    //console.log('action call')
    const data1 = parseData(filepath1)
    const data2 = parseData(filepath2)
    console.log(genDiff(data1, data2))
})

gendiff.parse()