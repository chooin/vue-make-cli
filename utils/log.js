const chalk = require('chalk')

module.exports.cancelled = e => {
  console.log(` - ${chalk.yellow(('Cancelled').padEnd(9))} ${e || ''}`)
}

module.exports.failed = e => {
  console.log(` - ${chalk.red(('Failed').padEnd(9))} ${e || ''}`)
}

module.exports.completed = e => {
  console.log(` - ${chalk.green(('Completed').padEnd(9))} ${e || ''}`)
}
