
document.body.style.background = "lightgreen"

let a = document.getElementById("1")
let b = document.getElementById("2")
let c = document.getElementById("3")
let d = document.getElementById("4")
let x = document.getElementById("5")
let f = document.getElementById("6")
let g = document.getElementById("7")
let h = document.getElementById("8")
let i = document.getElementById("9")

let j = 1
// let k=document.querySelectorAll(".fish")
//console.log(k)

a.onclick = function(e) {
  if (j == 1) {
    a.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    a.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
b.onclick = function(e) {
  if (j == 1) {
    b.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    b.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
c.onclick = function(e) {
  if (j == 1) {
    c.value = 'X'
    j = 2
    myFunc()
    myFunc1()
  }
  else {
    c.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
d.onclick = function(e) {
  if (j == 1) {
    d.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    d.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
x.onclick = function(e) {
  if (j == 1) {
    x.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    x.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
f.onclick = function(e) {
  if (j == 1) {
    f.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    f.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
g.onclick = function(e) {
  if (j == 1) {
    g.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    g.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
h.onclick = function(e) {
  if (j == 1) {
    h.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    h.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
i.onclick = function(e) {
  if (j == 1) {
    i.value = 'X'
    j = 2
    myFunc()
    myFunc1()
    tie()
  }
  else {
    i.value = 'Y'
    j = 1
    myFunc()
    myFunc1()
    tie()
  }
}
let m = document.getElementsByTagName("p")[0]
function myFunc() {
  if (a.value == 'X' && b.value == 'X' && c.value == 'X') {
    m.innerHTML = "Player X wins"
  }
  else if (a.value == 'X' && d.value == 'X' && g.value == 'X') {
    m.innerHTML = "Player X wins"
  }
  else if (a.value == 'X' && x.value == 'X' && i.value == 'X') {
    m.innerHTML = "Player X wins"
  }
  else if (c.value == 'X' && f.value == 'X' && i.value == 'X') {
    m.innerHTML = "Player X wins"
  }
  else if (g.value == 'X' && h.value == 'X' && i.value == 'X') {
    m.innerHTML = "Player X wins"
  }
  else if (d.value == 'X' && x.value == 'X' && f.value == 'X') {
    m.innerHTML = "Player X wins"
  }
  else if (b.value == 'X' && x.value == 'X' && h.value == 'X') {
    m.innerHTML = "Player X wins"
  }
  else if (g.value == 'X' && x.value == 'X' && c.value == 'X') {
    m.innerHTML = "Player X wins"
    // }
  }
}
function myFunc1() {
  if (a.value == 'Y' && b.value == 'Y' && c.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  else if (a.value == 'Y' && d.value == 'Y' && g.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  else if (a.value == 'Y' && x.value == 'Y' && i.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  else if (c.value == 'Y' && f.value == 'Y' && i.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  else if (g.value == 'Y' && h.value == 'Y' && i.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  else if (d.value == 'Y' && x.value == 'Y' && f.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  else if (b.value == 'Y' && x.value == 'Y' && h.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  else if (g.value == 'Y' && x.value == 'Y' && c.value == 'Y') {
    m.innerHTML = "Player Y wins"
  }
  // }
}
function tie() {
  if (a.value != '' && b.value != '' && c.value != '' && d.value != '' && x.value != '' && f.value != '' && g.value != '' && h.value != '' && i.value != '' && m.innerHTML == '') {
    m.innerHTML = "It's a tie"
  }
}
let l = document.getElementsByTagName('button')[0]
l.onclick = function(e) {
  a.value = ''
  b.value = ''
  c.value = ''
  d.value = ''
  x.value = ''
  f.value = ''
  g.value = ''
  h.value = ''
  i.value = ''
  m.innerHTML = ''
  j = 1
}



