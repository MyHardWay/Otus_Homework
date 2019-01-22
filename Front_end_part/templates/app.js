import {login} from  "../static/js/login"
import {register} from "../static/js/reg"





function init()  {
    addEv2Cls('card__fio', log, 'click');
    addEv2Cls('header__item', changeCss, 'mouseenter');
    addEv2Cls('lessons__name', hideAndShow, 'click')
};


function addEv2Cls(cls_name, ev, action_) {
    var classes = document.getElementsByClassName(cls_name);
    Array.from(classes).forEach(function(element) {
        element.addEventListener(action_, function(){ev(element);}, false);
    });
};


function log(elem) {
    console.log(elem);
};

function changeCss(elem) {
    var child = elem.firstElementChild;
    child.style.color = 'red';
};

function hideAndShow(elem) {
    parent = elem.parentNode;
    var closest = parent.getElementsByClassName('lessons__content')[0];
    if (closest.style.display == 'none' || closest.style.display == '') {
        closest.style.display = 'block';
        } else {
        closest.style.display = 'none';
        };
    };

window.init =  init;
window.login =  login;
window.register = register;

