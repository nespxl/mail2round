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
