const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const chalk = require('chalk')
const inquirer = require('inquirer')

module.exports.createFile = ({
  from,
  to,
  replaceKey
}) => {
  fse.copy(from, to).then(() => {
    fs.readFile(to, 'utf8', (err, data) => {
      fs.writeFile(to, data.split(`[replace]`).join(replaceKey), 'utf8', err => {
        if (err) {
          return console.log(err)
        } else {
          console.log(chalk.yellow(`[创建成功]  ${path.resolve(to)}`))
        }
      })
    })
  })
}

module.exports.hasFile = ({
  to
}) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path.resolve(to))) {
      inquirer.prompt([{
        type: 'confirm',
        message: '文件已存在是否继续？',
        name: 'ok',
        default: false
      }]).then(answers => {
        if (answers.ok) {
          resolve()
        } else {
          reject()
        }
      }).catch(_ => {
        console.log(_)
      })
    } else {
      resolve()
    }
  })
}
