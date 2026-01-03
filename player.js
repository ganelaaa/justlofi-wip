

// HOME PAGE GRADIENT
function getRandomColor() {
    const letters= '0123456789ABCDEF';
    let color= '#';
    for (let i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`;
}

window.onload = setRandomGradient;
// END OF HOME PAGE GRADIENT



// HOME NAVBAR
const categoryButtons = document.querySelectorAll('.categoryBtn');
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        console.log(`User selected category: ${category}`);
    });
});
