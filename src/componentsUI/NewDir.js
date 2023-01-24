// import '../style/UI.css'

const NewDir = () => {
    const btnContainer = document.createElement('div')
    const btn = document.createElement('div')
    const btnLogo = document.createElement('span')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    btnContainer.classList.add('btnContainer')
    btn.classList.add('newDir')
    btnLogo.classList.add('btnPlus')

    const getStatic = async () => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        btn.textContent = data[lang][1].newDir
        btnLogo.innerHTML = `${data[3][0].newDir}`
    }
    getStatic()

    btnContainer.append(btnLogo, btn)

    return btnContainer
}

module.exports = NewDir
