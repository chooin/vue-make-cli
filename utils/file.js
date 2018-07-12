const fs = require('fs')
const path = require('path')
const fse = require('fs-extra')
const inquirer = require('inquirer')

const log = require('./log')

module.exports.createFile = ({
  from,
  to,
  replace = [],
  tip = true
}) => {
  fse.copy(from, to).then(() => {
    fs.readFile(to, 'utf8', (err, data) => {
      if (data) {
        for (let i in replace) {
          data = data.replace(
            new RegExp(`\\[${replace[i].from}\\]`, 'g'),
            replace[i].to
          )
        }
        fs.writeFile(to, data, 'utf8', err => {
          if (err) {
            log.failed()
          } else {
            if (tip) {
              log.completed(path.resolve(to))
            } else {
              log.completed()
            }
          }
        })
      } else {
        if (tip) {
          log.completed(path.resolve(to))
        } else {
          log.completed()
        }
      }
    })
  })
}

module.exports.hasFile = ({
  to,
  tip = true
}) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path.resolve(to))) {
      if (tip) {
        inquirer.prompt([{
          type: 'confirm',
          message: 'Target file exists. Continue?',
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
        reject()
      }
    } else {
      resolve()
    }
  })
}
