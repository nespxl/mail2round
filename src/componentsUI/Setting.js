const Setting = () => {
    const main = document.querySelector('#main')
    const item = document.querySelector('#item')
    const body = document.querySelector('body')
    const settingContainer = document.createElement('div')
    const settingBtn = document.createElement('p')
    const settingIcon = document.createElement('span')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)
    console.log(locationUserDomains)

    settingContainer.classList.add('settingContainer')
    settingBtn.classList.add('settingBtn')
    settingIcon.classList.add('settingIcon')

    const getStatic = async() => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        settingBtn.textContent = data[lang][1].setting
        settingIcon.innerHTML = `${data[3][0].setting}`
    }
    getStatic()

    // Открываем по нажатию Настройки
    if(window.location.href === `${nameLocation}/item`) {
        settingContainer.addEventListener('click', (e) => {
            e.stopPropagation()
    
            item.classList.add('openSetting')
            body.classList.add('activeTooltip')
        })
    } else {
        settingContainer.addEventListener('click', (e) => {
            e.stopPropagation()
    
            main.classList.add('openSetting')
            body.classList.add('activeTooltip')
        })
    }

    settingContainer.append(settingIcon, settingBtn)

    return settingContainer
}

module.exports = Setting
