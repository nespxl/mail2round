const HeaderItem = () => {

    const header = document.createElement('header')
    const backContainer = document.createElement('div')
    const backLogo = document.createElement('span')
    const backText = document.createElement('p')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    header.classList.add(`containerHeader`)
    backContainer.classList.add(`containerLogo`)
    backText.classList.add('backText')
    backLogo.classList.add('backLogo')

    backContainer.addEventListener('click', () => {
        // переходим на предыдущую страницу
        window.history.back();
    })

    const getStatic = async () => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        backText.textContent = data[lang][0].return
    }
    getStatic()

    backLogo.innerHTML = `<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.2071 11.2071C5.81658 11.5976 5.18341 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976321 6.31658 -0.097632 5.68342 0.292893 5.29289L4.79289 0.792894C5.18342 0.40237 5.81658 0.40237 6.20711 0.792895C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L2.41421 6L6.2071 9.79289C6.59763 10.1834 6.59763 10.8166 6.2071 11.2071Z" fill="#2C2D2E"/></svg>`

    backContainer.append(backLogo, backText)
    header.append(backContainer)

    return header
}

module.exports = HeaderItem
