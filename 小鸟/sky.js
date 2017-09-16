(function (window){
    function Sky(options){
        this.x = options.x;
        this.y = options.y;
        this.img = options.img;
        this.ctx = options.ctx;
        this.width = this.img.width;
        this.height = this.img.height;
        this.speed = options.speed || 2;
    }

    Sky.prototype = {
        constructor: Sky,
        draw: function(){
            //先计算坐标
            this.x -= this.speed;
            //判断是否到了画布外面
            if(this.x <= -this.width){
                this.x += this.width * 2;
            }

            //绘制当前的sky图片
            this.ctx.drawImage(this.img, this.x, this.y);
        }
    };

    window.Sky = Sky;
})(window)