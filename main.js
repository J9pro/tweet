const getUserInput = document.getElementById('floatingInputGroup1')
const getTweetInput = document.getElementById('floatingTextarea2')
const btn = document.getElementById('button')



getUserInput.addEventListener('click', newPost)
btn.addEventListener('click', postTweet)





function postTweet() {

    let newTweet = document.querySelector('#floatingTextarea2').value
    const liUser = document.createElement('li')
    liUser.textContent = newTweet
    liUser.style.listStyle = 'none'
    document.querySelector('#myTweet').appendChild(liUser)



    let newItem = document.querySelector('#floatingInputGroup1').value
    const liTweet = document.createElement('li')
    liTweet.textContent = newItem
    liTweet.style.listStyle = 'none'
    document.querySelector('#myUsername').appendChild(liTweet)

    clear()
}

function clear() {
    document.querySelector('input').value = " "
}

function newPost() {
    document.querySelector('#floatingTextarea2').value = ''
}