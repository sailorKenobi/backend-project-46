import { cwd } from 'node:process'
import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'

const parseData = (filepath) => {
  const currentWd = cwd()
  const fullPath = resolve(currentWd, filepath)
  //console.log(`parse file from ${fullPath}`)
  const fileData = readFileSync(fullPath)
  return JSON.parse(fileData)
}

export default parseData