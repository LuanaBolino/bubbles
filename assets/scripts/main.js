function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Blob {
    constructor(el) {
        this.el = el;
        this.size = this.el.getBoundingClientRect().width;
        this.x = random(0, window.innerWidth - this.size);
        this.y = random(0, window.innerHeight - this.size);
        this.vx = random(2, 2.25) * Math.random() > 0.5 ? -1 : 1;
        this.vy = random(2, 2.25) * Math.random() > 0.5 ? -1 : 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x >= window.innerWidth - this.size) {
            this.vx *= -1;
            this.x = window.innerWidth - this.size;
        }

        if (this.y >= window.innerHeight - this.size) {
            this.vy *= -1;
            this.y = window.innerHeight - this.size;
        }

        if (this.x <= 0) {
            this.vx *= -1;
            this.x = 0;
        }

        if (this.y <= 0) {
            this.vy *= -1;
            this.y = 0;
        }
        this.move();
    }

    move() {
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

function initBlobs() {
    const blobEls = document.querySelectorAll('.blob');
    const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

    function update() {
        blobs.forEach((blob) => {
            blob.update();
        });
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

initBlobs();




