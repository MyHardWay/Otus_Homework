import { login } from '../static/js/login'
import { register } from '../static/js/reg'

var init = () => {
  addEv2Cls('card__fio', console.log, 'click')
  addEv2Cls('header__item', changeCss, 'mouseenter')
  addEv2Cls('lessons__name', hideAndShow, 'click')
}

var addEv2Cls = (clsName, ev, action_) => {
  let classes = document.getElementsByClassName(clsName)
  Array.from(classes).forEach((element) =>
    element.addEventListener(action_, () => ev(element), false)
  )
}

var changeCss = (elem) => {
  let child = elem.firstElementChild
  child.classList.add('red')
}

var hideAndShow = (elem) => {
  let parent = elem.parentNode
  let closest = parent.getElementsByClassName('lessons__content')[0];
  (closest.style.display === 'none' || closest.style.display === '')
    ? closest.style.display = 'block' : closest.style.display = 'none'
}

window.init = init
window.login = login
window.register = register
