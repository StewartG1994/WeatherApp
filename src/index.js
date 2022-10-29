import { getData } from './data'
import search from './assets/search.png'
import { displayInfomation } from './dom'

const searchIcon = document.querySelector('.searchIcon')
searchIcon.src = search

const info = getData('burntwood')
info.then(function (result) { console.log(result) }
)

displayInfomation()
