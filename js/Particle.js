class Particle {

    constructor(x, y, radius, charge) {
        this.position = new Vector(x, y);
        this.acc = new Vector();
        this.vel = new Vector();
        this.radius = radius;
        this.charge = charge;
    }

    render() {
        let color = (this.charge > 0) ? 'red' : 'blue';
        color = (this.charge === 0) ? 'grey' : color;
        ctx.font = '18px serif';
        ctx.textAlign = 'center';
        dot(this.position.x, this.position.y, this.radius, color);
        setColor('black');
        ctx.fillText(this.charge, this.position.x, this.position.y + this.radius / 5);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    setForce(force) {
        this.acc = force;
    }

    update() {

        this.vel.add(this.acc);
        this.acc.add(this.vel);
        this.position.add(this.vel);

    }

}