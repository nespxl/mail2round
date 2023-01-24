const fs = require('fs')
const path = require('path')
const constPost = 40 // порция подгрузки
let locationUser = '/'
let theme = false

/* eslint-disable no-console */
// импорт стандартных библиотек Node.js
const { readFileSync } = require('fs');
const { createServer } = require('http');

// файл статики
const STATIC = './static/static.json'
// файл для базы данных
const DB_FILE = process.env.DB_FILE || './db.json';
// номер порта, на котором будет запущен сервер
const PORT = process.env.PORT || 3000;
// префикс URI для всех методов приложения
const URI_PREFIX = '/api/clients';

/**
 * Класс ошибки, используется для отправки ответа с определённым кодом и описанием ошибки
 */
class ApiError extends Error {
  constructor(statusCode, data) {
    super();
    this.statusCode = statusCode;
    this.data = data;
  }
}

function drainJson(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(data);
    });
  });
}

const getClientList = (params = {}) => {
  let id = 0
  const clients = JSON.parse(readFileSync(DB_FILE));

  // даем id элементам
  clients.map(elem => elem.id = id++)

  // без фильтров
  let clientsDef = clients.filter(item => !(item.folder))
  let clientImportant = clients.filter(item => item.folder === 'Важное')
  let clientSent = clients.filter(item => item.folder === 'Отправленные')
  let clientDrafts = clients.filter(item => item.folder === 'Черновики')
  let clientArchive = clients.filter(item => item.folder === 'Архив')
  let clientSpam = clients.filter(item => item.folder === 'Спам')
  let clientTrash = clients.filter(item => item.folder === 'Корзина')

  // с фильтром непрочитанные
  let clientsDefUnread = clientsDef.filter(item => item.read === false)
  let clientImportantUnread = clientImportant.filter(item => item.read === false)
  let clientSentUnread = clientSent.filter(item => item.read === false)
  let clientDraftsUnread = clientDrafts.filter(item => item.read === false)
  let clientArchiveUnread = clientArchive.filter(item => item.read === false)
  let clientSpamUnread = clientSpam.filter(item => item.read === false)
  let clientTrashUnread = clientTrash.filter(item => item.read === false)

  // с фильтром Со флажком
  let clientsDefFlag = clientsDef.filter(item => item.bookmark === true)
  let clientImportantFlag = clientImportant.filter(item => item.bookmark === true)
  let clientSentFlag = clientSent.filter(item => item.bookmark === true)
  let clientDraftsFlag = clientDrafts.filter(item => item.bookmark === true)
  let clientArchiveFlag = clientArchive.filter(item => item.bookmark === true)
  let clientSpamFlag = clientSpam.filter(item => item.bookmark === true)
  let clientTrashFlag = clientTrash.filter(item => item.bookmark === true)

  // с фильтром С вложением
  let clientsDefDoc = clientsDef.filter(item => item.doc)
  let clientImportantDoc = clientImportant.filter(item => item.doc)
  let clientSentDoc = clientSent.filter(item => item.doc)
  let clientDraftsDoc = clientDrafts.filter(item => item.doc)
  let clientArchiveDoc = clientArchive.filter(item => item.doc)
  let clientSpamDoc = clientSpam.filter(item => item.doc)
  let clientTrashDoc = clientTrash.filter(item => item.doc)

  // с фильтром Непрочитанные и С флагом
  let clientsDefUnreadFlag = clientsDefFlag.filter(item => item.read === false)
  let clientImportantUnreadFlag = clientImportantFlag.filter(item => item.read === false)
  let clientSentUnreadFlag = clientSentFlag.filter(item => item.read === false)
  let clientDraftsUnreadFlag = clientDraftsFlag.filter(item => item.read === false)
  let clientArchiveUnreadFlag = clientArchiveFlag.filter(item => item.read === false)
  let clientSpamUnreadFlag = clientSpamFlag.filter(item => item.read === false)
  let clientTrashUnreadFlag = clientTrashFlag.filter(item => item.read === false)

  // с фильтром Непрочитанные и С вложением
  let clientsDefUnreadDoc = clientsDefDoc.filter(item => item.read === false)
  let clientImportantUnreadDoc = clientImportantDoc.filter(item => item.read === false)
  let clientSentUnreadDoc = clientSentDoc.filter(item => item.read === false)
  let clientDraftsUnreadDoc = clientDraftsDoc.filter(item => item.read === false)
  let clientArchiveUnreadDoc = clientArchiveDoc.filter(item => item.read === false)
  let clientSpamUnreadDoc = clientSpamDoc.filter(item => item.read === false)
  let clientTrashUnreadDoc = clientTrashDoc.filter(item => item.read === false)

  // с фильтром С флагом и С вложением
  let clientsDefFlagDoc = clientsDefFlag.filter(item => item.doc)
  let clientImportantFlagDoc = clientImportantFlag.filter(item => item.doc)
  let clientSentFlagDoc = clientSentFlag.filter(item => item.doc)
  let clientDraftsFlagDoc = clientDraftsFlag.filter(item => item.doc)
  let clientArchiveFlagDoc = clientArchiveFlag.filter(item => item.doc)
  let clientSpamFlagDoc = clientSpamFlag.filter(item => item.doc)
  let clientTrashFlagDoc = clientTrashFlag.filter(item => item.doc)

  // с фильтром все и сразу
  let clientsDefUnreadFlagDoc = clientsDefFlagDoc.filter(item =>item.read === false)
  let clientImportantUnreadFlagDoc = clientImportantFlagDoc.filter(item => item.read === false)
  let clientSentUnreadFlagDoc = clientSentFlagDoc.filter(item => item.read === false)
  let clientDraftsUnreadFlagDoc = clientDraftsFlagDoc.filter(item => item.read === false)
  let clientArchiveUnreadFlagDoc = clientArchiveFlagDoc.filter(item => item.read === false)
  let clientSpamUnreadFlagDoc = clientSpamFlagDoc.filter(item => item.read === false)
  let clientTrashUnreadFlagDoc = clientTrashFlagDoc.filter(item => item.read === false)

  return {
    clients,
    clientImportant,
    clientSent,
    clientDrafts,
    clientArchive,
    clientSpam,
    clientTrash,
    clientsDef,
    clientsDefUnread,
    clientImportantUnread,
    clientSentUnread,
    clientDraftsUnread,
    clientArchiveUnread,
    clientSpamUnread,
    clientTrashUnread,
    clientsDefFlag,
    clientImportantFlag,
    clientSentFlag,
    clientDraftsFlag,
    clientArchiveFlag,
    clientSpamFlag,
    clientTrashFlag,
    clientsDefDoc,
    clientImportantDoc,
    clientSentDoc,
    clientDraftsDoc,
    clientArchiveDoc,
    clientSpamDoc,
    clientTrashDoc,
    clientsDefUnreadFlag,
    clientImportantUnreadFlag,
    clientSentUnreadFlag,
    clientDraftsUnreadFlag,
    clientArchiveUnreadFlag,
    clientSpamUnreadFlag,
    clientTrashUnreadFlag,
    clientsDefUnreadDoc,
    clientImportantUnreadDoc,
    clientSentUnreadDoc,
    clientDraftsUnreadDoc,
    clientArchiveUnreadDoc,
    clientSpamUnreadDoc,
    clientTrashUnreadDoc,
    clientsDefFlagDoc,
    clientImportantFlagDoc,
    clientSentFlagDoc,
    clientDraftsFlagDoc,
    clientArchiveFlagDoc,
    clientSpamFlagDoc,
    clientTrashFlagDoc,
    clientsDefUnreadFlagDoc,
    clientImportantUnreadFlagDoc,
    clientSentUnreadFlagDoc,
    clientDraftsUnreadFlagDoc,
    clientArchiveUnreadFlagDoc,
    clientSpamUnreadFlagDoc,
    clientTrashUnreadFlagDoc
  };
}

