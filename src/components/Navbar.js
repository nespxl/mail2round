const MainPanel = require('./MainPanel.js')

const Navbar = () => {
    const main = document.getElementById('main')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const inbox = document.createElement('li')
    const inboxLink = document.createElement('a')
    const inboxText = document.createElement('p')
    const inboxLogo = document.createElement('span')
    const important = document.createElement('li')
    const importantLink = document.createElement('a')
    const importantText = document.createElement('p')
    const importantLogo = document.createElement('span')
    const sent = document.createElement('li')
    const sentLink = document.createElement('a')
    const sentText = document.createElement('p')
    const sentLogo = document.createElement('span')
    const drafts = document.createElement('li')
    const draftsLink = document.createElement('a')
    const draftsText = document.createElement('p')
    const draftsLogo = document.createElement('span')
    const archive = document.createElement('li')
    const archiveLink = document.createElement('a')
    const archiveText = document.createElement('p')
    const archiveLogo = document.createElement('span')
    const spam = document.createElement('li')
    const spamLink = document.createElement('a')
    const spamText = document.createElement('p')
    const spamLogo = document.createElement('span')
    const trash = document.createElement('li')
    const trashLink = document.createElement('a')
    const trashText = document.createElement('p')
    const trashLogo = document.createElement('span')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    nav.classList.add('nav')
    ul.classList.add('nav__list')
    inbox.classList.add('nav__elem')
    important.classList.add('nav__elem')
    sent.classList.add('nav__elem')
    drafts.classList.add('nav__elem')
    archive.classList.add('nav__elem')
    spam.classList.add('nav__elem')
    trash.classList.add('nav__elem')
    inboxLink.classList.add('nav__link')
    importantLink.classList.add('nav__link')
    sentLink.classList.add('nav__link')
    draftsLink.classList.add('nav__link')
    archiveLink.classList.add('nav__link')
    spamLink.classList.add('nav__link')
    trashLink.classList.add('nav__link')
    inboxLogo.classList.add('nav__logo')
    importantLogo.classList.add('nav__logo')
    sentLogo.classList.add('nav__logo')
    draftsLogo.classList.add('nav__logo')
    archiveLogo.classList.add('nav__logo')
    spamLogo.classList.add('nav__logo')
    trashLogo.classList.add('nav__logo')
    inboxText.classList.add('nav__text')
    importantText.classList.add('nav__text')
    sentText.classList.add('nav__text')
    draftsText.classList.add('nav__text')
    archiveText.classList.add('nav__text')
    spamText.classList.add('nav__text')
    trashText.classList.add('nav__text')

    inboxLink.href = '/inbox'
    importantLink.href = '/important'
    sentLink.href = '/sent'
    draftsLink.href = '/drafts'
    archiveLink.href = '/archive'
    spamLink.href = '/spam'
    trashLink.href = '/trash'

    function resetFilter(btn) {
        btn.addEventListener('click', () => {
            localStorage.setItem('activeDoneUnread', JSON.stringify(false))
            localStorage.setItem('activeDoneFlag', JSON.stringify(false))
            localStorage.setItem('activeDoneEnclosure', JSON.stringify(false))
            localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
        })
    }
    resetFilter(inboxLink)
    resetFilter(importantLink)
    resetFilter(sentLink)
    resetFilter(draftsLink)
    resetFilter(archiveLink)
    resetFilter(spamLink)
    resetFilter(trashLink)

    const getStatic = async () => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        inboxText.textContent = data[lang][1].inbox
        importantText.textContent = data[lang][1].important
        sentText.textContent = data[lang][1].sent
        draftsText.textContent = data[lang][1].drafts
        archiveText.textContent = data[lang][1].archive
        spamText.textContent = data[lang][1].spam
        trashText.textContent = data[lang][1].trash
        // иконки к панели
        inboxLogo.innerHTML = `${data[3][0].inbox}`
        importantLogo.innerHTML = `${data[3][0].important}`
        sentLogo.innerHTML = `${data[3][0].sent}`
        draftsLogo.innerHTML = `${data[3][0].drafts}`
        archiveLogo.innerHTML = `${data[3][0].archive}`
        spamLogo.innerHTML = `${data[3][0].spam}`
        trashLogo.innerHTML = `${data[3][0].trash}`
    }
    getStatic()

    // В зависимости от url даем стили нав панели
    function urlTrackNavbar(url) {
        if(url === `${nameLocation}/inbox`) {
            inboxLink.classList.add('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === `${nameLocation}/important`) {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.add('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === `${nameLocation}/sent`) {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.add('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === `${nameLocation}/drafts`) {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.add('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === `${nameLocation}/archive`) {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.add('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === `${nameLocation}/spam`) {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.add('activeHreh')
            trashLink.classList.remove('activeHreh')
        } else if(url === `${nameLocation}/trash`) {
            inboxLink.classList.remove('activeHreh')
            importantLink.classList.remove('activeHreh')
            sentLink.classList.remove('activeHreh')
            draftsLink.classList.remove('activeHreh')
            archiveLink.classList.remove('activeHreh')
            spamLink.classList.remove('activeHreh')
            trashLink.classList.add('activeHreh')
        }
    }
    urlTrackNavbar(document.referrer) // смотрим ссылку прошлой страницы
    urlTrackNavbar(window.location.href) // смотрим ссылку нынешней страницы

    inboxLink.append(inboxLogo, inboxText)
    inbox.append(inboxLink)
    importantLink.append(importantLogo, importantText)
    important.append(importantLink)
    sentLink.append(sentLogo, sentText)
    sent.append(sentLink)
    draftsLink.append(draftsLogo, draftsText)
    drafts.append(draftsLink)
    archiveLink.append(archiveLogo, archiveText)
    archive.append(archiveLink)
    spamLink.append(spamLogo, spamText)
    spam.append(spamLink)
    trashLink.append(trashLogo, trashText)
    trash.append(trashLink)
    ul.append(inbox, important, sent, drafts, archive, spam, trash)
    nav.append(ul)

    return {
        nav,
        inboxLink,
        importantLink,
        sentLink,
    }
}

module.exports = Navbar
