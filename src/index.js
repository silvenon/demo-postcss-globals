import indent from 'indent-string'
import cssGlobals from './styles/globals.js'
import './styles/globals.css'

const style = document.querySelector('style')
const pre = document.createElement('pre')
pre.textContent = `
<style>
${indent(style.textContent.trim(), 2)}
</style>


${JSON.stringify(cssGlobals, null, 2)}
`.trim()

document.querySelector('#root').appendChild(pre)
