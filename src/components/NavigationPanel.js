const Setting = require('../componentsUI/Setting.js')
const NewDir = require('../componentsUI/NewDir.js')
const LineHr = require('../componentsUI/LineHr.js')
const WriteBtn = require('../componentsUI/WriteBtn.js')
const Navbar = require('./Navbar.js')

const NavigationPanel = () => {
    const nav = Navbar().nav
    const btn = WriteBtn()
    const line = LineHr()
    const newDir = NewDir()
    const setting = Setting()
    const navigationDoc = document.createElement('div')

    navigationDoc.classList.add('navigation')

    navigationDoc.append(btn, nav, line, newDir, setting)

    return navigationDoc
}

module.exports = NavigationPanel
