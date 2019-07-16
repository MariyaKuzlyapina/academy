
let section = document.querySelectorAll('.section');

function DomElement (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height,
  this.width = width,
  this.bg = bg,
  this.fontSize = fontSize
}

DomElement.prototype.content = function () {
  let newclass = this.selector.substring(1);
  if (isNaN(this.selector) && (this.selector.substring(0,1) == '.')) {
    newclass = this.selector.substring(1);
    section.innerHTML = `<div class=${newclass}>Ну пипец</div>`;
    console.log('section: ', section);
    let div = document.querySelectorAll(`.${newclass}`);
    console.log('div: ', div);
    div.style.cssText = `height: ${this.height}`;
    div.style.width = this.width;
    div.style.background = this.bg;
    div.style.fontSize = this.fontSize;
    div.style.height = this.height;

  } else if (isNaN(this.selector) && (this.selector.substring(0,1) == '#')) {
    section.innerHTML = "<p class=newclass>Пиздец</p>";
    P.style.height = this.height;
    p.style.width = this.height;
    p.style.background = this.bg;
    p.style.fontSize = this.fontSize;
    p.style.height = this.height;
  }
}

let newDom = new DomElement('.head', '80px', '123px', 'red', '18px');
newDom.content();

