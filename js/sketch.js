const canvas = createCanvas(600, 400, 'sketch');
const ctx = getContext();

const box = new Box();

/*box.add(new Particle(575, 350, 25, -100));
box.add(new Particle(125, 25, 25, -27));
box.add(new Particle(500, 325, 25, 27));
box.add(new Particle(200, 25, 25, 100));*/

canvas.addEventListener('click', (e) => {
    let res = Number(window.prompt('valor da carga?'));

    const mx = e.pageX - canvas.offsetLeft;
    const my = e.pageY - canvas.offsetTop;

    box.add(new Particle(mx, my, 25, res));
});

update();
function update() {
    box.render();
    box.simulate(canvas.width, canvas.height, true);
    requestAnimationFrame(update)
}