module.exports = createServer(async (req, res) => {

  const pageIndex = path.join(__dirname, 'index.html')
  const pageItem = path.join(__dirname, 'item.html')
  const pageMain = path.join(__dirname, 'main.js')
  const styleHeader = path.join(__dirname, 'style', 'header.css')
  const styleNav = path.join(__dirname, 'style', 'navbar.css')
  const styleItem = path.join(__dirname, 'style', 'infoItem.css')
  const styleItemLetters = path.join(__dirname, 'style', 'itemLetters.css')
  const styleMainPanel = path.join(__dirname, 'style', 'mainPanel.css')
  const styleUI = path.join(__dirname, 'style', 'UI.css')
  const styleIndex = path.join(__dirname, 'style', 'index.css')
  const changeTheme = path.join(__dirname, 'style', 'theme.css')
  const image = path.join(__dirname, 'img', 'div.png')
  const imageAnime = path.join(__dirname, 'img', 'anime.jpg')
  const imageAnimeIcon = path.join(__dirname, 'img', 'div.png')
  const notLettersWhite = path.join(__dirname, 'img', '061.svg')
  const notLettersBlack = path.join(__dirname, 'img', '06_dark1.svg')
  const notLettersCustom = path.join(__dirname, 'img', '06.svg')

  if (req.url === '/inbox') {
    locationUser = getClientList(queryParams = {})?.clientsDef
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/main.js') {
    fs.readFile(pageMain, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/javascript'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/header.css') {
    fs.readFile(styleHeader, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  // if(theme) {
    if (req.url === '/style/theme.css') {
      fs.readFile(changeTheme, (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/css'
          })
          res.end(data)
        }
      })
    }
  // }

  if (req.url === '/style/navbar.css') {
    fs.readFile(styleNav, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/infoItem.css') {
    fs.readFile(styleItem, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/itemLetters.css') {
    fs.readFile(styleItemLetters, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/mainPanel.css') {
    fs.readFile(styleMainPanel, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/UI.css') {
    fs.readFile(styleUI, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/style/index.css') {
    fs.readFile(styleIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/css'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/img/div.png') {
    fs.readFile(imageAnimeIcon, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/png'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/img/anime.jpg') {
    fs.readFile(imageAnime, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/jpg'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/img/div.png') {
    fs.readFile(image, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/png'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/img/061.svg') {
    fs.readFile(notLettersWhite, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/svg+xml'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/img/06_dark1.svg') {
    fs.readFile(notLettersBlack, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/svg+xml'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/img/06.svg') {
    fs.readFile(notLettersCustom, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/svg+xml'
        })
        res.end(data)
      }
    })
  }

  if (req.url === `/item`) {
    locationUser = getClientList(queryParams = {})?.clients
    fs.readFile(pageItem, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/important') {
    locationUser = getClientList(queryParams = {})?.clientImportant
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/sent') {
    locationUser = getClientList(queryParams = {})?.clientSent
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/drafts') {
    locationUser = getClientList(queryParams = {})?.clientDrafts
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/archive') {
    locationUser = getClientList(queryParams = {})?.clientArchive
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/spam') {
    locationUser = getClientList(queryParams = {})?.clientSpam
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/trash') {
    locationUser = getClientList(queryParams = {})?.clientTrash
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  // Inbox
  if (req.url === '/inbox?filter__unread=0') {
    const query = req.url.substr(URI_PREFIX.length).split('?');
    locationUser = getClientList(queryParams = {})?.clientsDefUnread
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/inbox?filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientsDefFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/inbox?filter__doc=0') {
    const query = req.url.substr(URI_PREFIX.length).split('?');
    locationUser = getClientList(queryParams = {})?.clientsDefDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/inbox?filter__unread=0&filter__flag=0') {
    const query = req.url.substr(URI_PREFIX.length).split('?');
    locationUser = getClientList(queryParams = {})?.clientsDefUnreadFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/inbox?filter__unread=0&filter__doc=0') {
    const query = req.url.substr(URI_PREFIX.length).split('?');
    locationUser = getClientList(queryParams = {})?.clientsDefUnreadDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/inbox?filter__flag=0&filter__doc=0') {
    const query = req.url.substr(URI_PREFIX.length).split('?');
    locationUser = getClientList(queryParams = {})?.clientsDefFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/inbox?filter__unread=0&filter__flag=0&filter__doc=0') {
    const query = req.url.substr(URI_PREFIX.length).split('?');
    locationUser = getClientList(queryParams = {})?.clientsDefUnreadFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  // important
  if (req.url === '/important?filter__unread=0') {
    locationUser = getClientList(queryParams = {})?.clientImportantUnread
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/important?filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientImportantFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/important?filter__doc=0') {
    const query = req.url.substr(URI_PREFIX.length).split('?');
    locationUser = getClientList(queryParams = {})?.clientImportantDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/important?filter__unread=0&filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientImportantUnreadFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/important?filter__unread=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientImportantUnreadDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/important?filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientImportantFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/important?filter__unread=0&filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientImportantUnreadFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  // sent
  if (req.url === '/sent?filter__unread=0') {
    locationUser = getClientList(queryParams = {})?.clientSentUnread
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/sent?filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientSentFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/sent?filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSentDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/sent?filter__unread=0&filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientSentUnreadFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/sent?filter__unread=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSentUnreadDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/sent?filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSentFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/sent?filter__unread=0&filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSentUnreadFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  // drafts
  if (req.url === '/drafts?filter__unread=0') {
    locationUser = getClientList(queryParams = {})?.clientDraftsUnread
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/drafts?filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientDraftsFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/drafts?filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientDraftsDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/drafts?filter__unread=0&filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientDraftsUnreadFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/drafts?filter__unread=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientDraftsUnreadDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/drafts?filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientDraftsFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/drafts?filter__unread=0&filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientDraftsUnreadFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  // archive
  if (req.url === '/archive?filter__unread=0') {
    locationUser = getClientList(queryParams = {})?.clientArchiveUnread
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/archive?filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientArchiveFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/archive?filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientArchiveDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/archive?filter__unread=0&filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientArchiveUnreadFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/archive?filter__unread=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientArchiveUnreadDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/archive?filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientArchiveFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/archive?filter__unread=0&filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientArchiveUnreadFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  // spam
  if (req.url === '/spam?filter__unread=0') {
    locationUser = getClientList(queryParams = {})?.clientSpamUnread
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/spam?filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientSpamFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/spam?filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSpamDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/spam?filter__unread=0&filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientSpamUnreadFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/spam?filter__unread=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSpamUnreadDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/spam?filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSpamFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/spam?filter__unread=0&filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientSpamUnreadFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  // trash
  if (req.url === '/trash?filter__unread=0') {
    locationUser = getClientList(queryParams = {})?.clientTrashUnread
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/trash?filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientTrashFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/trash?filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientTrashDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/trash?filter__unread=0&filter__flag=0') {
    locationUser = getClientList(queryParams = {})?.clientTrashUnreadFlag
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/trash?filter__unread=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientTrashUnreadDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/trash?filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientTrashFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }
  if (req.url === '/trash?filter__unread=0&filter__flag=0&filter__doc=0') {
    locationUser = getClientList(queryParams = {})?.clientTrashUnreadFlagDoc
    fs.readFile(pageIndex, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  }

  if (req.url === '/static') {
    const [uri] = req.url.substr(URI_PREFIX.length).split('?');
    const static = JSON.parse(readFileSync(STATIC))

    const body = await (async () => {
      if (uri === '' || uri === '/') {
        if (req.method === 'GET') {
          return static
        }
        if (req.method === 'POST') {
          const lang = await drainJson(req)
          res.statusCode = 201
          static[0].lang = JSON.parse(lang.trim())
          fs.writeFileSync(STATIC, JSON.stringify(static))
        }
      }
    })();
    res.end(JSON.stringify(body));
  }

  if (req.url === '/api/mailCategories') {
    res.setHeader('Content-Type', 'application/json');

    const [uri, query] = req.url.substr(URI_PREFIX.length).split('?');
    const queryParams = {};

    // обрабатываем запрос и формируем тело ответа
    const body = await (async () => {
      if (req.method === 'GET') {
        const r = locationUser.splice(0, constPost)
        return r
      }
      if (req.method === 'POST') {
        const createdItem = await drainJson(req)
        res.statusCode = 201
        return locationUser
      }
      return null
    })();
    res.end(JSON.stringify(body));
  }

  if (req.url === '/api/clients') {
    res.setHeader('Content-Type', 'application/json');

    // CORS заголовки ответа для поддержки кросс-доменных запросов из браузера
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // запрос с методом OPTIONS может отправлять браузер автоматически для проверки CORS заголовков
    // в этом случае достаточно ответить с пустым телом и этими заголовками
    if (req.method === 'OPTIONS') {
      // end = закончить формировать ответ и отправить его клиенту
      res.end();
      return;
    }

    // если URI не начинается с нужного префикса - можем сразу отдать 404
    if (!req.url || !req.url.startsWith(URI_PREFIX)) {
      res.statusCode = 404;
      res.end(JSON.stringify({ message: 'Not Found' }));
      return;
    }

    // убираем из запроса префикс URI, разбиваем его на путь и параметры
    const [uri, query] = req.url.substr(URI_PREFIX.length).split('?');
    const queryParams = {};

    // параметры могут отсутствовать вообще или иметь вид a=b&b=c
    // во втором случае наполняем объект queryParams { a: 'b', b: 'c' }
    if (query) {
      for (const piece of query.split('&')) {
        const [key, value] = piece.split('=');
        queryParams[key] = value ? decodeURIComponent(value) : '';
      }
    }

    try {
      // обрабатываем запрос и формируем тело ответа
      const body = await (async () => {
        if (uri === '' || uri === '/') {
          // /api/clients
          if (req.method === 'GET') {
            const r = locationUser.splice(0, constPost)
            // const r = []
            return r
          }
          if (req.method === 'POST') {
            const createdItem = await drainJson(req)
            res.statusCode = 201
            // res.setHeader('Access-Control-Expose-Headers', 'Location')
            // res.setHeader('Location', `${URI_PREFIX}/${createdItem}`)
            // console.log('id', createdItem)
            // console.log(locationUser)
            const filter = locationUser.filter(elem => elem.id == createdItem)
            // console.log(filter)
            return filter
          }
        }
        return null
      })();
      res.end(JSON.stringify(body));
    } catch (err) {
      // обрабатываем сгенерированную нами же ошибку
      if (err instanceof ApiError) {
        res.writeHead(err.statusCode);
        res.end(JSON.stringify(err.data));
      } else {
        // если что-то пошло не так - пишем об этом в консоль и возвращаем 500 ошибку сервера
        res.statusCode = 500;
        res.end(JSON.stringify({ message: 'Server Error' }));
        console.error(err);
      }
    }
  }

}).on('listening', () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Адрес http://localhost:${PORT}/inbox`);
    console.log('Нажмите CTRL+C, чтобы остановить сервер');
  }
}).listen(PORT)
