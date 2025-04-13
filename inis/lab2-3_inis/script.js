import { shirts } from './shirts.js';

let field = document.querySelector('.field');
console.log(field);
shirts.forEach(shirt => {
    console.log(shirt);

    const shirtElement = document.createElement('div');
    shirtElement.className = 'shirt';
    const h3 = document.createElement('h3');
    h3.textContent = shirt.name || 'Shirt with no name';
    const img = document.createElement('img');
    img.src = shirt.colors.white['front'] || shirt.default['front'] || '404.jpg';
    img.className = 'img';
    const p = document.createElement('p');
    if (Object.keys(shirt.colors).length == 1)
        p.textContent = 'Available in 1 color';
    else
        p.textContent =
            'Available in ' + Object.keys(shirt.colors).length + ' colors';
    const b1 = document.createElement('button');
    b1.textContent = 'Quick view';
    b1.addEventListener('click', () => {
        QuickView(shirt);
    });
    const b2 = document.createElement('button');
    b2.textContent = 'See page';
    b2.addEventListener('click', () => {
        SeePage(shirt);
    });
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttonContainer';
    buttonContainer.appendChild(b1);
    buttonContainer.appendChild(b2);
    shirtElement.appendChild(img);
    shirtElement.appendChild(h3);
    shirtElement.appendChild(p);
    shirtElement.appendChild(buttonContainer);
    field.appendChild(shirtElement);
});

function QuickView(shirt) {
    const body = document.body;
    let quickView;
    let imgF;
    let imgB;
    let h4;
    let p;
    if (document.querySelector('.quickView') == null) {
        quickView = document.createElement('div');
        quickView.className = 'quickView';
        imgF = document.createElement('img');
        imgF.className = 'imgF';
        imgB = document.createElement('img');
        imgB.className = 'imgB';
        h4 = document.createElement('h4');
        h4.className = 'h4';
        p = document.createElement('p');
        p.className = 'p';
        const b = document.createElement('button');
        b.addEventListener('click', () => {
            quickView.remove();
        });
        const containeQW = document.createElement('div');
        containeQW.className = 'containerQV';
        containeQW.appendChild(h4);
        containeQW.appendChild(p);
        containeQW.appendChild(b);
        b.textContent = 'Close view';
        quickView.appendChild(imgF);
        quickView.appendChild(imgB);
        quickView.appendChild(containeQW);
        body.appendChild(quickView);
    } else {
        quickView = document.querySelector('.quickView');
        imgF = document.querySelector('.imgF');
        imgB = document.querySelector('.imgB');
        h4 = document.querySelector('.h4');
        p = document.querySelector('.p');
    }
    imgF.src = shirt.colors.white['front'] || shirt.default['front'] || '404.jpg';
    imgB.src = shirt.colors.white['back'] || shirt.default['back'] || '404.jpg';
    h4.textContent = shirt.name || 'no name';
    p.textContent = shirt.price || '0$';
}

function SeePage(shirt) {
    localStorage.setItem('shirt', JSON.stringify(shirt));
    location.href = 'html/details.html';
}