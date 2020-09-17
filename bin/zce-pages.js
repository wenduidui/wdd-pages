#!/usr/bin/env node

process.argv.push('--cwd')
process.argv.push(process.cwd()) // 当前命令行所在的目录
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))

require('gulp/bin/gulp')
// console.log('process.argv')
