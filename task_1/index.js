#!/usr/bin/env node
const yargs = require('yargs');
const { getKey } = require('./getKey');
const pkg = require('./package.json')
yargs.version(pkg.version)
const info = process.argv.slice(2)
yargs
  .usage("Usage: node index.js <command>")
  .command('add', 'Получить даты в будущем')
  .command('sub', 'Получить даты в прошлом')
  .option('year', {
    alias: 'y',
    describe: 'Текущий год:',
    default: new Date().getFullYear()
  })
  .option('month', {
    alias: 'm',
    describe: 'Текущий месяц:',
    default: new Date().getMonth()
  })
  .option('date', {
    alias: 'd',
    describe: 'Дата в календарном месяце:',
    default: new Date().getDate()
  })
  .command(
    'current',
    'Текущая дата и время в формате ISO',
    function (yargs) {
      return yargs;
    },
    function (argv) {
      const key = info.slice(1)
      if(argv._[0] === 'current') {
        if (key.length) {
          const a = getKey(key)
          console.log(argv[a])
        } else {
          console.log(new Date())
        }
      }
      
    }
  )
  .command(
    'sub',
    'Получить даты в прошлом',
    (yargs) => {
      yargs
    },
    function (argv) {
      const key = info.slice(1)
      if(argv._[0] === 'sub') {
        if(key.length) {
          console.log(argv);
          const {name, value} = getKey(key)
          console.log(argv[name] - value);
        }
      }
    }
  )
  .command(
    'add',
    'Получить даты в прошлом',
    (yargs) => {
      yargs
    },
    function (argv) {
      const key = info.slice(1)
      if(argv._[0] === 'add') {
        if(key.length) {
          const {name, value} = getKey(key)
          console.log(argv[name] + value);
        }
      }
    }
  )
  .help()
  .argv
