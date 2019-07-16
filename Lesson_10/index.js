
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
    document.body.innerHTML = `<div class=${newclass}>Я класс</div>`;
    let div = document.querySelector(`.${newclass}`);
    div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
  } else if (isNaN(this.selector) && (this.selector.substring(0,1) == '#')) {
    newclass = this.selector.substring(1);
    document.body.innerHTML = `<p class=${newclass}>Я айди</p>`;
    let p = document.querySelector(`.${newclass}`);
    p.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`;
  }
}

let newDom = new DomElement('.head', '80px', '123px', 'red', '20px');
newDom.content();
