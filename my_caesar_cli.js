#!/usr/bin/env node
const { program } = require('commander')

const setOptions = require('./options/option')
const action = require('./actions/action')

setOptions(program, action)
