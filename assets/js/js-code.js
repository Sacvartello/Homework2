//1
const section1 = document.createElement('section')
section1.setAttribute('id', 'root')
section1.textContent = 'some text'
section1.style.color = 'blue'
document.body.append(section1)
//2
const section2 = document.querySelector('#task-2')
section2.style.backgroundColor = 'violet'
section2.style.color = 'white'
//3
const userName = prompt('Your name:')
const h1 = document.createElement('h1')
h1.textContent = `Вітаю ${userName}`
document.body.append(h1)