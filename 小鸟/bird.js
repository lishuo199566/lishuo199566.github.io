(function(window) {
    function Bird(options) {
        this.x = options.x;
        this.y = options.y;
        this.img = options.img;
        this.width = this.img.width / 3;
        this.height = this.img.height;
        this.picIndex = 0;
        this.ctx = options.ctx;
        this.speed = 0;
        this.acc = options.acc || 0.0005;
        this.maxAngle = options.maxAngle || 45;
        this.maxSpeed = options.maxSpeed || 0.3;
    }

    Bird.prototype = {
        constructor: Bird,
        draw: function(deltaTime) {
           
            var deltaY = this.speed * deltaTime + this.acc * deltaTime *deltaTime / 2;
           
            this.speed = this.speed + this.acc * deltaTime;

            this.y += deltaY;

            
            var currentAngle = this.maxAngle * this.speed / this.maxSpeed;
           
            if(currentAngle > this.maxAngle){
                currentAngle = this.maxAngle;
            }

           
            this.ctx.save();

           
            this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

            
            this.ctx.rotate(this.getRadian(currentAngle));

            this.ctx.drawImage(this.img, this.picIndex * this.width, 0, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);

            this.picIndex ++;
            this.picIndex %= 3;

            
            this.ctx.restore();
        },
        getRadian: function(angle){
            return angle / 180 * Math.PI;
        }
    };

    window.Bird = Bird;
})(window)