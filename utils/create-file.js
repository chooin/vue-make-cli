const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const chalk = require('chalk')

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
  fse.copy(from, to).then(() => {
    replaceTemplateFile({
      to
    })
  })
}

const createComponent = ({

}) => {

}

module.exports.createFile = createFile
