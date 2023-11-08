let output = document.getElementById('output')
let num9 = document.getElementById('9')
let num8 = document.getElementById('8')
let num7 = document.getElementById('7')
let num6 = document.getElementById('6')
let num5 = document.getElementById('5')
let num4 = document.getElementById('4')
let num3 = document.getElementById('3')
let num2 = document.getElementById('2')
let num1 = document.getElementById('1')
let num0 = document.getElementById('0')
let sub = document.getElementById('-')
let mult = document.getElementById('*')
let sum = document.getElementById('+')
let div = document.getElementById('/')
let reset = document.getElementById('reset')
let calc = document.getElementById('cal')
let point = document.getElementById('.')
let del = document.getElementById('del')


let input = ''

num9.addEventListener('click', () => {
    input += "9"
    output.innerHTML = input
})
num8.addEventListener('click', () => {
    input += "8"
    output.innerHTML = input
})
num7.addEventListener('click', () => {
    input += "7"
    output.innerHTML = input
})
num6.addEventListener('click', () => {
    input += "6"
    output.innerHTML = input
})
num5.addEventListener('click', () => {
    input += "5"
    output.innerHTML = input
})
num4.addEventListener('click', () => {
    input += "4"
    output.innerHTML = input
})
num3.addEventListener('click', () => {
    input += "3"
    output.innerHTML = input
})
num2.addEventListener('click', () => {
    input += "2"
    output.innerHTML = input
})
num1.addEventListener('click', () => {
    input += "1"
    output.innerHTML = input
})
num0.addEventListener('click', () => {
    input += "0"
    output.innerHTML = input
})
sub.addEventListener('click', () => {
    input += "-"
    output.innerHTML = input
})
mult.addEventListener('click', () => {
    input += "*"
    output.innerHTML = input
})
sum.addEventListener('click', () => {
    input += "+"
    output.innerHTML = input
})
div.addEventListener('click', () => {
    input += "/"
    output.innerHTML = input
})
reset.addEventListener('click', () => {
    input = ''
    output.innerHTML = input
})
calc.addEventListener('click', () => {
    output.innerHTML = eval(input)
})
point.addEventListener('click', () => {
    input += "."
    output.innerHTML = input
})
del.addEventListener('click', () => {
    input = input.slice(0, -1)
    output.innerHTML = input
})