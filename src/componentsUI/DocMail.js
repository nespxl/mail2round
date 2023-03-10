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
