// Your code goes here

// Prevent Default
document.querySelectorAll('nav > a').forEach(pd => {
    pd.addEventListener('click', e => {
        e.preventDefault();
    });
});

// PointerOver
document.querySelectorAll('nav > a').forEach(pov => {
    pov.addEventListener('pointerover', e => {
        e.target.style.transition = 'all 100ms ease-in-out'
        e.target.style.transform = 'scale(1.3)';
    });
});

// PointerOut
document.querySelectorAll('nav > a').forEach(pou => {
    pou.addEventListener('pointerout', e => {
        e.target.style.transition = 'all 100ms ease-in-out'
        e.target.style.transform = 'scale(1.0)';
    });
});

// Stop Propagation and Click Transformation
document.querySelectorAll('.btn').forEach(n => {
    n.addEventListener('click', e => {
        e.stopPropagation();
        e.target.style.transform = 'scale(1.50)';
        setTimeout(() => {
            e.target.style.transition = 'all 100ms ease-in-out'
            e.target.style.transform = 'scale(1)';
        }, 100)
    });
});

const randomRGB = () => Math.floor(Math.random() * Math.floor(255));

let body = document.querySelector('body');

// Keydown
body.addEventListener('keydown', e => {
    e.target.style.background = `rgba(${randomRGB()},${randomRGB()},${randomRGB()},0.1)`
});

// Keyup
body.addEventListener('keyup', e => {
    e.target.style.background = `white`
});

function cursor() {
    const pointer = ['n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize']
    const length = Math.floor(Math.random() * Math.floor(cursors.length - 1));
    return pointer[length];
}

// Mouse Scroll
body.addEventListener('mouseScroll', (e) => {
    e.target.style.cursor = cursor();
})

// MouseOver and MouseOut
const images = document.querySelectorAll('img');
images.forEach(n => {
    n.addEventListener('mouseover', e => {
        e.target.style.filter = 'invert(100%)';
    })
    n.addEventListener('mouseout', e => {
        e.target.style.filter = 'invert(0%)';
    })

})

window.addEventListener("resize", () => {
    alert("The document is being resized");
});
