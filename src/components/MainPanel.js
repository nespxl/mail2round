const ItemLetters = require('./ItemLetters.js')
const InfoItem = require('../components/InfoItem.js')
const mailTo = require('../utils/mailTo.js')

const MainPanel = () => {
    const body = document.querySelector('body')
    const containerIndex = document.createElement('main')
    const containerItem = document.createElement('main')
    const notItemText = document.createElement('p')
    const readLetters = document.createElement('div')
    const infoItem = InfoItem()
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    containerIndex.classList.add('container')
    containerItem.classList.add('container')
    notItemText.classList.add('notItemText')
    readLetters.classList.add('readLetters')

    // смотрим, когда пользователь долистал до конца, если долистал - грузим новую порцию элементов из бд
    function scrollAddType() {
        if(document.body.offsetHeight - document.documentElement.clientHeight <= window.pageYOffset + 1) {
            mailTo(readLetters, ItemLetters, `${nameLocation}/api/mailCategories`)
        }
    }

    const getStatic = async () => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        notItemText.textContent = data[lang][4].mail
    }
    getStatic()

    // проверка, чтобы не грузил дб на странице item
    if(`${nameLocation}/item` !== window.location.href) {
        const responseMail = mailTo(readLetters, ItemLetters, `${nameLocation}/api/mailCategories`)
        responseMail.then(res => {
            console.log(res)
            if(Number(JSON.parse(localStorage.getItem('lengthData'))) === 0) {
                containerIndex.classList.add('mainNotLetters')
                notItemText.classList.add('activeNotItem')
                body.classList.add('overflow')
            } else {
                if(containerIndex.classList.contains('mainNotLetters')) {
                    containerIndex.classList.remove('mainNotLetters')
                    notItemText.classList.remove('activeNotItem')
                    body.classList.remove('overflow')
                }
            }
        })
    }

    if(!(JSON.parse(localStorage.getItem('theme')) === 'black')) {
        body.classList.remove('htmlActiveTheme')
    }

    // проверка, добавляем/убираем действие скролла в зависимости от странице
    if(JSON.parse(localStorage.getItem('location')) === 'inbox') {
        window.addEventListener('scroll', scrollAddType)
    } else if(JSON.parse(localStorage.getItem('location')) === 'important') {
        window.addEventListener('scroll', scrollAddType)
    } else if(JSON.parse(localStorage.getItem('location')) === 'sent') {
        window.addEventListener('scroll', scrollAddType)
    } else if(JSON.parse(localStorage.getItem('location')) === 'drafts') {
        window.addEventListener('scroll', scrollAddType)
    } else if(JSON.parse(localStorage.getItem('location')) === 'archive') {
        window.addEventListener('scroll', scrollAddType)
    } else if(JSON.parse(localStorage.getItem('location')) === 'spam') {
        window.addEventListener('scroll', scrollAddType)
    } else if(JSON.parse(localStorage.getItem('location')) === 'trash') {
        window.addEventListener('scroll', scrollAddType)
    } else window.removeEventListener('scroll', scrollAddType)

    containerIndex.append(readLetters, notItemText)
    containerItem.append(infoItem)

    return {containerIndex, containerItem}
}

module.exports = MainPanel
