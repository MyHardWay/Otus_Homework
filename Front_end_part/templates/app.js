function init()  {
    addEv2Cls('card__fio', log, 'click');
    addEv2Cls('header__item', changeCss, 'mouseenter');
};


function addEv2Cls(cls_name, ev, action_) {
    var classes = document.getElementsByClassName(cls_name);
    Array.from(classes).forEach(function(element) {
        alert(element);
        element.addEventListener(action_, function(){ev(element);}, false);
    });
};


function log(elem) {
    alert(elem);
};

function changeCss(elem) {
    var child = elem.firstElementChild;
    child.style.color = 'red';
};