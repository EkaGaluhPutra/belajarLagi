// let doc = document
// console.log(doc)
// let body = document.body
// console.log(body)
// let all = document.all
// console.log(all)

// selecting single element
// let content = document.getElementById('content')
// content.style.backgroundColor = 'red'
// let header = document.getElementById('header')
// header.style.backgroundColor = 'red'
// let headerTitle = document.getElementById('header-title')
// headerTitle.textContent = 'Ganti text menggunankan javascript'

// selecting multiple element
// let title = document.getElementsByClassName('title')
// for (let i = 0; i < title.length; i++) {
//     title[i].style.backgroundColor = 'blue'
// }
// console.log(title)

// selecting multiple element
// let para = document.getElementsByTagName('p')
// console.log(para)

// className and classList
// see class in element and add,remove or toggle class
// let form = document.getElementById('form')
// form.classList.add('color')
// console.log(form.className)

// acsess value
// let posting = document.getElementById('post')
// posting.value = 'Hello'
// console.log(posting.value)

// create element in javascript
// dont forget to select parent to add child
// let container = document.createElement('div')
// container.classList.add('container')
// container.classList.toggle('is-fluid')
// container.style.background = 'grey'
// document.body.appendChild(container)

// create element in javascript
// dont forget to select parent to add child
// let newPara = document.createElement('p')
// newPara.textContent = 'New Paragraf From Javascript'
// container.appendChild(newPara)

// Start -- create element in javascript using for loop --
// let ul = document.createElement('ul')
// container.appendChild(ul)

// const data = ['String 1', 'String 2', 'String 3', 'String 4']

// for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     let li = document.createElement('li')
//     li.textContent = element
//     ul.appendChild(li)
// }
// End -- create element in javascript using for loop --


// let containerFluid = document.querySelector('section#content > div.container')

// parent
// console.log(containerFluid.parentNode)
// console.log(containerFluid.parentElement)

// children
// console.log(containerFluid.children)

//children
// for (let index = 0; index < document.body.children.length; index++) {
//     console.log(document.body.children[index])
// }

// childrenNodes
// console.log(containerFluid.childNodes)

// sibling
// let center = document.getElementById('second')
// console.log(center.nextElementSibling)
// console.log(center.nextSibling)
// console.log(center.previousElementSibling)
// console.log(center.previousSibling)

// another property in navigate
// console.log(containerFluid.firstChild)
// console.log(containerFluid.lastChild)
// console.log(containerFluid.firstElementChild)
// console.log(containerFluid.lastElementChild)

// event handler javascript to handle every event in HTML element
const btn1 = document.querySelector('button#addMessageDynamic')

function addMessageDynamic(e) {
    e.preventDefault()
    const flexx = document.querySelector('div#message')

    const article = document.createElement('article');
    article.classList.add('message', 'is-primary')
    const messageHeader = document.createElement('div')
    messageHeader.classList.add('message-header')
    const messageBody = document.createElement('div')
    messageBody.classList.add('message-body')

    //child of messageHeader
    let p = document.createElement('p')
    p.textContent = 'Message'
    let btn = document.createElement('button')
    btn.id = 'delete'
    btn.classList.add('delete')
    btn.setAttribute('aria-label', 'delete')

    let text = document.querySelector('textarea#post').value
    if (text) {
        console.log(text)
    } else {
        alert('Postingan tidak boleh kosong')
        return false
    }

    // appendChild messageHeader
    messageHeader.appendChild(p)
    messageHeader.appendChild(btn)
    messageBody.textContent = text

    // appendChild article
    article.appendChild(messageHeader)
    article.appendChild(messageBody)

    // append to container
    flexx.appendChild(article)
}

btn1.addEventListener('click', addMessageDynamic)

// event handler javascript to handle every event in HTML element
const btn = document.querySelector('button#addMessageStatic')

function addMessageStatic(e) {
    const flexx = document.querySelector('div#message')

    const article = document.createElement('article');
    article.classList.add('message', 'is-primary')
    const messageHeader = document.createElement('div')
    messageHeader.classList.add('message-header')
    const messageBody = document.createElement('div')
    messageBody.classList.add('message-body')

    //child of messageHeader
    let p = document.createElement('p')
    p.textContent = 'Message'
    let btn = document.createElement('button')
    btn.id = 'delete'
    btn.classList.add('delete')
    btn.setAttribute('aria-label', 'delete')

    // appendChild messageHeader
    messageHeader.appendChild(p)
    messageHeader.appendChild(btn)
    messageBody.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint repellat ducimus pariatur ipsum nam reprehenderit rem minus earum ipsam a, nesciunt accusantium nemo, qui quia id consectetur. Ipsum, nisi.'

    // appendChild article
    article.appendChild(messageHeader)
    article.appendChild(messageBody)

    // append to container
    flexx.appendChild(article)

    console.log('addMessageStatic function success')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.clientX)
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
}

btn.addEventListener('click', addMessageStatic)

const btnDelete = document.querySelectorAll('button#delete')
btnDelete.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        const parent = item.parentElement.parentElement.parentElement
        let thisChild = item.parentElement.parentElement

        const deletePost = confirm('Hapus Postingan ?')
        if (deletePost) {
            parent.removeChild(thisChild)
        } else {
            return false
        }
    })
})