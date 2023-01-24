(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ChangeTheme = () => {
    const body = document.querySelector('body')
    const themeContainerLow = document.createElement('ul')
    const elemLow1 = document.createElement('li')
    const elemLow2 = document.createElement('li')
    const elemLow3 = document.createElement('li')
    const elemLow4 = document.createElement('li')
    const elemLow5 = document.createElement('li')
    const elemLow6 = document.createElement('li')
    const elemLow7 = document.createElement('li')
    const elemLow8 = document.createElement('li')
    const elemLow9 = document.createElement('li')
    const elemLow10 = document.createElement('li')
    const elemLow11 = document.createElement('li')
    const elemLow12 = document.createElement('li')
    const elemLow13 = document.createElement('li')
    const elemLow14 = document.createElement('li')
    const elemLow15 = document.createElement('li')
    const elemLow16 = document.createElement('li')
    const themeContainerHard = document.createElement('ul')
    const elemHard1 = document.createElement('li')
    const elemHard2 = document.createElement('li')
    const elemHard3 = document.createElement('li')
    const elemHard4 = document.createElement('li')
    const backActive = document.createElement('span')
    const arrowActive = document.createElement('span')
    const hoverWindowBlack = document.createElement('div')
    const hoverWindowBlackText = document.createElement('span')
    const hoverWindowWhite = document.createElement('div')
    const hoverWindowWhiteText = document.createElement('span')
    const hoverWindowAnime = document.createElement('div')
    const hoverWindowAnimeText = document.createElement('span')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    themeContainerLow.classList.add('themeContainerList')
    elemLow1.classList.add('themeElemList1', 'themeElemList')
    elemLow2.classList.add('themeElemList2', 'themeElemList')
    elemLow3.classList.add('themeElemList3', 'themeElemList')
    elemLow4.classList.add('themeElemList4', 'themeElemList')
    elemLow5.classList.add('themeElemList5', 'themeElemList')
    elemLow6.classList.add('themeElemList6', 'themeElemList')
    elemLow7.classList.add('themeElemList7', 'themeElemList')
    elemLow8.classList.add('themeElemList8', 'themeElemList')
    elemLow9.classList.add('themeElemList9', 'themeElemList')
    elemLow10.classList.add('themeElemList10', 'themeElemList')
    elemLow11.classList.add('themeElemList11', 'themeElemList')
    elemLow12.classList.add('themeElemList12', 'themeElemList')
    elemLow13.classList.add('themeElemList13', 'themeElemList')
    elemLow14.classList.add('themeElemList14', 'themeElemList')
    elemLow15.classList.add('themeElemList15', 'themeElemList')
    elemLow16.classList.add('themeElemList16', 'themeElemList')
    themeContainerHard.classList.add('themeContainerHard')
    elemHard1.classList.add('themeElemHard', 'themeElemHard1')
    elemHard2.classList.add('themeElemHard', 'themeElemHard2')
    elemHard3.classList.add('themeElemHard', 'themeElemHard3')
    elemHard4.classList.add('themeElemHard')
    backActive.classList.add('backActive')
    arrowActive.classList.add('arrowActive')
    hoverWindowBlack.classList.add('hoverWindow')
    hoverWindowWhite.classList.add('hoverWindow')
    hoverWindowAnime.classList.add('hoverWindow')

    elemHard1.innerHTML = `<svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0811 0C5.41955 0 0 5.38316 0 11.9999C0 18.6168 5.41955 24 12.0811 24C14.5303 24 16.8911 23.2672 18.8862 21.9128L17.3027 20.0843C15.7546 21.0735 13.9503 21.6074 12.0811 21.6074C6.7477 21.6074 2.40875 17.2976 2.40875 11.9999C2.40875 6.70232 6.7477 2.3925 12.0811 2.3925C17.4146 2.3925 21.7536 6.70232 21.7536 11.9999C21.7536 12.6976 21.6747 13.3913 21.5257 14.066C21.2156 15.329 20.3291 15.7196 19.648 15.6667C18.9763 15.613 18.1785 15.1373 18.1732 13.9627V11.9999C18.1732 8.6634 15.4403 5.94881 12.0811 5.94881C8.72212 5.94881 5.98902 8.6634 5.98902 11.9999C5.98902 15.3367 8.72212 18.0512 12.0811 18.0512C13.7835 18.0512 15.3241 17.3531 16.4306 16.2312C17.0822 17.2648 18.1611 17.9484 19.455 18.0516C19.5628 18.0602 19.6705 18.0644 19.7779 18.0644C20.6546 18.0644 21.5094 17.78 22.2147 17.2481C22.9427 16.6992 23.4727 15.919 23.7698 14.9751C23.8172 14.8244 23.9043 14.475 23.9053 14.4704C24.1034 13.6185 24.1623 12.8324 24.1623 11.9999C24.1623 5.38316 18.7427 0 12.0811 0ZM8.39777 11.9999C8.39777 9.98263 10.0502 8.34138 12.0811 8.34138C14.1121 8.34138 15.7645 9.98263 15.7645 11.9999C15.7645 14.0174 14.1121 15.6586 12.0811 15.6586C10.0502 15.6586 8.39777 14.0174 8.39777 11.9999Z" fill="#FF9E00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62.0497 17.6087H59.7831V16.7805C58.9075 17.5412 57.7634 17.9943 56.4174 17.9943C53.1987 17.9943 50.5856 15.4027 50.5856 12.2106C50.5856 9.01841 53.1987 6.42683 56.4174 6.42683C57.7634 6.42683 58.9075 6.87997 59.7831 7.6407V6.81237H62.0497V17.6087ZM33.2779 17.6087H31.0115V6.81245H33.2779V7.41197C33.7813 6.94265 34.7286 6.42842 35.9038 6.42683C37.4131 6.42683 38.7647 7.10854 39.6628 8.17754C40.561 7.10854 41.9126 6.42683 43.4219 6.42683C46.1195 6.42683 48.3143 8.60345 48.3143 11.2788V17.6087H46.0477V11.2788C46.0477 9.84295 44.8697 8.67468 43.4219 8.67468C41.974 8.67468 40.7961 9.84295 40.7961 11.2788V17.6087H38.5296V11.2788C38.5296 9.84295 37.3516 8.67468 35.9038 8.67468C34.4559 8.67468 33.2779 9.84295 33.2779 11.2788V17.6087ZM64.7582 17.6087H67.0247V6.81244H64.7582V17.6087ZM69.7335 17.6087H72V2.18541H69.7335V17.6087ZM56.4174 8.64436C58.4021 8.64436 59.966 10.2423 59.966 12.2106C59.966 14.1788 58.4021 15.7768 56.4174 15.7768C54.4328 15.7768 52.8216 14.1788 52.8216 12.2106C52.8216 10.2423 54.4328 8.64436 56.4174 8.64436ZM65.8933 1.7998C66.7525 1.7998 67.45 2.49165 67.45 3.34371C67.45 4.19585 66.7525 4.88769 65.8933 4.88769C65.034 4.88769 64.3365 4.19585 64.3365 3.34371C64.3365 2.49165 65.034 1.7998 65.8933 1.7998Z" fill="white"/></svg>`
    elemHard2.innerHTML = `<svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0811 0C5.41955 0 0 5.38316 0 11.9999C0 18.6168 5.41955 24 12.0811 24C14.5303 24 16.8911 23.2672 18.8862 21.9128L17.3027 20.0843C15.7546 21.0735 13.9503 21.6074 12.0811 21.6074C6.7477 21.6074 2.40875 17.2976 2.40875 11.9999C2.40875 6.70232 6.7477 2.3925 12.0811 2.3925C17.4146 2.3925 21.7536 6.70232 21.7536 11.9999C21.7536 12.6976 21.6747 13.3913 21.5257 14.066C21.2156 15.329 20.3291 15.7196 19.648 15.6667C18.9763 15.613 18.1785 15.1373 18.1732 13.9627V11.9999C18.1732 8.6634 15.4403 5.94881 12.0811 5.94881C8.72212 5.94881 5.98902 8.6634 5.98902 11.9999C5.98902 15.3367 8.72212 18.0512 12.0811 18.0512C13.7835 18.0512 15.3241 17.3531 16.4306 16.2312C17.0822 17.2648 18.1611 17.9484 19.455 18.0516C19.5628 18.0602 19.6705 18.0644 19.7779 18.0644C20.6546 18.0644 21.5094 17.78 22.2147 17.2481C22.9427 16.6992 23.4727 15.919 23.7698 14.9751C23.8172 14.8244 23.9043 14.475 23.9053 14.4704C24.1034 13.6185 24.1623 12.8324 24.1623 11.9999C24.1623 5.38316 18.7427 0 12.0811 0ZM8.39777 11.9999C8.39777 9.98263 10.0502 8.34138 12.0811 8.34138C14.1121 8.34138 15.7645 9.98263 15.7645 11.9999C15.7645 14.0174 14.1121 15.6586 12.0811 15.6586C10.0502 15.6586 8.39777 14.0174 8.39777 11.9999Z" fill="#FF9E00"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62.0497 17.6087H59.7831V16.7805C58.9075 17.5412 57.7634 17.9943 56.4174 17.9943C53.1987 17.9943 50.5856 15.4027 50.5856 12.2106C50.5856 9.01841 53.1987 6.42683 56.4174 6.42683C57.7634 6.42683 58.9075 6.87997 59.7831 7.6407V6.81237H62.0497V17.6087ZM33.2779 17.6087H31.0115V6.81245H33.2779V7.41197C33.7813 6.94265 34.7286 6.42842 35.9038 6.42683C37.4131 6.42683 38.7647 7.10854 39.6628 8.17754C40.561 7.10854 41.9126 6.42683 43.4219 6.42683C46.1195 6.42683 48.3143 8.60345 48.3143 11.2788V17.6087H46.0477V11.2788C46.0477 9.84295 44.8697 8.67468 43.4219 8.67468C41.974 8.67468 40.7961 9.84295 40.7961 11.2788V17.6087H38.5296V11.2788C38.5296 9.84295 37.3516 8.67468 35.9038 8.67468C34.4559 8.67468 33.2779 9.84295 33.2779 11.2788V17.6087ZM64.7582 17.6087H67.0247V6.81244H64.7582V17.6087ZM69.7335 17.6087H72V2.18541H69.7335V17.6087ZM56.4174 8.64436C58.4021 8.64436 59.966 10.2423 59.966 12.2106C59.966 14.1788 58.4021 15.7768 56.4174 15.7768C54.4328 15.7768 52.8216 14.1788 52.8216 12.2106C52.8216 10.2423 54.4328 8.64436 56.4174 8.64436ZM65.8933 1.7998C66.7525 1.7998 67.45 2.49165 67.45 3.34371C67.45 4.19585 66.7525 4.88769 65.8933 4.88769C65.034 4.88769 64.3365 4.19585 64.3365 3.34371C64.3365 2.49165 65.034 1.7998 65.8933 1.7998Z" fill="#005FF9"/></svg>`
    arrowActive.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31 14C30 13 28.5 13 27.5 14L17.5 24L12.5 19C11.5 18 10 18 9 19C8 20 8 21.5 9 22.5L15.75 29.25C16.25 29.75 16.75 30 17.5 30C18.25 30 18.75 29.75 19.25 29.25L31 17.5C32 16.5 32 15 31 14Z" fill="white"/></svg>`

    const getStatic = async () => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        hoverWindowBlackText.textContent = data[lang][5].blackTheme
        hoverWindowWhiteText.textContent = data[lang][5].whiteTheme
        hoverWindowAnimeText.textContent = data[lang][5].animeTheme
    }
    getStatic()

    function enterTheme(elem) {
        elem.addEventListener('click', () => {
            localStorage.removeItem('theme')
            if(elem === elemHard1) {
                localStorage.setItem('theme', JSON.stringify('black'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme')
            } else if(elem === elemLow1) {
                localStorage.setItem('theme', JSON.stringify('brown'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme1')
            } else if(elem === elemLow2) {
                localStorage.setItem('theme', JSON.stringify('gray'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme2')
            } else if(elem === elemLow3) {
                localStorage.setItem('theme', JSON.stringify('purple'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme3')
            } else if(elem === elemLow4) {
                localStorage.setItem('theme', JSON.stringify('darkPurple'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme4')
            } else if(elem === elemLow5) {
                localStorage.setItem('theme', JSON.stringify('blue'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme5')
            } else if(elem === elemLow6) {
                localStorage.setItem('theme', JSON.stringify('red'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme6')
            } else if(elem === elemLow7) {
                localStorage.setItem('theme', JSON.stringify('orange'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme7')
            } else if(elem === elemLow8) {
                localStorage.setItem('theme', JSON.stringify('green'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme8')
            } else if(elem === elemLow9) {
                localStorage.setItem('theme', JSON.stringify('lightGreen'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme9')
            } else if(elem === elemLow10) {
                localStorage.setItem('theme', JSON.stringify('lightBeige'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme10')
            } else if(elem === elemLow11) {
                localStorage.setItem('theme', JSON.stringify('middleBeige'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme11')
            } else if(elem === elemLow12) {
                localStorage.setItem('theme', JSON.stringify('darkBeige'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme12')
            } else if(elem === elemLow13) {
                localStorage.setItem('theme', JSON.stringify('dark2Beige'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme13')
            } else if(elem === elemLow14) {
                localStorage.setItem('theme', JSON.stringify('lightBlue'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme14')
            } else if(elem === elemLow15) {
                localStorage.setItem('theme', JSON.stringify('elemLow15'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme15')
            } else if(elem === elemLow16) {
                localStorage.setItem('theme', JSON.stringify('elemLow16'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme16')
            } else if(elem === elemHard2) {
                localStorage.setItem('theme', JSON.stringify('white'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.remove('htmlActiveTheme17')
            } else if(elem === elemHard3) {
                localStorage.setItem('theme', JSON.stringify('anime'))
                body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
                body.classList.add('htmlActiveTheme18')
            }
            elem.append(backActive)
        })
    }

    if(JSON.parse(localStorage.getItem('theme')) === 'black') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme')
        elemHard1.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'brown') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme1')
        elemLow1.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'gray') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme2')
        elemLow2.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'purple') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme3')
        elemLow3.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'darkPurple') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme4')
        elemLow4.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'blue') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme5')
        elemLow5.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'red') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme6')
        elemLow6.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'orange') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme7')
        elemLow7.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'green') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme8')
        elemLow8.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'lightGreen') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme9')
        elemLow9.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'lightBeige') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme10')
        elemLow10.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'middleBeige') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme11')
        elemLow11.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'darkBeige') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme12')
        elemLow12.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'dark2Beige') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme13')
        elemLow13.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'lightBlue') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme14')
        elemLow14.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'elemLow15') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme15')
        elemLow15.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'elemLow16') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme16')
        elemLow16.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'white') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme17')
        elemHard2.append(backActive)
    }
    if(JSON.parse(localStorage.getItem('theme')) === 'anime') {
        body.classList.remove('htmlActiveTheme', 'htmlActiveTheme1', 'htmlActiveTheme2', 'htmlActiveTheme3', 'htmlActiveTheme4', 'htmlActiveTheme5', 'htmlActiveTheme6', 'htmlActiveTheme7', 'htmlActiveTheme8', 'htmlActiveTheme9', 'htmlActiveTheme10', 'htmlActiveTheme11', 'htmlActiveTheme12', 'htmlActiveTheme13', 'htmlActiveTheme14', 'htmlActiveTheme15', 'htmlActiveTheme16', 'htmlActiveTheme17', 'htmlActiveTheme18')
        body.classList.add('htmlActiveTheme18')
        elemHard3.append(backActive)
    }

    enterTheme(elemLow1)
    enterTheme(elemLow2)
    enterTheme(elemLow3)
    enterTheme(elemLow4)
    enterTheme(elemLow5)
    enterTheme(elemLow6)
    enterTheme(elemLow7)
    enterTheme(elemLow8)
    enterTheme(elemLow9)
    enterTheme(elemLow10)
    enterTheme(elemLow11)
    enterTheme(elemLow12)
    enterTheme(elemLow13)
    enterTheme(elemLow14)
    enterTheme(elemLow15)
    enterTheme(elemLow16)
    enterTheme(elemHard1)
    enterTheme(elemHard2)
    enterTheme(elemHard3)
    
    hoverWindowBlack.append(hoverWindowBlackText)
    hoverWindowWhite.append(hoverWindowWhiteText)
    hoverWindowAnime.append(hoverWindowAnimeText)
    elemHard1.append(hoverWindowBlack)
    elemHard2.append(hoverWindowWhite)
    elemHard3.append(hoverWindowAnime)

    function appendHoverWindow(elemHard, hoverWindow) {
        if(elemHard.childNodes[0].classList.contains('backActive')) {
            elemHard.removeChild(hoverWindow)
        } else {
            elemHard.appendChild(hoverWindow)
        }
    }
    appendHoverWindow(elemHard1, hoverWindowBlack)
    appendHoverWindow(elemHard2, hoverWindowWhite)
    appendHoverWindow(elemHard3, hoverWindowAnime)
    console.log(elemHard3.childNodes[0].classList.contains('backActive'))

    backActive.append(arrowActive)
    themeContainerLow.append(elemLow1, elemLow2, elemLow3, elemLow4, elemLow5, elemLow6, elemLow7, elemLow8, elemLow9, elemLow10, elemLow11, elemLow12, elemLow13, elemLow14, elemLow15, elemLow16)
    themeContainerHard.append(elemHard1, elemHard2, elemHard3)

    return {themeContainerLow, themeContainerHard}
}

module.exports = ChangeTheme

},{}],2:[function(require,module,exports){
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

},{"./ChangeTheme.js":1}],3:[function(require,module,exports){
const DocMail = (link) => {
    const containerMail = document.createElement('div')
    const figureImg = document.createElement('figure')
    const img = document.createElement('img')
    const downloadContainer = document.createElement('a')
    const downloadText = document.createElement('p')
    const downloadIcon = document.createElement('span')

    containerMail.classList.add('containerMail')
    img.classList.add('imgDoc')
    figureImg.classList.add('figureImg')
    downloadContainer.classList.add('downloadContainer')
    downloadText.classList.add('downloadText')
    downloadIcon.classList.add('downloadIcon')

    downloadContainer.href = '/#'

    img.src = link

    downloadIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.15081 6.24074C4.73148 5.88132 4.10018 5.92988 3.74076 6.34921C3.38134 6.76853 3.4299 7.39983 3.84923 7.75926L8.00002 11.3171L12.1508 7.75926C12.5701 7.39983 12.6187 6.76853 12.2593 6.34921C11.8999 5.92988 11.2686 5.88132 10.8492 6.24074L9.00002 7.82578V2C9.00002 1.44771 8.5523 1 8.00002 1C7.44773 1 7.00002 1.44771 7.00002 2V7.82578L5.15081 6.24074ZM2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H2Z" fill="#2C2D2E"/></svg>`
    downloadText.innerHTML = 'Скачать'

    downloadContainer.append(downloadIcon, downloadText)
    figureImg.append(img, downloadContainer)
    containerMail.append(figureImg)

    return containerMail
}

module.exports = DocMail

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
// import '../style/UI.css'

const LineHr = () => {
    const line = document.createElement('p')

    line.classList.add('line')

    return line
}

module.exports = LineHr

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
const ToolImg = (imgElem, descElem) => {
    const containerImg = document.createElement('div')
    const tooltipImg = document.createElement('img')
    const img = document.createElement('img')
    const desc = document.createElement('p')

    tooltipImg.src = String(imgElem)
    img.src = String(imgElem)
    img.alt = 'Картинка:)'

    containerImg.classList.add('containerImg')
    tooltipImg.classList.add('imgTooltip')
    img.classList.add('imgTooltipContainer')
    desc.classList.add('descImg')

    desc.innerHTML = descElem

    containerImg.append(img, desc, tooltipImg)

    return containerImg
}

module.exports = ToolImg

},{}],9:[function(require,module,exports){
const WriteBtn = () => {
    const writeBtnContainer = document.createElement('div')
    const writeBtn = document.createElement('button')
    const writeBtnIcon = document.createElement('span')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    const getStatic = async () => {
        const response = await fetch(`${nameLocation}/static`)
        const data = await response.json()
        let lang = null
        if(data[0].lang === 'rus') {
            lang = 1
        } else lang = 2
        writeBtn.innerHTML = data[lang][1].writeLetters
    }
    getStatic()

    writeBtnIcon.innerHTML = `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3471 7.04254L5.0409 14.4567L3.4665 14.7152L3.64849 13.0203L10.9225 5.63874L12.3471 7.04254ZM13.7509 5.61799L14.4528 4.90573C14.8404 4.51235 14.8358 3.8792 14.4424 3.49155C14.049 3.10391 13.4158 3.10855 13.0282 3.50193L12.3263 4.21419L13.7509 5.61799ZM15.8773 6.30953L6.00803 16.3247L1.19738 17.1146L1.73438 12.1133L11.6037 2.09813C12.7666 0.917992 14.666 0.904058 15.8462 2.067C17.0263 3.22995 17.0402 5.12939 15.8773 6.30953Z" fill="#333333"/></svg>`

    writeBtnContainer.classList.add('writeBtnContainer')
    writeBtn.classList.add('writeBtn')
    writeBtnIcon.classList.add('writeBtnIcon')

    writeBtnContainer.append(writeBtnIcon, writeBtn)

    return writeBtnContainer
}

module.exports = WriteBtn

},{}],10:[function(require,module,exports){
const FilterBtn = require('../componentsUI/FilterBtn.js')

const Header = () => {
    const header = document.createElement('header')
    const logoContainer = document.createElement('div')
    // logo при >768px
    const logo = document.createElement('a')
    // logo при 768px
    const smallLogo = document.createElement('a')
    const filterBtn = FilterBtn()

    header.classList.add('containerHeader')
    logoContainer.classList.add('containerLogo')
    logo.classList.add('logo')
    smallLogo.classList.add('smallLogo')

    logo.href = '/inbox'
    smallLogo.href = '/inbox'

    logo.addEventListener('click', () => {
        localStorage.setItem('activeDoneUnread', JSON.stringify(false))
        localStorage.setItem('activeDoneFlag', JSON.stringify(false))
        localStorage.setItem('activeDoneEnclosure', JSON.stringify(false))
        localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
    })

    smallLogo.addEventListener('click', () => {
        localStorage.setItem('activeDoneUnread', JSON.stringify(false))
        localStorage.setItem('activeDoneFlag', JSON.stringify(false))
        localStorage.setItem('activeDoneEnclosure', JSON.stringify(false))
        localStorage.setItem('activeDoneAllMail', JSON.stringify(true))
    })

    logo.innerHTML = `<svg width="96" height="32" viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1082 0C7.22607 0 0 7.17755 0 15.9999C0 24.8224 7.22607 32 16.1082 32C19.3737 32 22.5215 31.023 25.1816 29.2171L23.0703 26.7791C21.0061 28.098 18.6003 28.8099 16.1082 28.8099C8.99694 28.8099 3.21167 23.0635 3.21167 15.9999C3.21167 8.93643 8.99694 3.19 16.1082 3.19C23.2195 3.19 29.0048 8.93643 29.0048 15.9999C29.0048 16.9301 28.8996 17.855 28.7009 18.7547C28.2875 20.4386 27.1055 20.9594 26.1973 20.8889C25.3018 20.8173 24.2379 20.1831 24.231 18.617V15.9999C24.231 11.5512 20.587 7.93174 16.1082 7.93174C11.6295 7.93174 7.98536 11.5512 7.98536 15.9999C7.98536 20.4489 11.6295 24.0683 16.1082 24.0683C18.378 24.0683 20.4322 23.1375 21.9075 21.6416C22.7763 23.0197 24.2149 23.9311 25.9399 24.0688C26.0838 24.0802 26.2274 24.0859 26.3706 24.0859C27.5394 24.0859 28.6792 23.7067 29.6196 22.9975C30.5903 22.2656 31.2969 21.2253 31.693 19.9668C31.7563 19.7658 31.8724 19.3001 31.8737 19.2939C32.1378 18.158 32.2164 17.1099 32.2164 15.9999C32.2164 7.17755 24.9902 0 16.1082 0ZM11.197 15.9999C11.197 13.3102 13.4003 11.1218 16.1082 11.1218C18.8162 11.1218 21.0193 13.3102 21.0193 15.9999C21.0193 18.6898 18.8162 20.8782 16.1082 20.8782C13.4003 20.8782 11.197 18.6898 11.197 15.9999Z" fill="#FF9E00"/><path class="mail" fill-rule="evenodd" clip-rule="evenodd" d="M82.7329 23.4784H79.7109V22.3741C78.5433 23.3884 77.0179 23.9926 75.2233 23.9926C70.9317 23.9926 67.4475 20.5371 67.4475 16.2809C67.4475 12.0247 70.9317 8.56923 75.2233 8.56923C77.0179 8.56923 78.5433 9.17341 79.7109 10.1877V9.08328H82.7329V23.4784ZM44.3706 23.4784H41.3486V9.08338H44.3706V9.88275C45.0417 9.25699 46.3048 8.57134 47.8717 8.56923C49.8842 8.56923 51.6863 9.47818 52.8838 10.9035C54.0814 9.47818 55.8835 8.56923 57.8959 8.56923C61.4927 8.56923 64.419 11.4714 64.419 15.0385V23.4784H61.397V15.0385C61.397 13.124 59.8263 11.5664 57.8959 11.5664C55.9653 11.5664 54.3949 13.124 54.3949 15.0385V23.4784H51.3728V15.0385C51.3728 13.124 49.8021 11.5664 47.8717 11.5664C45.9412 11.5664 44.3706 13.124 44.3706 15.0385V23.4784ZM86.3443 23.4784H89.3663V9.08337H86.3443V23.4784ZM92.978 23.4784H96V2.914H92.978V23.4784ZM75.2233 11.5259C77.8694 11.5259 79.9546 13.6566 79.9546 16.2809C79.9546 18.9052 77.8694 21.0358 75.2233 21.0358C72.5771 21.0358 70.4288 18.9052 70.4288 16.2809C70.4288 13.6566 72.5771 11.5259 75.2233 11.5259ZM87.8577 2.39986C89.0033 2.39986 89.9334 3.32231 89.9334 4.4584C89.9334 5.59458 89.0033 6.51704 87.8577 6.51704C86.7121 6.51704 85.782 5.59458 85.782 4.4584C85.782 3.32231 86.7121 2.39986 87.8577 2.39986Z" fill="#005FF9"/></svg>`
    smallLogo.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.17755 0 0 7.17755 0 15.9999C0 24.8224 7.17755 32 16 32C19.2436 32 22.3702 31.023 25.0125 29.2171L22.9154 26.7791C20.8651 28.098 18.4754 28.8099 16 28.8099C8.93653 28.8099 3.1901 23.0635 3.1901 15.9999C3.1901 8.93643 8.93653 3.19 16 3.19C23.0636 3.19 28.81 8.93643 28.81 15.9999C28.81 16.9301 28.7056 17.855 28.5082 18.7547C28.0976 20.4386 26.9235 20.9594 26.0214 20.8889C25.1319 20.8173 24.0752 20.1831 24.0683 18.617V15.9999C24.0683 11.5512 20.4488 7.93174 16 7.93174C11.5514 7.93174 7.93174 11.5512 7.93174 15.9999C7.93174 20.4489 11.5514 24.0683 16 24.0683C18.2546 24.0683 20.295 23.1375 21.7604 21.6416C22.6234 23.0197 24.0523 23.9311 25.7658 24.0688C25.9086 24.0802 26.0513 24.0859 26.1935 24.0859C27.3545 24.0859 28.4867 23.7067 29.4207 22.9975C30.3849 22.2656 31.0868 21.2253 31.4802 19.9668C31.5431 19.7658 31.6584 19.3001 31.6597 19.2939C31.922 18.158 32.0001 17.1099 32.0001 15.9999C32.0001 7.17755 24.8224 0 16 0ZM11.1218 15.9999C11.1218 13.3102 13.3103 11.1218 16 11.1218C18.6898 11.1218 20.8782 13.3102 20.8782 15.9999C20.8782 18.6898 18.6898 20.8782 16 20.8782C13.3103 20.8782 11.1218 18.6898 11.1218 15.9999Z" fill="#FF9E00"/></svg>`

    logoContainer.append(logo, smallLogo)
    header.append(logoContainer, filterBtn)

    return header
}

module.exports = Header

},{"../componentsUI/FilterBtn.js":4}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
const DocMail = require('../componentsUI/DocMail.js')

const InfoItem = () => {
    const container = document.createElement('div')
    const title = document.createElement('h2')
    const containerDoc = document.createElement('div')
    const mailDetails = document.createElement('div')
    const authorImgContainer = document.createElement('div')
    const authorImg = document.createElement('img')
    const authorContainer = document.createElement('div')
    const sendMail = document.createElement('div')
    const name = document.createElement('p')
    const date = document.createElement('p')
    const receiver = document.createElement('p')
    const mailText = document.createElement('p')
    const infoDocContainer = document.createElement('div')
    const infoDocAmo = document.createElement('p')
    const infoDocLoad = document.createElement('button')
    const infoDocSize = document.createElement('span')
    const categoriesMailContainer = document.createElement('div')
    const categoriesMailIcon = document.createElement('span')
    const categoriesMailText = document.createElement('p')
    const recipients = []

    container.classList.add('containerInfo')
    title.classList.add('titleInfo')
    mailDetails.classList.add('mainDetails')
    authorImgContainer.classList.add('authorImgContainer')
    authorImg.classList.add('authorImg')
    authorContainer.classList.add('authorContainer')
    sendMail.classList.add('sendMail')
    name.classList.add('name')
    date.classList.add('date')
    receiver.classList.add('receiver')
    mailText.classList.add('mailText')
    containerDoc.classList.add('containerDoc')
    infoDocContainer.classList.add('infoDocContainer')
    infoDocAmo.classList.add('infoDocAmo')
    infoDocLoad.classList.add('infoDocLoad')
    infoDocSize.classList.add('infoDocSize')
    categoriesMailContainer.classList.add('categoriesMailContainer')
    categoriesMailIcon.classList.add('categoriesMailIcon')
    categoriesMailText.classList.add('categoriesMailText')

    const mailObject = JSON.parse(localStorage.getItem('mailTo'))
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    const rt = async () => {
        const response = await fetch(`${nameLocation}/api/clients`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(mailObject?.id)
        })
        const data = await response.json()
        console.log('data', data)

        const responseStatic = await fetch(`${nameLocation}/static`)
        const dataStatic = await responseStatic.json()
        let lang = null
        if(dataStatic[0].lang === 'rus') {
            lang = 1
        } else lang = 2

        // проверяем на наличие аватара, в случае отсутствия выдаем дефолтную картинку
        if (data[0]?.author?.avatar) {
            authorImg.src = data[0]?.author?.avatar
        } else {
            authorImg.src = 'h'
        }

        // режем под формат hh:mm
        const getHours = data[0]?.date?.toString().slice(11, 13)
        const getMinutes = data[0]?.date?.toString().slice(14, 16)
        const dateDay = data[0]?.date?.toString().slice(8, 10)
        let dateMonth = data[0]?.date?.toString().slice(5, 7)

        // форматируем месяц(цифры => слова)
        if(lang === 1) {
            if (dateMonth === '00') {
                dateMonth = 'января'
            } else if (dateMonth === '01') {
                dateMonth = 'февраля'
            } else if (dateMonth === '02') {
                dateMonth = 'марта'
            } else if (dateMonth === '03') {
                dateMonth = 'апреля'
            } else if (dateMonth === '04') {
                dateMonth = 'мая'
            } else if (dateMonth === '05') {
                dateMonth = 'июня'
            } else if (dateMonth === '06') {
                dateMonth = 'июля'
            } else if (dateMonth === '07') {
                dateMonth = 'августа'
            } else if (dateMonth === '08') {
                dateMonth = 'сентября'
            } else if (dateMonth === '09') {
                dateMonth = 'октября'
            } else if (dateMonth === '10') {
                dateMonth = 'ноября'
            } else if (dateMonth === '11') {
                dateMonth = 'декабря'
            }
        } else {
            if (dateMonth === '00') {
                dateMonth = 'january'
            } else if (dateMonth === '01') {
                dateMonth = 'February'
            } else if (dateMonth === '02') {
                dateMonth = 'Martha'
            } else if (dateMonth === '03') {
                dateMonth = 'April'
            } else if (dateMonth === '04') {
                dateMonth = 'May'
            } else if (dateMonth === '05') {
                dateMonth = 'June'
            } else if (dateMonth === '06') {
                dateMonth = 'July'
            } else if (dateMonth === '07') {
                dateMonth = 'August'
            } else if (dateMonth === '08') {
                dateMonth = 'September'
            } else if (dateMonth === '09') {
                dateMonth = 'October'
            } else if (dateMonth === '10') {
                dateMonth = 'November'
            } else if (dateMonth === '11') {
                dateMonth = 'December'
            }
        }

        // переводим русский язык в язык svg
        if (data[0]?.flag) {
            if (data[0]?.flag === "Заказы") {
                categoriesMailIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H5C5.48884 3 5.90603 3.35341 5.98639 3.8356L6.18046 5H17C17.5523 5 18 5.44772 18 6V9.85094C18 11.1174 17.0875 12.1996 15.8393 12.4136L6.96492 13.9352C6.91434 13.9438 6.864 13.9485 6.81422 13.9495C6.76603 13.9654 6.71601 13.9778 6.6644 13.9864C6.11963 14.0772 5.6044 13.7092 5.51361 13.1644L4.15287 5H3C2.44772 5 2 4.55228 2 4ZM7.32127 11.8449L6.51379 7H16V9.85094C16 10.1432 15.7894 10.3929 15.5014 10.4423L7.32127 11.8449ZM9 16.5C9 17.3284 8.32843 18 7.5 18C6.67157 18 6 17.3284 6 16.5C6 15.6716 6.67157 15 7.5 15C8.32843 15 9 15.6716 9 16.5ZM16 16.5C16 17.3284 15.3284 18 14.5 18C13.6716 18 13 17.3284 13 16.5C13 15.6716 13.6716 15 14.5 15C15.3284 15 16 15.6716 16 16.5Z" fill="#F94CA3"/></svg>`;
            } else if (data[0]?.flag === "Финансы") {
                categoriesMailIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3H11C13.4853 3 15.5 5.01472 15.5 7.5C15.5 9.98528 13.4853 12 11 12H7.5V13H12.5C13.0523 13 13.5 13.4477 13.5 14C13.5 14.5523 13.0523 15 12.5 15H7.5V16C7.5 16.5523 7.05228 17 6.5 17C5.94772 17 5.5 16.5523 5.5 16V15C4.94772 15 4.5 14.5523 4.5 14C4.5 13.4477 4.94772 13 5.5 13V12C4.94772 12 4.5 11.5523 4.5 11C4.5 10.4477 4.94772 10 5.5 10V4C5.5 3.44772 5.94772 3 6.5 3ZM7.5 10H11C12.3807 10 13.5 8.88071 13.5 7.5C13.5 6.11929 12.3807 5 11 5H7.5V10Z" fill="#24C780"/></svg>`;
            } else if (data[0]?.flag === "Регистрации") {
                categoriesMailIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6569 4.92897C12.4853 3.7574 10.5858 3.7574 9.41425 4.92897L7.29293 7.05029C6.90241 7.44082 6.90241 8.07398 7.29293 8.46451L8.00004 9.17161C8.18758 9.35915 8.29293 9.6135 8.29293 9.87872C8.29293 10.1439 8.18758 10.3983 8.00004 10.5858L4.05029 14.5356V15.9498H5.62394L9.39982 12.0148C9.58592 11.8208 9.84226 11.71 10.111 11.7072C10.3798 11.7044 10.6384 11.81 10.8285 12L11.5356 12.7071C11.9261 13.0977 12.5593 13.0977 12.9498 12.7071L15.0711 10.5858C16.2427 9.41425 16.2427 7.51476 15.0711 6.34319L13.6569 4.92897ZM8.00004 3.51476C9.95266 1.56214 13.1185 1.56214 15.0711 3.51476L16.4853 4.92897C18.4379 6.88159 18.4379 10.0474 16.4853 12L14.364 14.1214C13.1973 15.288 11.3089 15.2929 10.1362 14.1361L6.77184 17.6422C6.58326 17.8387 6.32267 17.9498 6.05029 17.9498H3.05029C2.49801 17.9498 2.05029 17.5021 2.05029 16.9498V14.1214C2.05029 13.8561 2.15565 13.6018 2.34319 13.4143L5.87872 9.87872C4.70715 8.70715 4.70715 6.80765 5.87872 5.63608L8.00004 3.51476ZM10.8284 6.34326C11.219 5.95273 11.8521 5.95273 12.2426 6.34326L13.6569 7.75747C14.0474 8.14799 14.0474 8.78116 13.6569 9.17168C13.2663 9.56221 12.6332 9.56221 12.2426 9.17168L10.8284 7.75747C10.4379 7.36694 10.4379 6.73378 10.8284 6.34326Z" fill="#EEAC2C"/></svg>`;
            } else if (data[0]?.flag === "Путешествия") {
                categoriesMailIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8647 2.89284C14.0363 1.72127 15.9357 1.72127 17.1073 2.89284C18.2789 4.06441 18.2789 5.96391 17.1073 7.13548L14.7171 9.52574L16.7556 14.0106C17.1244 14.8219 16.9512 15.7769 16.321 16.4071C15.449 17.2791 14.022 17.2346 13.2061 16.3098L10.7343 13.5085L10.1294 14.1134L10.3527 15.3787C10.4786 16.0925 10.2484 16.8228 9.73588 17.3354C8.71405 18.3572 7.004 18.1467 6.26051 16.9075L5.07256 14.9276L3.09265 13.7397C1.8535 12.9962 1.64298 11.2861 2.66481 10.2643C3.17734 9.75175 3.9077 9.52153 4.62149 9.64749L5.88675 9.87077L6.49167 9.26585L3.69038 6.79413C2.76564 5.97818 2.72109 4.5512 3.59313 3.67917C4.22332 3.04898 5.17831 2.8758 5.98965 3.24459L10.4744 5.28312L12.8647 2.89284ZM15.6931 4.30705C15.3026 3.91653 14.6694 3.91653 14.2789 4.30705L11.3986 7.18736C11.1038 7.48211 10.6572 7.56311 10.2777 7.39062L5.16204 5.06533C5.10967 5.04152 5.04802 5.0527 5.00734 5.09338C4.95105 5.14967 4.95393 5.24178 5.01362 5.29445L8.61307 8.47044C8.82007 8.65308 8.94235 8.91316 8.95097 9.18908C8.95958 9.46499 8.85375 9.73219 8.65856 9.92739L6.9328 11.6531C6.70206 11.8839 6.37326 11.9875 6.05191 11.9308L4.27392 11.6171C4.20282 11.6045 4.13007 11.6274 4.07902 11.6785C3.97724 11.7803 3.99821 11.9506 4.12164 12.0247L6.31593 13.3412C6.45668 13.4257 6.57447 13.5435 6.65892 13.6842L7.9755 15.8785C8.04955 16.002 8.21989 16.0229 8.32167 15.9211C8.37272 15.8701 8.39565 15.7973 8.3831 15.7262L8.06934 13.9483C8.01263 13.6269 8.11628 13.2981 8.34702 13.0674L10.0728 11.3416C10.268 11.1464 10.5352 11.0406 10.8111 11.0492C11.087 11.0578 11.3471 11.1801 11.5297 11.3871L14.7058 14.9866C14.7584 15.0463 14.8505 15.0492 14.9068 14.9929C14.9475 14.9522 14.9587 14.8905 14.9349 14.8382L12.6096 9.72246C12.4371 9.34298 12.5181 8.8963 12.8128 8.60155L15.6931 5.72127C16.0836 5.33074 16.0836 4.69758 15.6931 4.30705Z" fill="#C15DF3"/></svg>`;
            } else if (data[0]?.flag === "Билеты") {
                categoriesMailIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.18017 3 2 4.70069 2 6.4C2 7.0099 2.18585 7.55632 2.36369 7.98928C2.43833 8.17099 2.52041 8.35275 2.59374 8.51511L2.63557 8.60785C2.72255 8.80124 2.79544 8.96812 2.85411 9.12689C2.94271 9.36664 3 9.66561 3 10C3 10.3344 2.94271 10.6334 2.85411 10.8731C2.79544 11.0319 2.72255 11.1988 2.63557 11.3921L2.59374 11.4849L2.59374 11.4849C2.52041 11.6473 2.43833 11.829 2.36369 12.0107C2.18585 12.4437 2 12.9901 2 13.6C2 15.2993 3.18017 17 5 17H15C16.8198 17 18 15.2993 18 13.6C18 12.9901 17.8142 12.4437 17.6363 12.0107C17.5617 11.829 17.4796 11.6473 17.4063 11.4849L17.4063 11.4849L17.3644 11.3921C17.2774 11.1988 17.2046 11.0319 17.1459 10.8731C17.0573 10.6334 17 10.3344 17 10C17 9.66561 17.0573 9.36664 17.1459 9.12688C17.2046 8.96812 17.2774 8.80124 17.3644 8.60785L17.4063 8.51512C17.4796 8.35276 17.5617 8.17099 17.6363 7.98928C17.8142 7.55632 18 7.0099 18 6.4C18 4.70069 16.8198 3 15 3H5ZM4 6.4C4 5.44834 4.61069 5 5 5L11 5V6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6V5L15 5C15.3893 5 16 5.44834 16 6.4C16 6.61603 15.9329 6.87237 15.7863 7.22938C15.7259 7.37632 15.6606 7.52104 15.5875 7.683L15.5404 7.78745C15.4521 7.98393 15.3544 8.20502 15.2699 8.43362C15.0943 8.90873 15 9.44375 15 10C15 10.5562 15.0943 11.0913 15.2699 11.5664C15.3544 11.795 15.4521 12.0161 15.5404 12.2126L15.5875 12.317L15.5875 12.317C15.6606 12.479 15.7259 12.6237 15.7863 12.7706C15.9329 13.1276 16 13.384 16 13.6C16 14.5517 15.3893 15 15 15H13V14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V15H5C4.61069 15 4 14.5517 4 13.6C4 13.384 4.06706 13.1276 4.2137 12.7706C4.27406 12.6237 4.33938 12.479 4.41248 12.317L4.45956 12.2126C4.54793 12.0161 4.64563 11.795 4.73011 11.5664C4.90569 11.0913 5 10.5562 5 10C5 9.44375 4.90569 8.90873 4.73011 8.43362C4.64563 8.20503 4.54793 7.98393 4.45956 7.78745L4.41247 7.68301C4.33937 7.52104 4.27406 7.37633 4.2137 7.22938C4.06706 6.87237 4 6.61603 4 6.4ZM12 8C11.4477 8 11 8.44772 11 9V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V9C13 8.44772 12.5523 8 12 8Z" fill="#3BBAFE"/></svg>`;
            } else if (data[0]?.flag === "Штрафы и налоги") {
                categoriesMailIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 3C11.0001 3.55228 10.5523 4 10.0001 4C9.44778 4 9.00006 3.55228 9.00006 3C9.00006 2.44772 9.44778 2 10.0001 2C10.5523 2 11.0001 2.44772 11.0001 3ZM10.9334 12.8626C10.8575 13.4097 11.2395 13.9146 11.7865 13.9905C12.6477 14.1099 12.9201 14.5566 12.9822 14.8302C13.0615 15.1793 12.8944 15.2588 12.8743 15.2668L10.0001 15.9705L7.12585 15.2668C7.10573 15.2588 6.93867 15.1793 7.01793 14.8302C7.08004 14.5566 7.35247 14.1099 8.2136 13.9905C8.76065 13.9146 9.14262 13.4097 9.06675 12.8626C8.99273 12.3289 8.51026 11.9523 7.97876 12.0047C7.94651 12.0016 7.91381 12 7.88074 12C7.72797 12 7.29159 11.9567 6.74305 11.8036C6.20168 11.6526 5.61717 11.4126 5.12956 11.0608C4.64922 10.7143 4.28835 10.2795 4.11596 9.72485C3.94406 9.1717 3.92386 8.38439 4.33265 7.26634C4.39201 7.10399 4.40765 6.93097 4.38073 6.76389L5.44571 7.41009C5.66503 7.54337 5.78342 7.66773 5.85628 7.79545C5.92953 7.92386 6.00007 8.13175 6.00007 8.5C6.00007 9.05228 6.44779 9.5 7.00007 9.5C7.55235 9.5 8.00007 9.05228 8.00007 8.5C8.00007 7.86825 7.8763 7.30022 7.5935 6.80446C7.31035 6.30809 6.91063 5.95987 6.48321 5.70024L3.92021 4.14508C3.68704 4.00359 3.4062 3.96349 3.14274 4.03405C2.87929 4.10462 2.65609 4.27973 2.52485 4.51882C2.09855 5.29543 2.05268 6.18747 2.32325 6.96481C1.92472 8.23368 1.90551 9.35123 2.20607 10.3184C2.53621 11.3807 3.21651 12.1468 3.95944 12.6828C4.44009 13.0296 4.95711 13.2881 5.45012 13.4794C5.26882 13.7605 5.14025 14.0672 5.06757 14.3874C4.82408 15.4598 5.25961 16.8379 6.61069 17.1995L6.63143 17.2048L9.74324 17.9667C9.82601 17.9887 9.91226 18.0003 10.0001 18.0002C10.0879 18.0003 10.1741 17.9887 10.2569 17.9667L13.3687 17.2048L13.3894 17.1995C14.7405 16.8379 15.176 15.4598 14.9326 14.3874C14.8566 14.0529 14.7197 13.7332 14.5254 13.4419C14.9896 13.2547 15.4714 13.0074 15.9214 12.6828C16.6643 12.1468 17.3446 11.3807 17.6747 10.3184C17.9753 9.35123 17.9561 8.23368 17.5575 6.96481C17.8281 6.18747 17.7822 5.29543 17.3559 4.51882C17.2247 4.27973 17.0015 4.10462 16.7381 4.03405C16.4746 3.96349 16.1938 4.00359 15.9606 4.14508L13.3976 5.70024C12.9702 5.95987 12.5705 6.30809 12.2873 6.80446C12.0045 7.30022 11.8807 7.86825 11.8807 8.5C11.8807 9.05228 12.3284 9.5 12.8807 9.5C13.433 9.5 13.8807 9.05228 13.8807 8.5C13.8807 8.13175 13.9513 7.92386 14.0245 7.79545C14.0974 7.66773 14.2158 7.54337 14.4351 7.41009L15.5001 6.76389C15.4732 6.93097 15.4888 7.10399 15.5481 7.26634C15.9569 8.38439 15.9367 9.1717 15.7648 9.72485C15.5925 10.2795 15.2316 10.7143 14.7512 11.0608C14.2636 11.4126 13.6791 11.6526 13.1377 11.8036C12.5892 11.9567 12.1528 12 12.0001 12C11.9876 12 11.9752 12.0002 11.9628 12.0007C11.4549 11.9803 11.0047 12.3486 10.9334 12.8626ZM7.60564 5.05276C7.85263 4.55878 8.4533 4.35856 8.94728 4.60555C9.29878 4.7813 9.67197 4.98149 10.0001 5.24827C10.3282 4.98149 10.7013 4.7813 11.0528 4.60555C11.5468 4.35856 12.1475 4.55878 12.3945 5.05276C12.6415 5.54674 12.4413 6.14741 11.9473 6.3944C11.4498 6.64314 11.2467 6.78964 11.1427 6.91417C11.0816 6.98731 11.0007 7.11281 11.0001 7.49554C11.0001 7.49702 11.0001 7.4985 11.0001 7.49998C11.0001 8.05226 10.5524 8.49997 10.0001 8.49997C9.96555 8.49997 9.93144 8.49823 9.89782 8.49481C9.69721 8.47444 9.51413 8.39477 9.36638 8.2736C9.14275 8.09021 9.00006 7.81176 9.00006 7.49998C9.00006 7.4985 9.00006 7.49702 9.00006 7.49554C8.99944 7.11281 8.91852 6.98731 8.85745 6.91417C8.75348 6.78964 8.55033 6.64314 8.05285 6.3944C7.55887 6.14741 7.35865 5.54674 7.60564 5.05276Z" fill="#EE3C3C"/></svg>`;
            }
        }

        for (let i = 0; i < data[0]?.to?.length; i++) {
            recipients.unshift(` ${data[0].to[i].name} ${data[0].to[i].surname}`)
        }

        recipients.join(', ')

        // Преобразуем объект картинок в массив
        if(data[0]?.doc) {
            const imageDocBase = Object.values(data[0]?.doc);

            console.log(imageDocBase)
    
            for(let i = 0; i < imageDocBase.length; i++) {
                containerDoc.append(DocMail(imageDocBase[i]))
            }

            if(imageDocBase.length > 1) {
                if(lang === 2) {
                    infoDocAmo.textContent = `${imageDocBase.length} ${dataStatic[lang][3].file} + 's`
                } else {
                    if(imageDocBase.length < 5) {
                        infoDocAmo.textContent = `${imageDocBase.length} ${dataStatic[lang][3].file} + 'а`
                    } else {
                        infoDocAmo.textContent = `${imageDocBase.length} ${dataStatic[lang][3].file} + 'ов`
                    }
                }
            } else {
                infoDocAmo.textContent = `${imageDocBase.length} ${dataStatic[lang][3].file}`
            }
            infoDocSize.textContent = `(5мб)`
            infoDocLoad.textContent = dataStatic[lang][3].download
        }

        title.textContent = data[0]?.title
        name.textContent = `${data[0]?.author?.name}` + ' ' + `${data[0]?.author?.surname}`
        date.textContent = `${dateDay} ${dateMonth}, ${getHours}:${getMinutes}`
        receiver.textContent = `${dataStatic[lang][3].to}: ${recipients}`
        mailText.textContent = data[0]?.text
        categoriesMailText.textContent = data[0]?.flag

        authorImgContainer.append(authorImg)
        sendMail.append(name, date)
        authorContainer.append(sendMail, receiver)
        mailDetails.append(authorImgContainer, authorContainer)
        container.append(title, mailDetails, containerDoc)

        if (data[0]?.flag !== undefined) {
            categoriesMailContainer.append(categoriesMailIcon, categoriesMailText)
            container.append(categoriesMailContainer)
        }

        infoDocContainer.append(infoDocAmo, infoDocLoad, infoDocSize)
        container.append(infoDocContainer)

        container.append(mailText)
    }

    rt()

    return container
}

module.exports = InfoItem

},{"../componentsUI/DocMail.js":3}],13:[function(require,module,exports){
InfoItem = require('./InfoItem.js')
ToolImg = require('../componentsUI/ToolImg.js')

const ItemLetters = (authorName, date, title, text, to, read, categFlag, bookmarkFlag, importantFlag, id, doc) => {
    const containerItem = document.createElement('a')
    const active = document.createElement('div')
    const avatar = document.createElement('img')
    const checkMail = document.createElement('p')
    const checkClickMail = document.createElement('span')
    const markMailContainer = document.createElement('div')
    const bookmark = document.createElement('p')
    const important = document.createElement('p')
    const author = document.createElement('div')
    const containerInfoMailText = document.createElement('div')
    const titleLetters = document.createElement('p')
    const textLetters = document.createElement('p')
    const timeSent = document.createElement('p')
    const dlcMailContainer = document.createElement('div')
    const flagMail = document.createElement('p')
    const flagDoc = document.createElement('div')
    const tooltipFlagDoc = document.createElement('div')
    const getHours = date?.toString().slice(11, 13)
    const getMinutes = date?.toString().slice(14, 16)
    let flagActiveAttach = false

    containerItem.classList.add('containerItem')
    avatar.classList.add('avatar')
    checkMail.classList.add('checkMail')
    checkClickMail.classList.add('checkClickMail')
    author.classList.add('author')
    containerInfoMailText.classList.add('containerInfoMailText')
    titleLetters.classList.add('titleLetters')
    textLetters.classList.add('textLetters')
    timeSent.classList.add('timeSent')
    dlcMailContainer.classList.add('dlcMailContainer')
    markMailContainer.classList.add('markMailContainer')
    flagDoc.classList.add('flagDoc')
    tooltipFlagDoc.classList.add('tooltipFlagDoc')
    bookmark.classList.add('bookmark')
    important.classList.add('important')

    // проверяем флаг чтения, выдаем соответствубщие стили
    if (read) {
        active.classList.add('active')
    } else {
        active.classList.add('noReadContainerItem')
        author.classList.add('activeRead')
        titleLetters.classList.add('activeRead')
    }

    let dateMonth = date?.toString().slice(5, 7)
    let dateDay = date?.toString().slice(8, 10)
    let dateYear = date?.toString().slice(0, 4)
    let dateHours = date?.toString().slice(11, 13) // часы
    let dateMinutes = date?.toString().slice(14, 16) // минуты
    let monthNow = new Date().getMonth()
    let yearNow = new Date().getFullYear()
    let dayNow = new Date().getDate()

    let fullDate = dateYear + '-' + dateMonth + '-' + dateDay
    let fullDateNow = yearNow + '-' + monthNow + '-' + dayNow

    // форматируем месяц(цифры => слова)
    if (dateMonth === '00') {
        dateMonth = 'янв'
        monthNow = 'янв'
    } else if (dateMonth === '01') {
        dateMonth = 'фев'
        monthNow = 'фев'
    } else if (dateMonth === '02') {
        dateMonth = 'мар'
        monthNow = 'мар'
    } else if (dateMonth === '03') {
        dateMonth = 'апр'
        monthNow = 'апр'
    } else if (dateMonth === '04') {
        dateMonth = 'май'
        monthNow = 'май'
    } else if (dateMonth === '05') {
        dateMonth = 'июн'
        monthNow = 'июн'
    } else if (dateMonth === '06') {
        dateMonth = 'июл'
        monthNow = 'июл'
    } else if (dateMonth === '07') {
        dateMonth = 'авг'
        monthNow = 'авг'
    } else if (dateMonth === '08') {
        dateMonth = 'сен'
        monthNow = 'сен'
    } else if (dateMonth === '09') {
        dateMonth = 'окт'
        monthNow = 'окт'
    } else if (dateMonth === '10') {
        dateMonth = 'ноя'
        monthNow = 'ноя'
    } else if (dateMonth === '11') {
        dateMonth = 'дек'
        monthNow = 'дек'
    }

    const ruDate = new Date(Date.parse(date)).toLocaleString('ru-RU')
    const engDate = new Date(Date.parse(date)).toLocaleString('en-GB')
    const locationUserDomains = window.location.href.lastIndexOf('/')
    const nameLocation = window.location.href.slice(0, locationUserDomains)

    if (dateYear == yearNow && dateMonth == monthNow && dateDay == dayNow) {
        timeSent.textContent = `${dateHours}:${dateMinutes}`
    } else if (dateYear == yearNow && dateMonth == monthNow) {
        timeSent.textContent = `${dateDay} ${dateMonth}`
    } else {
        const getStatic = async () => {
            const response = await fetch(`${nameLocation}/static`)
            const data = await response.json()
            if (data[0].lang === 'rus') {
                const dayMonth = ruDate.substring(0, 10).substring(0, 6)
                const year = ruDate.substring(8, 10)
                timeSent.textContent = dayMonth + year
            } else {
                const dayMonth = engDate.substring(0, 10).substring(0, 6)
                const year = engDate.substring(8, 10)
                timeSent.textContent = dayMonth + year
            }
        }
        getStatic()
    }
    if (fullDate === fullDateNow && dateMonth === monthNow && dateDay === dayNow) {
        timeSent.textContent = `${getHours}:${getMinutes}`
    }

    // проверяем на наличие аватара, в случае отсутствия выдаем дефолтную картинку
    if (authorName?.avatar) {
        avatar.src = authorName.avatar
    } else {
        avatar.src = 'd'
    }
    avatar.alt = 'author'

    // переводим русский язык в язык svg
    if (categFlag === "Заказы") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H5C5.48884 3 5.90603 3.35341 5.98639 3.8356L6.18046 5H17C17.5523 5 18 5.44772 18 6V9.85094C18 11.1174 17.0875 12.1996 15.8393 12.4136L6.96492 13.9352C6.91434 13.9438 6.864 13.9485 6.81422 13.9495C6.76603 13.9654 6.71601 13.9778 6.6644 13.9864C6.11963 14.0772 5.6044 13.7092 5.51361 13.1644L4.15287 5H3C2.44772 5 2 4.55228 2 4ZM7.32127 11.8449L6.51379 7H16V9.85094C16 10.1432 15.7894 10.3929 15.5014 10.4423L7.32127 11.8449ZM9 16.5C9 17.3284 8.32843 18 7.5 18C6.67157 18 6 17.3284 6 16.5C6 15.6716 6.67157 15 7.5 15C8.32843 15 9 15.6716 9 16.5ZM16 16.5C16 17.3284 15.3284 18 14.5 18C13.6716 18 13 17.3284 13 16.5C13 15.6716 13.6716 15 14.5 15C15.3284 15 16 15.6716 16 16.5Z" fill="#F94CA3"/></svg>`;
    } else if (categFlag === "Финансы") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3H11C13.4853 3 15.5 5.01472 15.5 7.5C15.5 9.98528 13.4853 12 11 12H7.5V13H12.5C13.0523 13 13.5 13.4477 13.5 14C13.5 14.5523 13.0523 15 12.5 15H7.5V16C7.5 16.5523 7.05228 17 6.5 17C5.94772 17 5.5 16.5523 5.5 16V15C4.94772 15 4.5 14.5523 4.5 14C4.5 13.4477 4.94772 13 5.5 13V12C4.94772 12 4.5 11.5523 4.5 11C4.5 10.4477 4.94772 10 5.5 10V4C5.5 3.44772 5.94772 3 6.5 3ZM7.5 10H11C12.3807 10 13.5 8.88071 13.5 7.5C13.5 6.11929 12.3807 5 11 5H7.5V10Z" fill="#24C780"/></svg>`;
    } else if (categFlag === "Регистрации") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6569 4.92897C12.4853 3.7574 10.5858 3.7574 9.41425 4.92897L7.29293 7.05029C6.90241 7.44082 6.90241 8.07398 7.29293 8.46451L8.00004 9.17161C8.18758 9.35915 8.29293 9.6135 8.29293 9.87872C8.29293 10.1439 8.18758 10.3983 8.00004 10.5858L4.05029 14.5356V15.9498H5.62394L9.39982 12.0148C9.58592 11.8208 9.84226 11.71 10.111 11.7072C10.3798 11.7044 10.6384 11.81 10.8285 12L11.5356 12.7071C11.9261 13.0977 12.5593 13.0977 12.9498 12.7071L15.0711 10.5858C16.2427 9.41425 16.2427 7.51476 15.0711 6.34319L13.6569 4.92897ZM8.00004 3.51476C9.95266 1.56214 13.1185 1.56214 15.0711 3.51476L16.4853 4.92897C18.4379 6.88159 18.4379 10.0474 16.4853 12L14.364 14.1214C13.1973 15.288 11.3089 15.2929 10.1362 14.1361L6.77184 17.6422C6.58326 17.8387 6.32267 17.9498 6.05029 17.9498H3.05029C2.49801 17.9498 2.05029 17.5021 2.05029 16.9498V14.1214C2.05029 13.8561 2.15565 13.6018 2.34319 13.4143L5.87872 9.87872C4.70715 8.70715 4.70715 6.80765 5.87872 5.63608L8.00004 3.51476ZM10.8284 6.34326C11.219 5.95273 11.8521 5.95273 12.2426 6.34326L13.6569 7.75747C14.0474 8.14799 14.0474 8.78116 13.6569 9.17168C13.2663 9.56221 12.6332 9.56221 12.2426 9.17168L10.8284 7.75747C10.4379 7.36694 10.4379 6.73378 10.8284 6.34326Z" fill="#EEAC2C"/></svg>`;
    } else if (categFlag === "Путешествия") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8647 2.89284C14.0363 1.72127 15.9357 1.72127 17.1073 2.89284C18.2789 4.06441 18.2789 5.96391 17.1073 7.13548L14.7171 9.52574L16.7556 14.0106C17.1244 14.8219 16.9512 15.7769 16.321 16.4071C15.449 17.2791 14.022 17.2346 13.2061 16.3098L10.7343 13.5085L10.1294 14.1134L10.3527 15.3787C10.4786 16.0925 10.2484 16.8228 9.73588 17.3354C8.71405 18.3572 7.004 18.1467 6.26051 16.9075L5.07256 14.9276L3.09265 13.7397C1.8535 12.9962 1.64298 11.2861 2.66481 10.2643C3.17734 9.75175 3.9077 9.52153 4.62149 9.64749L5.88675 9.87077L6.49167 9.26585L3.69038 6.79413C2.76564 5.97818 2.72109 4.5512 3.59313 3.67917C4.22332 3.04898 5.17831 2.8758 5.98965 3.24459L10.4744 5.28312L12.8647 2.89284ZM15.6931 4.30705C15.3026 3.91653 14.6694 3.91653 14.2789 4.30705L11.3986 7.18736C11.1038 7.48211 10.6572 7.56311 10.2777 7.39062L5.16204 5.06533C5.10967 5.04152 5.04802 5.0527 5.00734 5.09338C4.95105 5.14967 4.95393 5.24178 5.01362 5.29445L8.61307 8.47044C8.82007 8.65308 8.94235 8.91316 8.95097 9.18908C8.95958 9.46499 8.85375 9.73219 8.65856 9.92739L6.9328 11.6531C6.70206 11.8839 6.37326 11.9875 6.05191 11.9308L4.27392 11.6171C4.20282 11.6045 4.13007 11.6274 4.07902 11.6785C3.97724 11.7803 3.99821 11.9506 4.12164 12.0247L6.31593 13.3412C6.45668 13.4257 6.57447 13.5435 6.65892 13.6842L7.9755 15.8785C8.04955 16.002 8.21989 16.0229 8.32167 15.9211C8.37272 15.8701 8.39565 15.7973 8.3831 15.7262L8.06934 13.9483C8.01263 13.6269 8.11628 13.2981 8.34702 13.0674L10.0728 11.3416C10.268 11.1464 10.5352 11.0406 10.8111 11.0492C11.087 11.0578 11.3471 11.1801 11.5297 11.3871L14.7058 14.9866C14.7584 15.0463 14.8505 15.0492 14.9068 14.9929C14.9475 14.9522 14.9587 14.8905 14.9349 14.8382L12.6096 9.72246C12.4371 9.34298 12.5181 8.8963 12.8128 8.60155L15.6931 5.72127C16.0836 5.33074 16.0836 4.69758 15.6931 4.30705Z" fill="#C15DF3"/></svg>`;
    } else if (categFlag === "Билеты") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.18017 3 2 4.70069 2 6.4C2 7.0099 2.18585 7.55632 2.36369 7.98928C2.43833 8.17099 2.52041 8.35275 2.59374 8.51511L2.63557 8.60785C2.72255 8.80124 2.79544 8.96812 2.85411 9.12689C2.94271 9.36664 3 9.66561 3 10C3 10.3344 2.94271 10.6334 2.85411 10.8731C2.79544 11.0319 2.72255 11.1988 2.63557 11.3921L2.59374 11.4849L2.59374 11.4849C2.52041 11.6473 2.43833 11.829 2.36369 12.0107C2.18585 12.4437 2 12.9901 2 13.6C2 15.2993 3.18017 17 5 17H15C16.8198 17 18 15.2993 18 13.6C18 12.9901 17.8142 12.4437 17.6363 12.0107C17.5617 11.829 17.4796 11.6473 17.4063 11.4849L17.4063 11.4849L17.3644 11.3921C17.2774 11.1988 17.2046 11.0319 17.1459 10.8731C17.0573 10.6334 17 10.3344 17 10C17 9.66561 17.0573 9.36664 17.1459 9.12688C17.2046 8.96812 17.2774 8.80124 17.3644 8.60785L17.4063 8.51512C17.4796 8.35276 17.5617 8.17099 17.6363 7.98928C17.8142 7.55632 18 7.0099 18 6.4C18 4.70069 16.8198 3 15 3H5ZM4 6.4C4 5.44834 4.61069 5 5 5L11 5V6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6V5L15 5C15.3893 5 16 5.44834 16 6.4C16 6.61603 15.9329 6.87237 15.7863 7.22938C15.7259 7.37632 15.6606 7.52104 15.5875 7.683L15.5404 7.78745C15.4521 7.98393 15.3544 8.20502 15.2699 8.43362C15.0943 8.90873 15 9.44375 15 10C15 10.5562 15.0943 11.0913 15.2699 11.5664C15.3544 11.795 15.4521 12.0161 15.5404 12.2126L15.5875 12.317L15.5875 12.317C15.6606 12.479 15.7259 12.6237 15.7863 12.7706C15.9329 13.1276 16 13.384 16 13.6C16 14.5517 15.3893 15 15 15H13V14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V15H5C4.61069 15 4 14.5517 4 13.6C4 13.384 4.06706 13.1276 4.2137 12.7706C4.27406 12.6237 4.33938 12.479 4.41248 12.317L4.45956 12.2126C4.54793 12.0161 4.64563 11.795 4.73011 11.5664C4.90569 11.0913 5 10.5562 5 10C5 9.44375 4.90569 8.90873 4.73011 8.43362C4.64563 8.20503 4.54793 7.98393 4.45956 7.78745L4.41247 7.68301C4.33937 7.52104 4.27406 7.37633 4.2137 7.22938C4.06706 6.87237 4 6.61603 4 6.4ZM12 8C11.4477 8 11 8.44772 11 9V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V9C13 8.44772 12.5523 8 12 8Z" fill="#3BBAFE"/></svg>`;
    } else if (categFlag === "Штрафы и налоги") {
        flagMail.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 3C11.0001 3.55228 10.5523 4 10.0001 4C9.44778 4 9.00006 3.55228 9.00006 3C9.00006 2.44772 9.44778 2 10.0001 2C10.5523 2 11.0001 2.44772 11.0001 3ZM10.9334 12.8626C10.8575 13.4097 11.2395 13.9146 11.7865 13.9905C12.6477 14.1099 12.9201 14.5566 12.9822 14.8302C13.0615 15.1793 12.8944 15.2588 12.8743 15.2668L10.0001 15.9705L7.12585 15.2668C7.10573 15.2588 6.93867 15.1793 7.01793 14.8302C7.08004 14.5566 7.35247 14.1099 8.2136 13.9905C8.76065 13.9146 9.14262 13.4097 9.06675 12.8626C8.99273 12.3289 8.51026 11.9523 7.97876 12.0047C7.94651 12.0016 7.91381 12 7.88074 12C7.72797 12 7.29159 11.9567 6.74305 11.8036C6.20168 11.6526 5.61717 11.4126 5.12956 11.0608C4.64922 10.7143 4.28835 10.2795 4.11596 9.72485C3.94406 9.1717 3.92386 8.38439 4.33265 7.26634C4.39201 7.10399 4.40765 6.93097 4.38073 6.76389L5.44571 7.41009C5.66503 7.54337 5.78342 7.66773 5.85628 7.79545C5.92953 7.92386 6.00007 8.13175 6.00007 8.5C6.00007 9.05228 6.44779 9.5 7.00007 9.5C7.55235 9.5 8.00007 9.05228 8.00007 8.5C8.00007 7.86825 7.8763 7.30022 7.5935 6.80446C7.31035 6.30809 6.91063 5.95987 6.48321 5.70024L3.92021 4.14508C3.68704 4.00359 3.4062 3.96349 3.14274 4.03405C2.87929 4.10462 2.65609 4.27973 2.52485 4.51882C2.09855 5.29543 2.05268 6.18747 2.32325 6.96481C1.92472 8.23368 1.90551 9.35123 2.20607 10.3184C2.53621 11.3807 3.21651 12.1468 3.95944 12.6828C4.44009 13.0296 4.95711 13.2881 5.45012 13.4794C5.26882 13.7605 5.14025 14.0672 5.06757 14.3874C4.82408 15.4598 5.25961 16.8379 6.61069 17.1995L6.63143 17.2048L9.74324 17.9667C9.82601 17.9887 9.91226 18.0003 10.0001 18.0002C10.0879 18.0003 10.1741 17.9887 10.2569 17.9667L13.3687 17.2048L13.3894 17.1995C14.7405 16.8379 15.176 15.4598 14.9326 14.3874C14.8566 14.0529 14.7197 13.7332 14.5254 13.4419C14.9896 13.2547 15.4714 13.0074 15.9214 12.6828C16.6643 12.1468 17.3446 11.3807 17.6747 10.3184C17.9753 9.35123 17.9561 8.23368 17.5575 6.96481C17.8281 6.18747 17.7822 5.29543 17.3559 4.51882C17.2247 4.27973 17.0015 4.10462 16.7381 4.03405C16.4746 3.96349 16.1938 4.00359 15.9606 4.14508L13.3976 5.70024C12.9702 5.95987 12.5705 6.30809 12.2873 6.80446C12.0045 7.30022 11.8807 7.86825 11.8807 8.5C11.8807 9.05228 12.3284 9.5 12.8807 9.5C13.433 9.5 13.8807 9.05228 13.8807 8.5C13.8807 8.13175 13.9513 7.92386 14.0245 7.79545C14.0974 7.66773 14.2158 7.54337 14.4351 7.41009L15.5001 6.76389C15.4732 6.93097 15.4888 7.10399 15.5481 7.26634C15.9569 8.38439 15.9367 9.1717 15.7648 9.72485C15.5925 10.2795 15.2316 10.7143 14.7512 11.0608C14.2636 11.4126 13.6791 11.6526 13.1377 11.8036C12.5892 11.9567 12.1528 12 12.0001 12C11.9876 12 11.9752 12.0002 11.9628 12.0007C11.4549 11.9803 11.0047 12.3486 10.9334 12.8626ZM7.60564 5.05276C7.85263 4.55878 8.4533 4.35856 8.94728 4.60555C9.29878 4.7813 9.67197 4.98149 10.0001 5.24827C10.3282 4.98149 10.7013 4.7813 11.0528 4.60555C11.5468 4.35856 12.1475 4.55878 12.3945 5.05276C12.6415 5.54674 12.4413 6.14741 11.9473 6.3944C11.4498 6.64314 11.2467 6.78964 11.1427 6.91417C11.0816 6.98731 11.0007 7.11281 11.0001 7.49554C11.0001 7.49702 11.0001 7.4985 11.0001 7.49998C11.0001 8.05226 10.5524 8.49997 10.0001 8.49997C9.96555 8.49997 9.93144 8.49823 9.89782 8.49481C9.69721 8.47444 9.51413 8.39477 9.36638 8.2736C9.14275 8.09021 9.00006 7.81176 9.00006 7.49998C9.00006 7.4985 9.00006 7.49702 9.00006 7.49554C8.99944 7.11281 8.91852 6.98731 8.85745 6.91417C8.75348 6.78964 8.55033 6.64314 8.05285 6.3944C7.55887 6.14741 7.35865 5.54674 7.60564 5.05276Z" fill="#EE3C3C"/></svg>`;
    }

    checkClickMail.innerHTML = `<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.7 0.3C7.3 -0.1 6.7 -0.1 6.3 0.3L3 3.6L1.7 2.3C1.3 1.9 0.7 1.9 0.3 2.3C-0.1 2.7 -0.1 3.3 0.3 3.7L2.3 5.7C2.5 5.9 2.7 6 3 6C3.3 6 3.5 5.9 3.7 5.7L7.7 1.7C8.1 1.3 8.1 0.7 7.7 0.3Z" fill="white"/></svg>`
    important.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5C12 14.672 11.328 14 10.5 14C9.672 14 9 14.672 9 15.5C9 16.328 9.672 17 10.5 17C11.328 17 12 16.328 12 15.5ZM12 4.5C12 3.672 11.328 3 10.5 3C9.672 3 9 3.672 9 4.5V10.5C9 11.328 9.672 12 10.5 12C11.328 12 12 11.328 12 10.5V4.5Z" fill="#FC2C38"/></svg>`

    bookmarkFlag ?
        bookmark.innerHTML = `<svg class='bookmarkFullActive' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.78363C15 3.79807 14.204 3 13.221 3C11.404 3 8.596 3 6.779 3C5.796 3 5 3.79807 5 4.78363C5 7.53176 5 12.8185 5 16.0047C5 16.4198 5.256 16.7928 5.643 16.9412C6.031 17.0896 6.469 16.9833 6.746 16.6735C7.739 15.5596 8.908 14.2502 9.539 13.5424C9.656 13.411 9.824 13.3358 10 13.3358C10.176 13.3358 10.344 13.411 10.461 13.5424C11.092 14.2502 12.261 15.5596 13.254 16.6735C13.531 16.9833 13.969 17.0896 14.357 16.9412C14.744 16.7928 15 16.4198 15 16.0047C15 12.8185 15 7.53176 15 4.78363V4.78363Z" fill="#FC2C38"/></svg>`
        :
        bookmark.innerHTML = `<svg class='bookmarkHover' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.5767 11 11.1254 11.249 11.5052 11.683L13 13.3914V5H7V13.3914L8.49485 11.683C8.87462 11.249 9.42327 11 10 11ZM13.1917 16.6476C13.3876 16.8716 13.6707 17 13.9682 17C14.538 17 15 16.538 15 15.9682V5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V15.9682C5 16.538 5.46195 17 6.0318 17C6.32933 17 6.61238 16.8716 6.80831 16.6476L10 13L13.1917 16.6476Z" fill="#A5A7AD"/></svg>`

    author.innerHTML = `${authorName?.name}` + ' ' + `${authorName?.surname}`
    titleLetters.innerHTML = `${title}`
    textLetters.innerHTML = `${text}`

    // проверяем на наличие документа в случае true добавляем иконку Скрепки
    if (doc) {
        flagMail.classList.add('flagMail')
        flagDoc.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.828 6.58722C17.2659 5.02513 14.7332 5.02513 13.1711 6.58722L13.082 6.67633C13.3662 6.84417 13.634 7.05016 13.8782 7.29433C14.1224 7.53849 14.3284 7.80637 14.4962 8.09054L14.5853 8.00144C15.3664 7.22039 16.6327 7.22039 17.4137 8.00144C18.1948 8.78248 18.1948 10.0488 17.4137 10.8299L11.1213 17.1223C9.94975 18.2939 8.05025 18.2939 6.87868 17.1223C5.70711 15.9507 5.70711 14.0512 6.87868 12.8797L10.3427 9.41565C10.7332 9.02513 11.3664 9.02513 11.7569 9.41565C12.1475 9.80617 12.1475 10.4393 11.7569 10.8299L9.0503 13.5365C8.65977 13.927 8.65977 14.5602 9.0503 14.9507C9.44082 15.3412 10.074 15.3412 10.4645 14.9507L13.1711 12.2441C14.3427 11.0725 14.3427 9.17301 13.1711 8.00144C11.9996 6.82986 10.1001 6.82986 8.9285 8.00144L5.46447 11.4654C3.51184 13.4181 3.51184 16.5839 5.46447 18.5365C7.41709 20.4891 10.5829 20.4891 12.5355 18.5365L18.828 12.2441C20.3901 10.682 20.3901 8.14932 18.828 6.58722Z" fill="#2C2D2E"/></svg>`
    }

    // if(window.location.href = `${nameLocation}/inbox?filter__doc=0`) {
    //     if (doc) {
    //         flagMail.classList.add('flagMail')
    //         flagDoc.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.828 6.58722C17.2659 5.02513 14.7332 5.02513 13.1711 6.58722L13.082 6.67633C13.3662 6.84417 13.634 7.05016 13.8782 7.29433C14.1224 7.53849 14.3284 7.80637 14.4962 8.09054L14.5853 8.00144C15.3664 7.22039 16.6327 7.22039 17.4137 8.00144C18.1948 8.78248 18.1948 10.0488 17.4137 10.8299L11.1213 17.1223C9.94975 18.2939 8.05025 18.2939 6.87868 17.1223C5.70711 15.9507 5.70711 14.0512 6.87868 12.8797L10.3427 9.41565C10.7332 9.02513 11.3664 9.02513 11.7569 9.41565C12.1475 9.80617 12.1475 10.4393 11.7569 10.8299L9.0503 13.5365C8.65977 13.927 8.65977 14.5602 9.0503 14.9507C9.44082 15.3412 10.074 15.3412 10.4645 14.9507L13.1711 12.2441C14.3427 11.0725 14.3427 9.17301 13.1711 8.00144C11.9996 6.82986 10.1001 6.82986 8.9285 8.00144L5.46447 11.4654C3.51184 13.4181 3.51184 16.5839 5.46447 18.5365C7.41709 20.4891 10.5829 20.4891 12.5355 18.5365L18.828 12.2441C20.3901 10.682 20.3901 8.14932 18.828 6.58722Z" fill="#2C2D2E"/></svg>`
    //     }
    // }

    // Закрываем по клику вне его области
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(tooltipFlagDoc)

        if (!withinBoundaries) {
            tooltipFlagDoc.classList.remove('tooltipFlagDocActive')
            flagDoc.classList.remove('flagDocActive')
        }
        if (!withinBoundaries && !flagActiveAttach) {
            flagActiveAttach = false
        }
    })

    // по клику появляется панель предпросмотра картинок
    flagDoc.addEventListener('click', async (e) => {
        e.preventDefault()
        e.stopPropagation()

        const r = document.querySelectorAll('.tooltipFlagDoc')
        const y = document.querySelectorAll('flagDocActive')

        r.forEach(elem => {
            elem.classList.remove('tooltipFlagDocActive')
        })
        y.forEach(elem => {
            elem.classList.remove('flagDocActive')
        })

        let count = 0;
        for (let key in doc) {
            count++
        }
        const toolImg = ToolImg(doc?.img, `${doc?.img.slice(0, 15)}`)
        if (tooltipFlagDoc.classList.contains('tooltipFlagDocActive')) {
            tooltipFlagDoc.classList.remove('tooltipFlagDocActive')
            flagDoc.classList.remove('flagDocActive')
        } else {
            tooltipFlagDoc.classList.add('tooltipFlagDocActive')
            flagDoc.classList.add('flagDocActive')
        }
        if (flagActiveAttach) {
            flagActiveAttach = false
            toolImg.remove()
        } else {
            flagActiveAttach = false
            if (tooltipFlagDoc.classList.contains('tooltipFlagDocActive')) {
                const withinBoundaries = e.composedPath().includes(tooltipFlagDoc)

                if (withinBoundaries || flagActiveAttach) {
                    tooltipFlagDoc.classList.remove('tooltipFlagDocActive')
                    flagDoc.classList.remove('flagDocActive')
                }
                if(tooltipFlagDoc.childElementCount + 1 === count) {
                    tooltipFlagDoc.append(toolImg)
                } else return
            } else {
                flagActiveAttach = true
                tooltipFlagDoc.classList.remove('tooltipFlagDocActive')
                flagDoc.classList.remove('flagDocActive')
                toolImg.remove()
            }
        }
    })

    containerItem.addEventListener('click', async () => {
        const response = await fetch(`${nameLocation}/api/clients`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
        console.log('id: ', id, containerItem)
    })
    // по клику сохраняем данные, которые отобразим в модуле InfoItem.js
    containerItem.addEventListener('click', () => {
        const mailTo = {
            id: id
        }
        localStorage.setItem('mailTo', JSON.stringify(mailTo))
        containerItem.href = `/item`
    })

    // по клику добавляется/убирается галочка
    checkMail.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        checkMail.classList.toggle('activeMail')
        avatar.classList.toggle('noActiveAvatar')
        containerItem.classList.toggle('containerItemActive')
    })

    let fl = true

    // по клику добавляется/убирается флаг
    bookmark.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (fl) {
            fl = !fl
            bookmarkFlag ?
                bookmark.innerHTML = `<svg class='bookmarkHover' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.5767 11 11.1254 11.249 11.5052 11.683L13 13.3914V5H7V13.3914L8.49485 11.683C8.87462 11.249 9.42327 11 10 11ZM13.1917 16.6476C13.3876 16.8716 13.6707 17 13.9682 17C14.538 17 15 16.538 15 15.9682V5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V15.9682C5 16.538 5.46195 17 6.0318 17C6.32933 17 6.61238 16.8716 6.80831 16.6476L10 13L13.1917 16.6476Z" fill="#A5A7AD"/></svg>`
                :
                bookmark.innerHTML = `<svg class='bookmarkFullActive' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.78363C15 3.79807 14.204 3 13.221 3C11.404 3 8.596 3 6.779 3C5.796 3 5 3.79807 5 4.78363C5 7.53176 5 12.8185 5 16.0047C5 16.4198 5.256 16.7928 5.643 16.9412C6.031 17.0896 6.469 16.9833 6.746 16.6735C7.739 15.5596 8.908 14.2502 9.539 13.5424C9.656 13.411 9.824 13.3358 10 13.3358C10.176 13.3358 10.344 13.411 10.461 13.5424C11.092 14.2502 12.261 15.5596 13.254 16.6735C13.531 16.9833 13.969 17.0896 14.357 16.9412C14.744 16.7928 15 16.4198 15 16.0047C15 12.8185 15 7.53176 15 4.78363V4.78363Z" fill="#FC2C38"/></svg>`
        } else {
            fl = !fl
            bookmarkFlag ?
                bookmark.innerHTML = `<svg class='bookmarkFullActive' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.78363C15 3.79807 14.204 3 13.221 3C11.404 3 8.596 3 6.779 3C5.796 3 5 3.79807 5 4.78363C5 7.53176 5 12.8185 5 16.0047C5 16.4198 5.256 16.7928 5.643 16.9412C6.031 17.0896 6.469 16.9833 6.746 16.6735C7.739 15.5596 8.908 14.2502 9.539 13.5424C9.656 13.411 9.824 13.3358 10 13.3358C10.176 13.3358 10.344 13.411 10.461 13.5424C11.092 14.2502 12.261 15.5596 13.254 16.6735C13.531 16.9833 13.969 17.0896 14.357 16.9412C14.744 16.7928 15 16.4198 15 16.0047C15 12.8185 15 7.53176 15 4.78363V4.78363Z" fill="#FC2C38"/></svg>`
                :
                bookmark.innerHTML = `<svg class='bookmarkHover' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.5767 11 11.1254 11.249 11.5052 11.683L13 13.3914V5H7V13.3914L8.49485 11.683C8.87462 11.249 9.42327 11 10 11ZM13.1917 16.6476C13.3876 16.8716 13.6707 17 13.9682 17C14.538 17 15 16.538 15 15.9682V5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V15.9682C5 16.538 5.46195 17 6.0318 17C6.32933 17 6.61238 16.8716 6.80831 16.6476L10 13L13.1917 16.6476Z" fill="#A5A7AD"/></svg>`
        }
        bookmark.classList.toggle('bookmarkActive')
    })

    if (bookmarkFlag) {
        bookmark.classList.add('bookmarkActive')
    }

    if (importantFlag) {
        important.classList.add('importantActive')
    }

    flagDoc.append(tooltipFlagDoc)
    markMailContainer.append(important, bookmark)
    dlcMailContainer.append(flagMail, flagDoc)
    containerInfoMailText.append(titleLetters, textLetters)

    checkMail.append(checkClickMail)
    containerItem.append(active, avatar, checkMail, author, markMailContainer, containerInfoMailText, dlcMailContainer, timeSent)

    return containerItem
}

module.exports = ItemLetters

},{"../componentsUI/ToolImg.js":8,"./InfoItem.js":12}],14:[function(require,module,exports){
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

},{"../components/InfoItem.js":12,"../utils/mailTo.js":18,"./ItemLetters.js":13}],15:[function(require,module,exports){
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

},{"./MainPanel.js":14}],16:[function(require,module,exports){
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

},{"../componentsUI/LineHr.js":5,"../componentsUI/NewDir.js":6,"../componentsUI/Setting.js":7,"../componentsUI/WriteBtn.js":9,"./Navbar.js":15}],17:[function(require,module,exports){
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

},{"./components/Header.js":10,"./components/HeaderItem.js":11,"./components/MainPanel.js":14,"./components/NavigationPanel.js":16,"./componentsUI/DetailsSetting.js":2}],18:[function(require,module,exports){
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

},{}]},{},[17])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNvbXBvbmVudHNVSS9DaGFuZ2VUaGVtZS5qcyIsImNvbXBvbmVudHNVSS9EZXRhaWxzU2V0dGluZy5qcyIsImNvbXBvbmVudHNVSS9Eb2NNYWlsLmpzIiwiY29tcG9uZW50c1VJL0ZpbHRlckJ0bi5qcyIsImNvbXBvbmVudHNVSS9MaW5lSHIuanMiLCJjb21wb25lbnRzVUkvTmV3RGlyLmpzIiwiY29tcG9uZW50c1VJL1NldHRpbmcuanMiLCJjb21wb25lbnRzVUkvVG9vbEltZy5qcyIsImNvbXBvbmVudHNVSS9Xcml0ZUJ0bi5qcyIsImNvbXBvbmVudHMvSGVhZGVyLmpzIiwiY29tcG9uZW50cy9IZWFkZXJJdGVtLmpzIiwiY29tcG9uZW50cy9JbmZvSXRlbS5qcyIsImNvbXBvbmVudHMvSXRlbUxldHRlcnMuanMiLCJjb21wb25lbnRzL01haW5QYW5lbC5qcyIsImNvbXBvbmVudHMvTmF2YmFyLmpzIiwiY29tcG9uZW50cy9OYXZpZ2F0aW9uUGFuZWwuanMiLCJpbmRleC5qcyIsInV0aWxzL21haWxUby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBDaGFuZ2VUaGVtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGNvbnN0IHRoZW1lQ29udGFpbmVyTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgY29uc3QgZWxlbUxvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBlbGVtTG93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IGVsZW1Mb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBlbGVtTG93NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IGVsZW1Mb3c2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBlbGVtTG93OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IGVsZW1Mb3c5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUxvdzE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgdGhlbWVDb250YWluZXJIYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgY29uc3QgZWxlbUhhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUhhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUhhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZWxlbUhhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgYmFja0FjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgYXJyb3dBY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IGhvdmVyV2luZG93QmxhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaG92ZXJXaW5kb3dCbGFja1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IGhvdmVyV2luZG93V2hpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaG92ZXJXaW5kb3dXaGl0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IGhvdmVyV2luZG93QW5pbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaG92ZXJXaW5kb3dBbmltZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IGxvY2F0aW9uVXNlckRvbWFpbnMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5sYXN0SW5kZXhPZignLycpXHJcbiAgICBjb25zdCBuYW1lTG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBsb2NhdGlvblVzZXJEb21haW5zKVxyXG5cclxuICAgIHRoZW1lQ29udGFpbmVyTG93LmNsYXNzTGlzdC5hZGQoJ3RoZW1lQ29udGFpbmVyTGlzdCcpXHJcbiAgICBlbGVtTG93MS5jbGFzc0xpc3QuYWRkKCd0aGVtZUVsZW1MaXN0MScsICd0aGVtZUVsZW1MaXN0JylcclxuICAgIGVsZW1Mb3cyLmNsYXNzTGlzdC5hZGQoJ3RoZW1lRWxlbUxpc3QyJywgJ3RoZW1lRWxlbUxpc3QnKVxyXG4gICAgZWxlbUxvdzMuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtTGlzdDMnLCAndGhlbWVFbGVtTGlzdCcpXHJcbiAgICBlbGVtTG93NC5jbGFzc0xpc3QuYWRkKCd0aGVtZUVsZW1MaXN0NCcsICd0aGVtZUVsZW1MaXN0JylcclxuICAgIGVsZW1Mb3c1LmNsYXNzTGlzdC5hZGQoJ3RoZW1lRWxlbUxpc3Q1JywgJ3RoZW1lRWxlbUxpc3QnKVxyXG4gICAgZWxlbUxvdzYuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtTGlzdDYnLCAndGhlbWVFbGVtTGlzdCcpXHJcbiAgICBlbGVtTG93Ny5jbGFzc0xpc3QuYWRkKCd0aGVtZUVsZW1MaXN0NycsICd0aGVtZUVsZW1MaXN0JylcclxuICAgIGVsZW1Mb3c4LmNsYXNzTGlzdC5hZGQoJ3RoZW1lRWxlbUxpc3Q4JywgJ3RoZW1lRWxlbUxpc3QnKVxyXG4gICAgZWxlbUxvdzkuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtTGlzdDknLCAndGhlbWVFbGVtTGlzdCcpXHJcbiAgICBlbGVtTG93MTAuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtTGlzdDEwJywgJ3RoZW1lRWxlbUxpc3QnKVxyXG4gICAgZWxlbUxvdzExLmNsYXNzTGlzdC5hZGQoJ3RoZW1lRWxlbUxpc3QxMScsICd0aGVtZUVsZW1MaXN0JylcclxuICAgIGVsZW1Mb3cxMi5jbGFzc0xpc3QuYWRkKCd0aGVtZUVsZW1MaXN0MTInLCAndGhlbWVFbGVtTGlzdCcpXHJcbiAgICBlbGVtTG93MTMuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtTGlzdDEzJywgJ3RoZW1lRWxlbUxpc3QnKVxyXG4gICAgZWxlbUxvdzE0LmNsYXNzTGlzdC5hZGQoJ3RoZW1lRWxlbUxpc3QxNCcsICd0aGVtZUVsZW1MaXN0JylcclxuICAgIGVsZW1Mb3cxNS5jbGFzc0xpc3QuYWRkKCd0aGVtZUVsZW1MaXN0MTUnLCAndGhlbWVFbGVtTGlzdCcpXHJcbiAgICBlbGVtTG93MTYuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtTGlzdDE2JywgJ3RoZW1lRWxlbUxpc3QnKVxyXG4gICAgdGhlbWVDb250YWluZXJIYXJkLmNsYXNzTGlzdC5hZGQoJ3RoZW1lQ29udGFpbmVySGFyZCcpXHJcbiAgICBlbGVtSGFyZDEuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtSGFyZCcsICd0aGVtZUVsZW1IYXJkMScpXHJcbiAgICBlbGVtSGFyZDIuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtSGFyZCcsICd0aGVtZUVsZW1IYXJkMicpXHJcbiAgICBlbGVtSGFyZDMuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtSGFyZCcsICd0aGVtZUVsZW1IYXJkMycpXHJcbiAgICBlbGVtSGFyZDQuY2xhc3NMaXN0LmFkZCgndGhlbWVFbGVtSGFyZCcpXHJcbiAgICBiYWNrQWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2JhY2tBY3RpdmUnKVxyXG4gICAgYXJyb3dBY3RpdmUuY2xhc3NMaXN0LmFkZCgnYXJyb3dBY3RpdmUnKVxyXG4gICAgaG92ZXJXaW5kb3dCbGFjay5jbGFzc0xpc3QuYWRkKCdob3ZlcldpbmRvdycpXHJcbiAgICBob3ZlcldpbmRvd1doaXRlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyV2luZG93JylcclxuICAgIGhvdmVyV2luZG93QW5pbWUuY2xhc3NMaXN0LmFkZCgnaG92ZXJXaW5kb3cnKVxyXG5cclxuICAgIGVsZW1IYXJkMS5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjcyXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDcyIDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjA4MTEgMEM1LjQxOTU1IDAgMCA1LjM4MzE2IDAgMTEuOTk5OUMwIDE4LjYxNjggNS40MTk1NSAyNCAxMi4wODExIDI0QzE0LjUzMDMgMjQgMTYuODkxMSAyMy4yNjcyIDE4Ljg4NjIgMjEuOTEyOEwxNy4zMDI3IDIwLjA4NDNDMTUuNzU0NiAyMS4wNzM1IDEzLjk1MDMgMjEuNjA3NCAxMi4wODExIDIxLjYwNzRDNi43NDc3IDIxLjYwNzQgMi40MDg3NSAxNy4yOTc2IDIuNDA4NzUgMTEuOTk5OUMyLjQwODc1IDYuNzAyMzIgNi43NDc3IDIuMzkyNSAxMi4wODExIDIuMzkyNUMxNy40MTQ2IDIuMzkyNSAyMS43NTM2IDYuNzAyMzIgMjEuNzUzNiAxMS45OTk5QzIxLjc1MzYgMTIuNjk3NiAyMS42NzQ3IDEzLjM5MTMgMjEuNTI1NyAxNC4wNjZDMjEuMjE1NiAxNS4zMjkgMjAuMzI5MSAxNS43MTk2IDE5LjY0OCAxNS42NjY3QzE4Ljk3NjMgMTUuNjEzIDE4LjE3ODUgMTUuMTM3MyAxOC4xNzMyIDEzLjk2MjdWMTEuOTk5OUMxOC4xNzMyIDguNjYzNCAxNS40NDAzIDUuOTQ4ODEgMTIuMDgxMSA1Ljk0ODgxQzguNzIyMTIgNS45NDg4MSA1Ljk4OTAyIDguNjYzNCA1Ljk4OTAyIDExLjk5OTlDNS45ODkwMiAxNS4zMzY3IDguNzIyMTIgMTguMDUxMiAxMi4wODExIDE4LjA1MTJDMTMuNzgzNSAxOC4wNTEyIDE1LjMyNDEgMTcuMzUzMSAxNi40MzA2IDE2LjIzMTJDMTcuMDgyMiAxNy4yNjQ4IDE4LjE2MTEgMTcuOTQ4NCAxOS40NTUgMTguMDUxNkMxOS41NjI4IDE4LjA2MDIgMTkuNjcwNSAxOC4wNjQ0IDE5Ljc3NzkgMTguMDY0NEMyMC42NTQ2IDE4LjA2NDQgMjEuNTA5NCAxNy43OCAyMi4yMTQ3IDE3LjI0ODFDMjIuOTQyNyAxNi42OTkyIDIzLjQ3MjcgMTUuOTE5IDIzLjc2OTggMTQuOTc1MUMyMy44MTcyIDE0LjgyNDQgMjMuOTA0MyAxNC40NzUgMjMuOTA1MyAxNC40NzA0QzI0LjEwMzQgMTMuNjE4NSAyNC4xNjIzIDEyLjgzMjQgMjQuMTYyMyAxMS45OTk5QzI0LjE2MjMgNS4zODMxNiAxOC43NDI3IDAgMTIuMDgxMSAwWk04LjM5Nzc3IDExLjk5OTlDOC4zOTc3NyA5Ljk4MjYzIDEwLjA1MDIgOC4zNDEzOCAxMi4wODExIDguMzQxMzhDMTQuMTEyMSA4LjM0MTM4IDE1Ljc2NDUgOS45ODI2MyAxNS43NjQ1IDExLjk5OTlDMTUuNzY0NSAxNC4wMTc0IDE0LjExMjEgMTUuNjU4NiAxMi4wODExIDE1LjY1ODZDMTAuMDUwMiAxNS42NTg2IDguMzk3NzcgMTQuMDE3NCA4LjM5Nzc3IDExLjk5OTlaXCIgZmlsbD1cIiNGRjlFMDBcIi8+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYyLjA0OTcgMTcuNjA4N0g1OS43ODMxVjE2Ljc4MDVDNTguOTA3NSAxNy41NDEyIDU3Ljc2MzQgMTcuOTk0MyA1Ni40MTc0IDE3Ljk5NDNDNTMuMTk4NyAxNy45OTQzIDUwLjU4NTYgMTUuNDAyNyA1MC41ODU2IDEyLjIxMDZDNTAuNTg1NiA5LjAxODQxIDUzLjE5ODcgNi40MjY4MyA1Ni40MTc0IDYuNDI2ODNDNTcuNzYzNCA2LjQyNjgzIDU4LjkwNzUgNi44Nzk5NyA1OS43ODMxIDcuNjQwN1Y2LjgxMjM3SDYyLjA0OTdWMTcuNjA4N1pNMzMuMjc3OSAxNy42MDg3SDMxLjAxMTVWNi44MTI0NUgzMy4yNzc5VjcuNDExOTdDMzMuNzgxMyA2Ljk0MjY1IDM0LjcyODYgNi40Mjg0MiAzNS45MDM4IDYuNDI2ODNDMzcuNDEzMSA2LjQyNjgzIDM4Ljc2NDcgNy4xMDg1NCAzOS42NjI4IDguMTc3NTRDNDAuNTYxIDcuMTA4NTQgNDEuOTEyNiA2LjQyNjgzIDQzLjQyMTkgNi40MjY4M0M0Ni4xMTk1IDYuNDI2ODMgNDguMzE0MyA4LjYwMzQ1IDQ4LjMxNDMgMTEuMjc4OFYxNy42MDg3SDQ2LjA0NzdWMTEuMjc4OEM0Ni4wNDc3IDkuODQyOTUgNDQuODY5NyA4LjY3NDY4IDQzLjQyMTkgOC42NzQ2OEM0MS45NzQgOC42NzQ2OCA0MC43OTYxIDkuODQyOTUgNDAuNzk2MSAxMS4yNzg4VjE3LjYwODdIMzguNTI5NlYxMS4yNzg4QzM4LjUyOTYgOS44NDI5NSAzNy4zNTE2IDguNjc0NjggMzUuOTAzOCA4LjY3NDY4QzM0LjQ1NTkgOC42NzQ2OCAzMy4yNzc5IDkuODQyOTUgMzMuMjc3OSAxMS4yNzg4VjE3LjYwODdaTTY0Ljc1ODIgMTcuNjA4N0g2Ny4wMjQ3VjYuODEyNDRINjQuNzU4MlYxNy42MDg3Wk02OS43MzM1IDE3LjYwODdINzJWMi4xODU0MUg2OS43MzM1VjE3LjYwODdaTTU2LjQxNzQgOC42NDQzNkM1OC40MDIxIDguNjQ0MzYgNTkuOTY2IDEwLjI0MjMgNTkuOTY2IDEyLjIxMDZDNTkuOTY2IDE0LjE3ODggNTguNDAyMSAxNS43NzY4IDU2LjQxNzQgMTUuNzc2OEM1NC40MzI4IDE1Ljc3NjggNTIuODIxNiAxNC4xNzg4IDUyLjgyMTYgMTIuMjEwNkM1Mi44MjE2IDEwLjI0MjMgNTQuNDMyOCA4LjY0NDM2IDU2LjQxNzQgOC42NDQzNlpNNjUuODkzMyAxLjc5OThDNjYuNzUyNSAxLjc5OTggNjcuNDUgMi40OTE2NSA2Ny40NSAzLjM0MzcxQzY3LjQ1IDQuMTk1ODUgNjYuNzUyNSA0Ljg4NzY5IDY1Ljg5MzMgNC44ODc2OUM2NS4wMzQgNC44ODc2OSA2NC4zMzY1IDQuMTk1ODUgNjQuMzM2NSAzLjM0MzcxQzY0LjMzNjUgMi40OTE2NSA2NS4wMzQgMS43OTk4IDY1Ljg5MzMgMS43OTk4WlwiIGZpbGw9XCJ3aGl0ZVwiLz48L3N2Zz5gXHJcbiAgICBlbGVtSGFyZDIuaW5uZXJIVE1MID0gYDxzdmcgd2lkdGg9XCI3MlwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCA3MiAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMi4wODExIDBDNS40MTk1NSAwIDAgNS4zODMxNiAwIDExLjk5OTlDMCAxOC42MTY4IDUuNDE5NTUgMjQgMTIuMDgxMSAyNEMxNC41MzAzIDI0IDE2Ljg5MTEgMjMuMjY3MiAxOC44ODYyIDIxLjkxMjhMMTcuMzAyNyAyMC4wODQzQzE1Ljc1NDYgMjEuMDczNSAxMy45NTAzIDIxLjYwNzQgMTIuMDgxMSAyMS42MDc0QzYuNzQ3NyAyMS42MDc0IDIuNDA4NzUgMTcuMjk3NiAyLjQwODc1IDExLjk5OTlDMi40MDg3NSA2LjcwMjMyIDYuNzQ3NyAyLjM5MjUgMTIuMDgxMSAyLjM5MjVDMTcuNDE0NiAyLjM5MjUgMjEuNzUzNiA2LjcwMjMyIDIxLjc1MzYgMTEuOTk5OUMyMS43NTM2IDEyLjY5NzYgMjEuNjc0NyAxMy4zOTEzIDIxLjUyNTcgMTQuMDY2QzIxLjIxNTYgMTUuMzI5IDIwLjMyOTEgMTUuNzE5NiAxOS42NDggMTUuNjY2N0MxOC45NzYzIDE1LjYxMyAxOC4xNzg1IDE1LjEzNzMgMTguMTczMiAxMy45NjI3VjExLjk5OTlDMTguMTczMiA4LjY2MzQgMTUuNDQwMyA1Ljk0ODgxIDEyLjA4MTEgNS45NDg4MUM4LjcyMjEyIDUuOTQ4ODEgNS45ODkwMiA4LjY2MzQgNS45ODkwMiAxMS45OTk5QzUuOTg5MDIgMTUuMzM2NyA4LjcyMjEyIDE4LjA1MTIgMTIuMDgxMSAxOC4wNTEyQzEzLjc4MzUgMTguMDUxMiAxNS4zMjQxIDE3LjM1MzEgMTYuNDMwNiAxNi4yMzEyQzE3LjA4MjIgMTcuMjY0OCAxOC4xNjExIDE3Ljk0ODQgMTkuNDU1IDE4LjA1MTZDMTkuNTYyOCAxOC4wNjAyIDE5LjY3MDUgMTguMDY0NCAxOS43Nzc5IDE4LjA2NDRDMjAuNjU0NiAxOC4wNjQ0IDIxLjUwOTQgMTcuNzggMjIuMjE0NyAxNy4yNDgxQzIyLjk0MjcgMTYuNjk5MiAyMy40NzI3IDE1LjkxOSAyMy43Njk4IDE0Ljk3NTFDMjMuODE3MiAxNC44MjQ0IDIzLjkwNDMgMTQuNDc1IDIzLjkwNTMgMTQuNDcwNEMyNC4xMDM0IDEzLjYxODUgMjQuMTYyMyAxMi44MzI0IDI0LjE2MjMgMTEuOTk5OUMyNC4xNjIzIDUuMzgzMTYgMTguNzQyNyAwIDEyLjA4MTEgMFpNOC4zOTc3NyAxMS45OTk5QzguMzk3NzcgOS45ODI2MyAxMC4wNTAyIDguMzQxMzggMTIuMDgxMSA4LjM0MTM4QzE0LjExMjEgOC4zNDEzOCAxNS43NjQ1IDkuOTgyNjMgMTUuNzY0NSAxMS45OTk5QzE1Ljc2NDUgMTQuMDE3NCAxNC4xMTIxIDE1LjY1ODYgMTIuMDgxMSAxNS42NTg2QzEwLjA1MDIgMTUuNjU4NiA4LjM5Nzc3IDE0LjAxNzQgOC4zOTc3NyAxMS45OTk5WlwiIGZpbGw9XCIjRkY5RTAwXCIvPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02Mi4wNDk3IDE3LjYwODdINTkuNzgzMVYxNi43ODA1QzU4LjkwNzUgMTcuNTQxMiA1Ny43NjM0IDE3Ljk5NDMgNTYuNDE3NCAxNy45OTQzQzUzLjE5ODcgMTcuOTk0MyA1MC41ODU2IDE1LjQwMjcgNTAuNTg1NiAxMi4yMTA2QzUwLjU4NTYgOS4wMTg0MSA1My4xOTg3IDYuNDI2ODMgNTYuNDE3NCA2LjQyNjgzQzU3Ljc2MzQgNi40MjY4MyA1OC45MDc1IDYuODc5OTcgNTkuNzgzMSA3LjY0MDdWNi44MTIzN0g2Mi4wNDk3VjE3LjYwODdaTTMzLjI3NzkgMTcuNjA4N0gzMS4wMTE1VjYuODEyNDVIMzMuMjc3OVY3LjQxMTk3QzMzLjc4MTMgNi45NDI2NSAzNC43Mjg2IDYuNDI4NDIgMzUuOTAzOCA2LjQyNjgzQzM3LjQxMzEgNi40MjY4MyAzOC43NjQ3IDcuMTA4NTQgMzkuNjYyOCA4LjE3NzU0QzQwLjU2MSA3LjEwODU0IDQxLjkxMjYgNi40MjY4MyA0My40MjE5IDYuNDI2ODNDNDYuMTE5NSA2LjQyNjgzIDQ4LjMxNDMgOC42MDM0NSA0OC4zMTQzIDExLjI3ODhWMTcuNjA4N0g0Ni4wNDc3VjExLjI3ODhDNDYuMDQ3NyA5Ljg0Mjk1IDQ0Ljg2OTcgOC42NzQ2OCA0My40MjE5IDguNjc0NjhDNDEuOTc0IDguNjc0NjggNDAuNzk2MSA5Ljg0Mjk1IDQwLjc5NjEgMTEuMjc4OFYxNy42MDg3SDM4LjUyOTZWMTEuMjc4OEMzOC41Mjk2IDkuODQyOTUgMzcuMzUxNiA4LjY3NDY4IDM1LjkwMzggOC42NzQ2OEMzNC40NTU5IDguNjc0NjggMzMuMjc3OSA5Ljg0Mjk1IDMzLjI3NzkgMTEuMjc4OFYxNy42MDg3Wk02NC43NTgyIDE3LjYwODdINjcuMDI0N1Y2LjgxMjQ0SDY0Ljc1ODJWMTcuNjA4N1pNNjkuNzMzNSAxNy42MDg3SDcyVjIuMTg1NDFINjkuNzMzNVYxNy42MDg3Wk01Ni40MTc0IDguNjQ0MzZDNTguNDAyMSA4LjY0NDM2IDU5Ljk2NiAxMC4yNDIzIDU5Ljk2NiAxMi4yMTA2QzU5Ljk2NiAxNC4xNzg4IDU4LjQwMjEgMTUuNzc2OCA1Ni40MTc0IDE1Ljc3NjhDNTQuNDMyOCAxNS43NzY4IDUyLjgyMTYgMTQuMTc4OCA1Mi44MjE2IDEyLjIxMDZDNTIuODIxNiAxMC4yNDIzIDU0LjQzMjggOC42NDQzNiA1Ni40MTc0IDguNjQ0MzZaTTY1Ljg5MzMgMS43OTk4QzY2Ljc1MjUgMS43OTk4IDY3LjQ1IDIuNDkxNjUgNjcuNDUgMy4zNDM3MUM2Ny40NSA0LjE5NTg1IDY2Ljc1MjUgNC44ODc2OSA2NS44OTMzIDQuODg3NjlDNjUuMDM0IDQuODg3NjkgNjQuMzM2NSA0LjE5NTg1IDY0LjMzNjUgMy4zNDM3MUM2NC4zMzY1IDIuNDkxNjUgNjUuMDM0IDEuNzk5OCA2NS44OTMzIDEuNzk5OFpcIiBmaWxsPVwiIzAwNUZGOVwiLz48L3N2Zz5gXHJcbiAgICBhcnJvd0FjdGl2ZS5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiB2aWV3Qm94PVwiMCAwIDQwIDQwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMxIDE0QzMwIDEzIDI4LjUgMTMgMjcuNSAxNEwxNy41IDI0TDEyLjUgMTlDMTEuNSAxOCAxMCAxOCA5IDE5QzggMjAgOCAyMS41IDkgMjIuNUwxNS43NSAyOS4yNUMxNi4yNSAyOS43NSAxNi43NSAzMCAxNy41IDMwQzE4LjI1IDMwIDE4Ljc1IDI5Ljc1IDE5LjI1IDI5LjI1TDMxIDE3LjVDMzIgMTYuNSAzMiAxNSAzMSAxNFpcIiBmaWxsPVwid2hpdGVcIi8+PC9zdmc+YFxyXG5cclxuICAgIGNvbnN0IGdldFN0YXRpYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke25hbWVMb2NhdGlvbn0vc3RhdGljYClcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgbGV0IGxhbmcgPSBudWxsXHJcbiAgICAgICAgaWYoZGF0YVswXS5sYW5nID09PSAncnVzJykge1xyXG4gICAgICAgICAgICBsYW5nID0gMVxyXG4gICAgICAgIH0gZWxzZSBsYW5nID0gMlxyXG4gICAgICAgIGhvdmVyV2luZG93QmxhY2tUZXh0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVs1XS5ibGFja1RoZW1lXHJcbiAgICAgICAgaG92ZXJXaW5kb3dXaGl0ZVRleHQudGV4dENvbnRlbnQgPSBkYXRhW2xhbmddWzVdLndoaXRlVGhlbWVcclxuICAgICAgICBob3ZlcldpbmRvd0FuaW1lVGV4dC50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bNV0uYW5pbWVUaGVtZVxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGljKClcclxuXHJcbiAgICBmdW5jdGlvbiBlbnRlclRoZW1lKGVsZW0pIHtcclxuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGhlbWUnKVxyXG4gICAgICAgICAgICBpZihlbGVtID09PSBlbGVtSGFyZDEpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdibGFjaycpKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZWxlbSA9PT0gZWxlbUxvdzEpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdicm93bicpKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUxJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1Mb3cyKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSgnZ3JheScpKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUyJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1Mb3czKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSgncHVycGxlJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTMnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZWxlbSA9PT0gZWxlbUxvdzQpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdkYXJrUHVycGxlJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTQnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZWxlbSA9PT0gZWxlbUxvdzUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdibHVlJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTUnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZWxlbSA9PT0gZWxlbUxvdzYpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdyZWQnKSlcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lNicpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtID09PSBlbGVtTG93Nykge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoJ29yYW5nZScpKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWU3JylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1Mb3c4KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSgnZ3JlZW4nKSlcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lOCcpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtID09PSBlbGVtTG93OSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoJ2xpZ2h0R3JlZW4nKSlcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lOScpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtID09PSBlbGVtTG93MTApIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdsaWdodEJlaWdlJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTEwJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1Mb3cxMSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoJ21pZGRsZUJlaWdlJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTExJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1Mb3cxMikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoJ2RhcmtCZWlnZScpKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUxMicpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtID09PSBlbGVtTG93MTMpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdkYXJrMkJlaWdlJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTEzJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1Mb3cxNCkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoJ2xpZ2h0Qmx1ZScpKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUxNCcpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtID09PSBlbGVtTG93MTUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KCdlbGVtTG93MTUnKSlcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lMTUnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZWxlbSA9PT0gZWxlbUxvdzE2KSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSgnZWxlbUxvdzE2JykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTE2JylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1IYXJkMikge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoJ3doaXRlJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZTE3JylcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGVsZW0gPT09IGVsZW1IYXJkMykge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoJ2FuaW1lJykpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtLmFwcGVuZChiYWNrQWN0aXZlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgPT09ICdibGFjaycpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUnKVxyXG4gICAgICAgIGVsZW1IYXJkMS5hcHBlbmQoYmFja0FjdGl2ZSlcclxuICAgIH1cclxuICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpID09PSAnYnJvd24nKSB7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lMScpXHJcbiAgICAgICAgZWxlbUxvdzEuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ2dyYXknKSB7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lMicpXHJcbiAgICAgICAgZWxlbUxvdzIuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ3B1cnBsZScpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUzJylcclxuICAgICAgICBlbGVtTG93My5hcHBlbmQoYmFja0FjdGl2ZSlcclxuICAgIH1cclxuICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpID09PSAnZGFya1B1cnBsZScpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWU0JylcclxuICAgICAgICBlbGVtTG93NC5hcHBlbmQoYmFja0FjdGl2ZSlcclxuICAgIH1cclxuICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpID09PSAnYmx1ZScpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWU1JylcclxuICAgICAgICBlbGVtTG93NS5hcHBlbmQoYmFja0FjdGl2ZSlcclxuICAgIH1cclxuICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpID09PSAncmVkJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTYnKVxyXG4gICAgICAgIGVsZW1Mb3c2LmFwcGVuZChiYWNrQWN0aXZlKVxyXG4gICAgfVxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgPT09ICdvcmFuZ2UnKSB7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lNycpXHJcbiAgICAgICAgZWxlbUxvdzcuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ2dyZWVuJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTgnKVxyXG4gICAgICAgIGVsZW1Mb3c4LmFwcGVuZChiYWNrQWN0aXZlKVxyXG4gICAgfVxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgPT09ICdsaWdodEdyZWVuJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTknKVxyXG4gICAgICAgIGVsZW1Mb3c5LmFwcGVuZChiYWNrQWN0aXZlKVxyXG4gICAgfVxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgPT09ICdsaWdodEJlaWdlJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTEwJylcclxuICAgICAgICBlbGVtTG93MTAuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ21pZGRsZUJlaWdlJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTExJylcclxuICAgICAgICBlbGVtTG93MTEuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ2RhcmtCZWlnZScpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUxMicpXHJcbiAgICAgICAgZWxlbUxvdzEyLmFwcGVuZChiYWNrQWN0aXZlKVxyXG4gICAgfVxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgPT09ICdkYXJrMkJlaWdlJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTEzJylcclxuICAgICAgICBlbGVtTG93MTMuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ2xpZ2h0Qmx1ZScpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2h0bWxBY3RpdmVUaGVtZScsICdodG1sQWN0aXZlVGhlbWUxJywgJ2h0bWxBY3RpdmVUaGVtZTInLCAnaHRtbEFjdGl2ZVRoZW1lMycsICdodG1sQWN0aXZlVGhlbWU0JywgJ2h0bWxBY3RpdmVUaGVtZTUnLCAnaHRtbEFjdGl2ZVRoZW1lNicsICdodG1sQWN0aXZlVGhlbWU3JywgJ2h0bWxBY3RpdmVUaGVtZTgnLCAnaHRtbEFjdGl2ZVRoZW1lOScsICdodG1sQWN0aXZlVGhlbWUxMCcsICdodG1sQWN0aXZlVGhlbWUxMScsICdodG1sQWN0aXZlVGhlbWUxMicsICdodG1sQWN0aXZlVGhlbWUxMycsICdodG1sQWN0aXZlVGhlbWUxNCcsICdodG1sQWN0aXZlVGhlbWUxNScsICdodG1sQWN0aXZlVGhlbWUxNicsICdodG1sQWN0aXZlVGhlbWUxNycsICdodG1sQWN0aXZlVGhlbWUxOCcpXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdodG1sQWN0aXZlVGhlbWUxNCcpXHJcbiAgICAgICAgZWxlbUxvdzE0LmFwcGVuZChiYWNrQWN0aXZlKVxyXG4gICAgfVxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgPT09ICdlbGVtTG93MTUnKSB7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdodG1sQWN0aXZlVGhlbWUnLCAnaHRtbEFjdGl2ZVRoZW1lMScsICdodG1sQWN0aXZlVGhlbWUyJywgJ2h0bWxBY3RpdmVUaGVtZTMnLCAnaHRtbEFjdGl2ZVRoZW1lNCcsICdodG1sQWN0aXZlVGhlbWU1JywgJ2h0bWxBY3RpdmVUaGVtZTYnLCAnaHRtbEFjdGl2ZVRoZW1lNycsICdodG1sQWN0aXZlVGhlbWU4JywgJ2h0bWxBY3RpdmVUaGVtZTknLCAnaHRtbEFjdGl2ZVRoZW1lMTAnLCAnaHRtbEFjdGl2ZVRoZW1lMTEnLCAnaHRtbEFjdGl2ZVRoZW1lMTInLCAnaHRtbEFjdGl2ZVRoZW1lMTMnLCAnaHRtbEFjdGl2ZVRoZW1lMTQnLCAnaHRtbEFjdGl2ZVRoZW1lMTUnLCAnaHRtbEFjdGl2ZVRoZW1lMTYnLCAnaHRtbEFjdGl2ZVRoZW1lMTcnLCAnaHRtbEFjdGl2ZVRoZW1lMTgnKVxyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaHRtbEFjdGl2ZVRoZW1lMTUnKVxyXG4gICAgICAgIGVsZW1Mb3cxNS5hcHBlbmQoYmFja0FjdGl2ZSlcclxuICAgIH1cclxuICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpID09PSAnZWxlbUxvdzE2Jykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTE2JylcclxuICAgICAgICBlbGVtTG93MTYuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ3doaXRlJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTE3JylcclxuICAgICAgICBlbGVtSGFyZDIuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSA9PT0gJ2FuaW1lJykge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJywgJ2h0bWxBY3RpdmVUaGVtZTEnLCAnaHRtbEFjdGl2ZVRoZW1lMicsICdodG1sQWN0aXZlVGhlbWUzJywgJ2h0bWxBY3RpdmVUaGVtZTQnLCAnaHRtbEFjdGl2ZVRoZW1lNScsICdodG1sQWN0aXZlVGhlbWU2JywgJ2h0bWxBY3RpdmVUaGVtZTcnLCAnaHRtbEFjdGl2ZVRoZW1lOCcsICdodG1sQWN0aXZlVGhlbWU5JywgJ2h0bWxBY3RpdmVUaGVtZTEwJywgJ2h0bWxBY3RpdmVUaGVtZTExJywgJ2h0bWxBY3RpdmVUaGVtZTEyJywgJ2h0bWxBY3RpdmVUaGVtZTEzJywgJ2h0bWxBY3RpdmVUaGVtZTE0JywgJ2h0bWxBY3RpdmVUaGVtZTE1JywgJ2h0bWxBY3RpdmVUaGVtZTE2JywgJ2h0bWxBY3RpdmVUaGVtZTE3JywgJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2h0bWxBY3RpdmVUaGVtZTE4JylcclxuICAgICAgICBlbGVtSGFyZDMuYXBwZW5kKGJhY2tBY3RpdmUpXHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXJUaGVtZShlbGVtTG93MSlcclxuICAgIGVudGVyVGhlbWUoZWxlbUxvdzIpXHJcbiAgICBlbnRlclRoZW1lKGVsZW1Mb3czKVxyXG4gICAgZW50ZXJUaGVtZShlbGVtTG93NClcclxuICAgIGVudGVyVGhlbWUoZWxlbUxvdzUpXHJcbiAgICBlbnRlclRoZW1lKGVsZW1Mb3c2KVxyXG4gICAgZW50ZXJUaGVtZShlbGVtTG93NylcclxuICAgIGVudGVyVGhlbWUoZWxlbUxvdzgpXHJcbiAgICBlbnRlclRoZW1lKGVsZW1Mb3c5KVxyXG4gICAgZW50ZXJUaGVtZShlbGVtTG93MTApXHJcbiAgICBlbnRlclRoZW1lKGVsZW1Mb3cxMSlcclxuICAgIGVudGVyVGhlbWUoZWxlbUxvdzEyKVxyXG4gICAgZW50ZXJUaGVtZShlbGVtTG93MTMpXHJcbiAgICBlbnRlclRoZW1lKGVsZW1Mb3cxNClcclxuICAgIGVudGVyVGhlbWUoZWxlbUxvdzE1KVxyXG4gICAgZW50ZXJUaGVtZShlbGVtTG93MTYpXHJcbiAgICBlbnRlclRoZW1lKGVsZW1IYXJkMSlcclxuICAgIGVudGVyVGhlbWUoZWxlbUhhcmQyKVxyXG4gICAgZW50ZXJUaGVtZShlbGVtSGFyZDMpXHJcbiAgICBcclxuICAgIGhvdmVyV2luZG93QmxhY2suYXBwZW5kKGhvdmVyV2luZG93QmxhY2tUZXh0KVxyXG4gICAgaG92ZXJXaW5kb3dXaGl0ZS5hcHBlbmQoaG92ZXJXaW5kb3dXaGl0ZVRleHQpXHJcbiAgICBob3ZlcldpbmRvd0FuaW1lLmFwcGVuZChob3ZlcldpbmRvd0FuaW1lVGV4dClcclxuICAgIGVsZW1IYXJkMS5hcHBlbmQoaG92ZXJXaW5kb3dCbGFjaylcclxuICAgIGVsZW1IYXJkMi5hcHBlbmQoaG92ZXJXaW5kb3dXaGl0ZSlcclxuICAgIGVsZW1IYXJkMy5hcHBlbmQoaG92ZXJXaW5kb3dBbmltZSlcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRIb3ZlcldpbmRvdyhlbGVtSGFyZCwgaG92ZXJXaW5kb3cpIHtcclxuICAgICAgICBpZihlbGVtSGFyZC5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucygnYmFja0FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIGVsZW1IYXJkLnJlbW92ZUNoaWxkKGhvdmVyV2luZG93KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1IYXJkLmFwcGVuZENoaWxkKGhvdmVyV2luZG93KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcGVuZEhvdmVyV2luZG93KGVsZW1IYXJkMSwgaG92ZXJXaW5kb3dCbGFjaylcclxuICAgIGFwcGVuZEhvdmVyV2luZG93KGVsZW1IYXJkMiwgaG92ZXJXaW5kb3dXaGl0ZSlcclxuICAgIGFwcGVuZEhvdmVyV2luZG93KGVsZW1IYXJkMywgaG92ZXJXaW5kb3dBbmltZSlcclxuICAgIGNvbnNvbGUubG9nKGVsZW1IYXJkMy5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucygnYmFja0FjdGl2ZScpKVxyXG5cclxuICAgIGJhY2tBY3RpdmUuYXBwZW5kKGFycm93QWN0aXZlKVxyXG4gICAgdGhlbWVDb250YWluZXJMb3cuYXBwZW5kKGVsZW1Mb3cxLCBlbGVtTG93MiwgZWxlbUxvdzMsIGVsZW1Mb3c0LCBlbGVtTG93NSwgZWxlbUxvdzYsIGVsZW1Mb3c3LCBlbGVtTG93OCwgZWxlbUxvdzksIGVsZW1Mb3cxMCwgZWxlbUxvdzExLCBlbGVtTG93MTIsIGVsZW1Mb3cxMywgZWxlbUxvdzE0LCBlbGVtTG93MTUsIGVsZW1Mb3cxNilcclxuICAgIHRoZW1lQ29udGFpbmVySGFyZC5hcHBlbmQoZWxlbUhhcmQxLCBlbGVtSGFyZDIsIGVsZW1IYXJkMylcclxuXHJcbiAgICByZXR1cm4ge3RoZW1lQ29udGFpbmVyTG93LCB0aGVtZUNvbnRhaW5lckhhcmR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhbmdlVGhlbWVcclxuIiwiY29uc3QgQ2hhbmdlVGhlbWUgPSByZXF1aXJlKCcuL0NoYW5nZVRoZW1lLmpzJylcclxuXHJcbmNvbnN0IERldGFpbHNTZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9vbHRpcFNldHRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbG9jYXRpb25Vc2VyRG9tYWlucyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKCcvJylcclxuICAgIGNvbnN0IG5hbWVMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGxvY2F0aW9uVXNlckRvbWFpbnMpXHJcbiAgICAvLyDQv9C10YDQstGL0Lkg0LHQu9C+0LpcclxuICAgIGNvbnN0IHRvb2x0aXBTaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHNpZGVCYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgY29uc3QgYXBwZWFyU2V0dGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IGxhbmdTZXR0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgbGFuZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGxhbmdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAvLyDQstGC0L7RgNC+0Lkg0LHQu9C+0LpcclxuICAgIGNvbnN0IGxpbmVIciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgLy8g0YLRgNC10YLQuNC5INCx0LvQvtC6XHJcbiAgICAvLyDQv9C10YDQstGL0Lkg0YLQsNCxXHJcbiAgICBjb25zdCB0aGVtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0aGVtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY29uc3QgY2hhbmdlVGhlbWUgPSBDaGFuZ2VUaGVtZSgpXHJcbiAgICAvLyDQstGC0L7RgNC+0Lkg0YLQsNCxXHJcbiAgICBjb25zdCBsYW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGxhbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGNvbnN0IGNoZWNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgIGNvbnN0IHJ1c0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZW5nQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBsYWJlbFJ1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGNvbnN0IGljb25SdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IGNoZWNrUnVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgY29uc3QgbGFiZWxFbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBjb25zdCBpY29uRW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCBjaGVja0VuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGNvbnN0IGJ0bkNoYW5nZUxhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbGV0IGxhbmcgPSAnJ1xyXG5cclxuICAgIHRvb2x0aXBTZXR0aW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBTZXR0aW5nQ29udGFpbmVyJylcclxuICAgIHRvb2x0aXBTaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXBTaWRlQmFyJylcclxuICAgIHNpZGVCYXJMaXN0LmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdMaXN0JylcclxuICAgIGFwcGVhclNldHRpbmcuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ0VsZW0nLCAnYWN0aXZlRWxlbScpXHJcbiAgICBsYW5nU2V0dGluZy5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nRWxlbScpXHJcbiAgICBsYW5nVGV4dC5jbGFzc0xpc3QuYWRkKCdsYW5nVGV4dCcpXHJcbiAgICBsYW5nSWNvbi5jbGFzc0xpc3QuYWRkKCdsYW5nSWNvbicpXHJcbiAgICBsaW5lSHIuY2xhc3NMaXN0LmFkZCgnc2lkZUJhckxpbmVIcicpXHJcbiAgICB0aGVtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aGVtZUNvbnRhaW5lcicsICdhY3RpdmVUaGVtZUNvbnRhaW5lcicpXHJcbiAgICB0aGVtZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RoZW1lVGl0bGUnKVxyXG4gICAgbGFuZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsYW5nQ29udGFpbmVyJylcclxuICAgIGxhbmdUaXRsZS5jbGFzc0xpc3QuYWRkKCdsYW5nVGl0bGUnKVxyXG4gICAgY2hlY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NoZWNrV3JhcHBlcicpXHJcbiAgICBsYWJlbFJ1cy5jbGFzc0xpc3QuYWRkKCdsYW5nTGFiZWwnKVxyXG4gICAgbGFiZWxFbmcuY2xhc3NMaXN0LmFkZCgnbGFuZ0xhYmVsJylcclxuICAgIGljb25SdXMuY2xhc3NMaXN0LmFkZCgnaWNvbkxhbmcnKVxyXG4gICAgaWNvbkVuZy5jbGFzc0xpc3QuYWRkKCdpY29uTGFuZycpXHJcbiAgICBjaGVja1J1cy5jbGFzc0xpc3QuYWRkKCdjaGVja0xhbmcnKVxyXG4gICAgY2hlY2tFbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2tMYW5nJylcclxuICAgIGJ0bkNoYW5nZUxhbmcuY2xhc3NMaXN0LmFkZCgnYnRuQ2hhbmdlTGFuZycpXHJcbiAgICBydXNCbG9jay5jbGFzc0xpc3QuYWRkKCdydXNCbG9jaycpXHJcbiAgICBlbmdCbG9jay5jbGFzc0xpc3QuYWRkKCdlbmdCbG9jaycpXHJcblxyXG4gICAgY2hlY2tSdXMudHlwZSA9ICdyYWRpbydcclxuICAgIGNoZWNrRW5nLnR5cGUgPSAncmFkaW8nXHJcbiAgICBjaGVja1J1cy5uYW1lID0gJ2xhbmcnXHJcbiAgICBjaGVja0VuZy5uYW1lID0gJ2xhbmcnXHJcbiAgICBjaGVja1J1cy5pZCA9ICdydXMnXHJcbiAgICBjaGVja0VuZy5pZCA9ICdlbmcnXHJcbiAgICBsYWJlbFJ1cy5odG1sRm9yID0gJ3J1cydcclxuICAgIGxhYmVsRW5nLmh0bWxGb3IgPSAnZW5nJ1xyXG5cclxuICAgIGxhYmVsUnVzLmlubmVySFRNTCA9ICfQoNGD0YHRgdC60LjQuSdcclxuICAgIGljb25SdXMuaW5uZXJIVE1MID0gYDxzdmcgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxNSAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPjxyZWN0IHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCJ1cmwoI3BhdHRlcm4wKVwiLz48ZGVmcz48cGF0dGVybiBpZD1cInBhdHRlcm4wXCIgcGF0dGVybkNvbnRlbnRVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpbWFnZTBfNDkwNF8xMTQ4MVwiIHRyYW5zZm9ybT1cInNjYWxlKDAuMDMzMzMzMyAwLjA0MTY2NjcpXCIvPjwvcGF0dGVybj48aW1hZ2UgaWQ9XCJpbWFnZTBfNDkwNF8xMTQ4MVwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIyNFwiIHhsaW5rOmhyZWY9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQVlDQVlBQUFEdGFVMi9BQUFBU1VsRVFWUklEZTNSTVEwQU1CQkNVUXgwcVlpS3JzVXU1NEFHRTdBd01ML2tnNWxoWWtpZ01ndmIvbTVxWCtwMUxoTkRBcFZaMlBaM1UvdFN2dzBtaGdRcXM3RHQ3NmEycGY0OWpCMzZkdmhXNndBQUFBQkpSVTVFcmtKZ2dnPT1cIi8+PC9kZWZzPjwvc3ZnPmBcclxuICAgIGxhYmVsRW5nLmlubmVySFRNTCA9ICdFbmdsaXNoJ1xyXG4gICAgaWNvbkVuZy5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDE2IDEyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHJlY3QgeD1cIjAuMzI5MTAyXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNENjJEMjRcIi8+PG1hc2sgaWQ9XCJtYXNrMF80OTA0XzEzMjU4XCIgc3R5bGU9XCJtYXNrLXR5cGU6YWxwaGFcIiBtYXNrVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTJcIj48cmVjdCB4PVwiMC4zMjkxMDJcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI0Q2MkQyNFwiLz48L21hc2s+PGcgbWFzaz1cInVybCgjbWFzazBfNDkwNF8xMzI1OClcIj48cmVjdCB4PVwiNlwiIHk9XCIxXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjFcIiBmaWxsPVwid2hpdGVcIi8+PHJlY3QgeD1cIjZcIiB5PVwiM1wiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxXCIgZmlsbD1cIndoaXRlXCIvPjxyZWN0IHg9XCI2XCIgeT1cIjVcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMVwiIGZpbGw9XCJ3aGl0ZVwiLz48cmVjdCB4PVwiLTFcIiB5PVwiN1wiIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxXCIgZmlsbD1cIndoaXRlXCIvPjxyZWN0IHk9XCI5XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjFcIiBmaWxsPVwid2hpdGVcIi8+PHJlY3QgeT1cIjExXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjFcIiBmaWxsPVwid2hpdGVcIi8+PHJlY3Qgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiNlwiIGZpbGw9XCIjMTc0NUIyXCIvPjwvZz48L3N2Zz5gXHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdGljID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtuYW1lTG9jYXRpb259L3N0YXRpY2ApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGxldCBsYW5nID0gbnVsbFxyXG4gICAgICAgIGlmKGRhdGFbMF0ubGFuZyA9PT0gJ3J1cycpIHtcclxuICAgICAgICAgICAgbGFuZyA9IDFcclxuICAgICAgICAgICAgY2hlY2tSdXMuY2hlY2tlZCA9ICdjaGVja2VkJ1xyXG4gICAgICAgICAgICBsYW5nSWNvbi5pbm5lckhUTUwgPSBpY29uUnVzLmlubmVySFRNTFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxhbmcgPSAyXHJcbiAgICAgICAgICAgIGNoZWNrRW5nLmNoZWNrZWQgPSAnY2hlY2tlZCdcclxuICAgICAgICAgICAgbGFuZ0ljb24uaW5uZXJIVE1MID0gaWNvbkVuZy5pbm5lckhUTUxcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBwZWFyU2V0dGluZy50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMl0uYXBwZWFyYW5jZVxyXG4gICAgICAgIGxhbmdUZXh0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVsyXS5sYW5nXHJcbiAgICAgICAgbGFuZ1RpdGxlLnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVsyXS5zd2l0Y2hMYW5ndWFnZVxyXG4gICAgICAgIGJ0bkNoYW5nZUxhbmcudGV4dENvbnRlbnQgPSBkYXRhW2xhbmddWzJdLmNob29zZUxhbmd1YWdlXHJcbiAgICAgICAgdGhlbWVUaXRsZS50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMl0udGl0bGVUaGVtZVxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGljKClcclxuXHJcbiAgICBhcHBlYXJTZXR0aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGFwcGVhclNldHRpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlRWxlbScpXHJcbiAgICAgICAgbGFuZ1NldHRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlRWxlbScpXHJcbiAgICAgICAgdGhlbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlVGhlbWVDb250YWluZXInKVxyXG4gICAgICAgIGxhbmdDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlVGhlbWVDb250YWluZXInKVxyXG4gICAgfSlcclxuICAgIGxhbmdTZXR0aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGFwcGVhclNldHRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlRWxlbScpXHJcbiAgICAgICAgbGFuZ1NldHRpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlRWxlbScpXHJcbiAgICAgICAgdGhlbWVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlVGhlbWVDb250YWluZXInKVxyXG4gICAgICAgIGxhbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlVGhlbWVDb250YWluZXInKVxyXG4gICAgfSlcclxuXHJcbiAgICBydXNCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsYW5nID0gJ3J1cydcclxuICAgIH0pXHJcbiAgICBlbmdCbG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsYW5nID0gJ2VuZydcclxuICAgIH0pXHJcbiAgICBidG5DaGFuZ2VMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bmFtZUxvY2F0aW9ufS9zdGF0aWNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxhbmcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfSlcclxuXHJcbiAgICBydXNCbG9jay5hcHBlbmQoY2hlY2tSdXMsIGxhYmVsUnVzLCBpY29uUnVzKVxyXG4gICAgZW5nQmxvY2suYXBwZW5kKGNoZWNrRW5nLCBsYWJlbEVuZywgaWNvbkVuZylcclxuICAgIGNoZWNrV3JhcHBlci5hcHBlbmQocnVzQmxvY2ssIGVuZ0Jsb2NrKVxyXG4gICAgbGFuZ0NvbnRhaW5lci5hcHBlbmQobGFuZ1RpdGxlLCBjaGVja1dyYXBwZXIsIGJ0bkNoYW5nZUxhbmcpXHJcbiAgICB0aGVtZUNvbnRhaW5lci5hcHBlbmQodGhlbWVUaXRsZSwgY2hhbmdlVGhlbWUudGhlbWVDb250YWluZXJMb3csIGNoYW5nZVRoZW1lLnRoZW1lQ29udGFpbmVySGFyZClcclxuICAgIGxhbmdTZXR0aW5nLmFwcGVuZChsYW5nVGV4dCwgbGFuZ0ljb24pXHJcbiAgICBzaWRlQmFyTGlzdC5hcHBlbmQoYXBwZWFyU2V0dGluZywgbGFuZ1NldHRpbmcpXHJcbiAgICB0b29sdGlwU2V0dGluZ0NvbnRhaW5lci5hcHBlbmQoc2lkZUJhckxpc3QsIGxpbmVIciwgdGhlbWVDb250YWluZXIsIGxhbmdDb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIHRvb2x0aXBTZXR0aW5nQ29udGFpbmVyXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGV0YWlsc1NldHRpbmdcclxuIiwiY29uc3QgRG9jTWFpbCA9IChsaW5rKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGZpZ3VyZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgZG93bmxvYWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGNvbnN0IGRvd25sb2FkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgZG93bmxvYWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblxyXG4gICAgY29udGFpbmVyTWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJNYWlsJylcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWdEb2MnKVxyXG4gICAgZmlndXJlSW1nLmNsYXNzTGlzdC5hZGQoJ2ZpZ3VyZUltZycpXHJcbiAgICBkb3dubG9hZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkb3dubG9hZENvbnRhaW5lcicpXHJcbiAgICBkb3dubG9hZFRleHQuY2xhc3NMaXN0LmFkZCgnZG93bmxvYWRUZXh0JylcclxuICAgIGRvd25sb2FkSWNvbi5jbGFzc0xpc3QuYWRkKCdkb3dubG9hZEljb24nKVxyXG5cclxuICAgIGRvd25sb2FkQ29udGFpbmVyLmhyZWYgPSAnLyMnXHJcblxyXG4gICAgaW1nLnNyYyA9IGxpbmtcclxuXHJcbiAgICBkb3dubG9hZEljb24uaW5uZXJIVE1MID0gYDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01LjE1MDgxIDYuMjQwNzRDNC43MzE0OCA1Ljg4MTMyIDQuMTAwMTggNS45Mjk4OCAzLjc0MDc2IDYuMzQ5MjFDMy4zODEzNCA2Ljc2ODUzIDMuNDI5OSA3LjM5OTgzIDMuODQ5MjMgNy43NTkyNkw4LjAwMDAyIDExLjMxNzFMMTIuMTUwOCA3Ljc1OTI2QzEyLjU3MDEgNy4zOTk4MyAxMi42MTg3IDYuNzY4NTMgMTIuMjU5MyA2LjM0OTIxQzExLjg5OTkgNS45Mjk4OCAxMS4yNjg2IDUuODgxMzIgMTAuODQ5MiA2LjI0MDc0TDkuMDAwMDIgNy44MjU3OFYyQzkuMDAwMDIgMS40NDc3MSA4LjU1MjMgMSA4LjAwMDAyIDFDNy40NDc3MyAxIDcuMDAwMDIgMS40NDc3MSA3LjAwMDAyIDJWNy44MjU3OEw1LjE1MDgxIDYuMjQwNzRaTTIgMTNDMS40NDc3MiAxMyAxIDEzLjQ0NzcgMSAxNEMxIDE0LjU1MjMgMS40NDc3MiAxNSAyIDE1SDE0QzE0LjU1MjMgMTUgMTUgMTQuNTUyMyAxNSAxNEMxNSAxMy40NDc3IDE0LjU1MjMgMTMgMTQgMTNIMlpcIiBmaWxsPVwiIzJDMkQyRVwiLz48L3N2Zz5gXHJcbiAgICBkb3dubG9hZFRleHQuaW5uZXJIVE1MID0gJ9Ch0LrQsNGH0LDRgtGMJ1xyXG5cclxuICAgIGRvd25sb2FkQ29udGFpbmVyLmFwcGVuZChkb3dubG9hZEljb24sIGRvd25sb2FkVGV4dClcclxuICAgIGZpZ3VyZUltZy5hcHBlbmQoaW1nLCBkb3dubG9hZENvbnRhaW5lcilcclxuICAgIGNvbnRhaW5lck1haWwuYXBwZW5kKGZpZ3VyZUltZylcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyTWFpbFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERvY01haWxcclxuIiwiY29uc3QgRmlsdGVyQnRuID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnRuRmlsdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjb250YWluZXJUb29sdGlwRmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGFycm93RmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCB0b29sdGlwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGZpbHRlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXHJcbiAgICBjb25zdCBhbGxNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgYWxsTWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGRvbmVBbGxNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCB1bnJlYWRNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZG9uZVVucmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgdW5yZWFkTWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHVucmVhZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZmxhZ01haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBkb25lRmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgZmxhZ01haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBmbGFnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBlbmNsb3N1cmVNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZG9uZUVuY2xvc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgZW5jbG9zdXJlTWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGVuY2xvc3VyZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaHJGaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIC8vINCh0L7RgNGC0LjRgNC+0LLQutCwXHJcbiAgICBjb25zdCBzb3J0TWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIC8vIGNvbnN0IGRvbmVFbmNsb3N1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIC8vIGNvbnN0IGVuY2xvc3VyZU1haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAvLyBjb25zdCBlbmNsb3N1cmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIC8qICovXHJcbiAgICBjb25zdCByZXNldE1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY29uc3QgbG9jYXRpb25Vc2VyRG9tYWlucyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKCcvJylcclxuICAgIGNvbnN0IG5hbWVMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGxvY2F0aW9uVXNlckRvbWFpbnMpXHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVEb25lQWxsTWFpbCcpID09PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVRvb2x0aXAgPSBmYWxzZVxyXG4gICAgICAgIGxldCBhY3RpdmVEb25lQWxsTWFpbCA9IHRydWVcclxuICAgICAgICBsZXQgYWN0aXZlRG9uZVVucmVhZCA9IGZhbHNlXHJcbiAgICAgICAgbGV0IGFjdGl2ZURvbmVGbGFnID0gZmFsc2VcclxuICAgICAgICBsZXQgYWN0aXZlRG9uZUVuY2xvc3VyZSA9IGZhbHNlXHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVUb29sdGlwJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlVG9vbHRpcCkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVBbGxNYWlsJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlRG9uZUFsbE1haWwpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lVW5yZWFkJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlRG9uZVVucmVhZCkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVGbGFnJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlRG9uZUZsYWcpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lRW5jbG9zdXJlJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZlRG9uZUVuY2xvc3VyZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcXVlcnkgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JylcclxuXHJcbiAgICBidG5GaWx0ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuRmlsdGVyQ29udGFpbmVyJylcclxuICAgIGJ0bkZpbHRlci5jbGFzc0xpc3QuYWRkKCdidG5GaWx0ZXInKVxyXG4gICAgY29udGFpbmVyVG9vbHRpcEZpbHRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJUb29sdGlwRmlsdGVyJylcclxuICAgIGFycm93RmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2Fycm93RmlsdGVyJylcclxuICAgIHRvb2x0aXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9vbHRpcEZpbHRlckNvbnRhaW5lcicpXHJcbiAgICBmaWx0ZXJMaXN0LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlckxpc3QnKVxyXG4gICAgYWxsTWFpbC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJFbGVtJylcclxuICAgIHVucmVhZE1haWwuY2xhc3NMaXN0LmFkZCgnZmlsdGVyRWxlbScpXHJcbiAgICB1bnJlYWRJY29uLmNsYXNzTGlzdC5hZGQoJ3VucmVhZEljb24nKVxyXG4gICAgZmxhZ01haWwuY2xhc3NMaXN0LmFkZCgnZmlsdGVyRWxlbScpXHJcbiAgICBmbGFnSWNvbi5jbGFzc0xpc3QuYWRkKCdmbGFnSWNvbicpXHJcbiAgICBlbmNsb3N1cmVNYWlsLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlckVsZW0nKVxyXG4gICAgZW5jbG9zdXJlSWNvbi5jbGFzc0xpc3QuYWRkKCdlbmNsb3N1cmVJY29uJylcclxuICAgIGFsbE1haWxUZXh0LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlckVsZW1UZXh0JylcclxuICAgIHVucmVhZE1haWxUZXh0LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlckVsZW1UZXh0JylcclxuICAgIGZsYWdNYWlsVGV4dC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJFbGVtVGV4dCcpXHJcbiAgICBlbmNsb3N1cmVNYWlsVGV4dC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJFbGVtVGV4dCcpXHJcbiAgICBkb25lQWxsTWFpbC5jbGFzc0xpc3QuYWRkKCdkb25lQXJyb3cnKVxyXG4gICAgZG9uZVVucmVhZC5jbGFzc0xpc3QuYWRkKCdkb25lQXJyb3cnKVxyXG4gICAgZG9uZUZsYWcuY2xhc3NMaXN0LmFkZCgnZG9uZUFycm93JylcclxuICAgIGRvbmVFbmNsb3N1cmUuY2xhc3NMaXN0LmFkZCgnZG9uZUFycm93JylcclxuICAgIGhyRmlsdGVyLmNsYXNzTGlzdC5hZGQoJ2hyRmlsdGVyJylcclxuICAgIHJlc2V0TWFpbC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJFbGVtQnRuUmVzZXQnKVxyXG4gICAgcmVzZXQuY2xhc3NMaXN0LmFkZCgncmVzZXRCdG5GaWx0ZXInKVxyXG5cclxuICAgIGNvbnN0IGdldFN0YXRpYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke25hbWVMb2NhdGlvbn0vc3RhdGljYClcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgbGV0IGxhbmcgPSBudWxsXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5sYW5nKVxyXG4gICAgICAgIGlmKGRhdGFbMF0ubGFuZyA9PT0gJ3J1cycpIHtcclxuICAgICAgICAgICAgbGFuZyA9IDFcclxuICAgICAgICB9IGVsc2UgbGFuZyA9IDJcclxuICAgICAgICBjb25zdCB1bnJlYWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVEb25lVW5yZWFkJykpXHJcbiAgICAgICAgY29uc3QgZmxhZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZURvbmVGbGFnJykpXHJcbiAgICAgICAgY29uc3QgZG9jID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlRG9uZUVuY2xvc3VyZScpKVxyXG4gICAgICAgIGlmKHVucmVhZCAmJiAhZmxhZyAmJiAhZG9jKSB7XHJcbiAgICAgICAgICAgIGJ0bkZpbHRlci50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMF0udW5yZWFkXHJcbiAgICAgICAgfSBlbHNlIGlmKCF1bnJlYWQgJiYgZmxhZyAmJiAhZG9jKSB7XHJcbiAgICAgICAgICAgIGJ0bkZpbHRlci50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMF0uZmxhZ1xyXG4gICAgICAgIH0gZWxzZSBpZighdW5yZWFkICYmICFmbGFnICYmIGRvYykge1xyXG4gICAgICAgICAgICBidG5GaWx0ZXIudGV4dENvbnRlbnQgPSBkYXRhW2xhbmddWzBdLmRvY1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bkZpbHRlci50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMF0uZmlsdGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsbE1haWxUZXh0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVswXS5hbGxcclxuICAgICAgICB1bnJlYWRNYWlsVGV4dC50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMF0udW5yZWFkXHJcbiAgICAgICAgZmxhZ01haWxUZXh0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVswXS5mbGFnXHJcbiAgICAgICAgZW5jbG9zdXJlTWFpbFRleHQudGV4dENvbnRlbnQgPSBkYXRhW2xhbmddWzBdLmRvY1xyXG4gICAgICAgIHJlc2V0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVswXS5yZXNldFxyXG4gICAgICAgIGFycm93RmlsdGVyLmlubmVySFRNTCA9IGAke2RhdGFbM11bMF0uYXJyb3dGaWx0ZXJ9YFxyXG4gICAgICAgIGZsYWdJY29uLmlubmVySFRNTCA9IGAke2RhdGFbM11bMF0uZmxhZ2dlZH1gXHJcbiAgICAgICAgZW5jbG9zdXJlSWNvbi5pbm5lckhUTUwgPSBgJHtkYXRhWzNdWzBdLmF0dGFjaH1gXHJcbiAgICAgICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlRG9uZUFsbE1haWwnKSkpIHtcclxuICAgICAgICAgICAgZG9uZUFsbE1haWwuaW5uZXJIVE1MID0gYCR7ZGF0YVszXVswXS5kb25lQWxsTWFpbH1gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9uZUFsbE1haWwuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodW5yZWFkKSB7XHJcbiAgICAgICAgICAgIGRvbmVVbnJlYWQuaW5uZXJIVE1MID0gYCR7ZGF0YVszXVswXS5kb25lQWxsTWFpbH1gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9uZVVucmVhZC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmbGFnKSB7XHJcbiAgICAgICAgICAgIGRvbmVGbGFnLmlubmVySFRNTCA9IGAke2RhdGFbM11bMF0uZG9uZUFsbE1haWx9YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbmVGbGFnLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRvYykge1xyXG4gICAgICAgICAgICBkb25lRmxhZy5pbm5lckhUTUwgPSBgJHtkYXRhWzNdWzBdLmRvbmVBbGxNYWlsfWBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb25lRmxhZy5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGljKClcclxuXHJcbiAgICBidG5GaWx0ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBjb25zdCBhY3RpdmVUb29sdGlwID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlVG9vbHRpcCcpKVxyXG4gICAgICAgIC8vIGFjdGl2ZVRvb2x0aXAgPSAhYWN0aXZlVG9vbHRpcFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVUb29sdGlwJywgIWFjdGl2ZVRvb2x0aXApXHJcbiAgICAgICAgaWYoIWFjdGl2ZVRvb2x0aXApIHtcclxuICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBidG5GaWx0ZXJDb250YWluZXIuYXBwZW5kKHRvb2x0aXBDb250YWluZXIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBidG5GaWx0ZXJDb250YWluZXIucmVtb3ZlQ2hpbGQodG9vbHRpcENvbnRhaW5lcilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZVRvb2x0aXAnKSkpIHtcclxuICAgICAgICB0b29sdGlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgYnRuRmlsdGVyQ29udGFpbmVyLmFwcGVuZCh0b29sdGlwQ29udGFpbmVyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZURvbmVBbGxNYWlsJykpKVxyXG4gICAgICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZURvbmVBbGxNYWlsJykpKSB7XHJcbiAgICAgICAgICAgIGRvbmVBbGxNYWlsLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuNCA1LjU5OThDMTIgNS4xOTk4IDExLjQgNS4xOTk4IDExIDUuNTk5OEw3IDkuNTk5OEw1IDcuNTk5OEM0LjYgNy4xOTk4IDQgNy4xOTk4IDMuNiA3LjU5OThDMy4yIDcuOTk5OCAzLjIgOC41OTk4IDMuNiA4Ljk5OThMNi4zIDExLjY5OThDNi41IDExLjg5OTggNi43IDExLjk5OTggNyAxMS45OTk4QzcuMyAxMS45OTk4IDcuNSAxMS44OTk4IDcuNyAxMS42OTk4TDEyLjQgNi45OTk4QzEyLjggNi41OTk4IDEyLjggNS45OTk4IDEyLjQgNS41OTk4WlwiIGZpbGw9XCIjMkMyRDJFXCIvPjwvc3ZnPmBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb25lQWxsTWFpbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVEb25lVW5yZWFkJykpKSB7XHJcbiAgICAgICAgICAgIGRvbmVVbnJlYWQuaW5uZXJIVE1MID0gYDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMi40IDUuNTk5OEMxMiA1LjE5OTggMTEuNCA1LjE5OTggMTEgNS41OTk4TDcgOS41OTk4TDUgNy41OTk4QzQuNiA3LjE5OTggNCA3LjE5OTggMy42IDcuNTk5OEMzLjIgNy45OTk4IDMuMiA4LjU5OTggMy42IDguOTk5OEw2LjMgMTEuNjk5OEM2LjUgMTEuODk5OCA2LjcgMTEuOTk5OCA3IDExLjk5OThDNy4zIDExLjk5OTggNy41IDExLjg5OTggNy43IDExLjY5OThMMTIuNCA2Ljk5OThDMTIuOCA2LjU5OTggMTIuOCA1Ljk5OTggMTIuNCA1LjU5OThaXCIgZmlsbD1cIiMyQzJEMkVcIi8+PC9zdmc+YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbmVVbnJlYWQuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlRG9uZUZsYWcnKSkpIHtcclxuICAgICAgICAgICAgZG9uZUZsYWcuaW5uZXJIVE1MID0gYDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMi40IDUuNTk5OEMxMiA1LjE5OTggMTEuNCA1LjE5OTggMTEgNS41OTk4TDcgOS41OTk4TDUgNy41OTk4QzQuNiA3LjE5OTggNCA3LjE5OTggMy42IDcuNTk5OEMzLjIgNy45OTk4IDMuMiA4LjU5OTggMy42IDguOTk5OEw2LjMgMTEuNjk5OEM2LjUgMTEuODk5OCA2LjcgMTEuOTk5OCA3IDExLjk5OThDNy4zIDExLjk5OTggNy41IDExLjg5OTggNy43IDExLjY5OThMMTIuNCA2Ljk5OThDMTIuOCA2LjU5OTggMTIuOCA1Ljk5OTggMTIuNCA1LjU5OThaXCIgZmlsbD1cIiMyQzJEMkVcIi8+PC9zdmc+YFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbmVGbGFnLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZURvbmVFbmNsb3N1cmUnKSkpIHtcclxuICAgICAgICAgICAgZG9uZUVuY2xvc3VyZS5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjQgNS41OTk4QzEyIDUuMTk5OCAxMS40IDUuMTk5OCAxMSA1LjU5OThMNyA5LjU5OThMNSA3LjU5OThDNC42IDcuMTk5OCA0IDcuMTk5OCAzLjYgNy41OTk4QzMuMiA3Ljk5OTggMy4yIDguNTk5OCAzLjYgOC45OTk4TDYuMyAxMS42OTk4QzYuNSAxMS44OTk4IDYuNyAxMS45OTk4IDcgMTEuOTk5OEM3LjMgMTEuOTk5OCA3LjUgMTEuODk5OCA3LjcgMTEuNjk5OEwxMi40IDYuOTk5OEMxMi44IDYuNTk5OCAxMi44IDUuOTk5OCAxMi40IDUuNTk5OFpcIiBmaWxsPVwiIzJDMkQyRVwiLz48L3N2Zz5gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9uZUVuY2xvc3VyZS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKGxvY2F0aW9uVXNlckRvbWFpbnMpLmxhc3RJbmRleE9mKCc/JylcclxuICAgIGxldCBsb2NhdGlvblVzZXIgPSBudWxsXHJcbiAgICBpZihxdWVyeVBhcmFtcyA+IC0xKSB7XHJcbiAgICAgICAgbG9jYXRpb25Vc2VyID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UobG9jYXRpb25Vc2VyRG9tYWlucykuc2xpY2UoMCwgcXVlcnlQYXJhbXMpXHJcbiAgICB9IGVsc2UgbG9jYXRpb25Vc2VyID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UobG9jYXRpb25Vc2VyRG9tYWlucylcclxuXHJcbiAgICAvLyDQl9Cw0LrRgNGL0LLQsNC10Lwg0YLRg9C70YLQuNC/INC/0L4g0LrQu9C40LrRgyDQstC90LUg0LXQs9C+INC+0LHQu9Cw0YHRgtC4XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2l0aGluQm91bmRhcmllcyA9IGUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModG9vbHRpcENvbnRhaW5lcilcclxuICAgICAgICBjb25zdCB3aXRoaW5Cb3VuZGFyaWVzMSA9IGUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoYnRuRmlsdGVyKVxyXG4gICAgICAgIC8vIHRvb2x0aXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcblx0XHRpZiAoIXdpdGhpbkJvdW5kYXJpZXMgJiYgIXdpdGhpbkJvdW5kYXJpZXMxKSB7XHJcbiAgICAgICAgICAgIHRvb2x0aXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgYnRuRmlsdGVyQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvb2x0aXBDb250YWluZXIpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVUb29sdGlwJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYWxsTWFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lVW5yZWFkJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lRmxhZycsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlRG9uZUVuY2xvc3VyZScsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSkgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVBbGxNYWlsJywgSlNPTi5zdHJpbmdpZnkodHJ1ZSkpXHJcbiAgICAgICAgZG9uZVVucmVhZC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGRvbmVGbGFnLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgZG9uZUVuY2xvc3VyZS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGRvbmVBbGxNYWlsLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuNCA1LjU5OThDMTIgNS4xOTk4IDExLjQgNS4xOTk4IDExIDUuNTk5OEw3IDkuNTk5OEw1IDcuNTk5OEM0LjYgNy4xOTk4IDQgNy4xOTk4IDMuNiA3LjU5OThDMy4yIDcuOTk5OCAzLjIgOC41OTk4IDMuNiA4Ljk5OThMNi4zIDExLjY5OThDNi41IDExLjg5OTggNi43IDExLjk5OTggNyAxMS45OTk4QzcuMyAxMS45OTk4IDcuNSAxMS44OTk4IDcuNyAxMS42OTk4TDEyLjQgNi45OTk4QzEyLjggNi41OTk4IDEyLjggNS45OTk4IDEyLjQgNS41OTk4WlwiIGZpbGw9XCIjMkMyRDJFXCIvPjwvc3ZnPmBcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn1gXHJcbiAgICB9KVxyXG5cclxuICAgIHVucmVhZE1haWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBjb25zdCBhY3RpdmVVbnJlYWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVEb25lVW5yZWFkJykpXHJcbiAgICAgICAgY29uc3QgY3VyclVucmVhZCA9ICFhY3RpdmVVbnJlYWRcclxuICAgICAgICBjb25zdCBwcmVmaXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHJpbmcoMCwgcXVlcnkgKyAxKSAvLyDQv9GA0LXRhNC40LrRgVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmVmaXgnLCBwcmVmaXgpXHJcbiAgICAgICAgaWYoY3VyclVucmVhZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXhMZW4gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIocHJlZml4Lmxlbmd0aClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVVbnJlYWQnLCBKU09OLnN0cmluZ2lmeSh0cnVlKSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVBbGxNYWlsJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgICAgICBkb25lQWxsTWFpbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBpZihwcmVmaXhMZW4gPT09ICdmaWx0ZXJfX2ZsYWc9MCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfT9maWx0ZXJfX3VucmVhZD0wJmZpbHRlcl9fZmxhZz0wYFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocHJlZml4TGVuID09PSAnZmlsdGVyX19kb2M9MCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfT9maWx0ZXJfX3VucmVhZD0wJmZpbHRlcl9fZG9jPTBgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcmVmaXhMZW4gPT09ICdmaWx0ZXJfX2ZsYWc9MCZmaWx0ZXJfX2RvYz0wJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fdW5yZWFkPTAmZmlsdGVyX19mbGFnPTAmZmlsdGVyX19kb2M9MGAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX191bnJlYWQ9MGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb25lVW5yZWFkLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuNCA1LjU5OThDMTIgNS4xOTk4IDExLjQgNS4xOTk4IDExIDUuNTk5OEw3IDkuNTk5OEw1IDcuNTk5OEM0LjYgNy4xOTk4IDQgNy4xOTk4IDMuNiA3LjU5OThDMy4yIDcuOTk5OCAzLjIgOC41OTk4IDMuNiA4Ljk5OThMNi4zIDExLjY5OThDNi41IDExLjg5OTggNi43IDExLjk5OTggNyAxMS45OTk4QzcuMyAxMS45OTk4IDcuNSAxMS44OTk4IDcuNyAxMS42OTk4TDEyLjQgNi45OTk4QzEyLjggNi41OTk4IDEyLjggNS45OTk4IDEyLjQgNS41OTk4WlwiIGZpbGw9XCIjMkMyRDJFXCIvPjwvc3ZnPmBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXhMZW4gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIocHJlZml4Lmxlbmd0aClcclxuICAgICAgICAgICAgZG9uZVVucmVhZC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlRG9uZVVucmVhZCcsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSlcclxuICAgICAgICAgICAgaWYocHJlZml4TGVuID09PSAnZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2ZsYWc9MCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfT9maWx0ZXJfX2ZsYWc9MGBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHByZWZpeExlbiA9PT0gJ2ZpbHRlcl9fdW5yZWFkPTAmZmlsdGVyX19kb2M9MCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfT9maWx0ZXJfX2RvYz0wYFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocHJlZml4TGVuID09PSAnZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2ZsYWc9MCZmaWx0ZXJfX2RvYz0wJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fZmxhZz0wJmZpbHRlcl9fZG9jPTBgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9YFxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVBbGxNYWlsJywgSlNPTi5zdHJpbmdpZnkodHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICBkb25lQWxsTWFpbC5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjQgNS41OTk4QzEyIDUuMTk5OCAxMS40IDUuMTk5OCAxMSA1LjU5OThMNyA5LjU5OThMNSA3LjU5OThDNC42IDcuMTk5OCA0IDcuMTk5OCAzLjYgNy41OTk4QzMuMiA3Ljk5OTggMy4yIDguNTk5OCAzLjYgOC45OTk4TDYuMyAxMS42OTk4QzYuNSAxMS44OTk4IDYuNyAxMS45OTk4IDcgMTEuOTk5OEM3LjMgMTEuOTk5OCA3LjUgMTEuODk5OCA3LjcgMTEuNjk5OEwxMi40IDYuOTk5OEMxMi44IDYuNTk5OCAxMi44IDUuOTk5OCAxMi40IDUuNTk5OFpcIiBmaWxsPVwiIzJDMkQyRVwiLz48L3N2Zz5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGZsYWdNYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3QgYWN0aXZlRmxhZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZURvbmVGbGFnJykpXHJcbiAgICAgICAgY29uc3QgY3VyckZsYWcgPSAhYWN0aXZlRmxhZ1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cmluZygwLCBxdWVyeSArIDEpIC8vINC/0YDQtdGE0LjQutGBXHJcbiAgICAgICAgaWYoY3VyckZsYWcpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJlZml4TGVuID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3Vic3RyKHByZWZpeC5sZW5ndGgpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lRmxhZycsIEpTT04uc3RyaW5naWZ5KHRydWUpKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlRG9uZUFsbE1haWwnLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpXHJcbiAgICAgICAgICAgIGRvbmVBbGxNYWlsLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIGlmKHByZWZpeExlbiA9PT0gJ2ZpbHRlcl9fdW5yZWFkPTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2ZsYWc9MGBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHByZWZpeExlbiA9PT0gJ2ZpbHRlcl9fZG9jPTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX19mbGFnPTAmZmlsdGVyX19kb2M9MGBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHByZWZpeExlbiA9PT0gJ2ZpbHRlcl9fdW5yZWFkPTAmZmlsdGVyX19kb2M9MCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfT9maWx0ZXJfX3VucmVhZD0wJmZpbHRlcl9fZmxhZz0wJmZpbHRlcl9fZG9jPTBgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fZmxhZz0wYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvbmVGbGFnLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuNCA1LjU5OThDMTIgNS4xOTk4IDExLjQgNS4xOTk4IDExIDUuNTk5OEw3IDkuNTk5OEw1IDcuNTk5OEM0LjYgNy4xOTk4IDQgNy4xOTk4IDMuNiA3LjU5OThDMy4yIDcuOTk5OCAzLjIgOC41OTk4IDMuNiA4Ljk5OThMNi4zIDExLjY5OThDNi41IDExLjg5OTggNi43IDExLjk5OTggNyAxMS45OTk4QzcuMyAxMS45OTk4IDcuNSAxMS44OTk4IDcuNyAxMS42OTk4TDEyLjQgNi45OTk4QzEyLjggNi41OTk4IDEyLjggNS45OTk4IDEyLjQgNS41OTk4WlwiIGZpbGw9XCIjMkMyRDJFXCIvPjwvc3ZnPmBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXhMZW4gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIocHJlZml4Lmxlbmd0aClcclxuICAgICAgICAgICAgZG9uZUZsYWcuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVGbGFnJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgICAgICBpZihwcmVmaXhMZW4gPT09ICdmaWx0ZXJfX3VucmVhZD0wJmZpbHRlcl9fZmxhZz0wJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fdW5yZWFkPTBgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcmVmaXhMZW4gPT09ICdmaWx0ZXJfX2ZsYWc9MCZmaWx0ZXJfX2RvYz0wJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fZG9jPTBgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcmVmaXhMZW4gPT09ICdmaWx0ZXJfX3VucmVhZD0wJmZpbHRlcl9fZmxhZz0wJmZpbHRlcl9fZG9jPTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2RvYz0wYCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvbmVBbGxNYWlsLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuNCA1LjU5OThDMTIgNS4xOTk4IDExLjQgNS4xOTk4IDExIDUuNTk5OEw3IDkuNTk5OEw1IDcuNTk5OEM0LjYgNy4xOTk4IDQgNy4xOTk4IDMuNiA3LjU5OThDMy4yIDcuOTk5OCAzLjIgOC41OTk4IDMuNiA4Ljk5OThMNi4zIDExLjY5OThDNi41IDExLjg5OTggNi43IDExLjk5OTggNyAxMS45OTk4QzcuMyAxMS45OTk4IDcuNSAxMS44OTk4IDcuNyAxMS42OTk4TDEyLjQgNi45OTk4QzEyLjggNi41OTk4IDEyLjggNS45OTk4IDEyLjQgNS41OTk4WlwiIGZpbGw9XCIjMkMyRDJFXCIvPjwvc3ZnPmBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lQWxsTWFpbCcsIEpTT04uc3RyaW5naWZ5KHRydWUpKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgZW5jbG9zdXJlTWFpbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZUVuY2xvc3VyZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZURvbmVFbmNsb3N1cmUnKSlcclxuICAgICAgICBjb25zdCBjdXJyRW5jID0gIWFjdGl2ZUVuY2xvc3VyZVxyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cmluZygwLCBxdWVyeSArIDEpIC8vINC/0YDQtdGE0LjQutGBXHJcbiAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfWApXHJcbiAgICAgICAgaWYoY3VyckVuYykge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXhMZW4gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIocHJlZml4Lmxlbmd0aClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVFbmNsb3N1cmUnLCBKU09OLnN0cmluZ2lmeSh0cnVlKSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVBbGxNYWlsJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgICAgICBkb25lQWxsTWFpbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgICAgICBpZihwcmVmaXhMZW4gPT09ICdmaWx0ZXJfX3VucmVhZD0wJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fdW5yZWFkPTAmZmlsdGVyX19kb2M9MGBcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocHJlZml4TGVuID09PSAnZmlsdGVyX19mbGFnPTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX19mbGFnPTAmZmlsdGVyX19kb2M9MGBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHByZWZpeExlbiA9PT0gJ2ZpbHRlcl9fdW5yZWFkPTAmZmlsdGVyX19mbGFnPTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2ZsYWc9MCZmaWx0ZXJfX2RvYz0wYFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fZG9jPTBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXhMZW4gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIocHJlZml4Lmxlbmd0aClcclxuICAgICAgICAgICAgZG9uZUVuY2xvc3VyZS5pbm5lckhUTUwgPSAnJyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlRG9uZUVuY2xvc3VyZScsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSlcclxuICAgICAgICAgICAgaWYocHJlZml4TGVuID09PSAnZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2RvYz0wJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fdW5yZWFkPTBgXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKHByZWZpeExlbiA9PT0gJ2ZpbHRlcl9fZmxhZz0wJmZpbHRlcl9fZG9jPTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX19mbGFnPTBgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihwcmVmaXhMZW4gPT09ICdmaWx0ZXJfX3VucmVhZD0wJmZpbHRlcl9fZmxhZz0wJmZpbHRlcl9fZG9jPTAnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2ZsYWc9MGBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvbmVBbGxNYWlsLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuNCA1LjU5OThDMTIgNS4xOTk4IDExLjQgNS4xOTk4IDExIDUuNTk5OEw3IDkuNTk5OEw1IDcuNTk5OEM0LjYgNy4xOTk4IDQgNy4xOTk4IDMuNiA3LjU5OThDMy4yIDcuOTk5OCAzLjIgOC41OTk4IDMuNiA4Ljk5OThMNi4zIDExLjY5OThDNi41IDExLjg5OTggNi43IDExLjk5OTggNyAxMS45OTk4QzcuMyAxMS45OTk4IDcuNSAxMS44OTk4IDcuNyAxMS42OTk4TDEyLjQgNi45OTk4QzEyLjggNi41OTk4IDEyLjggNS45OTk4IDEyLjQgNS41OTk4WlwiIGZpbGw9XCIjMkMyRDJFXCIvPjwvc3ZnPmBcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lQWxsTWFpbCcsIEpTT04uc3RyaW5naWZ5KHRydWUpKVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fZG9jPTBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVVbnJlYWQnLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVGbGFnJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lRW5jbG9zdXJlJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lQWxsTWFpbCcsIEpTT04uc3RyaW5naWZ5KHRydWUpKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfWBcclxuICAgIH0pXHJcblxyXG4gICAgYWxsTWFpbC5hcHBlbmQoZG9uZUFsbE1haWwsIGFsbE1haWxUZXh0KVxyXG4gICAgdW5yZWFkTWFpbC5hcHBlbmQoZG9uZVVucmVhZCwgdW5yZWFkSWNvbiwgdW5yZWFkTWFpbFRleHQpXHJcbiAgICBmbGFnTWFpbC5hcHBlbmQoZG9uZUZsYWcsIGZsYWdJY29uLCBmbGFnTWFpbFRleHQpXHJcbiAgICBlbmNsb3N1cmVNYWlsLmFwcGVuZChkb25lRW5jbG9zdXJlLCBlbmNsb3N1cmVJY29uLCBlbmNsb3N1cmVNYWlsVGV4dClcclxuICAgIHJlc2V0TWFpbC5hcHBlbmQocmVzZXQpXHJcbiAgICBmaWx0ZXJMaXN0LmFwcGVuZChhbGxNYWlsLCB1bnJlYWRNYWlsLCBmbGFnTWFpbCwgZW5jbG9zdXJlTWFpbClcclxuICAgIGNvbnRhaW5lclRvb2x0aXBGaWx0ZXIuYXBwZW5kKGZpbHRlckxpc3QpXHJcblxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlRG9uZVVucmVhZCcpKSB8fCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVEb25lRmxhZycpKSB8fCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVEb25lRW5jbG9zdXJlJykpKSB7XHJcbiAgICAgICAgY29udGFpbmVyVG9vbHRpcEZpbHRlci5hcHBlbmQoaHJGaWx0ZXIsIHJlc2V0TWFpbClcclxuICAgIH1cclxuXHJcbiAgICB0b29sdGlwQ29udGFpbmVyLmFwcGVuZChjb250YWluZXJUb29sdGlwRmlsdGVyKVxyXG4gICAgYnRuRmlsdGVyQ29udGFpbmVyLmFwcGVuZChidG5GaWx0ZXIsIGFycm93RmlsdGVyKVxyXG5cclxuICAgIHJldHVybiBidG5GaWx0ZXJDb250YWluZXJcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJCdG5cclxuIiwiLy8gaW1wb3J0ICcuLi9zdHlsZS9VSS5jc3MnXHJcblxyXG5jb25zdCBMaW5lSHIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJylcclxuXHJcbiAgICByZXR1cm4gbGluZVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVIclxyXG4iLCIvLyBpbXBvcnQgJy4uL3N0eWxlL1VJLmNzcydcclxuXHJcbmNvbnN0IE5ld0RpciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgYnRuTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgbG9jYXRpb25Vc2VyRG9tYWlucyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKCcvJylcclxuICAgIGNvbnN0IG5hbWVMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGxvY2F0aW9uVXNlckRvbWFpbnMpXHJcblxyXG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bkNvbnRhaW5lcicpXHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnbmV3RGlyJylcclxuICAgIGJ0bkxvZ28uY2xhc3NMaXN0LmFkZCgnYnRuUGx1cycpXHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdGljID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bmFtZUxvY2F0aW9ufS9zdGF0aWNgKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBsZXQgbGFuZyA9IG51bGxcclxuICAgICAgICBpZihkYXRhWzBdLmxhbmcgPT09ICdydXMnKSB7XHJcbiAgICAgICAgICAgIGxhbmcgPSAxXHJcbiAgICAgICAgfSBlbHNlIGxhbmcgPSAyXHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVsxXS5uZXdEaXJcclxuICAgICAgICBidG5Mb2dvLmlubmVySFRNTCA9IGAke2RhdGFbM11bMF0ubmV3RGlyfWBcclxuICAgIH1cclxuICAgIGdldFN0YXRpYygpXHJcblxyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZChidG5Mb2dvLCBidG4pXHJcblxyXG4gICAgcmV0dXJuIGJ0bkNvbnRhaW5lclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5ld0RpclxyXG4iLCJjb25zdCBTZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJylcclxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbScpXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcbiAgICBjb25zdCBzZXR0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHNldHRpbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHNldHRpbmdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCBsb2NhdGlvblVzZXJEb21haW5zID0gd2luZG93LmxvY2F0aW9uLmhyZWYubGFzdEluZGV4T2YoJy8nKVxyXG4gICAgY29uc3QgbmFtZUxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgbG9jYXRpb25Vc2VyRG9tYWlucylcclxuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uVXNlckRvbWFpbnMpXHJcblxyXG4gICAgc2V0dGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nQ29udGFpbmVyJylcclxuICAgIHNldHRpbmdCdG4uY2xhc3NMaXN0LmFkZCgnc2V0dGluZ0J0bicpXHJcbiAgICBzZXR0aW5nSWNvbi5jbGFzc0xpc3QuYWRkKCdzZXR0aW5nSWNvbicpXHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdGljID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtuYW1lTG9jYXRpb259L3N0YXRpY2ApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGxldCBsYW5nID0gbnVsbFxyXG4gICAgICAgIGlmKGRhdGFbMF0ubGFuZyA9PT0gJ3J1cycpIHtcclxuICAgICAgICAgICAgbGFuZyA9IDFcclxuICAgICAgICB9IGVsc2UgbGFuZyA9IDJcclxuICAgICAgICBzZXR0aW5nQnRuLnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVsxXS5zZXR0aW5nXHJcbiAgICAgICAgc2V0dGluZ0ljb24uaW5uZXJIVE1MID0gYCR7ZGF0YVszXVswXS5zZXR0aW5nfWBcclxuICAgIH1cclxuICAgIGdldFN0YXRpYygpXHJcblxyXG4gICAgLy8g0J7RgtC60YDRi9Cy0LDQtdC8INC/0L4g0L3QsNC20LDRgtC40Y4g0J3QsNGB0YLRgNC+0LnQutC4XHJcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gYCR7bmFtZUxvY2F0aW9ufS9pdGVtYCkge1xyXG4gICAgICAgIHNldHRpbmdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdvcGVuU2V0dGluZycpXHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlVG9vbHRpcCcpXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0dGluZ0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIFxyXG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ29wZW5TZXR0aW5nJylcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVUb29sdGlwJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldHRpbmdDb250YWluZXIuYXBwZW5kKHNldHRpbmdJY29uLCBzZXR0aW5nQnRuKVxyXG5cclxuICAgIHJldHVybiBzZXR0aW5nQ29udGFpbmVyXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ1xyXG4iLCJjb25zdCBUb29sSW1nID0gKGltZ0VsZW0sIGRlc2NFbGVtKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdG9vbHRpcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuICAgIHRvb2x0aXBJbWcuc3JjID0gU3RyaW5nKGltZ0VsZW0pXHJcbiAgICBpbWcuc3JjID0gU3RyaW5nKGltZ0VsZW0pXHJcbiAgICBpbWcuYWx0ID0gJ9Ca0LDRgNGC0LjQvdC60LA6KSdcclxuXHJcbiAgICBjb250YWluZXJJbWcuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVySW1nJylcclxuICAgIHRvb2x0aXBJbWcuY2xhc3NMaXN0LmFkZCgnaW1nVG9vbHRpcCcpXHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nVG9vbHRpcENvbnRhaW5lcicpXHJcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NJbWcnKVxyXG5cclxuICAgIGRlc2MuaW5uZXJIVE1MID0gZGVzY0VsZW1cclxuXHJcbiAgICBjb250YWluZXJJbWcuYXBwZW5kKGltZywgZGVzYywgdG9vbHRpcEltZylcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVySW1nXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9vbEltZ1xyXG4iLCJjb25zdCBXcml0ZUJ0biA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdyaXRlQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHdyaXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IHdyaXRlQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgbG9jYXRpb25Vc2VyRG9tYWlucyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKCcvJylcclxuICAgIGNvbnN0IG5hbWVMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGxvY2F0aW9uVXNlckRvbWFpbnMpXHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdGljID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bmFtZUxvY2F0aW9ufS9zdGF0aWNgKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBsZXQgbGFuZyA9IG51bGxcclxuICAgICAgICBpZihkYXRhWzBdLmxhbmcgPT09ICdydXMnKSB7XHJcbiAgICAgICAgICAgIGxhbmcgPSAxXHJcbiAgICAgICAgfSBlbHNlIGxhbmcgPSAyXHJcbiAgICAgICAgd3JpdGVCdG4uaW5uZXJIVE1MID0gZGF0YVtsYW5nXVsxXS53cml0ZUxldHRlcnNcclxuICAgIH1cclxuICAgIGdldFN0YXRpYygpXHJcblxyXG4gICAgd3JpdGVCdG5JY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTcgMThcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuMzQ3MSA3LjA0MjU0TDUuMDQwOSAxNC40NTY3TDMuNDY2NSAxNC43MTUyTDMuNjQ4NDkgMTMuMDIwM0wxMC45MjI1IDUuNjM4NzRMMTIuMzQ3MSA3LjA0MjU0Wk0xMy43NTA5IDUuNjE3OTlMMTQuNDUyOCA0LjkwNTczQzE0Ljg0MDQgNC41MTIzNSAxNC44MzU4IDMuODc5MiAxNC40NDI0IDMuNDkxNTVDMTQuMDQ5IDMuMTAzOTEgMTMuNDE1OCAzLjEwODU1IDEzLjAyODIgMy41MDE5M0wxMi4zMjYzIDQuMjE0MTlMMTMuNzUwOSA1LjYxNzk5Wk0xNS44NzczIDYuMzA5NTNMNi4wMDgwMyAxNi4zMjQ3TDEuMTk3MzggMTcuMTE0NkwxLjczNDM4IDEyLjExMzNMMTEuNjAzNyAyLjA5ODEzQzEyLjc2NjYgMC45MTc5OTIgMTQuNjY2IDAuOTA0MDU4IDE1Ljg0NjIgMi4wNjdDMTcuMDI2MyAzLjIyOTk1IDE3LjA0MDIgNS4xMjkzOSAxNS44NzczIDYuMzA5NTNaXCIgZmlsbD1cIiMzMzMzMzNcIi8+PC9zdmc+YFxyXG5cclxuICAgIHdyaXRlQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dyaXRlQnRuQ29udGFpbmVyJylcclxuICAgIHdyaXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3dyaXRlQnRuJylcclxuICAgIHdyaXRlQnRuSWNvbi5jbGFzc0xpc3QuYWRkKCd3cml0ZUJ0bkljb24nKVxyXG5cclxuICAgIHdyaXRlQnRuQ29udGFpbmVyLmFwcGVuZCh3cml0ZUJ0bkljb24sIHdyaXRlQnRuKVxyXG5cclxuICAgIHJldHVybiB3cml0ZUJ0bkNvbnRhaW5lclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdyaXRlQnRuXHJcbiIsImNvbnN0IEZpbHRlckJ0biA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHNVSS9GaWx0ZXJCdG4uanMnKVxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgLy8gbG9nbyDQv9GA0LggPjc2OHB4XHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICAvLyBsb2dvINC/0YDQuCA3NjhweFxyXG4gICAgY29uc3Qgc21hbGxMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBjb25zdCBmaWx0ZXJCdG4gPSBGaWx0ZXJCdG4oKVxyXG5cclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJIZWFkZXInKVxyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJMb2dvJylcclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpXHJcbiAgICBzbWFsbExvZ28uY2xhc3NMaXN0LmFkZCgnc21hbGxMb2dvJylcclxuXHJcbiAgICBsb2dvLmhyZWYgPSAnL2luYm94J1xyXG4gICAgc21hbGxMb2dvLmhyZWYgPSAnL2luYm94J1xyXG5cclxuICAgIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVVbnJlYWQnLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVGbGFnJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lRW5jbG9zdXJlJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lQWxsTWFpbCcsIEpTT04uc3RyaW5naWZ5KHRydWUpKVxyXG4gICAgfSlcclxuXHJcbiAgICBzbWFsbExvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVVbnJlYWQnLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVGbGFnJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lRW5jbG9zdXJlJywgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lQWxsTWFpbCcsIEpTT04uc3RyaW5naWZ5KHRydWUpKVxyXG4gICAgfSlcclxuXHJcbiAgICBsb2dvLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiOTZcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgOTYgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTYuMTA4MiAwQzcuMjI2MDcgMCAwIDcuMTc3NTUgMCAxNS45OTk5QzAgMjQuODIyNCA3LjIyNjA3IDMyIDE2LjEwODIgMzJDMTkuMzczNyAzMiAyMi41MjE1IDMxLjAyMyAyNS4xODE2IDI5LjIxNzFMMjMuMDcwMyAyNi43NzkxQzIxLjAwNjEgMjguMDk4IDE4LjYwMDMgMjguODA5OSAxNi4xMDgyIDI4LjgwOTlDOC45OTY5NCAyOC44MDk5IDMuMjExNjcgMjMuMDYzNSAzLjIxMTY3IDE1Ljk5OTlDMy4yMTE2NyA4LjkzNjQzIDguOTk2OTQgMy4xOSAxNi4xMDgyIDMuMTlDMjMuMjE5NSAzLjE5IDI5LjAwNDggOC45MzY0MyAyOS4wMDQ4IDE1Ljk5OTlDMjkuMDA0OCAxNi45MzAxIDI4Ljg5OTYgMTcuODU1IDI4LjcwMDkgMTguNzU0N0MyOC4yODc1IDIwLjQzODYgMjcuMTA1NSAyMC45NTk0IDI2LjE5NzMgMjAuODg4OUMyNS4zMDE4IDIwLjgxNzMgMjQuMjM3OSAyMC4xODMxIDI0LjIzMSAxOC42MTdWMTUuOTk5OUMyNC4yMzEgMTEuNTUxMiAyMC41ODcgNy45MzE3NCAxNi4xMDgyIDcuOTMxNzRDMTEuNjI5NSA3LjkzMTc0IDcuOTg1MzYgMTEuNTUxMiA3Ljk4NTM2IDE1Ljk5OTlDNy45ODUzNiAyMC40NDg5IDExLjYyOTUgMjQuMDY4MyAxNi4xMDgyIDI0LjA2ODNDMTguMzc4IDI0LjA2ODMgMjAuNDMyMiAyMy4xMzc1IDIxLjkwNzUgMjEuNjQxNkMyMi43NzYzIDIzLjAxOTcgMjQuMjE0OSAyMy45MzExIDI1LjkzOTkgMjQuMDY4OEMyNi4wODM4IDI0LjA4MDIgMjYuMjI3NCAyNC4wODU5IDI2LjM3MDYgMjQuMDg1OUMyNy41Mzk0IDI0LjA4NTkgMjguNjc5MiAyMy43MDY3IDI5LjYxOTYgMjIuOTk3NUMzMC41OTAzIDIyLjI2NTYgMzEuMjk2OSAyMS4yMjUzIDMxLjY5MyAxOS45NjY4QzMxLjc1NjMgMTkuNzY1OCAzMS44NzI0IDE5LjMwMDEgMzEuODczNyAxOS4yOTM5QzMyLjEzNzggMTguMTU4IDMyLjIxNjQgMTcuMTA5OSAzMi4yMTY0IDE1Ljk5OTlDMzIuMjE2NCA3LjE3NzU1IDI0Ljk5MDIgMCAxNi4xMDgyIDBaTTExLjE5NyAxNS45OTk5QzExLjE5NyAxMy4zMTAyIDEzLjQwMDMgMTEuMTIxOCAxNi4xMDgyIDExLjEyMThDMTguODE2MiAxMS4xMjE4IDIxLjAxOTMgMTMuMzEwMiAyMS4wMTkzIDE1Ljk5OTlDMjEuMDE5MyAxOC42ODk4IDE4LjgxNjIgMjAuODc4MiAxNi4xMDgyIDIwLjg3ODJDMTMuNDAwMyAyMC44NzgyIDExLjE5NyAxOC42ODk4IDExLjE5NyAxNS45OTk5WlwiIGZpbGw9XCIjRkY5RTAwXCIvPjxwYXRoIGNsYXNzPVwibWFpbFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04Mi43MzI5IDIzLjQ3ODRINzkuNzEwOVYyMi4zNzQxQzc4LjU0MzMgMjMuMzg4NCA3Ny4wMTc5IDIzLjk5MjYgNzUuMjIzMyAyMy45OTI2QzcwLjkzMTcgMjMuOTkyNiA2Ny40NDc1IDIwLjUzNzEgNjcuNDQ3NSAxNi4yODA5QzY3LjQ0NzUgMTIuMDI0NyA3MC45MzE3IDguNTY5MjMgNzUuMjIzMyA4LjU2OTIzQzc3LjAxNzkgOC41NjkyMyA3OC41NDMzIDkuMTczNDEgNzkuNzEwOSAxMC4xODc3VjkuMDgzMjhIODIuNzMyOVYyMy40Nzg0Wk00NC4zNzA2IDIzLjQ3ODRINDEuMzQ4NlY5LjA4MzM4SDQ0LjM3MDZWOS44ODI3NUM0NS4wNDE3IDkuMjU2OTkgNDYuMzA0OCA4LjU3MTM0IDQ3Ljg3MTcgOC41NjkyM0M0OS44ODQyIDguNTY5MjMgNTEuNjg2MyA5LjQ3ODE4IDUyLjg4MzggMTAuOTAzNUM1NC4wODE0IDkuNDc4MTggNTUuODgzNSA4LjU2OTIzIDU3Ljg5NTkgOC41NjkyM0M2MS40OTI3IDguNTY5MjMgNjQuNDE5IDExLjQ3MTQgNjQuNDE5IDE1LjAzODVWMjMuNDc4NEg2MS4zOTdWMTUuMDM4NUM2MS4zOTcgMTMuMTI0IDU5LjgyNjMgMTEuNTY2NCA1Ny44OTU5IDExLjU2NjRDNTUuOTY1MyAxMS41NjY0IDU0LjM5NDkgMTMuMTI0IDU0LjM5NDkgMTUuMDM4NVYyMy40Nzg0SDUxLjM3MjhWMTUuMDM4NUM1MS4zNzI4IDEzLjEyNCA0OS44MDIxIDExLjU2NjQgNDcuODcxNyAxMS41NjY0QzQ1Ljk0MTIgMTEuNTY2NCA0NC4zNzA2IDEzLjEyNCA0NC4zNzA2IDE1LjAzODVWMjMuNDc4NFpNODYuMzQ0MyAyMy40Nzg0SDg5LjM2NjNWOS4wODMzN0g4Ni4zNDQzVjIzLjQ3ODRaTTkyLjk3OCAyMy40Nzg0SDk2VjIuOTE0SDkyLjk3OFYyMy40Nzg0Wk03NS4yMjMzIDExLjUyNTlDNzcuODY5NCAxMS41MjU5IDc5Ljk1NDYgMTMuNjU2NiA3OS45NTQ2IDE2LjI4MDlDNzkuOTU0NiAxOC45MDUyIDc3Ljg2OTQgMjEuMDM1OCA3NS4yMjMzIDIxLjAzNThDNzIuNTc3MSAyMS4wMzU4IDcwLjQyODggMTguOTA1MiA3MC40Mjg4IDE2LjI4MDlDNzAuNDI4OCAxMy42NTY2IDcyLjU3NzEgMTEuNTI1OSA3NS4yMjMzIDExLjUyNTlaTTg3Ljg1NzcgMi4zOTk4NkM4OS4wMDMzIDIuMzk5ODYgODkuOTMzNCAzLjMyMjMxIDg5LjkzMzQgNC40NTg0Qzg5LjkzMzQgNS41OTQ1OCA4OS4wMDMzIDYuNTE3MDQgODcuODU3NyA2LjUxNzA0Qzg2LjcxMjEgNi41MTcwNCA4NS43ODIgNS41OTQ1OCA4NS43ODIgNC40NTg0Qzg1Ljc4MiAzLjMyMjMxIDg2LjcxMjEgMi4zOTk4NiA4Ny44NTc3IDIuMzk5ODZaXCIgZmlsbD1cIiMwMDVGRjlcIi8+PC9zdmc+YFxyXG4gICAgc21hbGxMb2dvLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTYgMEM3LjE3NzU1IDAgMCA3LjE3NzU1IDAgMTUuOTk5OUMwIDI0LjgyMjQgNy4xNzc1NSAzMiAxNiAzMkMxOS4yNDM2IDMyIDIyLjM3MDIgMzEuMDIzIDI1LjAxMjUgMjkuMjE3MUwyMi45MTU0IDI2Ljc3OTFDMjAuODY1MSAyOC4wOTggMTguNDc1NCAyOC44MDk5IDE2IDI4LjgwOTlDOC45MzY1MyAyOC44MDk5IDMuMTkwMSAyMy4wNjM1IDMuMTkwMSAxNS45OTk5QzMuMTkwMSA4LjkzNjQzIDguOTM2NTMgMy4xOSAxNiAzLjE5QzIzLjA2MzYgMy4xOSAyOC44MSA4LjkzNjQzIDI4LjgxIDE1Ljk5OTlDMjguODEgMTYuOTMwMSAyOC43MDU2IDE3Ljg1NSAyOC41MDgyIDE4Ljc1NDdDMjguMDk3NiAyMC40Mzg2IDI2LjkyMzUgMjAuOTU5NCAyNi4wMjE0IDIwLjg4ODlDMjUuMTMxOSAyMC44MTczIDI0LjA3NTIgMjAuMTgzMSAyNC4wNjgzIDE4LjYxN1YxNS45OTk5QzI0LjA2ODMgMTEuNTUxMiAyMC40NDg4IDcuOTMxNzQgMTYgNy45MzE3NEMxMS41NTE0IDcuOTMxNzQgNy45MzE3NCAxMS41NTEyIDcuOTMxNzQgMTUuOTk5OUM3LjkzMTc0IDIwLjQ0ODkgMTEuNTUxNCAyNC4wNjgzIDE2IDI0LjA2ODNDMTguMjU0NiAyNC4wNjgzIDIwLjI5NSAyMy4xMzc1IDIxLjc2MDQgMjEuNjQxNkMyMi42MjM0IDIzLjAxOTcgMjQuMDUyMyAyMy45MzExIDI1Ljc2NTggMjQuMDY4OEMyNS45MDg2IDI0LjA4MDIgMjYuMDUxMyAyNC4wODU5IDI2LjE5MzUgMjQuMDg1OUMyNy4zNTQ1IDI0LjA4NTkgMjguNDg2NyAyMy43MDY3IDI5LjQyMDcgMjIuOTk3NUMzMC4zODQ5IDIyLjI2NTYgMzEuMDg2OCAyMS4yMjUzIDMxLjQ4MDIgMTkuOTY2OEMzMS41NDMxIDE5Ljc2NTggMzEuNjU4NCAxOS4zMDAxIDMxLjY1OTcgMTkuMjkzOUMzMS45MjIgMTguMTU4IDMyLjAwMDEgMTcuMTA5OSAzMi4wMDAxIDE1Ljk5OTlDMzIuMDAwMSA3LjE3NzU1IDI0LjgyMjQgMCAxNiAwWk0xMS4xMjE4IDE1Ljk5OTlDMTEuMTIxOCAxMy4zMTAyIDEzLjMxMDMgMTEuMTIxOCAxNiAxMS4xMjE4QzE4LjY4OTggMTEuMTIxOCAyMC44NzgyIDEzLjMxMDIgMjAuODc4MiAxNS45OTk5QzIwLjg3ODIgMTguNjg5OCAxOC42ODk4IDIwLjg3ODIgMTYgMjAuODc4MkMxMy4zMTAzIDIwLjg3ODIgMTEuMTIxOCAxOC42ODk4IDExLjEyMTggMTUuOTk5OVpcIiBmaWxsPVwiI0ZGOUUwMFwiLz48L3N2Zz5gXHJcblxyXG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmQobG9nbywgc21hbGxMb2dvKVxyXG4gICAgaGVhZGVyLmFwcGVuZChsb2dvQ29udGFpbmVyLCBmaWx0ZXJCdG4pXHJcblxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlclxyXG4iLCJjb25zdCBIZWFkZXJJdGVtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXHJcbiAgICBjb25zdCBiYWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGJhY2tMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCBiYWNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgbG9jYXRpb25Vc2VyRG9tYWlucyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmxhc3RJbmRleE9mKCcvJylcclxuICAgIGNvbnN0IG5hbWVMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGxvY2F0aW9uVXNlckRvbWFpbnMpXHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoYGNvbnRhaW5lckhlYWRlcmApXHJcbiAgICBiYWNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGNvbnRhaW5lckxvZ29gKVxyXG4gICAgYmFja1RleHQuY2xhc3NMaXN0LmFkZCgnYmFja1RleHQnKVxyXG4gICAgYmFja0xvZ28uY2xhc3NMaXN0LmFkZCgnYmFja0xvZ28nKVxyXG5cclxuICAgIGJhY2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8g0L/QtdGA0LXRhdC+0LTQuNC8INC90LAg0L/RgNC10LTRi9C00YPRidGD0Y4g0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdGljID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bmFtZUxvY2F0aW9ufS9zdGF0aWNgKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBsZXQgbGFuZyA9IG51bGxcclxuICAgICAgICBpZihkYXRhWzBdLmxhbmcgPT09ICdydXMnKSB7XHJcbiAgICAgICAgICAgIGxhbmcgPSAxXHJcbiAgICAgICAgfSBlbHNlIGxhbmcgPSAyXHJcbiAgICAgICAgYmFja1RleHQudGV4dENvbnRlbnQgPSBkYXRhW2xhbmddWzBdLnJldHVyblxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGljKClcclxuXHJcbiAgICBiYWNrTG9nby5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgNyAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02LjIwNzEgMTEuMjA3MUM1LjgxNjU4IDExLjU5NzYgNS4xODM0MSAxMS41OTc2IDQuNzkyODkgMTEuMjA3MUwwLjI5Mjg5MiA2LjcwNzExQy0wLjA5NzYzMjEgNi4zMTY1OCAtMC4wOTc2MzIgNS42ODM0MiAwLjI5Mjg5MyA1LjI5Mjg5TDQuNzkyODkgMC43OTI4OTRDNS4xODM0MiAwLjQwMjM3IDUuODE2NTggMC40MDIzNyA2LjIwNzExIDAuNzkyODk1QzYuNTk3NjMgMS4xODM0MiA2LjU5NzYzIDEuODE2NTggNi4yMDcxMSAyLjIwNzExTDIuNDE0MjEgNkw2LjIwNzEgOS43OTI4OUM2LjU5NzYzIDEwLjE4MzQgNi41OTc2MyAxMC44MTY2IDYuMjA3MSAxMS4yMDcxWlwiIGZpbGw9XCIjMkMyRDJFXCIvPjwvc3ZnPmBcclxuXHJcbiAgICBiYWNrQ29udGFpbmVyLmFwcGVuZChiYWNrTG9nbywgYmFja1RleHQpXHJcbiAgICBoZWFkZXIuYXBwZW5kKGJhY2tDb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlckl0ZW1cclxuIiwiY29uc3QgRG9jTWFpbCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHNVSS9Eb2NNYWlsLmpzJylcclxuXHJcbmNvbnN0IEluZm9JdGVtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgY29uc3QgY29udGFpbmVyRG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1haWxEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGF1dGhvckltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBhdXRob3JJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgYXV0aG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHNlbmRNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHJlY2VpdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBtYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgaW5mb0RvY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpbmZvRG9jQW1vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBpbmZvRG9jTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb25zdCBpbmZvRG9jU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgY2F0ZWdvcmllc01haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY2F0ZWdvcmllc01haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCBjYXRlZ29yaWVzTWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBbXVxyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJJbmZvJylcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlSW5mbycpXHJcbiAgICBtYWlsRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdtYWluRGV0YWlscycpXHJcbiAgICBhdXRob3JJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXV0aG9ySW1nQ29udGFpbmVyJylcclxuICAgIGF1dGhvckltZy5jbGFzc0xpc3QuYWRkKCdhdXRob3JJbWcnKVxyXG4gICAgYXV0aG9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2F1dGhvckNvbnRhaW5lcicpXHJcbiAgICBzZW5kTWFpbC5jbGFzc0xpc3QuYWRkKCdzZW5kTWFpbCcpXHJcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKVxyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJylcclxuICAgIHJlY2VpdmVyLmNsYXNzTGlzdC5hZGQoJ3JlY2VpdmVyJylcclxuICAgIG1haWxUZXh0LmNsYXNzTGlzdC5hZGQoJ21haWxUZXh0JylcclxuICAgIGNvbnRhaW5lckRvYy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXJEb2MnKVxyXG4gICAgaW5mb0RvY0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvRG9jQ29udGFpbmVyJylcclxuICAgIGluZm9Eb2NBbW8uY2xhc3NMaXN0LmFkZCgnaW5mb0RvY0FtbycpXHJcbiAgICBpbmZvRG9jTG9hZC5jbGFzc0xpc3QuYWRkKCdpbmZvRG9jTG9hZCcpXHJcbiAgICBpbmZvRG9jU2l6ZS5jbGFzc0xpc3QuYWRkKCdpbmZvRG9jU2l6ZScpXHJcbiAgICBjYXRlZ29yaWVzTWFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yaWVzTWFpbENvbnRhaW5lcicpXHJcbiAgICBjYXRlZ29yaWVzTWFpbEljb24uY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcmllc01haWxJY29uJylcclxuICAgIGNhdGVnb3JpZXNNYWlsVGV4dC5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yaWVzTWFpbFRleHQnKVxyXG5cclxuICAgIGNvbnN0IG1haWxPYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYWlsVG8nKSlcclxuICAgIGNvbnN0IGxvY2F0aW9uVXNlckRvbWFpbnMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5sYXN0SW5kZXhPZignLycpXHJcbiAgICBjb25zdCBuYW1lTG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBsb2NhdGlvblVzZXJEb21haW5zKVxyXG5cclxuICAgIGNvbnN0IHJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bmFtZUxvY2F0aW9ufS9hcGkvY2xpZW50c2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWFpbE9iamVjdD8uaWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZVN0YXRpYyA9IGF3YWl0IGZldGNoKGAke25hbWVMb2NhdGlvbn0vc3RhdGljYClcclxuICAgICAgICBjb25zdCBkYXRhU3RhdGljID0gYXdhaXQgcmVzcG9uc2VTdGF0aWMuanNvbigpXHJcbiAgICAgICAgbGV0IGxhbmcgPSBudWxsXHJcbiAgICAgICAgaWYoZGF0YVN0YXRpY1swXS5sYW5nID09PSAncnVzJykge1xyXG4gICAgICAgICAgICBsYW5nID0gMVxyXG4gICAgICAgIH0gZWxzZSBsYW5nID0gMlxyXG5cclxuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0L3QsCDQvdCw0LvQuNGH0LjQtSDQsNCy0LDRgtCw0YDQsCwg0LIg0YHQu9GD0YfQsNC1INC+0YLRgdGD0YLRgdGC0LLQuNGPINCy0YvQtNCw0LXQvCDQtNC10YTQvtC70YLQvdGD0Y4g0LrQsNGA0YLQuNC90LrRg1xyXG4gICAgICAgIGlmIChkYXRhWzBdPy5hdXRob3I/LmF2YXRhcikge1xyXG4gICAgICAgICAgICBhdXRob3JJbWcuc3JjID0gZGF0YVswXT8uYXV0aG9yPy5hdmF0YXJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhdXRob3JJbWcuc3JjID0gJ2gnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDRgNC10LbQtdC8INC/0L7QtCDRhNC+0YDQvNCw0YIgaGg6bW1cclxuICAgICAgICBjb25zdCBnZXRIb3VycyA9IGRhdGFbMF0/LmRhdGU/LnRvU3RyaW5nKCkuc2xpY2UoMTEsIDEzKVxyXG4gICAgICAgIGNvbnN0IGdldE1pbnV0ZXMgPSBkYXRhWzBdPy5kYXRlPy50b1N0cmluZygpLnNsaWNlKDE0LCAxNilcclxuICAgICAgICBjb25zdCBkYXRlRGF5ID0gZGF0YVswXT8uZGF0ZT8udG9TdHJpbmcoKS5zbGljZSg4LCAxMClcclxuICAgICAgICBsZXQgZGF0ZU1vbnRoID0gZGF0YVswXT8uZGF0ZT8udG9TdHJpbmcoKS5zbGljZSg1LCA3KVxyXG5cclxuICAgICAgICAvLyDRhNC+0YDQvNCw0YLQuNGA0YPQtdC8INC80LXRgdGP0YYo0YbQuNGE0YDRiyA9PiDRgdC70L7QstCwKVxyXG4gICAgICAgIGlmKGxhbmcgPT09IDEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGVNb250aCA9PT0gJzAwJykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZU1vbnRoID0gJ9GP0L3QstCw0YDRjydcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwMScpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICfRhNC10LLRgNCw0LvRjydcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwMicpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICfQvNCw0YDRgtCwJ1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVNb250aCA9PT0gJzAzJykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZU1vbnRoID0gJ9Cw0L/RgNC10LvRjydcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwNCcpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICfQvNCw0Y8nXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDUnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAn0LjRjtC90Y8nXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDYnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAn0LjRjtC70Y8nXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDcnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAn0LDQstCz0YPRgdGC0LAnXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDgnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAn0YHQtdC90YLRj9Cx0YDRjydcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwOScpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICfQvtC60YLRj9Cx0YDRjydcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcxMCcpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICfQvdC+0Y/QsdGA0Y8nXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMTEnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAn0LTQtdC60LDQsdGA0Y8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGF0ZU1vbnRoID09PSAnMDAnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAnamFudWFyeSdcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwMScpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICdGZWJydWFyeSdcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwMicpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICdNYXJ0aGEnXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDMnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAnQXByaWwnXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDQnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAnTWF5J1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVNb250aCA9PT0gJzA1Jykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZU1vbnRoID0gJ0p1bmUnXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDYnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAnSnVseSdcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwNycpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVNb250aCA9ICdBdWd1c3QnXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDgnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAnU2VwdGVtYmVyJ1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGVNb250aCA9PT0gJzA5Jykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZU1vbnRoID0gJ09jdG9iZXInXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMTAnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAnTm92ZW1iZXInXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMTEnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlTW9udGggPSAnRGVjZW1iZXInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINC/0LXRgNC10LLQvtC00LjQvCDRgNGD0YHRgdC60LjQuSDRj9C30YvQuiDQsiDRj9C30YvQuiBzdmdcclxuICAgICAgICBpZiAoZGF0YVswXT8uZmxhZykge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVswXT8uZmxhZyA9PT0gXCLQl9Cw0LrQsNC30YtcIikge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc01haWxJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMiA0QzIgMy40NDc3MiAyLjQ0NzcyIDMgMyAzSDVDNS40ODg4NCAzIDUuOTA2MDMgMy4zNTM0MSA1Ljk4NjM5IDMuODM1Nkw2LjE4MDQ2IDVIMTdDMTcuNTUyMyA1IDE4IDUuNDQ3NzIgMTggNlY5Ljg1MDk0QzE4IDExLjExNzQgMTcuMDg3NSAxMi4xOTk2IDE1LjgzOTMgMTIuNDEzNkw2Ljk2NDkyIDEzLjkzNTJDNi45MTQzNCAxMy45NDM4IDYuODY0IDEzLjk0ODUgNi44MTQyMiAxMy45NDk1QzYuNzY2MDMgMTMuOTY1NCA2LjcxNjAxIDEzLjk3NzggNi42NjQ0IDEzLjk4NjRDNi4xMTk2MyAxNC4wNzcyIDUuNjA0NCAxMy43MDkyIDUuNTEzNjEgMTMuMTY0NEw0LjE1Mjg3IDVIM0MyLjQ0NzcyIDUgMiA0LjU1MjI4IDIgNFpNNy4zMjEyNyAxMS44NDQ5TDYuNTEzNzkgN0gxNlY5Ljg1MDk0QzE2IDEwLjE0MzIgMTUuNzg5NCAxMC4zOTI5IDE1LjUwMTQgMTAuNDQyM0w3LjMyMTI3IDExLjg0NDlaTTkgMTYuNUM5IDE3LjMyODQgOC4zMjg0MyAxOCA3LjUgMThDNi42NzE1NyAxOCA2IDE3LjMyODQgNiAxNi41QzYgMTUuNjcxNiA2LjY3MTU3IDE1IDcuNSAxNUM4LjMyODQzIDE1IDkgMTUuNjcxNiA5IDE2LjVaTTE2IDE2LjVDMTYgMTcuMzI4NCAxNS4zMjg0IDE4IDE0LjUgMThDMTMuNjcxNiAxOCAxMyAxNy4zMjg0IDEzIDE2LjVDMTMgMTUuNjcxNiAxMy42NzE2IDE1IDE0LjUgMTVDMTUuMzI4NCAxNSAxNiAxNS42NzE2IDE2IDE2LjVaXCIgZmlsbD1cIiNGOTRDQTNcIi8+PC9zdmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdPy5mbGFnID09PSBcItCk0LjQvdCw0L3RgdGLXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNNYWlsSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYuNSAzSDExQzEzLjQ4NTMgMyAxNS41IDUuMDE0NzIgMTUuNSA3LjVDMTUuNSA5Ljk4NTI4IDEzLjQ4NTMgMTIgMTEgMTJINy41VjEzSDEyLjVDMTMuMDUyMyAxMyAxMy41IDEzLjQ0NzcgMTMuNSAxNEMxMy41IDE0LjU1MjMgMTMuMDUyMyAxNSAxMi41IDE1SDcuNVYxNkM3LjUgMTYuNTUyMyA3LjA1MjI4IDE3IDYuNSAxN0M1Ljk0NzcyIDE3IDUuNSAxNi41NTIzIDUuNSAxNlYxNUM0Ljk0NzcyIDE1IDQuNSAxNC41NTIzIDQuNSAxNEM0LjUgMTMuNDQ3NyA0Ljk0NzcyIDEzIDUuNSAxM1YxMkM0Ljk0NzcyIDEyIDQuNSAxMS41NTIzIDQuNSAxMUM0LjUgMTAuNDQ3NyA0Ljk0NzcyIDEwIDUuNSAxMFY0QzUuNSAzLjQ0NzcyIDUuOTQ3NzIgMyA2LjUgM1pNNy41IDEwSDExQzEyLjM4MDcgMTAgMTMuNSA4Ljg4MDcxIDEzLjUgNy41QzEzLjUgNi4xMTkyOSAxMi4zODA3IDUgMTEgNUg3LjVWMTBaXCIgZmlsbD1cIiMyNEM3ODBcIi8+PC9zdmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdPy5mbGFnID09PSBcItCg0LXQs9C40YHRgtGA0LDRhtC40LhcIikge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc01haWxJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTMuNjU2OSA0LjkyODk3QzEyLjQ4NTMgMy43NTc0IDEwLjU4NTggMy43NTc0IDkuNDE0MjUgNC45Mjg5N0w3LjI5MjkzIDcuMDUwMjlDNi45MDI0MSA3LjQ0MDgyIDYuOTAyNDEgOC4wNzM5OCA3LjI5MjkzIDguNDY0NTFMOC4wMDAwNCA5LjE3MTYxQzguMTg3NTggOS4zNTkxNSA4LjI5MjkzIDkuNjEzNSA4LjI5MjkzIDkuODc4NzJDOC4yOTI5MyAxMC4xNDM5IDguMTg3NTggMTAuMzk4MyA4LjAwMDA0IDEwLjU4NThMNC4wNTAyOSAxNC41MzU2VjE1Ljk0OThINS42MjM5NEw5LjM5OTgyIDEyLjAxNDhDOS41ODU5MiAxMS44MjA4IDkuODQyMjYgMTEuNzEgMTAuMTExIDExLjcwNzJDMTAuMzc5OCAxMS43MDQ0IDEwLjYzODQgMTEuODEgMTAuODI4NSAxMkwxMS41MzU2IDEyLjcwNzFDMTEuOTI2MSAxMy4wOTc3IDEyLjU1OTMgMTMuMDk3NyAxMi45NDk4IDEyLjcwNzFMMTUuMDcxMSAxMC41ODU4QzE2LjI0MjcgOS40MTQyNSAxNi4yNDI3IDcuNTE0NzYgMTUuMDcxMSA2LjM0MzE5TDEzLjY1NjkgNC45Mjg5N1pNOC4wMDAwNCAzLjUxNDc2QzkuOTUyNjYgMS41NjIxNCAxMy4xMTg1IDEuNTYyMTQgMTUuMDcxMSAzLjUxNDc2TDE2LjQ4NTMgNC45Mjg5N0MxOC40Mzc5IDYuODgxNTkgMTguNDM3OSAxMC4wNDc0IDE2LjQ4NTMgMTJMMTQuMzY0IDE0LjEyMTRDMTMuMTk3MyAxNS4yODggMTEuMzA4OSAxNS4yOTI5IDEwLjEzNjIgMTQuMTM2MUw2Ljc3MTg0IDE3LjY0MjJDNi41ODMyNiAxNy44Mzg3IDYuMzIyNjcgMTcuOTQ5OCA2LjA1MDI5IDE3Ljk0OThIMy4wNTAyOUMyLjQ5ODAxIDE3Ljk0OTggMi4wNTAyOSAxNy41MDIxIDIuMDUwMjkgMTYuOTQ5OFYxNC4xMjE0QzIuMDUwMjkgMTMuODU2MSAyLjE1NTY1IDEzLjYwMTggMi4zNDMxOSAxMy40MTQzTDUuODc4NzIgOS44Nzg3MkM0LjcwNzE1IDguNzA3MTUgNC43MDcxNSA2LjgwNzY1IDUuODc4NzIgNS42MzYwOEw4LjAwMDA0IDMuNTE0NzZaTTEwLjgyODQgNi4zNDMyNkMxMS4yMTkgNS45NTI3MyAxMS44NTIxIDUuOTUyNzMgMTIuMjQyNiA2LjM0MzI2TDEzLjY1NjkgNy43NTc0N0MxNC4wNDc0IDguMTQ3OTkgMTQuMDQ3NCA4Ljc4MTE2IDEzLjY1NjkgOS4xNzE2OEMxMy4yNjYzIDkuNTYyMjEgMTIuNjMzMiA5LjU2MjIxIDEyLjI0MjYgOS4xNzE2OEwxMC44Mjg0IDcuNzU3NDdDMTAuNDM3OSA3LjM2Njk0IDEwLjQzNzkgNi43MzM3OCAxMC44Mjg0IDYuMzQzMjZaXCIgZmlsbD1cIiNFRUFDMkNcIi8+PC9zdmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdPy5mbGFnID09PSBcItCf0YPRgtC10YjQtdGB0YLQstC40Y9cIikge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc01haWxJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuODY0NyAyLjg5Mjg0QzE0LjAzNjMgMS43MjEyNyAxNS45MzU3IDEuNzIxMjcgMTcuMTA3MyAyLjg5Mjg0QzE4LjI3ODkgNC4wNjQ0MSAxOC4yNzg5IDUuOTYzOTEgMTcuMTA3MyA3LjEzNTQ4TDE0LjcxNzEgOS41MjU3NEwxNi43NTU2IDE0LjAxMDZDMTcuMTI0NCAxNC44MjE5IDE2Ljk1MTIgMTUuNzc2OSAxNi4zMjEgMTYuNDA3MUMxNS40NDkgMTcuMjc5MSAxNC4wMjIgMTcuMjM0NiAxMy4yMDYxIDE2LjMwOThMMTAuNzM0MyAxMy41MDg1TDEwLjEyOTQgMTQuMTEzNEwxMC4zNTI3IDE1LjM3ODdDMTAuNDc4NiAxNi4wOTI1IDEwLjI0ODQgMTYuODIyOCA5LjczNTg4IDE3LjMzNTRDOC43MTQwNSAxOC4zNTcyIDcuMDA0IDE4LjE0NjcgNi4yNjA1MSAxNi45MDc1TDUuMDcyNTYgMTQuOTI3NkwzLjA5MjY1IDEzLjczOTdDMS44NTM1IDEyLjk5NjIgMS42NDI5OCAxMS4yODYxIDIuNjY0ODEgMTAuMjY0M0MzLjE3NzM0IDkuNzUxNzUgMy45MDc3IDkuNTIxNTMgNC42MjE0OSA5LjY0NzQ5TDUuODg2NzUgOS44NzA3N0w2LjQ5MTY3IDkuMjY1ODVMMy42OTAzOCA2Ljc5NDEzQzIuNzY1NjQgNS45NzgxOCAyLjcyMTA5IDQuNTUxMiAzLjU5MzEzIDMuNjc5MTdDNC4yMjMzMiAzLjA0ODk4IDUuMTc4MzEgMi44NzU4IDUuOTg5NjUgMy4yNDQ1OUwxMC40NzQ0IDUuMjgzMTJMMTIuODY0NyAyLjg5Mjg0Wk0xNS42OTMxIDQuMzA3MDVDMTUuMzAyNiAzLjkxNjUzIDE0LjY2OTQgMy45MTY1MyAxNC4yNzg5IDQuMzA3MDVMMTEuMzk4NiA3LjE4NzM2QzExLjEwMzggNy40ODIxMSAxMC42NTcyIDcuNTYzMTEgMTAuMjc3NyA3LjM5MDYyTDUuMTYyMDQgNS4wNjUzM0M1LjEwOTY3IDUuMDQxNTIgNS4wNDgwMiA1LjA1MjcgNS4wMDczNCA1LjA5MzM4QzQuOTUxMDUgNS4xNDk2NyA0Ljk1MzkzIDUuMjQxNzggNS4wMTM2MiA1LjI5NDQ1TDguNjEzMDcgOC40NzA0NEM4LjgyMDA3IDguNjUzMDggOC45NDIzNSA4LjkxMzE2IDguOTUwOTcgOS4xODkwOEM4Ljk1OTU4IDkuNDY0OTkgOC44NTM3NSA5LjczMjE5IDguNjU4NTYgOS45MjczOUw2LjkzMjggMTEuNjUzMUM2LjcwMjA2IDExLjg4MzkgNi4zNzMyNiAxMS45ODc1IDYuMDUxOTEgMTEuOTMwOEw0LjI3MzkyIDExLjYxNzFDNC4yMDI4MiAxMS42MDQ1IDQuMTMwMDcgMTEuNjI3NCA0LjA3OTAyIDExLjY3ODVDMy45NzcyNCAxMS43ODAzIDMuOTk4MjEgMTEuOTUwNiA0LjEyMTY0IDEyLjAyNDdMNi4zMTU5MyAxMy4zNDEyQzYuNDU2NjggMTMuNDI1NyA2LjU3NDQ3IDEzLjU0MzUgNi42NTg5MiAxMy42ODQyTDcuOTc1NSAxNS44Nzg1QzguMDQ5NTUgMTYuMDAyIDguMjE5ODkgMTYuMDIyOSA4LjMyMTY3IDE1LjkyMTFDOC4zNzI3MiAxNS44NzAxIDguMzk1NjUgMTUuNzk3MyA4LjM4MzEgMTUuNzI2Mkw4LjA2OTM0IDEzLjk0ODNDOC4wMTI2MyAxMy42MjY5IDguMTE2MjggMTMuMjk4MSA4LjM0NzAyIDEzLjA2NzRMMTAuMDcyOCAxMS4zNDE2QzEwLjI2OCAxMS4xNDY0IDEwLjUzNTIgMTEuMDQwNiAxMC44MTExIDExLjA0OTJDMTEuMDg3IDExLjA1NzggMTEuMzQ3MSAxMS4xODAxIDExLjUyOTcgMTEuMzg3MUwxNC43MDU4IDE0Ljk4NjZDMTQuNzU4NCAxNS4wNDYzIDE0Ljg1MDUgMTUuMDQ5MiAxNC45MDY4IDE0Ljk5MjlDMTQuOTQ3NSAxNC45NTIyIDE0Ljk1ODcgMTQuODkwNSAxNC45MzQ5IDE0LjgzODJMMTIuNjA5NiA5LjcyMjQ2QzEyLjQzNzEgOS4zNDI5OCAxMi41MTgxIDguODk2MyAxMi44MTI4IDguNjAxNTVMMTUuNjkzMSA1LjcyMTI3QzE2LjA4MzYgNS4zMzA3NCAxNi4wODM2IDQuNjk3NTggMTUuNjkzMSA0LjMwNzA1WlwiIGZpbGw9XCIjQzE1REYzXCIvPjwvc3ZnPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVswXT8uZmxhZyA9PT0gXCLQkdC40LvQtdGC0YtcIikge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc01haWxJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNSAzQzMuMTgwMTcgMyAyIDQuNzAwNjkgMiA2LjRDMiA3LjAwOTkgMi4xODU4NSA3LjU1NjMyIDIuMzYzNjkgNy45ODkyOEMyLjQzODMzIDguMTcwOTkgMi41MjA0MSA4LjM1Mjc1IDIuNTkzNzQgOC41MTUxMUwyLjYzNTU3IDguNjA3ODVDMi43MjI1NSA4LjgwMTI0IDIuNzk1NDQgOC45NjgxMiAyLjg1NDExIDkuMTI2ODlDMi45NDI3MSA5LjM2NjY0IDMgOS42NjU2MSAzIDEwQzMgMTAuMzM0NCAyLjk0MjcxIDEwLjYzMzQgMi44NTQxMSAxMC44NzMxQzIuNzk1NDQgMTEuMDMxOSAyLjcyMjU1IDExLjE5ODggMi42MzU1NyAxMS4zOTIxTDIuNTkzNzQgMTEuNDg0OUwyLjU5Mzc0IDExLjQ4NDlDMi41MjA0MSAxMS42NDczIDIuNDM4MzMgMTEuODI5IDIuMzYzNjkgMTIuMDEwN0MyLjE4NTg1IDEyLjQ0MzcgMiAxMi45OTAxIDIgMTMuNkMyIDE1LjI5OTMgMy4xODAxNyAxNyA1IDE3SDE1QzE2LjgxOTggMTcgMTggMTUuMjk5MyAxOCAxMy42QzE4IDEyLjk5MDEgMTcuODE0MiAxMi40NDM3IDE3LjYzNjMgMTIuMDEwN0MxNy41NjE3IDExLjgyOSAxNy40Nzk2IDExLjY0NzMgMTcuNDA2MyAxMS40ODQ5TDE3LjQwNjMgMTEuNDg0OUwxNy4zNjQ0IDExLjM5MjFDMTcuMjc3NCAxMS4xOTg4IDE3LjIwNDYgMTEuMDMxOSAxNy4xNDU5IDEwLjg3MzFDMTcuMDU3MyAxMC42MzM0IDE3IDEwLjMzNDQgMTcgMTBDMTcgOS42NjU2MSAxNy4wNTczIDkuMzY2NjQgMTcuMTQ1OSA5LjEyNjg4QzE3LjIwNDYgOC45NjgxMiAxNy4yNzc0IDguODAxMjQgMTcuMzY0NCA4LjYwNzg1TDE3LjQwNjMgOC41MTUxMkMxNy40Nzk2IDguMzUyNzYgMTcuNTYxNyA4LjE3MDk5IDE3LjYzNjMgNy45ODkyOEMxNy44MTQyIDcuNTU2MzIgMTggNy4wMDk5IDE4IDYuNEMxOCA0LjcwMDY5IDE2LjgxOTggMyAxNSAzSDVaTTQgNi40QzQgNS40NDgzNCA0LjYxMDY5IDUgNSA1TDExIDVWNkMxMSA2LjU1MjI4IDExLjQ0NzcgNyAxMiA3QzEyLjU1MjMgNyAxMyA2LjU1MjI4IDEzIDZWNUwxNSA1QzE1LjM4OTMgNSAxNiA1LjQ0ODM0IDE2IDYuNEMxNiA2LjYxNjAzIDE1LjkzMjkgNi44NzIzNyAxNS43ODYzIDcuMjI5MzhDMTUuNzI1OSA3LjM3NjMyIDE1LjY2MDYgNy41MjEwNCAxNS41ODc1IDcuNjgzTDE1LjU0MDQgNy43ODc0NUMxNS40NTIxIDcuOTgzOTMgMTUuMzU0NCA4LjIwNTAyIDE1LjI2OTkgOC40MzM2MkMxNS4wOTQzIDguOTA4NzMgMTUgOS40NDM3NSAxNSAxMEMxNSAxMC41NTYyIDE1LjA5NDMgMTEuMDkxMyAxNS4yNjk5IDExLjU2NjRDMTUuMzU0NCAxMS43OTUgMTUuNDUyMSAxMi4wMTYxIDE1LjU0MDQgMTIuMjEyNkwxNS41ODc1IDEyLjMxN0wxNS41ODc1IDEyLjMxN0MxNS42NjA2IDEyLjQ3OSAxNS43MjU5IDEyLjYyMzcgMTUuNzg2MyAxMi43NzA2QzE1LjkzMjkgMTMuMTI3NiAxNiAxMy4zODQgMTYgMTMuNkMxNiAxNC41NTE3IDE1LjM4OTMgMTUgMTUgMTVIMTNWMTRDMTMgMTMuNDQ3NyAxMi41NTIzIDEzIDEyIDEzQzExLjQ0NzcgMTMgMTEgMTMuNDQ3NyAxMSAxNFYxNUg1QzQuNjEwNjkgMTUgNCAxNC41NTE3IDQgMTMuNkM0IDEzLjM4NCA0LjA2NzA2IDEzLjEyNzYgNC4yMTM3IDEyLjc3MDZDNC4yNzQwNiAxMi42MjM3IDQuMzM5MzggMTIuNDc5IDQuNDEyNDggMTIuMzE3TDQuNDU5NTYgMTIuMjEyNkM0LjU0NzkzIDEyLjAxNjEgNC42NDU2MyAxMS43OTUgNC43MzAxMSAxMS41NjY0QzQuOTA1NjkgMTEuMDkxMyA1IDEwLjU1NjIgNSAxMEM1IDkuNDQzNzUgNC45MDU2OSA4LjkwODczIDQuNzMwMTEgOC40MzM2MkM0LjY0NTYzIDguMjA1MDMgNC41NDc5MyA3Ljk4MzkzIDQuNDU5NTYgNy43ODc0NUw0LjQxMjQ3IDcuNjgzMDFDNC4zMzkzNyA3LjUyMTA0IDQuMjc0MDYgNy4zNzYzMyA0LjIxMzcgNy4yMjkzOEM0LjA2NzA2IDYuODcyMzcgNCA2LjYxNjAzIDQgNi40Wk0xMiA4QzExLjQ0NzcgOCAxMSA4LjQ0NzcyIDExIDlWMTFDMTEgMTEuNTUyMyAxMS40NDc3IDEyIDEyIDEyQzEyLjU1MjMgMTIgMTMgMTEuNTUyMyAxMyAxMVY5QzEzIDguNDQ3NzIgMTIuNTUyMyA4IDEyIDhaXCIgZmlsbD1cIiMzQkJBRkVcIi8+PC9zdmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhWzBdPy5mbGFnID09PSBcItCo0YLRgNCw0YTRiyDQuCDQvdCw0LvQvtCz0LhcIikge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc01haWxJY29uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMDAwMSAzQzExLjAwMDEgMy41NTIyOCAxMC41NTIzIDQgMTAuMDAwMSA0QzkuNDQ3NzggNCA5LjAwMDA2IDMuNTUyMjggOS4wMDAwNiAzQzkuMDAwMDYgMi40NDc3MiA5LjQ0Nzc4IDIgMTAuMDAwMSAyQzEwLjU1MjMgMiAxMS4wMDAxIDIuNDQ3NzIgMTEuMDAwMSAzWk0xMC45MzM0IDEyLjg2MjZDMTAuODU3NSAxMy40MDk3IDExLjIzOTUgMTMuOTE0NiAxMS43ODY1IDEzLjk5MDVDMTIuNjQ3NyAxNC4xMDk5IDEyLjkyMDEgMTQuNTU2NiAxMi45ODIyIDE0LjgzMDJDMTMuMDYxNSAxNS4xNzkzIDEyLjg5NDQgMTUuMjU4OCAxMi44NzQzIDE1LjI2NjhMMTAuMDAwMSAxNS45NzA1TDcuMTI1ODUgMTUuMjY2OEM3LjEwNTczIDE1LjI1ODggNi45Mzg2NyAxNS4xNzkzIDcuMDE3OTMgMTQuODMwMkM3LjA4MDA0IDE0LjU1NjYgNy4zNTI0NyAxNC4xMDk5IDguMjEzNiAxMy45OTA1QzguNzYwNjUgMTMuOTE0NiA5LjE0MjYyIDEzLjQwOTcgOS4wNjY3NSAxMi44NjI2QzguOTkyNzMgMTIuMzI4OSA4LjUxMDI2IDExLjk1MjMgNy45Nzg3NiAxMi4wMDQ3QzcuOTQ2NTEgMTIuMDAxNiA3LjkxMzgxIDEyIDcuODgwNzQgMTJDNy43Mjc5NyAxMiA3LjI5MTU5IDExLjk1NjcgNi43NDMwNSAxMS44MDM2QzYuMjAxNjggMTEuNjUyNiA1LjYxNzE3IDExLjQxMjYgNS4xMjk1NiAxMS4wNjA4QzQuNjQ5MjIgMTAuNzE0MyA0LjI4ODM1IDEwLjI3OTUgNC4xMTU5NiA5LjcyNDg1QzMuOTQ0MDYgOS4xNzE3IDMuOTIzODYgOC4zODQzOSA0LjMzMjY1IDcuMjY2MzRDNC4zOTIwMSA3LjEwMzk5IDQuNDA3NjUgNi45MzA5NyA0LjM4MDczIDYuNzYzODlMNS40NDU3MSA3LjQxMDA5QzUuNjY1MDMgNy41NDMzNyA1Ljc4MzQyIDcuNjY3NzMgNS44NTYyOCA3Ljc5NTQ1QzUuOTI5NTMgNy45MjM4NiA2LjAwMDA3IDguMTMxNzUgNi4wMDAwNyA4LjVDNi4wMDAwNyA5LjA1MjI4IDYuNDQ3NzkgOS41IDcuMDAwMDcgOS41QzcuNTUyMzUgOS41IDguMDAwMDcgOS4wNTIyOCA4LjAwMDA3IDguNUM4LjAwMDA3IDcuODY4MjUgNy44NzYzIDcuMzAwMjIgNy41OTM1IDYuODA0NDZDNy4zMTAzNSA2LjMwODA5IDYuOTEwNjMgNS45NTk4NyA2LjQ4MzIxIDUuNzAwMjRMMy45MjAyMSA0LjE0NTA4QzMuNjg3MDQgNC4wMDM1OSAzLjQwNjIgMy45NjM0OSAzLjE0Mjc0IDQuMDM0MDVDMi44NzkyOSA0LjEwNDYyIDIuNjU2MDkgNC4yNzk3MyAyLjUyNDg1IDQuNTE4ODJDMi4wOTg1NSA1LjI5NTQzIDIuMDUyNjggNi4xODc0NyAyLjMyMzI1IDYuOTY0ODFDMS45MjQ3MiA4LjIzMzY4IDEuOTA1NTEgOS4zNTEyMyAyLjIwNjA3IDEwLjMxODRDMi41MzYyMSAxMS4zODA3IDMuMjE2NTEgMTIuMTQ2OCAzLjk1OTQ0IDEyLjY4MjhDNC40NDAwOSAxMy4wMjk2IDQuOTU3MTEgMTMuMjg4MSA1LjQ1MDEyIDEzLjQ3OTRDNS4yNjg4MiAxMy43NjA1IDUuMTQwMjUgMTQuMDY3MiA1LjA2NzU3IDE0LjM4NzRDNC44MjQwOCAxNS40NTk4IDUuMjU5NjEgMTYuODM3OSA2LjYxMDY5IDE3LjE5OTVMNi42MzE0MyAxNy4yMDQ4TDkuNzQzMjQgMTcuOTY2N0M5LjgyNjAxIDE3Ljk4ODcgOS45MTIyNiAxOC4wMDAzIDEwLjAwMDEgMTguMDAwMkMxMC4wODc5IDE4LjAwMDMgMTAuMTc0MSAxNy45ODg3IDEwLjI1NjkgMTcuOTY2N0wxMy4zNjg3IDE3LjIwNDhMMTMuMzg5NCAxNy4xOTk1QzE0Ljc0MDUgMTYuODM3OSAxNS4xNzYgMTUuNDU5OCAxNC45MzI2IDE0LjM4NzRDMTQuODU2NiAxNC4wNTI5IDE0LjcxOTcgMTMuNzMzMiAxNC41MjU0IDEzLjQ0MTlDMTQuOTg5NiAxMy4yNTQ3IDE1LjQ3MTQgMTMuMDA3NCAxNS45MjE0IDEyLjY4MjhDMTYuNjY0MyAxMi4xNDY4IDE3LjM0NDYgMTEuMzgwNyAxNy42NzQ3IDEwLjMxODRDMTcuOTc1MyA5LjM1MTIzIDE3Ljk1NjEgOC4yMzM2OCAxNy41NTc1IDYuOTY0ODFDMTcuODI4MSA2LjE4NzQ3IDE3Ljc4MjIgNS4yOTU0MyAxNy4zNTU5IDQuNTE4ODJDMTcuMjI0NyA0LjI3OTczIDE3LjAwMTUgNC4xMDQ2MiAxNi43MzgxIDQuMDM0MDVDMTYuNDc0NiAzLjk2MzQ5IDE2LjE5MzggNC4wMDM1OSAxNS45NjA2IDQuMTQ1MDhMMTMuMzk3NiA1LjcwMDI0QzEyLjk3MDIgNS45NTk4NyAxMi41NzA1IDYuMzA4MDkgMTIuMjg3MyA2LjgwNDQ2QzEyLjAwNDUgNy4zMDAyMiAxMS44ODA3IDcuODY4MjUgMTEuODgwNyA4LjVDMTEuODgwNyA5LjA1MjI4IDEyLjMyODQgOS41IDEyLjg4MDcgOS41QzEzLjQzMyA5LjUgMTMuODgwNyA5LjA1MjI4IDEzLjg4MDcgOC41QzEzLjg4MDcgOC4xMzE3NSAxMy45NTEzIDcuOTIzODYgMTQuMDI0NSA3Ljc5NTQ1QzE0LjA5NzQgNy42Njc3MyAxNC4yMTU4IDcuNTQzMzcgMTQuNDM1MSA3LjQxMDA5TDE1LjUwMDEgNi43NjM4OUMxNS40NzMyIDYuOTMwOTcgMTUuNDg4OCA3LjEwMzk5IDE1LjU0ODEgNy4yNjYzNEMxNS45NTY5IDguMzg0MzkgMTUuOTM2NyA5LjE3MTcgMTUuNzY0OCA5LjcyNDg1QzE1LjU5MjUgMTAuMjc5NSAxNS4yMzE2IDEwLjcxNDMgMTQuNzUxMiAxMS4wNjA4QzE0LjI2MzYgMTEuNDEyNiAxMy42NzkxIDExLjY1MjYgMTMuMTM3NyAxMS44MDM2QzEyLjU4OTIgMTEuOTU2NyAxMi4xNTI4IDEyIDEyLjAwMDEgMTJDMTEuOTg3NiAxMiAxMS45NzUyIDEyLjAwMDIgMTEuOTYyOCAxMi4wMDA3QzExLjQ1NDkgMTEuOTgwMyAxMS4wMDQ3IDEyLjM0ODYgMTAuOTMzNCAxMi44NjI2Wk03LjYwNTY0IDUuMDUyNzZDNy44NTI2MyA0LjU1ODc4IDguNDUzMyA0LjM1ODU2IDguOTQ3MjggNC42MDU1NUM5LjI5ODc4IDQuNzgxMyA5LjY3MTk3IDQuOTgxNDkgMTAuMDAwMSA1LjI0ODI3QzEwLjMyODIgNC45ODE0OSAxMC43MDEzIDQuNzgxMyAxMS4wNTI4IDQuNjA1NTVDMTEuNTQ2OCA0LjM1ODU2IDEyLjE0NzUgNC41NTg3OCAxMi4zOTQ1IDUuMDUyNzZDMTIuNjQxNSA1LjU0Njc0IDEyLjQ0MTMgNi4xNDc0MSAxMS45NDczIDYuMzk0NEMxMS40NDk4IDYuNjQzMTQgMTEuMjQ2NyA2Ljc4OTY0IDExLjE0MjcgNi45MTQxN0MxMS4wODE2IDYuOTg3MzEgMTEuMDAwNyA3LjExMjgxIDExLjAwMDEgNy40OTU1NEMxMS4wMDAxIDcuNDk3MDIgMTEuMDAwMSA3LjQ5ODUgMTEuMDAwMSA3LjQ5OTk4QzExLjAwMDEgOC4wNTIyNiAxMC41NTI0IDguNDk5OTcgMTAuMDAwMSA4LjQ5OTk3QzkuOTY1NTUgOC40OTk5NyA5LjkzMTQ0IDguNDk4MjMgOS44OTc4MiA4LjQ5NDgxQzkuNjk3MjEgOC40NzQ0NCA5LjUxNDEzIDguMzk0NzcgOS4zNjYzOCA4LjI3MzZDOS4xNDI3NSA4LjA5MDIxIDkuMDAwMDYgNy44MTE3NiA5LjAwMDA2IDcuNDk5OThDOS4wMDAwNiA3LjQ5ODUgOS4wMDAwNiA3LjQ5NzAyIDkuMDAwMDYgNy40OTU1NEM4Ljk5OTQ0IDcuMTEyODEgOC45MTg1MiA2Ljk4NzMxIDguODU3NDUgNi45MTQxN0M4Ljc1MzQ4IDYuNzg5NjQgOC41NTAzMyA2LjY0MzE0IDguMDUyODUgNi4zOTQ0QzcuNTU4ODcgNi4xNDc0MSA3LjM1ODY1IDUuNTQ2NzQgNy42MDU2NCA1LjA1Mjc2WlwiIGZpbGw9XCIjRUUzQzNDXCIvPjwvc3ZnPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXT8udG8/Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlY2lwaWVudHMudW5zaGlmdChgICR7ZGF0YVswXS50b1tpXS5uYW1lfSAke2RhdGFbMF0udG9baV0uc3VybmFtZX1gKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjaXBpZW50cy5qb2luKCcsICcpXHJcblxyXG4gICAgICAgIC8vINCf0YDQtdC+0LHRgNCw0LfRg9C10Lwg0L7QsdGK0LXQutGCINC60LDRgNGC0LjQvdC+0Log0LIg0LzQsNGB0YHQuNCyXHJcbiAgICAgICAgaWYoZGF0YVswXT8uZG9jKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRG9jQmFzZSA9IE9iamVjdC52YWx1ZXMoZGF0YVswXT8uZG9jKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltYWdlRG9jQmFzZSlcclxuICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW1hZ2VEb2NCYXNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJEb2MuYXBwZW5kKERvY01haWwoaW1hZ2VEb2NCYXNlW2ldKSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaW1hZ2VEb2NCYXNlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmKGxhbmcgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvRG9jQW1vLnRleHRDb250ZW50ID0gYCR7aW1hZ2VEb2NCYXNlLmxlbmd0aH0gJHtkYXRhU3RhdGljW2xhbmddWzNdLmZpbGV9ICsgJ3NgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGltYWdlRG9jQmFzZS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm9Eb2NBbW8udGV4dENvbnRlbnQgPSBgJHtpbWFnZURvY0Jhc2UubGVuZ3RofSAke2RhdGFTdGF0aWNbbGFuZ11bM10uZmlsZX0gKyAn0LBgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mb0RvY0Ftby50ZXh0Q29udGVudCA9IGAke2ltYWdlRG9jQmFzZS5sZW5ndGh9ICR7ZGF0YVN0YXRpY1tsYW5nXVszXS5maWxlfSArICfQvtCyYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluZm9Eb2NBbW8udGV4dENvbnRlbnQgPSBgJHtpbWFnZURvY0Jhc2UubGVuZ3RofSAke2RhdGFTdGF0aWNbbGFuZ11bM10uZmlsZX1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5mb0RvY1NpemUudGV4dENvbnRlbnQgPSBgKDXQvNCxKWBcclxuICAgICAgICAgICAgaW5mb0RvY0xvYWQudGV4dENvbnRlbnQgPSBkYXRhU3RhdGljW2xhbmddWzNdLmRvd25sb2FkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGRhdGFbMF0/LnRpdGxlXHJcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGAke2RhdGFbMF0/LmF1dGhvcj8ubmFtZX1gICsgJyAnICsgYCR7ZGF0YVswXT8uYXV0aG9yPy5zdXJuYW1lfWBcclxuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gYCR7ZGF0ZURheX0gJHtkYXRlTW9udGh9LCAke2dldEhvdXJzfToke2dldE1pbnV0ZXN9YFxyXG4gICAgICAgIHJlY2VpdmVyLnRleHRDb250ZW50ID0gYCR7ZGF0YVN0YXRpY1tsYW5nXVszXS50b306ICR7cmVjaXBpZW50c31gXHJcbiAgICAgICAgbWFpbFRleHQudGV4dENvbnRlbnQgPSBkYXRhWzBdPy50ZXh0XHJcbiAgICAgICAgY2F0ZWdvcmllc01haWxUZXh0LnRleHRDb250ZW50ID0gZGF0YVswXT8uZmxhZ1xyXG5cclxuICAgICAgICBhdXRob3JJbWdDb250YWluZXIuYXBwZW5kKGF1dGhvckltZylcclxuICAgICAgICBzZW5kTWFpbC5hcHBlbmQobmFtZSwgZGF0ZSlcclxuICAgICAgICBhdXRob3JDb250YWluZXIuYXBwZW5kKHNlbmRNYWlsLCByZWNlaXZlcilcclxuICAgICAgICBtYWlsRGV0YWlscy5hcHBlbmQoYXV0aG9ySW1nQ29udGFpbmVyLCBhdXRob3JDb250YWluZXIpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aXRsZSwgbWFpbERldGFpbHMsIGNvbnRhaW5lckRvYylcclxuXHJcbiAgICAgICAgaWYgKGRhdGFbMF0/LmZsYWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzTWFpbENvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcmllc01haWxJY29uLCBjYXRlZ29yaWVzTWFpbFRleHQpXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY2F0ZWdvcmllc01haWxDb250YWluZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbmZvRG9jQ29udGFpbmVyLmFwcGVuZChpbmZvRG9jQW1vLCBpbmZvRG9jTG9hZCwgaW5mb0RvY1NpemUpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChpbmZvRG9jQ29udGFpbmVyKVxyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1haWxUZXh0KVxyXG4gICAgfVxyXG5cclxuICAgIHJ0KClcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW5mb0l0ZW1cclxuIiwiSW5mb0l0ZW0gPSByZXF1aXJlKCcuL0luZm9JdGVtLmpzJylcclxuVG9vbEltZyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHNVSS9Ub29sSW1nLmpzJylcclxuXHJcbmNvbnN0IEl0ZW1MZXR0ZXJzID0gKGF1dGhvck5hbWUsIGRhdGUsIHRpdGxlLCB0ZXh0LCB0bywgcmVhZCwgY2F0ZWdGbGFnLCBib29rbWFya0ZsYWcsIGltcG9ydGFudEZsYWcsIGlkLCBkb2MpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgY2hlY2tNYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBjaGVja0NsaWNrTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgbWFya01haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgYm9va21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IGltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGNvbnRhaW5lckluZm9NYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0aXRsZUxldHRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHRleHRMZXR0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCB0aW1lU2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgZGxjTWFpbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBmbGFnTWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgZmxhZ0RvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0b29sdGlwRmxhZ0RvYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBnZXRIb3VycyA9IGRhdGU/LnRvU3RyaW5nKCkuc2xpY2UoMTEsIDEzKVxyXG4gICAgY29uc3QgZ2V0TWludXRlcyA9IGRhdGU/LnRvU3RyaW5nKCkuc2xpY2UoMTQsIDE2KVxyXG4gICAgbGV0IGZsYWdBY3RpdmVBdHRhY2ggPSBmYWxzZVxyXG5cclxuICAgIGNvbnRhaW5lckl0ZW0uY2xhc3NMaXN0LmFkZCgnY29udGFpbmVySXRlbScpXHJcbiAgICBhdmF0YXIuY2xhc3NMaXN0LmFkZCgnYXZhdGFyJylcclxuICAgIGNoZWNrTWFpbC5jbGFzc0xpc3QuYWRkKCdjaGVja01haWwnKVxyXG4gICAgY2hlY2tDbGlja01haWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tDbGlja01haWwnKVxyXG4gICAgYXV0aG9yLmNsYXNzTGlzdC5hZGQoJ2F1dGhvcicpXHJcbiAgICBjb250YWluZXJJbmZvTWFpbFRleHQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVySW5mb01haWxUZXh0JylcclxuICAgIHRpdGxlTGV0dGVycy5jbGFzc0xpc3QuYWRkKCd0aXRsZUxldHRlcnMnKVxyXG4gICAgdGV4dExldHRlcnMuY2xhc3NMaXN0LmFkZCgndGV4dExldHRlcnMnKVxyXG4gICAgdGltZVNlbnQuY2xhc3NMaXN0LmFkZCgndGltZVNlbnQnKVxyXG4gICAgZGxjTWFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkbGNNYWlsQ29udGFpbmVyJylcclxuICAgIG1hcmtNYWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hcmtNYWlsQ29udGFpbmVyJylcclxuICAgIGZsYWdEb2MuY2xhc3NMaXN0LmFkZCgnZmxhZ0RvYycpXHJcbiAgICB0b29sdGlwRmxhZ0RvYy5jbGFzc0xpc3QuYWRkKCd0b29sdGlwRmxhZ0RvYycpXHJcbiAgICBib29rbWFyay5jbGFzc0xpc3QuYWRkKCdib29rbWFyaycpXHJcbiAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50JylcclxuXHJcbiAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0YTQu9Cw0LMg0YfRgtC10L3QuNGPLCDQstGL0LTQsNC10Lwg0YHQvtC+0YLQstC10YLRgdGC0LLRg9Cx0YnQuNC1INGB0YLQuNC70LhcclxuICAgIGlmIChyZWFkKSB7XHJcbiAgICAgICAgYWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFjdGl2ZS5jbGFzc0xpc3QuYWRkKCdub1JlYWRDb250YWluZXJJdGVtJylcclxuICAgICAgICBhdXRob3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlUmVhZCcpXHJcbiAgICAgICAgdGl0bGVMZXR0ZXJzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVJlYWQnKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXRlTW9udGggPSBkYXRlPy50b1N0cmluZygpLnNsaWNlKDUsIDcpXHJcbiAgICBsZXQgZGF0ZURheSA9IGRhdGU/LnRvU3RyaW5nKCkuc2xpY2UoOCwgMTApXHJcbiAgICBsZXQgZGF0ZVllYXIgPSBkYXRlPy50b1N0cmluZygpLnNsaWNlKDAsIDQpXHJcbiAgICBsZXQgZGF0ZUhvdXJzID0gZGF0ZT8udG9TdHJpbmcoKS5zbGljZSgxMSwgMTMpIC8vINGH0LDRgdGLXHJcbiAgICBsZXQgZGF0ZU1pbnV0ZXMgPSBkYXRlPy50b1N0cmluZygpLnNsaWNlKDE0LCAxNikgLy8g0LzQuNC90YPRgtGLXHJcbiAgICBsZXQgbW9udGhOb3cgPSBuZXcgRGF0ZSgpLmdldE1vbnRoKClcclxuICAgIGxldCB5ZWFyTm93ID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXHJcbiAgICBsZXQgZGF5Tm93ID0gbmV3IERhdGUoKS5nZXREYXRlKClcclxuXHJcbiAgICBsZXQgZnVsbERhdGUgPSBkYXRlWWVhciArICctJyArIGRhdGVNb250aCArICctJyArIGRhdGVEYXlcclxuICAgIGxldCBmdWxsRGF0ZU5vdyA9IHllYXJOb3cgKyAnLScgKyBtb250aE5vdyArICctJyArIGRheU5vd1xyXG5cclxuICAgIC8vINGE0L7RgNC80LDRgtC40YDRg9C10Lwg0LzQtdGB0Y/RhijRhtC40YTRgNGLID0+INGB0LvQvtCy0LApXHJcbiAgICBpZiAoZGF0ZU1vbnRoID09PSAnMDAnKSB7XHJcbiAgICAgICAgZGF0ZU1vbnRoID0gJ9GP0L3QsidcclxuICAgICAgICBtb250aE5vdyA9ICfRj9C90LInXHJcbiAgICB9IGVsc2UgaWYgKGRhdGVNb250aCA9PT0gJzAxJykge1xyXG4gICAgICAgIGRhdGVNb250aCA9ICfRhNC10LInXHJcbiAgICAgICAgbW9udGhOb3cgPSAn0YTQtdCyJ1xyXG4gICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwMicpIHtcclxuICAgICAgICBkYXRlTW9udGggPSAn0LzQsNGAJ1xyXG4gICAgICAgIG1vbnRoTm93ID0gJ9C80LDRgCdcclxuICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDMnKSB7XHJcbiAgICAgICAgZGF0ZU1vbnRoID0gJ9Cw0L/RgCdcclxuICAgICAgICBtb250aE5vdyA9ICfQsNC/0YAnXHJcbiAgICB9IGVsc2UgaWYgKGRhdGVNb250aCA9PT0gJzA0Jykge1xyXG4gICAgICAgIGRhdGVNb250aCA9ICfQvNCw0LknXHJcbiAgICAgICAgbW9udGhOb3cgPSAn0LzQsNC5J1xyXG4gICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwNScpIHtcclxuICAgICAgICBkYXRlTW9udGggPSAn0LjRjtC9J1xyXG4gICAgICAgIG1vbnRoTm93ID0gJ9C40Y7QvSdcclxuICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDYnKSB7XHJcbiAgICAgICAgZGF0ZU1vbnRoID0gJ9C40Y7QuydcclxuICAgICAgICBtb250aE5vdyA9ICfQuNGO0LsnXHJcbiAgICB9IGVsc2UgaWYgKGRhdGVNb250aCA9PT0gJzA3Jykge1xyXG4gICAgICAgIGRhdGVNb250aCA9ICfQsNCy0LMnXHJcbiAgICAgICAgbW9udGhOb3cgPSAn0LDQstCzJ1xyXG4gICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcwOCcpIHtcclxuICAgICAgICBkYXRlTW9udGggPSAn0YHQtdC9J1xyXG4gICAgICAgIG1vbnRoTm93ID0gJ9GB0LXQvSdcclxuICAgIH0gZWxzZSBpZiAoZGF0ZU1vbnRoID09PSAnMDknKSB7XHJcbiAgICAgICAgZGF0ZU1vbnRoID0gJ9C+0LrRgidcclxuICAgICAgICBtb250aE5vdyA9ICfQvtC60YInXHJcbiAgICB9IGVsc2UgaWYgKGRhdGVNb250aCA9PT0gJzEwJykge1xyXG4gICAgICAgIGRhdGVNb250aCA9ICfQvdC+0Y8nXHJcbiAgICAgICAgbW9udGhOb3cgPSAn0L3QvtGPJ1xyXG4gICAgfSBlbHNlIGlmIChkYXRlTW9udGggPT09ICcxMScpIHtcclxuICAgICAgICBkYXRlTW9udGggPSAn0LTQtdC6J1xyXG4gICAgICAgIG1vbnRoTm93ID0gJ9C00LXQuidcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBydURhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKS50b0xvY2FsZVN0cmluZygncnUtUlUnKVxyXG4gICAgY29uc3QgZW5nRGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicpXHJcbiAgICBjb25zdCBsb2NhdGlvblVzZXJEb21haW5zID0gd2luZG93LmxvY2F0aW9uLmhyZWYubGFzdEluZGV4T2YoJy8nKVxyXG4gICAgY29uc3QgbmFtZUxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgbG9jYXRpb25Vc2VyRG9tYWlucylcclxuXHJcbiAgICBpZiAoZGF0ZVllYXIgPT0geWVhck5vdyAmJiBkYXRlTW9udGggPT0gbW9udGhOb3cgJiYgZGF0ZURheSA9PSBkYXlOb3cpIHtcclxuICAgICAgICB0aW1lU2VudC50ZXh0Q29udGVudCA9IGAke2RhdGVIb3Vyc306JHtkYXRlTWludXRlc31gXHJcbiAgICB9IGVsc2UgaWYgKGRhdGVZZWFyID09IHllYXJOb3cgJiYgZGF0ZU1vbnRoID09IG1vbnRoTm93KSB7XHJcbiAgICAgICAgdGltZVNlbnQudGV4dENvbnRlbnQgPSBgJHtkYXRlRGF5fSAke2RhdGVNb250aH1gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGdldFN0YXRpYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtuYW1lTG9jYXRpb259L3N0YXRpY2ApXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgaWYgKGRhdGFbMF0ubGFuZyA9PT0gJ3J1cycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRheU1vbnRoID0gcnVEYXRlLnN1YnN0cmluZygwLCAxMCkuc3Vic3RyaW5nKDAsIDYpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gcnVEYXRlLnN1YnN0cmluZyg4LCAxMClcclxuICAgICAgICAgICAgICAgIHRpbWVTZW50LnRleHRDb250ZW50ID0gZGF5TW9udGggKyB5ZWFyXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlNb250aCA9IGVuZ0RhdGUuc3Vic3RyaW5nKDAsIDEwKS5zdWJzdHJpbmcoMCwgNilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBlbmdEYXRlLnN1YnN0cmluZyg4LCAxMClcclxuICAgICAgICAgICAgICAgIHRpbWVTZW50LnRleHRDb250ZW50ID0gZGF5TW9udGggKyB5ZWFyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U3RhdGljKClcclxuICAgIH1cclxuICAgIGlmIChmdWxsRGF0ZSA9PT0gZnVsbERhdGVOb3cgJiYgZGF0ZU1vbnRoID09PSBtb250aE5vdyAmJiBkYXRlRGF5ID09PSBkYXlOb3cpIHtcclxuICAgICAgICB0aW1lU2VudC50ZXh0Q29udGVudCA9IGAke2dldEhvdXJzfToke2dldE1pbnV0ZXN9YFxyXG4gICAgfVxyXG5cclxuICAgIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQvdCwINC90LDQu9C40YfQuNC1INCw0LLQsNGC0LDRgNCwLCDQsiDRgdC70YPRh9Cw0LUg0L7RgtGB0YPRgtGB0YLQstC40Y8g0LLRi9C00LDQtdC8INC00LXRhNC+0LvRgtC90YPRjiDQutCw0YDRgtC40L3QutGDXHJcbiAgICBpZiAoYXV0aG9yTmFtZT8uYXZhdGFyKSB7XHJcbiAgICAgICAgYXZhdGFyLnNyYyA9IGF1dGhvck5hbWUuYXZhdGFyXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF2YXRhci5zcmMgPSAnZCdcclxuICAgIH1cclxuICAgIGF2YXRhci5hbHQgPSAnYXV0aG9yJ1xyXG5cclxuICAgIC8vINC/0LXRgNC10LLQvtC00LjQvCDRgNGD0YHRgdC60LjQuSDRj9C30YvQuiDQsiDRj9C30YvQuiBzdmdcclxuICAgIGlmIChjYXRlZ0ZsYWcgPT09IFwi0JfQsNC60LDQt9GLXCIpIHtcclxuICAgICAgICBmbGFnTWFpbC5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIgNEMyIDMuNDQ3NzIgMi40NDc3MiAzIDMgM0g1QzUuNDg4ODQgMyA1LjkwNjAzIDMuMzUzNDEgNS45ODYzOSAzLjgzNTZMNi4xODA0NiA1SDE3QzE3LjU1MjMgNSAxOCA1LjQ0NzcyIDE4IDZWOS44NTA5NEMxOCAxMS4xMTc0IDE3LjA4NzUgMTIuMTk5NiAxNS44MzkzIDEyLjQxMzZMNi45NjQ5MiAxMy45MzUyQzYuOTE0MzQgMTMuOTQzOCA2Ljg2NCAxMy45NDg1IDYuODE0MjIgMTMuOTQ5NUM2Ljc2NjAzIDEzLjk2NTQgNi43MTYwMSAxMy45Nzc4IDYuNjY0NCAxMy45ODY0QzYuMTE5NjMgMTQuMDc3MiA1LjYwNDQgMTMuNzA5MiA1LjUxMzYxIDEzLjE2NDRMNC4xNTI4NyA1SDNDMi40NDc3MiA1IDIgNC41NTIyOCAyIDRaTTcuMzIxMjcgMTEuODQ0OUw2LjUxMzc5IDdIMTZWOS44NTA5NEMxNiAxMC4xNDMyIDE1Ljc4OTQgMTAuMzkyOSAxNS41MDE0IDEwLjQ0MjNMNy4zMjEyNyAxMS44NDQ5Wk05IDE2LjVDOSAxNy4zMjg0IDguMzI4NDMgMTggNy41IDE4QzYuNjcxNTcgMTggNiAxNy4zMjg0IDYgMTYuNUM2IDE1LjY3MTYgNi42NzE1NyAxNSA3LjUgMTVDOC4zMjg0MyAxNSA5IDE1LjY3MTYgOSAxNi41Wk0xNiAxNi41QzE2IDE3LjMyODQgMTUuMzI4NCAxOCAxNC41IDE4QzEzLjY3MTYgMTggMTMgMTcuMzI4NCAxMyAxNi41QzEzIDE1LjY3MTYgMTMuNjcxNiAxNSAxNC41IDE1QzE1LjMyODQgMTUgMTYgMTUuNjcxNiAxNiAxNi41WlwiIGZpbGw9XCIjRjk0Q0EzXCIvPjwvc3ZnPmA7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnRmxhZyA9PT0gXCLQpNC40L3QsNC90YHRi1wiKSB7XHJcbiAgICAgICAgZmxhZ01haWwuaW5uZXJIVE1MID0gYDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk02LjUgM0gxMUMxMy40ODUzIDMgMTUuNSA1LjAxNDcyIDE1LjUgNy41QzE1LjUgOS45ODUyOCAxMy40ODUzIDEyIDExIDEySDcuNVYxM0gxMi41QzEzLjA1MjMgMTMgMTMuNSAxMy40NDc3IDEzLjUgMTRDMTMuNSAxNC41NTIzIDEzLjA1MjMgMTUgMTIuNSAxNUg3LjVWMTZDNy41IDE2LjU1MjMgNy4wNTIyOCAxNyA2LjUgMTdDNS45NDc3MiAxNyA1LjUgMTYuNTUyMyA1LjUgMTZWMTVDNC45NDc3MiAxNSA0LjUgMTQuNTUyMyA0LjUgMTRDNC41IDEzLjQ0NzcgNC45NDc3MiAxMyA1LjUgMTNWMTJDNC45NDc3MiAxMiA0LjUgMTEuNTUyMyA0LjUgMTFDNC41IDEwLjQ0NzcgNC45NDc3MiAxMCA1LjUgMTBWNEM1LjUgMy40NDc3MiA1Ljk0NzcyIDMgNi41IDNaTTcuNSAxMEgxMUMxMi4zODA3IDEwIDEzLjUgOC44ODA3MSAxMy41IDcuNUMxMy41IDYuMTE5MjkgMTIuMzgwNyA1IDExIDVINy41VjEwWlwiIGZpbGw9XCIjMjRDNzgwXCIvPjwvc3ZnPmA7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnRmxhZyA9PT0gXCLQoNC10LPQuNGB0YLRgNCw0YbQuNC4XCIpIHtcclxuICAgICAgICBmbGFnTWFpbC5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEzLjY1NjkgNC45Mjg5N0MxMi40ODUzIDMuNzU3NCAxMC41ODU4IDMuNzU3NCA5LjQxNDI1IDQuOTI4OTdMNy4yOTI5MyA3LjA1MDI5QzYuOTAyNDEgNy40NDA4MiA2LjkwMjQxIDguMDczOTggNy4yOTI5MyA4LjQ2NDUxTDguMDAwMDQgOS4xNzE2MUM4LjE4NzU4IDkuMzU5MTUgOC4yOTI5MyA5LjYxMzUgOC4yOTI5MyA5Ljg3ODcyQzguMjkyOTMgMTAuMTQzOSA4LjE4NzU4IDEwLjM5ODMgOC4wMDAwNCAxMC41ODU4TDQuMDUwMjkgMTQuNTM1NlYxNS45NDk4SDUuNjIzOTRMOS4zOTk4MiAxMi4wMTQ4QzkuNTg1OTIgMTEuODIwOCA5Ljg0MjI2IDExLjcxIDEwLjExMSAxMS43MDcyQzEwLjM3OTggMTEuNzA0NCAxMC42Mzg0IDExLjgxIDEwLjgyODUgMTJMMTEuNTM1NiAxMi43MDcxQzExLjkyNjEgMTMuMDk3NyAxMi41NTkzIDEzLjA5NzcgMTIuOTQ5OCAxMi43MDcxTDE1LjA3MTEgMTAuNTg1OEMxNi4yNDI3IDkuNDE0MjUgMTYuMjQyNyA3LjUxNDc2IDE1LjA3MTEgNi4zNDMxOUwxMy42NTY5IDQuOTI4OTdaTTguMDAwMDQgMy41MTQ3NkM5Ljk1MjY2IDEuNTYyMTQgMTMuMTE4NSAxLjU2MjE0IDE1LjA3MTEgMy41MTQ3NkwxNi40ODUzIDQuOTI4OTdDMTguNDM3OSA2Ljg4MTU5IDE4LjQzNzkgMTAuMDQ3NCAxNi40ODUzIDEyTDE0LjM2NCAxNC4xMjE0QzEzLjE5NzMgMTUuMjg4IDExLjMwODkgMTUuMjkyOSAxMC4xMzYyIDE0LjEzNjFMNi43NzE4NCAxNy42NDIyQzYuNTgzMjYgMTcuODM4NyA2LjMyMjY3IDE3Ljk0OTggNi4wNTAyOSAxNy45NDk4SDMuMDUwMjlDMi40OTgwMSAxNy45NDk4IDIuMDUwMjkgMTcuNTAyMSAyLjA1MDI5IDE2Ljk0OThWMTQuMTIxNEMyLjA1MDI5IDEzLjg1NjEgMi4xNTU2NSAxMy42MDE4IDIuMzQzMTkgMTMuNDE0M0w1Ljg3ODcyIDkuODc4NzJDNC43MDcxNSA4LjcwNzE1IDQuNzA3MTUgNi44MDc2NSA1Ljg3ODcyIDUuNjM2MDhMOC4wMDAwNCAzLjUxNDc2Wk0xMC44Mjg0IDYuMzQzMjZDMTEuMjE5IDUuOTUyNzMgMTEuODUyMSA1Ljk1MjczIDEyLjI0MjYgNi4zNDMyNkwxMy42NTY5IDcuNzU3NDdDMTQuMDQ3NCA4LjE0Nzk5IDE0LjA0NzQgOC43ODExNiAxMy42NTY5IDkuMTcxNjhDMTMuMjY2MyA5LjU2MjIxIDEyLjYzMzIgOS41NjIyMSAxMi4yNDI2IDkuMTcxNjhMMTAuODI4NCA3Ljc1NzQ3QzEwLjQzNzkgNy4zNjY5NCAxMC40Mzc5IDYuNzMzNzggMTAuODI4NCA2LjM0MzI2WlwiIGZpbGw9XCIjRUVBQzJDXCIvPjwvc3ZnPmA7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnRmxhZyA9PT0gXCLQn9GD0YLQtdGI0LXRgdGC0LLQuNGPXCIpIHtcclxuICAgICAgICBmbGFnTWFpbC5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjg2NDcgMi44OTI4NEMxNC4wMzYzIDEuNzIxMjcgMTUuOTM1NyAxLjcyMTI3IDE3LjEwNzMgMi44OTI4NEMxOC4yNzg5IDQuMDY0NDEgMTguMjc4OSA1Ljk2MzkxIDE3LjEwNzMgNy4xMzU0OEwxNC43MTcxIDkuNTI1NzRMMTYuNzU1NiAxNC4wMTA2QzE3LjEyNDQgMTQuODIxOSAxNi45NTEyIDE1Ljc3NjkgMTYuMzIxIDE2LjQwNzFDMTUuNDQ5IDE3LjI3OTEgMTQuMDIyIDE3LjIzNDYgMTMuMjA2MSAxNi4zMDk4TDEwLjczNDMgMTMuNTA4NUwxMC4xMjk0IDE0LjExMzRMMTAuMzUyNyAxNS4zNzg3QzEwLjQ3ODYgMTYuMDkyNSAxMC4yNDg0IDE2LjgyMjggOS43MzU4OCAxNy4zMzU0QzguNzE0MDUgMTguMzU3MiA3LjAwNCAxOC4xNDY3IDYuMjYwNTEgMTYuOTA3NUw1LjA3MjU2IDE0LjkyNzZMMy4wOTI2NSAxMy43Mzk3QzEuODUzNSAxMi45OTYyIDEuNjQyOTggMTEuMjg2MSAyLjY2NDgxIDEwLjI2NDNDMy4xNzczNCA5Ljc1MTc1IDMuOTA3NyA5LjUyMTUzIDQuNjIxNDkgOS42NDc0OUw1Ljg4Njc1IDkuODcwNzdMNi40OTE2NyA5LjI2NTg1TDMuNjkwMzggNi43OTQxM0MyLjc2NTY0IDUuOTc4MTggMi43MjEwOSA0LjU1MTIgMy41OTMxMyAzLjY3OTE3QzQuMjIzMzIgMy4wNDg5OCA1LjE3ODMxIDIuODc1OCA1Ljk4OTY1IDMuMjQ0NTlMMTAuNDc0NCA1LjI4MzEyTDEyLjg2NDcgMi44OTI4NFpNMTUuNjkzMSA0LjMwNzA1QzE1LjMwMjYgMy45MTY1MyAxNC42Njk0IDMuOTE2NTMgMTQuMjc4OSA0LjMwNzA1TDExLjM5ODYgNy4xODczNkMxMS4xMDM4IDcuNDgyMTEgMTAuNjU3MiA3LjU2MzExIDEwLjI3NzcgNy4zOTA2Mkw1LjE2MjA0IDUuMDY1MzNDNS4xMDk2NyA1LjA0MTUyIDUuMDQ4MDIgNS4wNTI3IDUuMDA3MzQgNS4wOTMzOEM0Ljk1MTA1IDUuMTQ5NjcgNC45NTM5MyA1LjI0MTc4IDUuMDEzNjIgNS4yOTQ0NUw4LjYxMzA3IDguNDcwNDRDOC44MjAwNyA4LjY1MzA4IDguOTQyMzUgOC45MTMxNiA4Ljk1MDk3IDkuMTg5MDhDOC45NTk1OCA5LjQ2NDk5IDguODUzNzUgOS43MzIxOSA4LjY1ODU2IDkuOTI3MzlMNi45MzI4IDExLjY1MzFDNi43MDIwNiAxMS44ODM5IDYuMzczMjYgMTEuOTg3NSA2LjA1MTkxIDExLjkzMDhMNC4yNzM5MiAxMS42MTcxQzQuMjAyODIgMTEuNjA0NSA0LjEzMDA3IDExLjYyNzQgNC4wNzkwMiAxMS42Nzg1QzMuOTc3MjQgMTEuNzgwMyAzLjk5ODIxIDExLjk1MDYgNC4xMjE2NCAxMi4wMjQ3TDYuMzE1OTMgMTMuMzQxMkM2LjQ1NjY4IDEzLjQyNTcgNi41NzQ0NyAxMy41NDM1IDYuNjU4OTIgMTMuNjg0Mkw3Ljk3NTUgMTUuODc4NUM4LjA0OTU1IDE2LjAwMiA4LjIxOTg5IDE2LjAyMjkgOC4zMjE2NyAxNS45MjExQzguMzcyNzIgMTUuODcwMSA4LjM5NTY1IDE1Ljc5NzMgOC4zODMxIDE1LjcyNjJMOC4wNjkzNCAxMy45NDgzQzguMDEyNjMgMTMuNjI2OSA4LjExNjI4IDEzLjI5ODEgOC4zNDcwMiAxMy4wNjc0TDEwLjA3MjggMTEuMzQxNkMxMC4yNjggMTEuMTQ2NCAxMC41MzUyIDExLjA0MDYgMTAuODExMSAxMS4wNDkyQzExLjA4NyAxMS4wNTc4IDExLjM0NzEgMTEuMTgwMSAxMS41Mjk3IDExLjM4NzFMMTQuNzA1OCAxNC45ODY2QzE0Ljc1ODQgMTUuMDQ2MyAxNC44NTA1IDE1LjA0OTIgMTQuOTA2OCAxNC45OTI5QzE0Ljk0NzUgMTQuOTUyMiAxNC45NTg3IDE0Ljg5MDUgMTQuOTM0OSAxNC44MzgyTDEyLjYwOTYgOS43MjI0NkMxMi40MzcxIDkuMzQyOTggMTIuNTE4MSA4Ljg5NjMgMTIuODEyOCA4LjYwMTU1TDE1LjY5MzEgNS43MjEyN0MxNi4wODM2IDUuMzMwNzQgMTYuMDgzNiA0LjY5NzU4IDE1LjY5MzEgNC4zMDcwNVpcIiBmaWxsPVwiI0MxNURGM1wiLz48L3N2Zz5gO1xyXG4gICAgfSBlbHNlIGlmIChjYXRlZ0ZsYWcgPT09IFwi0JHQuNC70LXRgtGLXCIpIHtcclxuICAgICAgICBmbGFnTWFpbC5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTUgM0MzLjE4MDE3IDMgMiA0LjcwMDY5IDIgNi40QzIgNy4wMDk5IDIuMTg1ODUgNy41NTYzMiAyLjM2MzY5IDcuOTg5MjhDMi40MzgzMyA4LjE3MDk5IDIuNTIwNDEgOC4zNTI3NSAyLjU5Mzc0IDguNTE1MTFMMi42MzU1NyA4LjYwNzg1QzIuNzIyNTUgOC44MDEyNCAyLjc5NTQ0IDguOTY4MTIgMi44NTQxMSA5LjEyNjg5QzIuOTQyNzEgOS4zNjY2NCAzIDkuNjY1NjEgMyAxMEMzIDEwLjMzNDQgMi45NDI3MSAxMC42MzM0IDIuODU0MTEgMTAuODczMUMyLjc5NTQ0IDExLjAzMTkgMi43MjI1NSAxMS4xOTg4IDIuNjM1NTcgMTEuMzkyMUwyLjU5Mzc0IDExLjQ4NDlMMi41OTM3NCAxMS40ODQ5QzIuNTIwNDEgMTEuNjQ3MyAyLjQzODMzIDExLjgyOSAyLjM2MzY5IDEyLjAxMDdDMi4xODU4NSAxMi40NDM3IDIgMTIuOTkwMSAyIDEzLjZDMiAxNS4yOTkzIDMuMTgwMTcgMTcgNSAxN0gxNUMxNi44MTk4IDE3IDE4IDE1LjI5OTMgMTggMTMuNkMxOCAxMi45OTAxIDE3LjgxNDIgMTIuNDQzNyAxNy42MzYzIDEyLjAxMDdDMTcuNTYxNyAxMS44MjkgMTcuNDc5NiAxMS42NDczIDE3LjQwNjMgMTEuNDg0OUwxNy40MDYzIDExLjQ4NDlMMTcuMzY0NCAxMS4zOTIxQzE3LjI3NzQgMTEuMTk4OCAxNy4yMDQ2IDExLjAzMTkgMTcuMTQ1OSAxMC44NzMxQzE3LjA1NzMgMTAuNjMzNCAxNyAxMC4zMzQ0IDE3IDEwQzE3IDkuNjY1NjEgMTcuMDU3MyA5LjM2NjY0IDE3LjE0NTkgOS4xMjY4OEMxNy4yMDQ2IDguOTY4MTIgMTcuMjc3NCA4LjgwMTI0IDE3LjM2NDQgOC42MDc4NUwxNy40MDYzIDguNTE1MTJDMTcuNDc5NiA4LjM1Mjc2IDE3LjU2MTcgOC4xNzA5OSAxNy42MzYzIDcuOTg5MjhDMTcuODE0MiA3LjU1NjMyIDE4IDcuMDA5OSAxOCA2LjRDMTggNC43MDA2OSAxNi44MTk4IDMgMTUgM0g1Wk00IDYuNEM0IDUuNDQ4MzQgNC42MTA2OSA1IDUgNUwxMSA1VjZDMTEgNi41NTIyOCAxMS40NDc3IDcgMTIgN0MxMi41NTIzIDcgMTMgNi41NTIyOCAxMyA2VjVMMTUgNUMxNS4zODkzIDUgMTYgNS40NDgzNCAxNiA2LjRDMTYgNi42MTYwMyAxNS45MzI5IDYuODcyMzcgMTUuNzg2MyA3LjIyOTM4QzE1LjcyNTkgNy4zNzYzMiAxNS42NjA2IDcuNTIxMDQgMTUuNTg3NSA3LjY4M0wxNS41NDA0IDcuNzg3NDVDMTUuNDUyMSA3Ljk4MzkzIDE1LjM1NDQgOC4yMDUwMiAxNS4yNjk5IDguNDMzNjJDMTUuMDk0MyA4LjkwODczIDE1IDkuNDQzNzUgMTUgMTBDMTUgMTAuNTU2MiAxNS4wOTQzIDExLjA5MTMgMTUuMjY5OSAxMS41NjY0QzE1LjM1NDQgMTEuNzk1IDE1LjQ1MjEgMTIuMDE2MSAxNS41NDA0IDEyLjIxMjZMMTUuNTg3NSAxMi4zMTdMMTUuNTg3NSAxMi4zMTdDMTUuNjYwNiAxMi40NzkgMTUuNzI1OSAxMi42MjM3IDE1Ljc4NjMgMTIuNzcwNkMxNS45MzI5IDEzLjEyNzYgMTYgMTMuMzg0IDE2IDEzLjZDMTYgMTQuNTUxNyAxNS4zODkzIDE1IDE1IDE1SDEzVjE0QzEzIDEzLjQ0NzcgMTIuNTUyMyAxMyAxMiAxM0MxMS40NDc3IDEzIDExIDEzLjQ0NzcgMTEgMTRWMTVINUM0LjYxMDY5IDE1IDQgMTQuNTUxNyA0IDEzLjZDNCAxMy4zODQgNC4wNjcwNiAxMy4xMjc2IDQuMjEzNyAxMi43NzA2QzQuMjc0MDYgMTIuNjIzNyA0LjMzOTM4IDEyLjQ3OSA0LjQxMjQ4IDEyLjMxN0w0LjQ1OTU2IDEyLjIxMjZDNC41NDc5MyAxMi4wMTYxIDQuNjQ1NjMgMTEuNzk1IDQuNzMwMTEgMTEuNTY2NEM0LjkwNTY5IDExLjA5MTMgNSAxMC41NTYyIDUgMTBDNSA5LjQ0Mzc1IDQuOTA1NjkgOC45MDg3MyA0LjczMDExIDguNDMzNjJDNC42NDU2MyA4LjIwNTAzIDQuNTQ3OTMgNy45ODM5MyA0LjQ1OTU2IDcuNzg3NDVMNC40MTI0NyA3LjY4MzAxQzQuMzM5MzcgNy41MjEwNCA0LjI3NDA2IDcuMzc2MzMgNC4yMTM3IDcuMjI5MzhDNC4wNjcwNiA2Ljg3MjM3IDQgNi42MTYwMyA0IDYuNFpNMTIgOEMxMS40NDc3IDggMTEgOC40NDc3MiAxMSA5VjExQzExIDExLjU1MjMgMTEuNDQ3NyAxMiAxMiAxMkMxMi41NTIzIDEyIDEzIDExLjU1MjMgMTMgMTFWOUMxMyA4LjQ0NzcyIDEyLjU1MjMgOCAxMiA4WlwiIGZpbGw9XCIjM0JCQUZFXCIvPjwvc3ZnPmA7XHJcbiAgICB9IGVsc2UgaWYgKGNhdGVnRmxhZyA9PT0gXCLQqNGC0YDQsNGE0Ysg0Lgg0L3QsNC70L7Qs9C4XCIpIHtcclxuICAgICAgICBmbGFnTWFpbC5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjAwMDEgM0MxMS4wMDAxIDMuNTUyMjggMTAuNTUyMyA0IDEwLjAwMDEgNEM5LjQ0Nzc4IDQgOS4wMDAwNiAzLjU1MjI4IDkuMDAwMDYgM0M5LjAwMDA2IDIuNDQ3NzIgOS40NDc3OCAyIDEwLjAwMDEgMkMxMC41NTIzIDIgMTEuMDAwMSAyLjQ0NzcyIDExLjAwMDEgM1pNMTAuOTMzNCAxMi44NjI2QzEwLjg1NzUgMTMuNDA5NyAxMS4yMzk1IDEzLjkxNDYgMTEuNzg2NSAxMy45OTA1QzEyLjY0NzcgMTQuMTA5OSAxMi45MjAxIDE0LjU1NjYgMTIuOTgyMiAxNC44MzAyQzEzLjA2MTUgMTUuMTc5MyAxMi44OTQ0IDE1LjI1ODggMTIuODc0MyAxNS4yNjY4TDEwLjAwMDEgMTUuOTcwNUw3LjEyNTg1IDE1LjI2NjhDNy4xMDU3MyAxNS4yNTg4IDYuOTM4NjcgMTUuMTc5MyA3LjAxNzkzIDE0LjgzMDJDNy4wODAwNCAxNC41NTY2IDcuMzUyNDcgMTQuMTA5OSA4LjIxMzYgMTMuOTkwNUM4Ljc2MDY1IDEzLjkxNDYgOS4xNDI2MiAxMy40MDk3IDkuMDY2NzUgMTIuODYyNkM4Ljk5MjczIDEyLjMyODkgOC41MTAyNiAxMS45NTIzIDcuOTc4NzYgMTIuMDA0N0M3Ljk0NjUxIDEyLjAwMTYgNy45MTM4MSAxMiA3Ljg4MDc0IDEyQzcuNzI3OTcgMTIgNy4yOTE1OSAxMS45NTY3IDYuNzQzMDUgMTEuODAzNkM2LjIwMTY4IDExLjY1MjYgNS42MTcxNyAxMS40MTI2IDUuMTI5NTYgMTEuMDYwOEM0LjY0OTIyIDEwLjcxNDMgNC4yODgzNSAxMC4yNzk1IDQuMTE1OTYgOS43MjQ4NUMzLjk0NDA2IDkuMTcxNyAzLjkyMzg2IDguMzg0MzkgNC4zMzI2NSA3LjI2NjM0QzQuMzkyMDEgNy4xMDM5OSA0LjQwNzY1IDYuOTMwOTcgNC4zODA3MyA2Ljc2Mzg5TDUuNDQ1NzEgNy40MTAwOUM1LjY2NTAzIDcuNTQzMzcgNS43ODM0MiA3LjY2NzczIDUuODU2MjggNy43OTU0NUM1LjkyOTUzIDcuOTIzODYgNi4wMDAwNyA4LjEzMTc1IDYuMDAwMDcgOC41QzYuMDAwMDcgOS4wNTIyOCA2LjQ0Nzc5IDkuNSA3LjAwMDA3IDkuNUM3LjU1MjM1IDkuNSA4LjAwMDA3IDkuMDUyMjggOC4wMDAwNyA4LjVDOC4wMDAwNyA3Ljg2ODI1IDcuODc2MyA3LjMwMDIyIDcuNTkzNSA2LjgwNDQ2QzcuMzEwMzUgNi4zMDgwOSA2LjkxMDYzIDUuOTU5ODcgNi40ODMyMSA1LjcwMDI0TDMuOTIwMjEgNC4xNDUwOEMzLjY4NzA0IDQuMDAzNTkgMy40MDYyIDMuOTYzNDkgMy4xNDI3NCA0LjAzNDA1QzIuODc5MjkgNC4xMDQ2MiAyLjY1NjA5IDQuMjc5NzMgMi41MjQ4NSA0LjUxODgyQzIuMDk4NTUgNS4yOTU0MyAyLjA1MjY4IDYuMTg3NDcgMi4zMjMyNSA2Ljk2NDgxQzEuOTI0NzIgOC4yMzM2OCAxLjkwNTUxIDkuMzUxMjMgMi4yMDYwNyAxMC4zMTg0QzIuNTM2MjEgMTEuMzgwNyAzLjIxNjUxIDEyLjE0NjggMy45NTk0NCAxMi42ODI4QzQuNDQwMDkgMTMuMDI5NiA0Ljk1NzExIDEzLjI4ODEgNS40NTAxMiAxMy40Nzk0QzUuMjY4ODIgMTMuNzYwNSA1LjE0MDI1IDE0LjA2NzIgNS4wNjc1NyAxNC4zODc0QzQuODI0MDggMTUuNDU5OCA1LjI1OTYxIDE2LjgzNzkgNi42MTA2OSAxNy4xOTk1TDYuNjMxNDMgMTcuMjA0OEw5Ljc0MzI0IDE3Ljk2NjdDOS44MjYwMSAxNy45ODg3IDkuOTEyMjYgMTguMDAwMyAxMC4wMDAxIDE4LjAwMDJDMTAuMDg3OSAxOC4wMDAzIDEwLjE3NDEgMTcuOTg4NyAxMC4yNTY5IDE3Ljk2NjdMMTMuMzY4NyAxNy4yMDQ4TDEzLjM4OTQgMTcuMTk5NUMxNC43NDA1IDE2LjgzNzkgMTUuMTc2IDE1LjQ1OTggMTQuOTMyNiAxNC4zODc0QzE0Ljg1NjYgMTQuMDUyOSAxNC43MTk3IDEzLjczMzIgMTQuNTI1NCAxMy40NDE5QzE0Ljk4OTYgMTMuMjU0NyAxNS40NzE0IDEzLjAwNzQgMTUuOTIxNCAxMi42ODI4QzE2LjY2NDMgMTIuMTQ2OCAxNy4zNDQ2IDExLjM4MDcgMTcuNjc0NyAxMC4zMTg0QzE3Ljk3NTMgOS4zNTEyMyAxNy45NTYxIDguMjMzNjggMTcuNTU3NSA2Ljk2NDgxQzE3LjgyODEgNi4xODc0NyAxNy43ODIyIDUuMjk1NDMgMTcuMzU1OSA0LjUxODgyQzE3LjIyNDcgNC4yNzk3MyAxNy4wMDE1IDQuMTA0NjIgMTYuNzM4MSA0LjAzNDA1QzE2LjQ3NDYgMy45NjM0OSAxNi4xOTM4IDQuMDAzNTkgMTUuOTYwNiA0LjE0NTA4TDEzLjM5NzYgNS43MDAyNEMxMi45NzAyIDUuOTU5ODcgMTIuNTcwNSA2LjMwODA5IDEyLjI4NzMgNi44MDQ0NkMxMi4wMDQ1IDcuMzAwMjIgMTEuODgwNyA3Ljg2ODI1IDExLjg4MDcgOC41QzExLjg4MDcgOS4wNTIyOCAxMi4zMjg0IDkuNSAxMi44ODA3IDkuNUMxMy40MzMgOS41IDEzLjg4MDcgOS4wNTIyOCAxMy44ODA3IDguNUMxMy44ODA3IDguMTMxNzUgMTMuOTUxMyA3LjkyMzg2IDE0LjAyNDUgNy43OTU0NUMxNC4wOTc0IDcuNjY3NzMgMTQuMjE1OCA3LjU0MzM3IDE0LjQzNTEgNy40MTAwOUwxNS41MDAxIDYuNzYzODlDMTUuNDczMiA2LjkzMDk3IDE1LjQ4ODggNy4xMDM5OSAxNS41NDgxIDcuMjY2MzRDMTUuOTU2OSA4LjM4NDM5IDE1LjkzNjcgOS4xNzE3IDE1Ljc2NDggOS43MjQ4NUMxNS41OTI1IDEwLjI3OTUgMTUuMjMxNiAxMC43MTQzIDE0Ljc1MTIgMTEuMDYwOEMxNC4yNjM2IDExLjQxMjYgMTMuNjc5MSAxMS42NTI2IDEzLjEzNzcgMTEuODAzNkMxMi41ODkyIDExLjk1NjcgMTIuMTUyOCAxMiAxMi4wMDAxIDEyQzExLjk4NzYgMTIgMTEuOTc1MiAxMi4wMDAyIDExLjk2MjggMTIuMDAwN0MxMS40NTQ5IDExLjk4MDMgMTEuMDA0NyAxMi4zNDg2IDEwLjkzMzQgMTIuODYyNlpNNy42MDU2NCA1LjA1Mjc2QzcuODUyNjMgNC41NTg3OCA4LjQ1MzMgNC4zNTg1NiA4Ljk0NzI4IDQuNjA1NTVDOS4yOTg3OCA0Ljc4MTMgOS42NzE5NyA0Ljk4MTQ5IDEwLjAwMDEgNS4yNDgyN0MxMC4zMjgyIDQuOTgxNDkgMTAuNzAxMyA0Ljc4MTMgMTEuMDUyOCA0LjYwNTU1QzExLjU0NjggNC4zNTg1NiAxMi4xNDc1IDQuNTU4NzggMTIuMzk0NSA1LjA1Mjc2QzEyLjY0MTUgNS41NDY3NCAxMi40NDEzIDYuMTQ3NDEgMTEuOTQ3MyA2LjM5NDRDMTEuNDQ5OCA2LjY0MzE0IDExLjI0NjcgNi43ODk2NCAxMS4xNDI3IDYuOTE0MTdDMTEuMDgxNiA2Ljk4NzMxIDExLjAwMDcgNy4xMTI4MSAxMS4wMDAxIDcuNDk1NTRDMTEuMDAwMSA3LjQ5NzAyIDExLjAwMDEgNy40OTg1IDExLjAwMDEgNy40OTk5OEMxMS4wMDAxIDguMDUyMjYgMTAuNTUyNCA4LjQ5OTk3IDEwLjAwMDEgOC40OTk5N0M5Ljk2NTU1IDguNDk5OTcgOS45MzE0NCA4LjQ5ODIzIDkuODk3ODIgOC40OTQ4MUM5LjY5NzIxIDguNDc0NDQgOS41MTQxMyA4LjM5NDc3IDkuMzY2MzggOC4yNzM2QzkuMTQyNzUgOC4wOTAyMSA5LjAwMDA2IDcuODExNzYgOS4wMDAwNiA3LjQ5OTk4QzkuMDAwMDYgNy40OTg1IDkuMDAwMDYgNy40OTcwMiA5LjAwMDA2IDcuNDk1NTRDOC45OTk0NCA3LjExMjgxIDguOTE4NTIgNi45ODczMSA4Ljg1NzQ1IDYuOTE0MTdDOC43NTM0OCA2Ljc4OTY0IDguNTUwMzMgNi42NDMxNCA4LjA1Mjg1IDYuMzk0NEM3LjU1ODg3IDYuMTQ3NDEgNy4zNTg2NSA1LjU0Njc0IDcuNjA1NjQgNS4wNTI3NlpcIiBmaWxsPVwiI0VFM0MzQ1wiLz48L3N2Zz5gO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ2xpY2tNYWlsLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjZcIiB2aWV3Qm94PVwiMCAwIDggNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk03LjcgMC4zQzcuMyAtMC4xIDYuNyAtMC4xIDYuMyAwLjNMMyAzLjZMMS43IDIuM0MxLjMgMS45IDAuNyAxLjkgMC4zIDIuM0MtMC4xIDIuNyAtMC4xIDMuMyAwLjMgMy43TDIuMyA1LjdDMi41IDUuOSAyLjcgNiAzIDZDMy4zIDYgMy41IDUuOSAzLjcgNS43TDcuNyAxLjdDOC4xIDEuMyA4LjEgMC43IDcuNyAwLjNaXCIgZmlsbD1cIndoaXRlXCIvPjwvc3ZnPmBcclxuICAgIGltcG9ydGFudC5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyIDE1LjVDMTIgMTQuNjcyIDExLjMyOCAxNCAxMC41IDE0QzkuNjcyIDE0IDkgMTQuNjcyIDkgMTUuNUM5IDE2LjMyOCA5LjY3MiAxNyAxMC41IDE3QzExLjMyOCAxNyAxMiAxNi4zMjggMTIgMTUuNVpNMTIgNC41QzEyIDMuNjcyIDExLjMyOCAzIDEwLjUgM0M5LjY3MiAzIDkgMy42NzIgOSA0LjVWMTAuNUM5IDExLjMyOCA5LjY3MiAxMiAxMC41IDEyQzExLjMyOCAxMiAxMiAxMS4zMjggMTIgMTAuNVY0LjVaXCIgZmlsbD1cIiNGQzJDMzhcIi8+PC9zdmc+YFxyXG5cclxuICAgIGJvb2ttYXJrRmxhZyA/XHJcbiAgICAgICAgYm9va21hcmsuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9J2Jvb2ttYXJrRnVsbEFjdGl2ZScgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNSA0Ljc4MzYzQzE1IDMuNzk4MDcgMTQuMjA0IDMgMTMuMjIxIDNDMTEuNDA0IDMgOC41OTYgMyA2Ljc3OSAzQzUuNzk2IDMgNSAzLjc5ODA3IDUgNC43ODM2M0M1IDcuNTMxNzYgNSAxMi44MTg1IDUgMTYuMDA0N0M1IDE2LjQxOTggNS4yNTYgMTYuNzkyOCA1LjY0MyAxNi45NDEyQzYuMDMxIDE3LjA4OTYgNi40NjkgMTYuOTgzMyA2Ljc0NiAxNi42NzM1QzcuNzM5IDE1LjU1OTYgOC45MDggMTQuMjUwMiA5LjUzOSAxMy41NDI0QzkuNjU2IDEzLjQxMSA5LjgyNCAxMy4zMzU4IDEwIDEzLjMzNThDMTAuMTc2IDEzLjMzNTggMTAuMzQ0IDEzLjQxMSAxMC40NjEgMTMuNTQyNEMxMS4wOTIgMTQuMjUwMiAxMi4yNjEgMTUuNTU5NiAxMy4yNTQgMTYuNjczNUMxMy41MzEgMTYuOTgzMyAxMy45NjkgMTcuMDg5NiAxNC4zNTcgMTYuOTQxMkMxNC43NDQgMTYuNzkyOCAxNSAxNi40MTk4IDE1IDE2LjAwNDdDMTUgMTIuODE4NSAxNSA3LjUzMTc2IDE1IDQuNzgzNjNWNC43ODM2M1pcIiBmaWxsPVwiI0ZDMkMzOFwiLz48L3N2Zz5gXHJcbiAgICAgICAgOlxyXG4gICAgICAgIGJvb2ttYXJrLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPSdib29rbWFya0hvdmVyJyB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwIDExQzEwLjU3NjcgMTEgMTEuMTI1NCAxMS4yNDkgMTEuNTA1MiAxMS42ODNMMTMgMTMuMzkxNFY1SDdWMTMuMzkxNEw4LjQ5NDg1IDExLjY4M0M4Ljg3NDYyIDExLjI0OSA5LjQyMzI3IDExIDEwIDExWk0xMy4xOTE3IDE2LjY0NzZDMTMuMzg3NiAxNi44NzE2IDEzLjY3MDcgMTcgMTMuOTY4MiAxN0MxNC41MzggMTcgMTUgMTYuNTM4IDE1IDE1Ljk2ODJWNUMxNSAzLjg5NTQzIDE0LjEwNDYgMyAxMyAzSDdDNS44OTU0MyAzIDUgMy44OTU0MyA1IDVWMTUuOTY4MkM1IDE2LjUzOCA1LjQ2MTk1IDE3IDYuMDMxOCAxN0M2LjMyOTMzIDE3IDYuNjEyMzggMTYuODcxNiA2LjgwODMxIDE2LjY0NzZMMTAgMTNMMTMuMTkxNyAxNi42NDc2WlwiIGZpbGw9XCIjQTVBN0FEXCIvPjwvc3ZnPmBcclxuXHJcbiAgICBhdXRob3IuaW5uZXJIVE1MID0gYCR7YXV0aG9yTmFtZT8ubmFtZX1gICsgJyAnICsgYCR7YXV0aG9yTmFtZT8uc3VybmFtZX1gXHJcbiAgICB0aXRsZUxldHRlcnMuaW5uZXJIVE1MID0gYCR7dGl0bGV9YFxyXG4gICAgdGV4dExldHRlcnMuaW5uZXJIVE1MID0gYCR7dGV4dH1gXHJcblxyXG4gICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC90LAg0L3QsNC70LjRh9C40LUg0LTQvtC60YPQvNC10L3RgtCwINCyINGB0LvRg9GH0LDQtSB0cnVlINC00L7QsdCw0LLQu9GP0LXQvCDQuNC60L7QvdC60YMg0KHQutGA0LXQv9C60LhcclxuICAgIGlmIChkb2MpIHtcclxuICAgICAgICBmbGFnTWFpbC5jbGFzc0xpc3QuYWRkKCdmbGFnTWFpbCcpXHJcbiAgICAgICAgZmxhZ0RvYy5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0xOC44MjggNi41ODcyMkMxNy4yNjU5IDUuMDI1MTMgMTQuNzMzMiA1LjAyNTEzIDEzLjE3MTEgNi41ODcyMkwxMy4wODIgNi42NzYzM0MxMy4zNjYyIDYuODQ0MTcgMTMuNjM0IDcuMDUwMTYgMTMuODc4MiA3LjI5NDMzQzE0LjEyMjQgNy41Mzg0OSAxNC4zMjg0IDcuODA2MzcgMTQuNDk2MiA4LjA5MDU0TDE0LjU4NTMgOC4wMDE0NEMxNS4zNjY0IDcuMjIwMzkgMTYuNjMyNyA3LjIyMDM5IDE3LjQxMzcgOC4wMDE0NEMxOC4xOTQ4IDguNzgyNDggMTguMTk0OCAxMC4wNDg4IDE3LjQxMzcgMTAuODI5OUwxMS4xMjEzIDE3LjEyMjNDOS45NDk3NSAxOC4yOTM5IDguMDUwMjUgMTguMjkzOSA2Ljg3ODY4IDE3LjEyMjNDNS43MDcxMSAxNS45NTA3IDUuNzA3MTEgMTQuMDUxMiA2Ljg3ODY4IDEyLjg3OTdMMTAuMzQyNyA5LjQxNTY1QzEwLjczMzIgOS4wMjUxMyAxMS4zNjY0IDkuMDI1MTMgMTEuNzU2OSA5LjQxNTY1QzEyLjE0NzUgOS44MDYxNyAxMi4xNDc1IDEwLjQzOTMgMTEuNzU2OSAxMC44Mjk5TDkuMDUwMyAxMy41MzY1QzguNjU5NzcgMTMuOTI3IDguNjU5NzcgMTQuNTYwMiA5LjA1MDMgMTQuOTUwN0M5LjQ0MDgyIDE1LjM0MTIgMTAuMDc0IDE1LjM0MTIgMTAuNDY0NSAxNC45NTA3TDEzLjE3MTEgMTIuMjQ0MUMxNC4zNDI3IDExLjA3MjUgMTQuMzQyNyA5LjE3MzAxIDEzLjE3MTEgOC4wMDE0NEMxMS45OTk2IDYuODI5ODYgMTAuMTAwMSA2LjgyOTg2IDguOTI4NSA4LjAwMTQ0TDUuNDY0NDcgMTEuNDY1NEMzLjUxMTg0IDEzLjQxODEgMy41MTE4NCAxNi41ODM5IDUuNDY0NDcgMTguNTM2NUM3LjQxNzA5IDIwLjQ4OTEgMTAuNTgyOSAyMC40ODkxIDEyLjUzNTUgMTguNTM2NUwxOC44MjggMTIuMjQ0MUMyMC4zOTAxIDEwLjY4MiAyMC4zOTAxIDguMTQ5MzIgMTguODI4IDYuNTg3MjJaXCIgZmlsbD1cIiMyQzJEMkVcIi8+PC9zdmc+YFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7bmFtZUxvY2F0aW9ufS9pbmJveD9maWx0ZXJfX2RvYz0wYCkge1xyXG4gICAgLy8gICAgIGlmIChkb2MpIHtcclxuICAgIC8vICAgICAgICAgZmxhZ01haWwuY2xhc3NMaXN0LmFkZCgnZmxhZ01haWwnKVxyXG4gICAgLy8gICAgICAgICBmbGFnRG9jLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE4LjgyOCA2LjU4NzIyQzE3LjI2NTkgNS4wMjUxMyAxNC43MzMyIDUuMDI1MTMgMTMuMTcxMSA2LjU4NzIyTDEzLjA4MiA2LjY3NjMzQzEzLjM2NjIgNi44NDQxNyAxMy42MzQgNy4wNTAxNiAxMy44NzgyIDcuMjk0MzNDMTQuMTIyNCA3LjUzODQ5IDE0LjMyODQgNy44MDYzNyAxNC40OTYyIDguMDkwNTRMMTQuNTg1MyA4LjAwMTQ0QzE1LjM2NjQgNy4yMjAzOSAxNi42MzI3IDcuMjIwMzkgMTcuNDEzNyA4LjAwMTQ0QzE4LjE5NDggOC43ODI0OCAxOC4xOTQ4IDEwLjA0ODggMTcuNDEzNyAxMC44Mjk5TDExLjEyMTMgMTcuMTIyM0M5Ljk0OTc1IDE4LjI5MzkgOC4wNTAyNSAxOC4yOTM5IDYuODc4NjggMTcuMTIyM0M1LjcwNzExIDE1Ljk1MDcgNS43MDcxMSAxNC4wNTEyIDYuODc4NjggMTIuODc5N0wxMC4zNDI3IDkuNDE1NjVDMTAuNzMzMiA5LjAyNTEzIDExLjM2NjQgOS4wMjUxMyAxMS43NTY5IDkuNDE1NjVDMTIuMTQ3NSA5LjgwNjE3IDEyLjE0NzUgMTAuNDM5MyAxMS43NTY5IDEwLjgyOTlMOS4wNTAzIDEzLjUzNjVDOC42NTk3NyAxMy45MjcgOC42NTk3NyAxNC41NjAyIDkuMDUwMyAxNC45NTA3QzkuNDQwODIgMTUuMzQxMiAxMC4wNzQgMTUuMzQxMiAxMC40NjQ1IDE0Ljk1MDdMMTMuMTcxMSAxMi4yNDQxQzE0LjM0MjcgMTEuMDcyNSAxNC4zNDI3IDkuMTczMDEgMTMuMTcxMSA4LjAwMTQ0QzExLjk5OTYgNi44Mjk4NiAxMC4xMDAxIDYuODI5ODYgOC45Mjg1IDguMDAxNDRMNS40NjQ0NyAxMS40NjU0QzMuNTExODQgMTMuNDE4MSAzLjUxMTg0IDE2LjU4MzkgNS40NjQ0NyAxOC41MzY1QzcuNDE3MDkgMjAuNDg5MSAxMC41ODI5IDIwLjQ4OTEgMTIuNTM1NSAxOC41MzY1TDE4LjgyOCAxMi4yNDQxQzIwLjM5MDEgMTAuNjgyIDIwLjM5MDEgOC4xNDkzMiAxOC44MjggNi41ODcyMlpcIiBmaWxsPVwiIzJDMkQyRVwiLz48L3N2Zz5gXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vINCX0LDQutGA0YvQstCw0LXQvCDQv9C+INC60LvQuNC60YMg0LLQvdC1INC10LPQviDQvtCx0LvQsNGB0YLQuFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpdGhpbkJvdW5kYXJpZXMgPSBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRvb2x0aXBGbGFnRG9jKVxyXG5cclxuICAgICAgICBpZiAoIXdpdGhpbkJvdW5kYXJpZXMpIHtcclxuICAgICAgICAgICAgdG9vbHRpcEZsYWdEb2MuY2xhc3NMaXN0LnJlbW92ZSgndG9vbHRpcEZsYWdEb2NBY3RpdmUnKVxyXG4gICAgICAgICAgICBmbGFnRG9jLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYWdEb2NBY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXdpdGhpbkJvdW5kYXJpZXMgJiYgIWZsYWdBY3RpdmVBdHRhY2gpIHtcclxuICAgICAgICAgICAgZmxhZ0FjdGl2ZUF0dGFjaCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyDQv9C+INC60LvQuNC60YMg0L/QvtGP0LLQu9GP0LXRgtGB0Y8g0L/QsNC90LXQu9GMINC/0YDQtdC00L/RgNC+0YHQvNC+0YLRgNCwINC60LDRgNGC0LjQvdC+0LpcclxuICAgIGZsYWdEb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICAgICAgY29uc3QgciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwRmxhZ0RvYycpXHJcbiAgICAgICAgY29uc3QgeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZsYWdEb2NBY3RpdmUnKVxyXG5cclxuICAgICAgICByLmZvckVhY2goZWxlbSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgndG9vbHRpcEZsYWdEb2NBY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeS5mb3JFYWNoKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYWdEb2NBY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGRvYykge1xyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvb2xJbWcgPSBUb29sSW1nKGRvYz8uaW1nLCBgJHtkb2M/LmltZy5zbGljZSgwLCAxNSl9YClcclxuICAgICAgICBpZiAodG9vbHRpcEZsYWdEb2MuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b29sdGlwRmxhZ0RvY0FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHRvb2x0aXBGbGFnRG9jLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvb2x0aXBGbGFnRG9jQWN0aXZlJylcclxuICAgICAgICAgICAgZmxhZ0RvYy5jbGFzc0xpc3QucmVtb3ZlKCdmbGFnRG9jQWN0aXZlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0b29sdGlwRmxhZ0RvYy5jbGFzc0xpc3QuYWRkKCd0b29sdGlwRmxhZ0RvY0FjdGl2ZScpXHJcbiAgICAgICAgICAgIGZsYWdEb2MuY2xhc3NMaXN0LmFkZCgnZmxhZ0RvY0FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmbGFnQWN0aXZlQXR0YWNoKSB7XHJcbiAgICAgICAgICAgIGZsYWdBY3RpdmVBdHRhY2ggPSBmYWxzZVxyXG4gICAgICAgICAgICB0b29sSW1nLnJlbW92ZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmxhZ0FjdGl2ZUF0dGFjaCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmICh0b29sdGlwRmxhZ0RvYy5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvb2x0aXBGbGFnRG9jQWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpdGhpbkJvdW5kYXJpZXMgPSBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHRvb2x0aXBGbGFnRG9jKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aXRoaW5Cb3VuZGFyaWVzIHx8IGZsYWdBY3RpdmVBdHRhY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwRmxhZ0RvYy5jbGFzc0xpc3QucmVtb3ZlKCd0b29sdGlwRmxhZ0RvY0FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZ0RvYy5jbGFzc0xpc3QucmVtb3ZlKCdmbGFnRG9jQWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRvb2x0aXBGbGFnRG9jLmNoaWxkRWxlbWVudENvdW50ICsgMSA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwRmxhZ0RvYy5hcHBlbmQodG9vbEltZylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZsYWdBY3RpdmVBdHRhY2ggPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwRmxhZ0RvYy5jbGFzc0xpc3QucmVtb3ZlKCd0b29sdGlwRmxhZ0RvY0FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICBmbGFnRG9jLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsYWdEb2NBY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgdG9vbEltZy5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb250YWluZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bmFtZUxvY2F0aW9ufS9hcGkvY2xpZW50c2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZygnaWQ6ICcsIGlkLCBjb250YWluZXJJdGVtKVxyXG4gICAgfSlcclxuICAgIC8vINC/0L4g0LrQu9C40LrRgyDRgdC+0YXRgNCw0L3Rj9C10Lwg0LTQsNC90L3Ri9C1LCDQutC+0YLQvtGA0YvQtSDQvtGC0L7QsdGA0LDQt9C40Lwg0LIg0LzQvtC00YPQu9C1IEluZm9JdGVtLmpzXHJcbiAgICBjb250YWluZXJJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haWxUbyA9IHtcclxuICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYWlsVG8nLCBKU09OLnN0cmluZ2lmeShtYWlsVG8pKVxyXG4gICAgICAgIGNvbnRhaW5lckl0ZW0uaHJlZiA9IGAvaXRlbWBcclxuICAgIH0pXHJcblxyXG4gICAgLy8g0L/QviDQutC70LjQutGDINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8v0YPQsdC40YDQsNC10YLRgdGPINCz0LDQu9C+0YfQutCwXHJcbiAgICBjaGVja01haWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjaGVja01haWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlTWFpbCcpXHJcbiAgICAgICAgYXZhdGFyLmNsYXNzTGlzdC50b2dnbGUoJ25vQWN0aXZlQXZhdGFyJylcclxuICAgICAgICBjb250YWluZXJJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhaW5lckl0ZW1BY3RpdmUnKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgZmwgPSB0cnVlXHJcblxyXG4gICAgLy8g0L/QviDQutC70LjQutGDINC00L7QsdCw0LLQu9GP0LXRgtGB0Y8v0YPQsdC40YDQsNC10YLRgdGPINGE0LvQsNCzXHJcbiAgICBib29rbWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGlmIChmbCkge1xyXG4gICAgICAgICAgICBmbCA9ICFmbFxyXG4gICAgICAgICAgICBib29rbWFya0ZsYWcgP1xyXG4gICAgICAgICAgICAgICAgYm9va21hcmsuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9J2Jvb2ttYXJrSG92ZXInIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMTFDMTAuNTc2NyAxMSAxMS4xMjU0IDExLjI0OSAxMS41MDUyIDExLjY4M0wxMyAxMy4zOTE0VjVIN1YxMy4zOTE0TDguNDk0ODUgMTEuNjgzQzguODc0NjIgMTEuMjQ5IDkuNDIzMjcgMTEgMTAgMTFaTTEzLjE5MTcgMTYuNjQ3NkMxMy4zODc2IDE2Ljg3MTYgMTMuNjcwNyAxNyAxMy45NjgyIDE3QzE0LjUzOCAxNyAxNSAxNi41MzggMTUgMTUuOTY4MlY1QzE1IDMuODk1NDMgMTQuMTA0NiAzIDEzIDNIN0M1Ljg5NTQzIDMgNSAzLjg5NTQzIDUgNVYxNS45NjgyQzUgMTYuNTM4IDUuNDYxOTUgMTcgNi4wMzE4IDE3QzYuMzI5MzMgMTcgNi42MTIzOCAxNi44NzE2IDYuODA4MzEgMTYuNjQ3NkwxMCAxM0wxMy4xOTE3IDE2LjY0NzZaXCIgZmlsbD1cIiNBNUE3QURcIi8+PC9zdmc+YFxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgYm9va21hcmsuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9J2Jvb2ttYXJrRnVsbEFjdGl2ZScgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNSA0Ljc4MzYzQzE1IDMuNzk4MDcgMTQuMjA0IDMgMTMuMjIxIDNDMTEuNDA0IDMgOC41OTYgMyA2Ljc3OSAzQzUuNzk2IDMgNSAzLjc5ODA3IDUgNC43ODM2M0M1IDcuNTMxNzYgNSAxMi44MTg1IDUgMTYuMDA0N0M1IDE2LjQxOTggNS4yNTYgMTYuNzkyOCA1LjY0MyAxNi45NDEyQzYuMDMxIDE3LjA4OTYgNi40NjkgMTYuOTgzMyA2Ljc0NiAxNi42NzM1QzcuNzM5IDE1LjU1OTYgOC45MDggMTQuMjUwMiA5LjUzOSAxMy41NDI0QzkuNjU2IDEzLjQxMSA5LjgyNCAxMy4zMzU4IDEwIDEzLjMzNThDMTAuMTc2IDEzLjMzNTggMTAuMzQ0IDEzLjQxMSAxMC40NjEgMTMuNTQyNEMxMS4wOTIgMTQuMjUwMiAxMi4yNjEgMTUuNTU5NiAxMy4yNTQgMTYuNjczNUMxMy41MzEgMTYuOTgzMyAxMy45NjkgMTcuMDg5NiAxNC4zNTcgMTYuOTQxMkMxNC43NDQgMTYuNzkyOCAxNSAxNi40MTk4IDE1IDE2LjAwNDdDMTUgMTIuODE4NSAxNSA3LjUzMTc2IDE1IDQuNzgzNjNWNC43ODM2M1pcIiBmaWxsPVwiI0ZDMkMzOFwiLz48L3N2Zz5gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmwgPSAhZmxcclxuICAgICAgICAgICAgYm9va21hcmtGbGFnID9cclxuICAgICAgICAgICAgICAgIGJvb2ttYXJrLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPSdib29rbWFya0Z1bGxBY3RpdmUnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTUgNC43ODM2M0MxNSAzLjc5ODA3IDE0LjIwNCAzIDEzLjIyMSAzQzExLjQwNCAzIDguNTk2IDMgNi43NzkgM0M1Ljc5NiAzIDUgMy43OTgwNyA1IDQuNzgzNjNDNSA3LjUzMTc2IDUgMTIuODE4NSA1IDE2LjAwNDdDNSAxNi40MTk4IDUuMjU2IDE2Ljc5MjggNS42NDMgMTYuOTQxMkM2LjAzMSAxNy4wODk2IDYuNDY5IDE2Ljk4MzMgNi43NDYgMTYuNjczNUM3LjczOSAxNS41NTk2IDguOTA4IDE0LjI1MDIgOS41MzkgMTMuNTQyNEM5LjY1NiAxMy40MTEgOS44MjQgMTMuMzM1OCAxMCAxMy4zMzU4QzEwLjE3NiAxMy4zMzU4IDEwLjM0NCAxMy40MTEgMTAuNDYxIDEzLjU0MjRDMTEuMDkyIDE0LjI1MDIgMTIuMjYxIDE1LjU1OTYgMTMuMjU0IDE2LjY3MzVDMTMuNTMxIDE2Ljk4MzMgMTMuOTY5IDE3LjA4OTYgMTQuMzU3IDE2Ljk0MTJDMTQuNzQ0IDE2Ljc5MjggMTUgMTYuNDE5OCAxNSAxNi4wMDQ3QzE1IDEyLjgxODUgMTUgNy41MzE3NiAxNSA0Ljc4MzYzVjQuNzgzNjNaXCIgZmlsbD1cIiNGQzJDMzhcIi8+PC9zdmc+YFxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgYm9va21hcmsuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9J2Jvb2ttYXJrSG92ZXInIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMTFDMTAuNTc2NyAxMSAxMS4xMjU0IDExLjI0OSAxMS41MDUyIDExLjY4M0wxMyAxMy4zOTE0VjVIN1YxMy4zOTE0TDguNDk0ODUgMTEuNjgzQzguODc0NjIgMTEuMjQ5IDkuNDIzMjcgMTEgMTAgMTFaTTEzLjE5MTcgMTYuNjQ3NkMxMy4zODc2IDE2Ljg3MTYgMTMuNjcwNyAxNyAxMy45NjgyIDE3QzE0LjUzOCAxNyAxNSAxNi41MzggMTUgMTUuOTY4MlY1QzE1IDMuODk1NDMgMTQuMTA0NiAzIDEzIDNIN0M1Ljg5NTQzIDMgNSAzLjg5NTQzIDUgNVYxNS45NjgyQzUgMTYuNTM4IDUuNDYxOTUgMTcgNi4wMzE4IDE3QzYuMzI5MzMgMTcgNi42MTIzOCAxNi44NzE2IDYuODA4MzEgMTYuNjQ3NkwxMCAxM0wxMy4xOTE3IDE2LjY0NzZaXCIgZmlsbD1cIiNBNUE3QURcIi8+PC9zdmc+YFxyXG4gICAgICAgIH1cclxuICAgICAgICBib29rbWFyay5jbGFzc0xpc3QudG9nZ2xlKCdib29rbWFya0FjdGl2ZScpXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChib29rbWFya0ZsYWcpIHtcclxuICAgICAgICBib29rbWFyay5jbGFzc0xpc3QuYWRkKCdib29rbWFya0FjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltcG9ydGFudEZsYWcpIHtcclxuICAgICAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50QWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICBmbGFnRG9jLmFwcGVuZCh0b29sdGlwRmxhZ0RvYylcclxuICAgIG1hcmtNYWlsQ29udGFpbmVyLmFwcGVuZChpbXBvcnRhbnQsIGJvb2ttYXJrKVxyXG4gICAgZGxjTWFpbENvbnRhaW5lci5hcHBlbmQoZmxhZ01haWwsIGZsYWdEb2MpXHJcbiAgICBjb250YWluZXJJbmZvTWFpbFRleHQuYXBwZW5kKHRpdGxlTGV0dGVycywgdGV4dExldHRlcnMpXHJcblxyXG4gICAgY2hlY2tNYWlsLmFwcGVuZChjaGVja0NsaWNrTWFpbClcclxuICAgIGNvbnRhaW5lckl0ZW0uYXBwZW5kKGFjdGl2ZSwgYXZhdGFyLCBjaGVja01haWwsIGF1dGhvciwgbWFya01haWxDb250YWluZXIsIGNvbnRhaW5lckluZm9NYWlsVGV4dCwgZGxjTWFpbENvbnRhaW5lciwgdGltZVNlbnQpXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lckl0ZW1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJdGVtTGV0dGVyc1xyXG4iLCJjb25zdCBJdGVtTGV0dGVycyA9IHJlcXVpcmUoJy4vSXRlbUxldHRlcnMuanMnKVxyXG5jb25zdCBJbmZvSXRlbSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvSW5mb0l0ZW0uanMnKVxyXG5jb25zdCBtYWlsVG8gPSByZXF1aXJlKCcuLi91dGlscy9tYWlsVG8uanMnKVxyXG5cclxuY29uc3QgTWFpblBhbmVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG4gICAgY29uc3QgY29udGFpbmVySW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuICAgIGNvbnN0IGNvbnRhaW5lckl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuICAgIGNvbnN0IG5vdEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCByZWFkTGV0dGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpbmZvSXRlbSA9IEluZm9JdGVtKClcclxuICAgIGNvbnN0IGxvY2F0aW9uVXNlckRvbWFpbnMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5sYXN0SW5kZXhPZignLycpXHJcbiAgICBjb25zdCBuYW1lTG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBsb2NhdGlvblVzZXJEb21haW5zKVxyXG5cclxuICAgIGNvbnRhaW5lckluZGV4LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBjb250YWluZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBub3RJdGVtVGV4dC5jbGFzc0xpc3QuYWRkKCdub3RJdGVtVGV4dCcpXHJcbiAgICByZWFkTGV0dGVycy5jbGFzc0xpc3QuYWRkKCdyZWFkTGV0dGVycycpXHJcblxyXG4gICAgLy8g0YHQvNC+0YLRgNC40LwsINC60L7Qs9C00LAg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC00L7Qu9C40YHRgtCw0Lsg0LTQviDQutC+0L3RhtCwLCDQtdGB0LvQuCDQtNC+0LvQuNGB0YLQsNC7IC0g0LPRgNGD0LfQuNC8INC90L7QstGD0Y4g0L/QvtGA0YbQuNGOINGN0LvQtdC80LXQvdGC0L7QsiDQuNC3INCx0LRcclxuICAgIGZ1bmN0aW9uIHNjcm9sbEFkZFR5cGUoKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDw9IHdpbmRvdy5wYWdlWU9mZnNldCArIDEpIHtcclxuICAgICAgICAgICAgbWFpbFRvKHJlYWRMZXR0ZXJzLCBJdGVtTGV0dGVycywgYCR7bmFtZUxvY2F0aW9ufS9hcGkvbWFpbENhdGVnb3JpZXNgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdGF0aWMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtuYW1lTG9jYXRpb259L3N0YXRpY2ApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGxldCBsYW5nID0gbnVsbFxyXG4gICAgICAgIGlmKGRhdGFbMF0ubGFuZyA9PT0gJ3J1cycpIHtcclxuICAgICAgICAgICAgbGFuZyA9IDFcclxuICAgICAgICB9IGVsc2UgbGFuZyA9IDJcclxuICAgICAgICBub3RJdGVtVGV4dC50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bNF0ubWFpbFxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGljKClcclxuXHJcbiAgICAvLyDQv9GA0L7QstC10YDQutCwLCDRh9GC0L7QsdGLINC90LUg0LPRgNGD0LfQuNC7INC00LEg0L3QsCDRgdGC0YDQsNC90LjRhtC1IGl0ZW1cclxuICAgIGlmKGAke25hbWVMb2NhdGlvbn0vaXRlbWAgIT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VNYWlsID0gbWFpbFRvKHJlYWRMZXR0ZXJzLCBJdGVtTGV0dGVycywgYCR7bmFtZUxvY2F0aW9ufS9hcGkvbWFpbENhdGVnb3JpZXNgKVxyXG4gICAgICAgIHJlc3BvbnNlTWFpbC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgaWYoTnVtYmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xlbmd0aERhdGEnKSkpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJJbmRleC5jbGFzc0xpc3QuYWRkKCdtYWluTm90TGV0dGVycycpXHJcbiAgICAgICAgICAgICAgICBub3RJdGVtVGV4dC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVOb3RJdGVtJylcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoY29udGFpbmVySW5kZXguY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluTm90TGV0dGVycycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySW5kZXguY2xhc3NMaXN0LnJlbW92ZSgnbWFpbk5vdExldHRlcnMnKVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdEl0ZW1UZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZU5vdEl0ZW0nKVxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZighKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpID09PSAnYmxhY2snKSkge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaHRtbEFjdGl2ZVRoZW1lJylcclxuICAgIH1cclxuXHJcbiAgICAvLyDQv9GA0L7QstC10YDQutCwLCDQtNC+0LHQsNCy0LvRj9C10Lwv0YPQsdC40YDQsNC10Lwg0LTQtdC50YHRgtCy0LjQtSDRgdC60YDQvtC70LvQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YHRgtGA0LDQvdC40YbQtVxyXG4gICAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSkgPT09ICdpbmJveCcpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQWRkVHlwZSlcclxuICAgIH0gZWxzZSBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpKSA9PT0gJ2ltcG9ydGFudCcpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQWRkVHlwZSlcclxuICAgIH0gZWxzZSBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpKSA9PT0gJ3NlbnQnKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEFkZFR5cGUpXHJcbiAgICB9IGVsc2UgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSkgPT09ICdkcmFmdHMnKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEFkZFR5cGUpXHJcbiAgICB9IGVsc2UgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYXRpb24nKSkgPT09ICdhcmNoaXZlJykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBZGRUeXBlKVxyXG4gICAgfSBlbHNlIGlmKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2F0aW9uJykpID09PSAnc3BhbScpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQWRkVHlwZSlcclxuICAgIH0gZWxzZSBpZihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhdGlvbicpKSA9PT0gJ3RyYXNoJykge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBZGRUeXBlKVxyXG4gICAgfSBlbHNlIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBZGRUeXBlKVxyXG5cclxuICAgIGNvbnRhaW5lckluZGV4LmFwcGVuZChyZWFkTGV0dGVycywgbm90SXRlbVRleHQpXHJcbiAgICBjb250YWluZXJJdGVtLmFwcGVuZChpbmZvSXRlbSlcclxuXHJcbiAgICByZXR1cm4ge2NvbnRhaW5lckluZGV4LCBjb250YWluZXJJdGVtfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1haW5QYW5lbFxyXG4iLCJjb25zdCBNYWluUGFuZWwgPSByZXF1aXJlKCcuL01haW5QYW5lbC5qcycpXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcclxuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBpbmJveExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGNvbnN0IGluYm94VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgaW5ib3hMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBpbXBvcnRhbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBjb25zdCBpbXBvcnRhbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBpbXBvcnRhbnRMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCBzZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3Qgc2VudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGNvbnN0IHNlbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBzZW50TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgZHJhZnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgY29uc3QgZHJhZnRzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgY29uc3QgZHJhZnRzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgZHJhZnRzTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgYXJjaGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IGFyY2hpdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBjb25zdCBhcmNoaXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgYXJjaGl2ZUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IHNwYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBjb25zdCBzcGFtTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgY29uc3Qgc3BhbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHNwYW1Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGNvbnN0IHRyYXNoTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgY29uc3QgdHJhc2hUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCB0cmFzaExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGNvbnN0IGxvY2F0aW9uVXNlckRvbWFpbnMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5sYXN0SW5kZXhPZignLycpXHJcbiAgICBjb25zdCBuYW1lTG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBsb2NhdGlvblVzZXJEb21haW5zKVxyXG5cclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKVxyXG4gICAgdWwuY2xhc3NMaXN0LmFkZCgnbmF2X19saXN0JylcclxuICAgIGluYm94LmNsYXNzTGlzdC5hZGQoJ25hdl9fZWxlbScpXHJcbiAgICBpbXBvcnRhbnQuY2xhc3NMaXN0LmFkZCgnbmF2X19lbGVtJylcclxuICAgIHNlbnQuY2xhc3NMaXN0LmFkZCgnbmF2X19lbGVtJylcclxuICAgIGRyYWZ0cy5jbGFzc0xpc3QuYWRkKCduYXZfX2VsZW0nKVxyXG4gICAgYXJjaGl2ZS5jbGFzc0xpc3QuYWRkKCduYXZfX2VsZW0nKVxyXG4gICAgc3BhbS5jbGFzc0xpc3QuYWRkKCduYXZfX2VsZW0nKVxyXG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZCgnbmF2X19lbGVtJylcclxuICAgIGluYm94TGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmsnKVxyXG4gICAgaW1wb3J0YW50TGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmsnKVxyXG4gICAgc2VudExpbmsuY2xhc3NMaXN0LmFkZCgnbmF2X19saW5rJylcclxuICAgIGRyYWZ0c0xpbmsuY2xhc3NMaXN0LmFkZCgnbmF2X19saW5rJylcclxuICAgIGFyY2hpdmVMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluaycpXHJcbiAgICBzcGFtTGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmsnKVxyXG4gICAgdHJhc2hMaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluaycpXHJcbiAgICBpbmJveExvZ28uY2xhc3NMaXN0LmFkZCgnbmF2X19sb2dvJylcclxuICAgIGltcG9ydGFudExvZ28uY2xhc3NMaXN0LmFkZCgnbmF2X19sb2dvJylcclxuICAgIHNlbnRMb2dvLmNsYXNzTGlzdC5hZGQoJ25hdl9fbG9nbycpXHJcbiAgICBkcmFmdHNMb2dvLmNsYXNzTGlzdC5hZGQoJ25hdl9fbG9nbycpXHJcbiAgICBhcmNoaXZlTG9nby5jbGFzc0xpc3QuYWRkKCduYXZfX2xvZ28nKVxyXG4gICAgc3BhbUxvZ28uY2xhc3NMaXN0LmFkZCgnbmF2X19sb2dvJylcclxuICAgIHRyYXNoTG9nby5jbGFzc0xpc3QuYWRkKCduYXZfX2xvZ28nKVxyXG4gICAgaW5ib3hUZXh0LmNsYXNzTGlzdC5hZGQoJ25hdl9fdGV4dCcpXHJcbiAgICBpbXBvcnRhbnRUZXh0LmNsYXNzTGlzdC5hZGQoJ25hdl9fdGV4dCcpXHJcbiAgICBzZW50VGV4dC5jbGFzc0xpc3QuYWRkKCduYXZfX3RleHQnKVxyXG4gICAgZHJhZnRzVGV4dC5jbGFzc0xpc3QuYWRkKCduYXZfX3RleHQnKVxyXG4gICAgYXJjaGl2ZVRleHQuY2xhc3NMaXN0LmFkZCgnbmF2X190ZXh0JylcclxuICAgIHNwYW1UZXh0LmNsYXNzTGlzdC5hZGQoJ25hdl9fdGV4dCcpXHJcbiAgICB0cmFzaFRleHQuY2xhc3NMaXN0LmFkZCgnbmF2X190ZXh0JylcclxuXHJcbiAgICBpbmJveExpbmsuaHJlZiA9ICcvaW5ib3gnXHJcbiAgICBpbXBvcnRhbnRMaW5rLmhyZWYgPSAnL2ltcG9ydGFudCdcclxuICAgIHNlbnRMaW5rLmhyZWYgPSAnL3NlbnQnXHJcbiAgICBkcmFmdHNMaW5rLmhyZWYgPSAnL2RyYWZ0cydcclxuICAgIGFyY2hpdmVMaW5rLmhyZWYgPSAnL2FyY2hpdmUnXHJcbiAgICBzcGFtTGluay5ocmVmID0gJy9zcGFtJ1xyXG4gICAgdHJhc2hMaW5rLmhyZWYgPSAnL3RyYXNoJ1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0RmlsdGVyKGJ0bikge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVVbnJlYWQnLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lRmxhZycsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSlcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjdGl2ZURvbmVFbmNsb3N1cmUnLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVEb25lQWxsTWFpbCcsIEpTT04uc3RyaW5naWZ5KHRydWUpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXNldEZpbHRlcihpbmJveExpbmspXHJcbiAgICByZXNldEZpbHRlcihpbXBvcnRhbnRMaW5rKVxyXG4gICAgcmVzZXRGaWx0ZXIoc2VudExpbmspXHJcbiAgICByZXNldEZpbHRlcihkcmFmdHNMaW5rKVxyXG4gICAgcmVzZXRGaWx0ZXIoYXJjaGl2ZUxpbmspXHJcbiAgICByZXNldEZpbHRlcihzcGFtTGluaylcclxuICAgIHJlc2V0RmlsdGVyKHRyYXNoTGluaylcclxuXHJcbiAgICBjb25zdCBnZXRTdGF0aWMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtuYW1lTG9jYXRpb259L3N0YXRpY2ApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGxldCBsYW5nID0gbnVsbFxyXG4gICAgICAgIGlmKGRhdGFbMF0ubGFuZyA9PT0gJ3J1cycpIHtcclxuICAgICAgICAgICAgbGFuZyA9IDFcclxuICAgICAgICB9IGVsc2UgbGFuZyA9IDJcclxuICAgICAgICBpbmJveFRleHQudGV4dENvbnRlbnQgPSBkYXRhW2xhbmddWzFdLmluYm94XHJcbiAgICAgICAgaW1wb3J0YW50VGV4dC50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMV0uaW1wb3J0YW50XHJcbiAgICAgICAgc2VudFRleHQudGV4dENvbnRlbnQgPSBkYXRhW2xhbmddWzFdLnNlbnRcclxuICAgICAgICBkcmFmdHNUZXh0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVsxXS5kcmFmdHNcclxuICAgICAgICBhcmNoaXZlVGV4dC50ZXh0Q29udGVudCA9IGRhdGFbbGFuZ11bMV0uYXJjaGl2ZVxyXG4gICAgICAgIHNwYW1UZXh0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVsxXS5zcGFtXHJcbiAgICAgICAgdHJhc2hUZXh0LnRleHRDb250ZW50ID0gZGF0YVtsYW5nXVsxXS50cmFzaFxyXG4gICAgICAgIC8vINC40LrQvtC90LrQuCDQuiDQv9Cw0L3QtdC70LhcclxuICAgICAgICBpbmJveExvZ28uaW5uZXJIVE1MID0gYCR7ZGF0YVszXVswXS5pbmJveH1gXHJcbiAgICAgICAgaW1wb3J0YW50TG9nby5pbm5lckhUTUwgPSBgJHtkYXRhWzNdWzBdLmltcG9ydGFudH1gXHJcbiAgICAgICAgc2VudExvZ28uaW5uZXJIVE1MID0gYCR7ZGF0YVszXVswXS5zZW50fWBcclxuICAgICAgICBkcmFmdHNMb2dvLmlubmVySFRNTCA9IGAke2RhdGFbM11bMF0uZHJhZnRzfWBcclxuICAgICAgICBhcmNoaXZlTG9nby5pbm5lckhUTUwgPSBgJHtkYXRhWzNdWzBdLmFyY2hpdmV9YFxyXG4gICAgICAgIHNwYW1Mb2dvLmlubmVySFRNTCA9IGAke2RhdGFbM11bMF0uc3BhbX1gXHJcbiAgICAgICAgdHJhc2hMb2dvLmlubmVySFRNTCA9IGAke2RhdGFbM11bMF0udHJhc2h9YFxyXG4gICAgfVxyXG4gICAgZ2V0U3RhdGljKClcclxuXHJcbiAgICAvLyDQkiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIgdXJsINC00LDQtdC8INGB0YLQuNC70Lgg0L3QsNCyINC/0LDQvdC10LvQuFxyXG4gICAgZnVuY3Rpb24gdXJsVHJhY2tOYXZiYXIodXJsKSB7XHJcbiAgICAgICAgaWYodXJsID09PSBgJHtuYW1lTG9jYXRpb259L2luYm94YCkge1xyXG4gICAgICAgICAgICBpbmJveExpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIGltcG9ydGFudExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHNlbnRMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBkcmFmdHNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBhcmNoaXZlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgc3BhbUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHRyYXNoTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICB9IGVsc2UgaWYodXJsID09PSBgJHtuYW1lTG9jYXRpb259L2ltcG9ydGFudGApIHtcclxuICAgICAgICAgICAgaW5ib3hMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBpbXBvcnRhbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBzZW50TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgZHJhZnRzTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgYXJjaGl2ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHNwYW1MaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICB0cmFzaExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgfSBlbHNlIGlmKHVybCA9PT0gYCR7bmFtZUxvY2F0aW9ufS9zZW50YCkge1xyXG4gICAgICAgICAgICBpbmJveExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIGltcG9ydGFudExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHNlbnRMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBkcmFmdHNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBhcmNoaXZlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgc3BhbUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHRyYXNoTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICB9IGVsc2UgaWYodXJsID09PSBgJHtuYW1lTG9jYXRpb259L2RyYWZ0c2ApIHtcclxuICAgICAgICAgICAgaW5ib3hMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBpbXBvcnRhbnRMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBzZW50TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgZHJhZnRzTGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgYXJjaGl2ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHNwYW1MaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICB0cmFzaExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgfSBlbHNlIGlmKHVybCA9PT0gYCR7bmFtZUxvY2F0aW9ufS9hcmNoaXZlYCkge1xyXG4gICAgICAgICAgICBpbmJveExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIGltcG9ydGFudExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHNlbnRMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBkcmFmdHNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBhcmNoaXZlTGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgc3BhbUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIHRyYXNoTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICB9IGVsc2UgaWYodXJsID09PSBgJHtuYW1lTG9jYXRpb259L3NwYW1gKSB7XHJcbiAgICAgICAgICAgIGluYm94TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgaW1wb3J0YW50TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgc2VudExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIGRyYWZ0c0xpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIGFyY2hpdmVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBzcGFtTGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgdHJhc2hMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgIH0gZWxzZSBpZih1cmwgPT09IGAke25hbWVMb2NhdGlvbn0vdHJhc2hgKSB7XHJcbiAgICAgICAgICAgIGluYm94TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgaW1wb3J0YW50TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgc2VudExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIGRyYWZ0c0xpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSHJlaCcpXHJcbiAgICAgICAgICAgIGFyY2hpdmVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgICAgICBzcGFtTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVIcmVoJylcclxuICAgICAgICAgICAgdHJhc2hMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUhyZWgnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVybFRyYWNrTmF2YmFyKGRvY3VtZW50LnJlZmVycmVyKSAvLyDRgdC80L7RgtGA0LjQvCDRgdGB0YvQu9C60YMg0L/RgNC+0YjQu9C+0Lkg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgdXJsVHJhY2tOYXZiYXIod2luZG93LmxvY2F0aW9uLmhyZWYpIC8vINGB0LzQvtGC0YDQuNC8INGB0YHRi9C70LrRgyDQvdGL0L3QtdGI0L3QtdC5INGB0YLRgNCw0L3QuNGG0YtcclxuXHJcbiAgICBpbmJveExpbmsuYXBwZW5kKGluYm94TG9nbywgaW5ib3hUZXh0KVxyXG4gICAgaW5ib3guYXBwZW5kKGluYm94TGluaylcclxuICAgIGltcG9ydGFudExpbmsuYXBwZW5kKGltcG9ydGFudExvZ28sIGltcG9ydGFudFRleHQpXHJcbiAgICBpbXBvcnRhbnQuYXBwZW5kKGltcG9ydGFudExpbmspXHJcbiAgICBzZW50TGluay5hcHBlbmQoc2VudExvZ28sIHNlbnRUZXh0KVxyXG4gICAgc2VudC5hcHBlbmQoc2VudExpbmspXHJcbiAgICBkcmFmdHNMaW5rLmFwcGVuZChkcmFmdHNMb2dvLCBkcmFmdHNUZXh0KVxyXG4gICAgZHJhZnRzLmFwcGVuZChkcmFmdHNMaW5rKVxyXG4gICAgYXJjaGl2ZUxpbmsuYXBwZW5kKGFyY2hpdmVMb2dvLCBhcmNoaXZlVGV4dClcclxuICAgIGFyY2hpdmUuYXBwZW5kKGFyY2hpdmVMaW5rKVxyXG4gICAgc3BhbUxpbmsuYXBwZW5kKHNwYW1Mb2dvLCBzcGFtVGV4dClcclxuICAgIHNwYW0uYXBwZW5kKHNwYW1MaW5rKVxyXG4gICAgdHJhc2hMaW5rLmFwcGVuZCh0cmFzaExvZ28sIHRyYXNoVGV4dClcclxuICAgIHRyYXNoLmFwcGVuZCh0cmFzaExpbmspXHJcbiAgICB1bC5hcHBlbmQoaW5ib3gsIGltcG9ydGFudCwgc2VudCwgZHJhZnRzLCBhcmNoaXZlLCBzcGFtLCB0cmFzaClcclxuICAgIG5hdi5hcHBlbmQodWwpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYXYsXHJcbiAgICAgICAgaW5ib3hMaW5rLFxyXG4gICAgICAgIGltcG9ydGFudExpbmssXHJcbiAgICAgICAgc2VudExpbmssXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTmF2YmFyXHJcbiIsImNvbnN0IFNldHRpbmcgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzVUkvU2V0dGluZy5qcycpXHJcbmNvbnN0IE5ld0RpciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHNVSS9OZXdEaXIuanMnKVxyXG5jb25zdCBMaW5lSHIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzVUkvTGluZUhyLmpzJylcclxuY29uc3QgV3JpdGVCdG4gPSByZXF1aXJlKCcuLi9jb21wb25lbnRzVUkvV3JpdGVCdG4uanMnKVxyXG5jb25zdCBOYXZiYXIgPSByZXF1aXJlKCcuL05hdmJhci5qcycpXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uUGFuZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXYgPSBOYXZiYXIoKS5uYXZcclxuICAgIGNvbnN0IGJ0biA9IFdyaXRlQnRuKClcclxuICAgIGNvbnN0IGxpbmUgPSBMaW5lSHIoKVxyXG4gICAgY29uc3QgbmV3RGlyID0gTmV3RGlyKClcclxuICAgIGNvbnN0IHNldHRpbmcgPSBTZXR0aW5nKClcclxuICAgIGNvbnN0IG5hdmlnYXRpb25Eb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIG5hdmlnYXRpb25Eb2MuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbicpXHJcblxyXG4gICAgbmF2aWdhdGlvbkRvYy5hcHBlbmQoYnRuLCBuYXYsIGxpbmUsIG5ld0Rpciwgc2V0dGluZylcclxuXHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbkRvY1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5hdmlnYXRpb25QYW5lbFxyXG4iLCJjb25zdCBIZWFkZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSGVhZGVyLmpzJylcclxuY29uc3QgSGVhZGVySXRlbSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9IZWFkZXJJdGVtLmpzJylcclxuY29uc3QgTWFpblBhbmVsID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL01haW5QYW5lbC5qcycpXHJcbmNvbnN0IE5hdmlnYXRpb25QYW5lbCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uUGFuZWwuanMnKVxyXG5jb25zdCBEZXRhaWxzU2V0dGluZyA9IHJlcXVpcmUoJy4vY29tcG9uZW50c1VJL0RldGFpbHNTZXR0aW5nLmpzJylcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpXHJcblx0Y29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtJylcclxuICAgIGNvbnN0IHN1YnN0cmF0ZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0Y29uc3QgaGVhZGVyID0gSGVhZGVyKClcclxuXHRjb25zdCBtYWluUGFydCA9IE1haW5QYW5lbCgpXHJcblx0Y29uc3QgbmF2aWdhdGlvblBhbmVsID0gTmF2aWdhdGlvblBhbmVsKClcclxuXHRjb25zdCBoZWFkZXJJdGVtID0gSGVhZGVySXRlbSgpXHJcbiAgICBjb25zdCBkZXRhaWxzU2V0dGluZyA9IERldGFpbHNTZXR0aW5nKClcclxuXHJcblx0c3Vic3RyYXRlTmF2LmNsYXNzTGlzdC5hZGQoJ3N1YnN0cmF0ZU5hdicpXHJcblxyXG5cdC8vINCX0LDQutGA0YvQstCw0LXQvCDQv9C+INC60LvQuNC60YMg0LLQvdC1INC10LPQviDQvtCx0LvQsNGB0YLQuFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpdGhpbkJvdW5kYXJpZXMgPSBlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGRldGFpbHNTZXR0aW5nKVxyXG5cclxuXHRcdGlmICghd2l0aGluQm91bmRhcmllcykge1xyXG5cdFx0XHRpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9pdGVtJykge1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlblNldHRpbmcnKVxyXG5cdFx0XHR9IGVsc2UgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuU2V0dGluZycpXHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlVG9vbHRpcCcpIC8vINGB0LrRgNGL0LLQsNC10Lwg0Y3Qu9C10LzQtdC90YIg0YIg0Log0LrQu9C40Log0LHRi9C7INC30LAg0LXQs9C+INC/0YDQtdC00LXQu9Cw0LzQuFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cdG1haW4/LmFwcGVuZChoZWFkZXIsIG5hdmlnYXRpb25QYW5lbCwgbWFpblBhcnQuY29udGFpbmVySW5kZXgpXHJcblx0aXRlbT8uYXBwZW5kKGhlYWRlckl0ZW0sIG5hdmlnYXRpb25QYW5lbCwgbWFpblBhcnQuY29udGFpbmVySXRlbSlcclxuXHRib2R5LmFwcGVuZChkZXRhaWxzU2V0dGluZylcclxufSlcclxuIiwiYXN5bmMgZnVuY3Rpb24gbWFpbFRvKHJlYWRMZXR0ZXJzLCBJdGVtTGV0dGVycywgdXJsKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBkYXRhLnNvcnQoKGEsIGIpID0+IERhdGUucGFyc2UoYi5kYXRlKSAtIERhdGUucGFyc2UoYS5kYXRlKSkgLy8g0YHQvtGA0YLQuNGA0YPQtdC8INC/0L4g0LTQsNGC0LUo0YPQsdGL0LLQsNC90LjQtSlcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZW5ndGhEYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5sZW5ndGgpKVxyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uVXNlckRvbWFpbnMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5sYXN0SW5kZXhPZignLycpXHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaHJlZi5sYXN0SW5kZXhPZignPycpKVxyXG4gICAgY29uc3QgcXVlcnlQYXJhbXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZShsb2NhdGlvblVzZXJEb21haW5zKS5sYXN0SW5kZXhPZignPycpXHJcbiAgICBsZXQgbG9jYXRpb25Vc2VyID0gbnVsbFxyXG4gICAgaWYocXVlcnlQYXJhbXMgPiAtMSkge1xyXG4gICAgICAgIGxvY2F0aW9uVXNlciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKGxvY2F0aW9uVXNlckRvbWFpbnMpLnNsaWNlKDAsIHF1ZXJ5UGFyYW1zKVxyXG4gICAgfSBlbHNlIGxvY2F0aW9uVXNlciA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKGxvY2F0aW9uVXNlckRvbWFpbnMpXHJcbiAgICBjb25zdCBuYW1lTG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBsb2NhdGlvblVzZXJEb21haW5zKVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGAke25hbWVMb2NhdGlvbn0vc2VudGApIHtcclxuICAgICAgICAgICAgaWYoZGF0YVtpXT8uZm9sZGVyID09PSBcItCe0YLQv9GA0LDQstC70LXQvdC90YvQtVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTGV0dGVycyA9IEl0ZW1MZXR0ZXJzKGRhdGFbaV0uYXV0aG9yLCBkYXRhW2ldLmRhdGUsIGRhdGFbaV0/LnRpdGxlLCBkYXRhW2ldPy50ZXh0LCBkYXRhW2ldLnRvLCBkYXRhW2ldLnJlYWQsIGRhdGFbaV0/LmZsYWcsIGRhdGFbaV0/LmJvb2ttYXJrLCBkYXRhW2ldPy5pbXBvcnRhbnQsIGRhdGFbaV0/LmlkLCBkYXRhW2ldPy5kb2MpXHJcbiAgICAgICAgICAgICAgICByZWFkTGV0dGVycy5hcHBlbmQoaXRlbUxldHRlcnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGAke25hbWVMb2NhdGlvbn0vZHJhZnRzYCkge1xyXG4gICAgICAgICAgICBpZihkYXRhW2ldPy5mb2xkZXIgPT09IFwi0KfQtdGA0L3QvtCy0LjQutC4XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1MZXR0ZXJzID0gSXRlbUxldHRlcnMoZGF0YVtpXS5hdXRob3IsIGRhdGFbaV0uZGF0ZSwgZGF0YVtpXT8udGl0bGUsIGRhdGFbaV0/LnRleHQsIGRhdGFbaV0udG8sIGRhdGFbaV0ucmVhZCwgZGF0YVtpXT8uZmxhZywgZGF0YVtpXT8uYm9va21hcmssIGRhdGFbaV0/LmltcG9ydGFudCwgZGF0YVtpXT8uaWQsIGRhdGFbaV0/LmRvYylcclxuICAgICAgICAgICAgICAgIHJlYWRMZXR0ZXJzLmFwcGVuZChpdGVtTGV0dGVycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gYCR7bmFtZUxvY2F0aW9ufS9hcmNoaXZlYCkge1xyXG4gICAgICAgICAgICBpZihkYXRhW2ldPy5mb2xkZXIgPT09IFwi0JDRgNGF0LjQslwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTGV0dGVycyA9IEl0ZW1MZXR0ZXJzKGRhdGFbaV0uYXV0aG9yLCBkYXRhW2ldLmRhdGUsIGRhdGFbaV0/LnRpdGxlLCBkYXRhW2ldPy50ZXh0LCBkYXRhW2ldLnRvLCBkYXRhW2ldLnJlYWQsIGRhdGFbaV0/LmZsYWcsIGRhdGFbaV0/LmJvb2ttYXJrLCBkYXRhW2ldPy5pbXBvcnRhbnQsIGRhdGFbaV0/LmlkLCBkYXRhW2ldPy5kb2MpXHJcbiAgICAgICAgICAgICAgICByZWFkTGV0dGVycy5hcHBlbmQoaXRlbUxldHRlcnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGAke25hbWVMb2NhdGlvbn0vc3BhbWApIHtcclxuICAgICAgICAgICAgaWYoZGF0YVtpXT8uZm9sZGVyID09PSBcItCh0L/QsNC8XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1MZXR0ZXJzID0gSXRlbUxldHRlcnMoZGF0YVtpXS5hdXRob3IsIGRhdGFbaV0uZGF0ZSwgZGF0YVtpXT8udGl0bGUsIGRhdGFbaV0/LnRleHQsIGRhdGFbaV0udG8sIGRhdGFbaV0ucmVhZCwgZGF0YVtpXT8uZmxhZywgZGF0YVtpXT8uYm9va21hcmssIGRhdGFbaV0/LmltcG9ydGFudCwgZGF0YVtpXT8uaWQsIGRhdGFbaV0/LmRvYylcclxuICAgICAgICAgICAgICAgIHJlYWRMZXR0ZXJzLmFwcGVuZChpdGVtTGV0dGVycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gYCR7bmFtZUxvY2F0aW9ufS90cmFzaGApIHtcclxuICAgICAgICAgICAgaWYoZGF0YVtpXT8uZm9sZGVyID09PSBcItCa0L7RgNC30LjQvdCwXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1MZXR0ZXJzID0gSXRlbUxldHRlcnMoZGF0YVtpXS5hdXRob3IsIGRhdGFbaV0uZGF0ZSwgZGF0YVtpXT8udGl0bGUsIGRhdGFbaV0/LnRleHQsIGRhdGFbaV0udG8sIGRhdGFbaV0ucmVhZCwgZGF0YVtpXT8uZmxhZywgZGF0YVtpXT8uYm9va21hcmssIGRhdGFbaV0/LmltcG9ydGFudCwgZGF0YVtpXT8uaWQsIGRhdGFbaV0/LmRvYylcclxuICAgICAgICAgICAgICAgIHJlYWRMZXR0ZXJzLmFwcGVuZChpdGVtTGV0dGVycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gYCR7bmFtZUxvY2F0aW9ufS9pbmJveGApIHtcclxuICAgICAgICAgICAgaWYoIWRhdGFbaV0/LmZvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUxldHRlcnMgPSBJdGVtTGV0dGVycyhkYXRhW2ldLmF1dGhvciwgZGF0YVtpXS5kYXRlLCBkYXRhW2ldPy50aXRsZSwgZGF0YVtpXT8udGV4dCwgZGF0YVtpXS50bywgZGF0YVtpXS5yZWFkLCBkYXRhW2ldPy5mbGFnLCBkYXRhW2ldPy5ib29rbWFyaywgZGF0YVtpXT8uaW1wb3J0YW50LCBkYXRhW2ldPy5pZCwgZGF0YVtpXT8uZG9jKVxyXG4gICAgICAgICAgICAgICAgcmVhZExldHRlcnMuYXBwZW5kKGl0ZW1MZXR0ZXJzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhW2ldPy5mb2xkZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1MZXR0ZXJzID0gSXRlbUxldHRlcnMoZGF0YVtpXS5hdXRob3IsIGRhdGFbaV0uZGF0ZSwgZGF0YVtpXT8udGl0bGUsIGRhdGFbaV0/LnRleHQsIGRhdGFbaV0udG8sIGRhdGFbaV0ucmVhZCwgZGF0YVtpXT8uZmxhZywgZGF0YVtpXT8uYm9va21hcmssIGRhdGFbaV0/LmltcG9ydGFudCwgZGF0YVtpXT8uaWQsIGRhdGFbaV0/LmRvYylcclxuICAgICAgICAgICAgICAgIHJlYWRMZXR0ZXJzLmFwcGVuZChpdGVtTGV0dGVycylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gYCR7bmFtZUxvY2F0aW9ufS9pbXBvcnRhbnRgKSB7XHJcbiAgICAgICAgICAgIC8vINGBINCx0LQg0L/RgNC40LvQtdGC0LDQtdGCINC+0YLRgdC+0YDRgtC40YDQvtCy0LDQvdC90YvQuSDQvNCw0YHRgdC40LIg0L/QviDQv9Cw0L/QutCw0LxcclxuICAgICAgICAgICAgaWYoZGF0YVtpXT8uZm9sZGVyID09PSBcItCS0LDQttC90L7QtVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTGV0dGVycyA9IEl0ZW1MZXR0ZXJzKGRhdGFbaV0uYXV0aG9yLCBkYXRhW2ldLmRhdGUsIGRhdGFbaV0/LnRpdGxlLCBkYXRhW2ldPy50ZXh0LCBkYXRhW2ldLnRvLCBkYXRhW2ldLnJlYWQsIGRhdGFbaV0/LmZsYWcsIGRhdGFbaV0/LmJvb2ttYXJrLCBkYXRhW2ldPy5pbXBvcnRhbnQsIGRhdGFbaV0/LmlkLCBkYXRhW2ldPy5kb2MpXHJcbiAgICAgICAgICAgICAgICByZWFkTGV0dGVycy5hcHBlbmQoaXRlbUxldHRlcnMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX191bnJlYWQ9MGApIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUxldHRlcnMgPSBJdGVtTGV0dGVycyhkYXRhW2ldLmF1dGhvciwgZGF0YVtpXS5kYXRlLCBkYXRhW2ldPy50aXRsZSwgZGF0YVtpXT8udGV4dCwgZGF0YVtpXS50bywgZGF0YVtpXS5yZWFkLCBkYXRhW2ldPy5mbGFnLCBkYXRhW2ldPy5ib29rbWFyaywgZGF0YVtpXT8uaW1wb3J0YW50KVxyXG4gICAgICAgICAgICByZWFkTGV0dGVycy5hcHBlbmQoaXRlbUxldHRlcnMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fZmxhZz0wYCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtTGV0dGVycyA9IEl0ZW1MZXR0ZXJzKGRhdGFbaV0uYXV0aG9yLCBkYXRhW2ldLmRhdGUsIGRhdGFbaV0/LnRpdGxlLCBkYXRhW2ldPy50ZXh0LCBkYXRhW2ldLnRvLCBkYXRhW2ldLnJlYWQsIGRhdGFbaV0/LmZsYWcsIGRhdGFbaV0/LmJvb2ttYXJrLCBkYXRhW2ldPy5pbXBvcnRhbnQpXHJcbiAgICAgICAgICAgIHJlYWRMZXR0ZXJzLmFwcGVuZChpdGVtTGV0dGVycylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX19kb2M9MGApIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUxldHRlcnMgPSBJdGVtTGV0dGVycyhkYXRhW2ldLmF1dGhvciwgZGF0YVtpXS5kYXRlLCBkYXRhW2ldPy50aXRsZSwgZGF0YVtpXT8udGV4dCwgZGF0YVtpXS50bywgZGF0YVtpXS5yZWFkLCBkYXRhW2ldPy5mbGFnLCBkYXRhW2ldPy5ib29rbWFyaywgZGF0YVtpXT8uaW1wb3J0YW50KVxyXG4gICAgICAgICAgICByZWFkTGV0dGVycy5hcHBlbmQoaXRlbUxldHRlcnMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBgJHtuYW1lTG9jYXRpb259JHtsb2NhdGlvblVzZXJ9P2ZpbHRlcl9fdW5yZWFkPTAmZmlsdGVyX19mbGFnPTBgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1MZXR0ZXJzID0gSXRlbUxldHRlcnMoZGF0YVtpXS5hdXRob3IsIGRhdGFbaV0uZGF0ZSwgZGF0YVtpXT8udGl0bGUsIGRhdGFbaV0/LnRleHQsIGRhdGFbaV0udG8sIGRhdGFbaV0ucmVhZCwgZGF0YVtpXT8uZmxhZywgZGF0YVtpXT8uYm9va21hcmssIGRhdGFbaV0/LmltcG9ydGFudClcclxuICAgICAgICAgICAgcmVhZExldHRlcnMuYXBwZW5kKGl0ZW1MZXR0ZXJzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfT9maWx0ZXJfX3VucmVhZD0wJmZpbHRlcl9fZG9jPTBgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1MZXR0ZXJzID0gSXRlbUxldHRlcnMoZGF0YVtpXS5hdXRob3IsIGRhdGFbaV0uZGF0ZSwgZGF0YVtpXT8udGl0bGUsIGRhdGFbaV0/LnRleHQsIGRhdGFbaV0udG8sIGRhdGFbaV0ucmVhZCwgZGF0YVtpXT8uZmxhZywgZGF0YVtpXT8uYm9va21hcmssIGRhdGFbaV0/LmltcG9ydGFudClcclxuICAgICAgICAgICAgcmVhZExldHRlcnMuYXBwZW5kKGl0ZW1MZXR0ZXJzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaHJlZiA9PT0gYCR7bmFtZUxvY2F0aW9ufSR7bG9jYXRpb25Vc2VyfT9maWx0ZXJfX2ZsYWc9MCZmaWx0ZXJfX2RvYz0wYCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtTGV0dGVycyA9IEl0ZW1MZXR0ZXJzKGRhdGFbaV0uYXV0aG9yLCBkYXRhW2ldLmRhdGUsIGRhdGFbaV0/LnRpdGxlLCBkYXRhW2ldPy50ZXh0LCBkYXRhW2ldLnRvLCBkYXRhW2ldLnJlYWQsIGRhdGFbaV0/LmZsYWcsIGRhdGFbaV0/LmJvb2ttYXJrLCBkYXRhW2ldPy5pbXBvcnRhbnQpXHJcbiAgICAgICAgICAgIHJlYWRMZXR0ZXJzLmFwcGVuZChpdGVtTGV0dGVycylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYod2luZG93LmxvY2F0aW9uLmhyZWYgPT09IGAke25hbWVMb2NhdGlvbn0ke2xvY2F0aW9uVXNlcn0/ZmlsdGVyX191bnJlYWQ9MCZmaWx0ZXJfX2ZsYWc9MCZmaWx0ZXJfX2RvYz0wYCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtTGV0dGVycyA9IEl0ZW1MZXR0ZXJzKGRhdGFbaV0uYXV0aG9yLCBkYXRhW2ldLmRhdGUsIGRhdGFbaV0/LnRpdGxlLCBkYXRhW2ldPy50ZXh0LCBkYXRhW2ldLnRvLCBkYXRhW2ldLnJlYWQsIGRhdGFbaV0/LmZsYWcsIGRhdGFbaV0/LmJvb2ttYXJrLCBkYXRhW2ldPy5pbXBvcnRhbnQpXHJcbiAgICAgICAgICAgIHJlYWRMZXR0ZXJzLmFwcGVuZChpdGVtTGV0dGVycylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1haWxUb1xyXG4iXX0=
