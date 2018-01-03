const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const chalk = require('chalk')
const inquirer = require('inquirer')

const replaceTemplateFile = ({
  to
}) => {
  let fileName = to.split('/').pop().toLowerCase()
  fs.readFile(to, 'utf8', (err, data) => {
    fs.writeFile(to, data.split(`[replace]`).join(fileName.split('.').shift().toLowerCase()), 'utf8', err => {
      if (err) {
        return console.log(err)
      } else {
        console.log(chalk.yellow(`[创建成功]  ${path.resolve(to)}`))
      }
    })
  })
}

const createFile = ({
  from,
  to
}) => {
  if (fs.existsSync(path.resolve(to))) {
    inquirer.prompt([{
      type: 'confirm',
      message: '文件已存在是否继续？',
      name: 'ok',
      default: false
    }]).then(answers => {
      if (answers.ok) {
        fse.copy(from, to).then(() => {
          replaceTemplateFile({
            to
          })
        })
      } else {
        console.log()
        console.log('已取消')
        console.log()
      }
    }).catch(_ => {
      console.log(_)
    })
  } else {
    fse.copy(from, to).then(() => {
      replaceTemplateFile({
        to
      })
    })
  }
}

const createComponent = ({

}) => {

}

module.exports.createFile = createFile
