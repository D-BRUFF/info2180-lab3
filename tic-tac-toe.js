let children = document.getElementById('board').children;
for (let i=0; i<=children.length -1; i++) {
    children[i].setAttribute('class', 'square');
}