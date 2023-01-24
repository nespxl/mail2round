const ChangeTheme = require('./ChangeTheme.js')

const DetailsSetting = () => {
    const tooltipSettingContainer = document.createElement('div')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)
    // первый блок
    const tooltipSideBar = document.createElement('div')
    const sideBarList = document.createElement('ul')
    const appearSetting = document.createElement('li')
    const langSetting = document.createElement('li')
    const langText = document.createElement('p')
    const langIcon = document.createElement('span')
    // второй блок
    const lineHr = document.createElement('span')
    // третий блок
    // первый таб
    const themeContainer = document.createElement('div')
    const themeTitle = document.createElement('h2')
    const changeTheme = ChangeTheme()
    // второй таб
    const langContainer = document.createElement('div')
    const langTitle = document.createElement('h2')
    const checkWrapper = document.createElement('ul')
    const rusBlock = document.createElement('li')
    const engBlock = document.createElement('li')
    const labelRus = document.createElement('label')
    const iconRus = document.createElement('span')
    const checkRus = document.createElement('input')
    const labelEng = document.createElement('label')
    const iconEng = document.createElement('span')
    const checkEng = document.createElement('input')
    const btnChangeLang = document.createElement('button')
    let lang = ''

    tooltipSettingContainer.classList.add('tooltipSettingContainer')
    tooltipSideBar.classList.add('tooltipSideBar')
    sideBarList.classList.add('settingList')
    appearSetting.classList.add('settingElem', 'activeElem')
    langSetting.classList.add('settingElem')
    langText.classList.add('langText')
    langIcon.classList.add('langIcon')
    lineHr.classList.add('sideBarLineHr')
    themeContainer.classList.add('themeContainer', 'activeThemeContainer')
    themeTitle.classList.add('themeTitle')
    langContainer.classList.add('langContainer')
    langTitle.classList.add('langTitle')
    checkWrapper.classList.add('checkWrapper')
    labelRus.classList.add('langLabel')
    labelEng.classList.add('langLabel')
    iconRus.classList.add('iconLang')
    iconEng.classList.add('iconLang')
    checkRus.classList.add('checkLang')
    checkEng.classList.add('checkLang')
    btnChangeLang.classList.add('btnChangeLang')
    rusBlock.classList.add('rusBlock')
    engBlock.classList.add('engBlock')

    checkRus.type = 'radio'
    checkEng.type = 'radio'
    checkRus.name = 'lang'
    checkEng.name = 'lang'
    checkRus.id = 'rus'
    checkEng.id = 'eng'
    labelRus.htmlFor = 'rus'
    labelEng.htmlFor = 'eng'

    labelRus.innerHTML = 'Русский'
    iconRus.innerHTML = `<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="15" height="12" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_4904_11481" transform="scale(0.0333333 0.0416667)"/></pattern><image id="image0_4904_11481" width="30" height="24" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAASUlEQVRIDe3RMQ0AMBBCUQx0qYiKrsUu54AGE7AwML/kg5lhYkigMgvb/m5qX+p1LhNDApVZ2PZ3U/tSvw0mhgQqs7Dt76a2pf49jB36dvhW6wAAAABJRU5ErkJggg=="/></defs></svg>`
    labelEng.innerHTML = 'English'
    iconEng.innerHTML = `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.329102" width="15" height="12" fill="#D62D24"/><mask id="mask0_4904_13258" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12"><rect x="0.329102" width="15" height="12" fill="#D62D24"/></mask><g mask="url(#mask0_4904_13258)"><rect x="6" y="1" width="10" height="1" fill="white"/><rect x="6" y="3" width="10" height="1" fill="white"/><rect x="6" y="5" width="10" height="1" fill="white"/><rect x="-1" y="7" width="17" height="1" fill="white"/><rect y="9" width="16" height="1" fill="white"/><rect y="11" width="16" height="1" fill="white"/><rect width="8" height="6" fill="#1745B2"/></g></svg>`

    const getStatic = async() => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
            checkRus.checked = 'checked'
            langIcon.innerHTML = iconRus.innerHTML
        } else {
            lang = 2
            checkEng.checked = 'checked'
            langIcon.innerHTML = iconEng.innerHTML
        }
        appearSetting.textContent = data[lang][2].appearance
        langText.textContent = data[lang][2].lang
        langTitle.textContent = data[lang][2].switchLanguage
        btnChangeLang.textContent = data[lang][2].chooseLanguage
        themeTitle.textContent = data[lang][2].titleTheme
    }
    getStatic()

    appearSetting.addEventListener('click', () => {
        appearSetting.classList.add('activeElem')
        langSetting.classList.remove('activeElem')
        themeContainer.classList.add('activeThemeContainer')
        langContainer.classList.remove('activeThemeContainer')
    })
    langSetting.addEventListener('click', () => {
        appearSetting.classList.remove('activeElem')
        langSetting.classList.add('activeElem')
        themeContainer.classList.remove('activeThemeContainer')
        langContainer.classList.add('activeThemeContainer')
    })

    rusBlock.addEventListener('click', () => {
        lang = 'rus'
    })
    engBlock.addEventListener('click', () => {
        lang = 'eng'
    })
    btnChangeLang.addEventListener('click', async () => {
        const response = await fetch(`${nameLocation}/static`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(lang)
        })
        location.reload()
    })

    rusBlock.append(checkRus, labelRus, iconRus)
    engBlock.append(checkEng, labelEng, iconEng)
    checkWrapper.append(rusBlock, engBlock)
    langContainer.append(langTitle, checkWrapper, btnChangeLang)
    themeContainer.append(themeTitle, changeTheme.themeContainerLow, changeTheme.themeContainerHard)
    langSetting.append(langText, langIcon)
    sideBarList.append(appearSetting, langSetting)
    tooltipSettingContainer.append(sideBarList, lineHr, themeContainer, langContainer)

    return tooltipSettingContainer
}

module.exports = DetailsSetting
