async function mailTo(readLetters, ItemLetters, url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)) // сортируем по дате(убывание)
    localStorage.setItem('lengthData', JSON.stringify(data.length))

    const locationUserDomains = window.location.href.lastIndexOf('/')
    console.log(window.location.href.lastIndexOf('?'))
    const queryParams = window.location.href.slice(locationUserDomains).lastIndexOf('?')
    let locationUser = null
    if(queryParams > -1) {
        locationUser = window.location.href.slice(locationUserDomains).slice(0, queryParams)
    } else locationUser = window.location.href.slice(locationUserDomains)
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    for(let i = 0; i < data.length; i++) {
        if(window.location.href === `${nameLocation}/sent`) {
            if(data[i]?.folder === "Отправленные") {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        if(window.location.href === `${nameLocation}/drafts`) {
            if(data[i]?.folder === "Черновики") {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        if(window.location.href === `${nameLocation}/archive`) {
            if(data[i]?.folder === "Архив") {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        if(window.location.href === `${nameLocation}/spam`) {
            if(data[i]?.folder === "Спам") {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        if(window.location.href === `${nameLocation}/trash`) {
            if(data[i]?.folder === "Корзина") {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        console.log(window.location.href)
        if(window.location.href === `${nameLocation}/inbox`) {
            if(!data[i]?.folder) {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        if(window.location.href === null) {
            if(!data[i]?.folder) {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        if(window.location.href === `${nameLocation}/important`) {
            // с бд прилетает отсортированный массив по папкам
            if(data[i]?.folder === "Важное") {
                const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important, data[i]?.id, data[i]?.doc)
                readLetters.append(itemLetters)
            }
        }
        if(window.location.href === `${nameLocation}${locationUser}?filter__unread=0`) {
            const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
            readLetters.append(itemLetters)
        }
        if(window.location.href === `${nameLocation}${locationUser}?filter__flag=0`) {
            const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
            readLetters.append(itemLetters)
        }
        if(window.location.href === `${nameLocation}${locationUser}?filter__doc=0`) {
            const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
            readLetters.append(itemLetters)
        }
        if(window.location.href === `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0`) {
            const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
            readLetters.append(itemLetters)
        }
        if(window.location.href === `${nameLocation}${locationUser}?filter__unread=0&filter__doc=0`) {
            const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
            readLetters.append(itemLetters)
        }
        if(window.location.href === `${nameLocation}${locationUser}?filter__flag=0&filter__doc=0`) {
            const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
            readLetters.append(itemLetters)
        }
        if(window.location.href === `${nameLocation}${locationUser}?filter__unread=0&filter__flag=0&filter__doc=0`) {
            const itemLetters = ItemLetters(data[i].author, data[i].date, data[i]?.title, data[i]?.text, data[i].to, data[i].read, data[i]?.flag, data[i]?.bookmark, data[i]?.important)
            readLetters.append(itemLetters)
        }
    }
    return data
}

module.exports = mailTo
