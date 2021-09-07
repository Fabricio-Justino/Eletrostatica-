class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    } 

    mult(num) {
        this.x *= num;
        this.y *= num;
        return this;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    magSq() {
        return this.mag() * this.mag();
    }

    normalize() {
        this.mult(1 / this.mag());
        if(this.mag() > 0) {
        }
        return this;
    }

    setMag(mag) {
        return this.normalize().mult(mag);
    }

    limit(li) {
        if(this.mag() > li) {
            this.setMag(li)
        }
    }

   static add(v, v2) {
       let temp = new Vector()
        temp.x = v.x + v2.x;
        temp.y = v.y + v2.y;
        return temp;
    }
    
    static sub(v, v2) {
        let temp = new Vector()
        temp.x = v.x - v2.x;
        temp.y = v.y - v2.y;
        return temp;
    } 

    static mult(vec, num) {
        let temp = new Vector()
        temp.x =vec.x * num;
        temp.y =vec.y * num;
        return temp;
    }

    static normalize(vec) {
        if(vec.mag() > 0) {
            vec.mult(1 / this.mag());
        }
        return vec;
    }

    static setMag(vec, mag) {
        return vec.normalize().mult(mag);
    }

    static reverse(vec) {
        let temp = new Vector();
        temp.x = -vec.x;
        temp.y = -vec.y;

        return temp;
    }
}