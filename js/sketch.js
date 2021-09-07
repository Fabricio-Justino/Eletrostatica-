const canvas = createCanvas(600, 400, 'sketch');
const ctx = getContext();

const particles = [];

particles.push(new Particle(100, 200, 25, 100));
particles.push(new Particle(500, 300, 25, -10));


update();

function render() {
    backGround(0, 0, 0, 0.1);
    particles.forEach((e) => e.render());
}

function update() {
    render();
    simulate();
    requestAnimationFrame(update);
}

function simulate() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
            let p1 = particles[i];
            let p2 = particles[j];
            if (i === j) {
                continue;
            }
            //Coulomb's law
            //(K.Q.q) / d^2
            // vector form 
            let force = Vector.sub(p2.position, p1.position);
            let distanceSq = force.magSq();
            const K = 1;
            let result = K * Math.abs(p1.charge * p2.charge) / distanceSq;

            if (p1.charge > 0 && p2.charge > 0 || p1.charge < 0 && p2.charge < 0) {
                result = -result;
            }

            if (Math.sqrt(distanceSq) - (p1.radius + p2.radius) <= 0) {
                force.setMag(0);
            } else {
                force.setMag(result);
            }

            p1.setForce(force);
            strokeColor('green');

            p1.update();
        }
    }
}