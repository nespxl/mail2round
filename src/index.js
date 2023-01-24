const Header = require('./components/Header.js')
const HeaderItem = require('./components/HeaderItem.js')
const MainPanel = require('./components/MainPanel.js')
const NavigationPanel = require('./components/NavigationPanel.js')
const DetailsSetting = require('./componentsUI/DetailsSetting.js')

document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const main = document.querySelector('#main')
	const item = document.querySelector('#item')
    const substrateNav = document.createElement('div')
	const header = Header()
	const mainPart = MainPanel()
	const navigationPanel = NavigationPanel()
	const headerItem = HeaderItem()
    const detailsSetting = DetailsSetting()

	substrateNav.classList.add('substrateNav')

	// Закрываем по клику вне его области
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(detailsSetting)

		if (!withinBoundaries) {
			if(window.location.href === 'http://localhost:3000/item') {
				item.classList.remove('openSetting')
			} else main.classList.remove('openSetting')
            body.classList.remove('activeTooltip') // скрываем элемент т к клик был за его пределами
        }
    })

	main?.append(header, navigationPanel, mainPart.containerIndex)
	item?.append(headerItem, navigationPanel, mainPart.containerItem)
	body.append(detailsSetting)
})
