const FilterBtn = () => {
    const btnFilterContainer = document.createElement('div')
    const btnFilter = document.createElement('div')
    const containerTooltipFilter = document.createElement('div')
    const arrowFilter = document.createElement('span')
    const tooltipContainer = document.createElement('div')
    const filterList = document.createElement('ul')
    const allMail = document.createElement('li')
    const allMailText = document.createElement('p')
    const doneAllMail = document.createElement('span')
    const unreadMail = document.createElement('li')
    const doneUnread = document.createElement('span')
    const unreadMailText = document.createElement('p')
    const unreadIcon = document.createElement('div')
    const flagMail = document.createElement('li')
    const doneFlag = document.createElement('span')
    const flagMailText = document.createElement('p')
    const flagIcon = document.createElement('div')
    const enclosureMail = document.createElement('li')
    const doneEnclosure = document.createElement('span')
    const enclosureMailText = document.createElement('p')
    const enclosureIcon = document.createElement('div')
    const hrFilter = document.createElement('span')
    // Сортировка
    const sortMail = document.createElement('li')
    // const doneEnclosure = document.createElement('span')
    // const enclosureMailText = document.createElement('p')
    // const enclosureIcon = document.createElement('div')
    /* */
    const resetMail = document.createElement('div')
    const reset = document.createElement('button')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    if (localStorage.getItem('activeDoneAllMail') === null) {
        let activeTooltip = false
        let activeDoneAllMail = true
        let activeDoneUnread = false
        let activeDoneFlag = false
        let activeDoneEnclosure = false

        localStorage.setItem('activeTooltip', JSON.stringify(activeTooltip))
        localStorage.setItem('activeDoneAllMail', JSON.stringify(activeDoneAllMail))
        localStorage.setItem('activeDoneUnread', JSON.stringify(activeDoneUnread))
        localStorage.setItem('activeDoneFlag', JSON.stringify(activeDoneFlag))
        localStorage.setItem('activeDoneEnclosure', JSON.stringify(activeDoneEnclosure))
    }

    const query = window.location.href.indexOf('?')

    btnFilterContainer.classList.add('btnFilterContainer')
    btnFilter.classList.add('btnFilter')
    containerTooltipFilter.classList.add('containerTooltipFilter')
    arrowFilter.classList.add('arrowFilter')
    tooltipContainer.classList.add('tooltipFilterContainer')
    filterList.classList.add('filterList')
    allMail.classList.add('filterElem')
    unreadMail.classList.add('filterElem')
    unreadIcon.classList.add('unreadIcon')
    flagMail.classList.add('filterElem')
    flagIcon.classList.add('flagIcon')
    enclosureMail.classList.add('filterElem')
    enclosureIcon.classList.add('enclosureIcon')
    allMailText.classList.add('filterElemText')
    unreadMailText.classList.add('filterElemText')
    flagMailText.classList.add('filterElemText')
    enclosureMailText.classList.add('filterElemText')
    doneAllMail.classList.add('doneArrow')
    doneUnread.classList.add('doneArrow')
    doneFlag.classList.add('doneArrow')
    doneEnclosure.classList.add('doneArrow')
    hrFilter.classList.add('hrFilter')
    resetMail.classList.add('filterElemBtnReset')
    reset.classList.add('resetBtnFilter')

    const getStatic = async () => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        console.log(data[0].lang)
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        const unread = JSON.parse(localStorage.getItem('activeDoneUnread'))
        const flag = JSON.parse(localStorage.getItem('activeDoneFlag'))
        const doc = JSON.parse(localStorage.getItem('activeDoneEnclosure'))
        if(unread && !flag && !doc) {
            btnFilter.textContent = data[lang][0].unread
        } else if(!unread && flag && !doc) {
            btnFilter.textContent = data[lang][0].flag
        } else if(!unread && !flag && doc) {
            btnFilter.textContent = data[lang][0].doc
        } else {
            btnFilter.textContent = data[lang][0].filter
        }
        allMailText.textContent = data[lang][0].all
        unreadMailText.textContent = data[lang][0].unread
        flagMailText.textContent = data[lang][0].flag
        enclosureMailText.textContent = data[lang][0].doc
        reset.textContent = data[lang][0].reset
        arrowFilter.innerHTML = `${data[3][0].arrowFilter}`
        flagIcon.innerHTML = `${data[3][0].flagged}`
        enclosureIcon.innerHTML = `${data[3][0].attach}`
        if(JSON.parse(localStorage.getItem('activeDoneAllMail'))) {
            doneAllMail.innerHTML = `${data[3][0].doneAllMail}`
        } else {
            doneAllMail.innerHTML = ''
        }
        if(unread) {
            doneUnread.innerHTML = `${data[3][0].doneAllMail}`
        } else {
            doneUnread.innerHTML = ''
        }
        if(flag) {
            doneFlag.innerHTML = `${data[3][0].doneAllMail}`
        } else {
            doneFlag.innerHTML = ''
        }
        if(doc) {
            doneFlag.innerHTML = `${data[3][0].doneAllMail}`
        } else {
            doneFlag.innerHTML = ''
        }
        return data
    }
    getStatic()

    btnFilterContainer.addEventListener('click', (e) => {
        e.stopPropagation()
        const activeTooltip = JSON.parse(localStorage.getItem('activeTooltip'))
        // activeTooltip = !activeTooltip
        localStorage.setItem('activeTooltip', !activeTooltip)
        if(!activeTooltip) {
            tooltipContainer.classList.toggle('active')
            btnFilterContainer.append(tooltipContainer)
        } else {
            tooltipContainer.classList.toggle('active')
            btnFilterContainer.removeChild(tooltipContainer)
        }
    })

    if(JSON.parse(localStorage.getItem('activeTooltip'))) {
        tooltipContainer.classList.add('active')
        btnFilterContainer.append(tooltipContainer)
        console.log(JSON.parse(localStorage.getItem('activeDoneAllMail')))
        if(JSON.parse(localStorage.getItem('activeDoneAllMail'))) {
            doneAllMail.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
        } else {
            doneAllMail.innerHTML = ''
        }
        if(JSON.parse(localStorage.getItem('activeDoneUnread'))) {
            doneUnread.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
        } else {
            doneUnread.innerHTML = ''
        }
        if(JSON.parse(localStorage.getItem('activeDoneFlag'))) {
            doneFlag.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
        } else {
            doneFlag.innerHTML = ''
        }
        if(JSON.parse(localStorage.getItem('activeDoneEnclosure'))) {
            doneEnclosure.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
        } else {
            doneEnclosure.innerHTML = ''
        }
    }

    const queryParams = window.location.href.slice(locationUserDomains).lastIndexOf('?')
    let locationUser = null
    if(queryParams > -1) {
        locationUser = window.location.href.slice(locationUserDomains).slice(0, queryParams)
    } else locationUser = window.location.href.slice(locationUserDomains)

    // Закрываем тултип по клику вне его области
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(tooltipContainer)
        const withinBoundaries1 = e.composedPath().includes(btnFilter)
        // tooltipContainer.classList.add('active')

		if (!withinBoundaries && !withinBoundaries1) {
            tooltipContainer.classList.remove('active')
            btnFilterContainer.removeChild(tooltipContainer)
            localStorage.setItem('activeTooltip', JSON.stringify(false))
        }
    })

    allMail.addEventListener('click', (e) => {
        e.stopPropagation()
        localStorage.setItem('activeDoneUnread', JSON.stringify(false))
        localStorage.setItem('activeDoneFlag', JSON.stringify(false))
        localStorage.setItem('activeDoneEnclosure', JSON.stringify(false))    
        localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
        doneUnread.innerHTML = ''
        doneFlag.innerHTML = ''
        doneEnclosure.innerHTML = ''
        doneAllMail.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
        window.location.href = `${nameLocation}${locationUser}`
    })

    unreadMail.addEventListener('click', (e) => {
        e.stopPropagation()
        const activeUnread = JSON.parse(localStorage.getItem('activeDoneUnread'))
        const currUnread = !activeUnread
        const prefix = window.location.href.substring(0, query + 1) // префикс
        console.log('prefix', prefix)
        if(currUnread) {
            const prefixLen = window.location.href.substr(prefix.length)
            localStorage.setItem('activeDoneUnread', JSON.stringify(true))
            localStorage.setItem('activeDoneAllMail', JSON.stringify(false))
            doneAllMail.innerHTML = ''
            if(prefixLen === 'filter__flag=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0`
            } else if(prefixLen === 'filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__doc=0`
            } else if(prefixLen === 'filter__flag=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0&filter__doc=0`                
            } else {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0`
            }
            doneUnread.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
        } else {
            const prefixLen = window.location.href.substr(prefix.length)
            doneUnread.innerHTML = ''
            localStorage.setItem('activeDoneUnread', JSON.stringify(false))
            if(prefixLen === 'filter__unread=0&filter__flag=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__flag=0`
            } else if(prefixLen === 'filter__unread=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__doc=0`
            } else if(prefixLen === 'filter__unread=0&filter__flag=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__flag=0&filter__doc=0`                
            } else {
                window.location.href = `${nameLocation}${locationUser}`
                localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
                doneAllMail.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
            }
        }
    })

    flagMail.addEventListener('click', (e) => {
        e.stopPropagation()
        const activeFlag = JSON.parse(localStorage.getItem('activeDoneFlag'))
        const currFlag = !activeFlag
        const prefix = window.location.href.substring(0, query + 1) // префикс
        if(currFlag) {
            const prefixLen = window.location.href.substr(prefix.length)
            localStorage.setItem('activeDoneFlag', JSON.stringify(true))
            localStorage.setItem('activeDoneAllMail', JSON.stringify(false))
            doneAllMail.innerHTML = ''
            if(prefixLen === 'filter__unread=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0`
            } else if(prefixLen === 'filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__flag=0&filter__doc=0`
            } else if(prefixLen === 'filter__unread=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0&filter__doc=0`                
            } else {
                window.location.href = `${nameLocation}${locationUser}?filter__flag=0`
            }
            doneFlag.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
        } else {
            const prefixLen = window.location.href.substr(prefix.length)
            doneFlag.innerHTML = ''
            localStorage.setItem('activeDoneFlag', JSON.stringify(false))
            if(prefixLen === 'filter__unread=0&filter__flag=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0`
            } else if(prefixLen === 'filter__flag=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__doc=0`
            } else if(prefixLen === 'filter__unread=0&filter__flag=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__doc=0`                
            } else {
                doneAllMail.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
                localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
                window.location.href = `${nameLocation}${locationUser}`
            }
        }
    })
    
    enclosureMail.addEventListener('click', (e) => {
        e.stopPropagation()
        const activeEnclosure = JSON.parse(localStorage.getItem('activeDoneEnclosure'))
        const currEnc = !activeEnclosure
        const prefix = window.location.href.substring(0, query + 1) // префикс
        console.log(`${nameLocation}${locationUser}`)
        if(currEnc) {
            const prefixLen = window.location.href.substr(prefix.length)
            localStorage.setItem('activeDoneEnclosure', JSON.stringify(true))
            localStorage.setItem('activeDoneAllMail', JSON.stringify(false))
            doneAllMail.innerHTML = ''
            if(prefixLen === 'filter__unread=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__doc=0`
                return
            } else if(prefixLen === 'filter__flag=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__flag=0&filter__doc=0`
            } else if(prefixLen === 'filter__unread=0&filter__flag=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0&filter__doc=0`
            } else {
                window.location.href = `${nameLocation}${locationUser}?filter__doc=0`
            }
        } else {
            const prefixLen = window.location.href.substr(prefix.length)
            doneEnclosure.innerHTML = ''            
            localStorage.setItem('activeDoneEnclosure', JSON.stringify(false))
            if(prefixLen === 'filter__unread=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0`
                return
            } else if(prefixLen === 'filter__flag=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__flag=0`
            } else if(prefixLen === 'filter__unread=0&filter__flag=0&filter__doc=0') {
                window.location.href = `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0`
            } else {
                doneAllMail.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4 5.5998C12 5.1998 11.4 5.1998 11 5.5998L7 9.5998L5 7.5998C4.6 7.1998 4 7.1998 3.6 7.5998C3.2 7.9998 3.2 8.5998 3.6 8.9998L6.3 11.6998C6.5 11.8998 6.7 11.9998 7 11.9998C7.3 11.9998 7.5 11.8998 7.7 11.6998L12.4 6.9998C12.8 6.5998 12.8 5.9998 12.4 5.5998Z" fill="#2C2D2E"/></svg>`
                localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
                window.location.href = `${nameLocation}${locationUser}?filter__doc=0`
            }
        }
    })

    reset.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        localStorage.setItem('activeDoneUnread', JSON.stringify(false))
        localStorage.setItem('activeDoneFlag', JSON.stringify(false))
        localStorage.setItem('activeDoneEnclosure', JSON.stringify(false))
        localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
        window.location.href = `${nameLocation}${locationUser}`
    })

    allMail.append(doneAllMail, allMailText)
    unreadMail.append(doneUnread, unreadIcon, unreadMailText)
    flagMail.append(doneFlag, flagIcon, flagMailText)
    enclosureMail.append(doneEnclosure, enclosureIcon, enclosureMailText)
    resetMail.append(reset)
    filterList.append(allMail, unreadMail, flagMail, enclosureMail)
    containerTooltipFilter.append(filterList)

    if(JSON.parse(localStorage.getItem('activeDoneUnread')) || JSON.parse(localStorage.getItem('activeDoneFlag')) || JSON.parse(localStorage.getItem('activeDoneEnclosure'))) {
        containerTooltipFilter.append(hrFilter, resetMail)
    }

    tooltipContainer.append(containerTooltipFilter)
    btnFilterContainer.append(btnFilter, arrowFilter)

    return btnFilterContainer
}

module.exports = FilterBtn
