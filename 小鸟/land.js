(function(window) {
    function Land(options){
        this.x = options.x;
        this.y = options.y;
        this.img = options.img;
        this.ctx = options.ctx;
        this.width = this.img.width;
        this.height = this.img.height;
        this.speed = options.speed || 2;
    }

    Land.prototype = {
        constructor: Land,
        draw: function() {
            //计算自己的坐标
            this.x -= this.speed;
            //判断是否完全在画布外面了
            if(this.x <= - this.width){
                this.x += 4 * this.width;
            }
            //绘制自己的图片
            this.ctx.drawImage(this.img, this.x, this.y);
        }
    };

    window.Land = Land;
})(window)