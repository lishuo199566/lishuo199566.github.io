(function(window){
    function Pipe(options){
        this.imgTop = options.imgTop;
        this.imgBottom = options.imgBottom;
        this.width = this.imgTop.width;
        this.height = this.imgTop.height;
        this.x = options.x;
        this.topY = 0;
        this.bottomY = 0;
        this.gapHeight = options.gapHeight || 150;
        this.ctx = options.ctx;
        this.speed = options.speed || 2;
        //计算y坐标  当管道对象被创建好的时候，有一个初始的随机y坐标
        this.getRandomY();
    }

    Pipe.prototype = {
        constructor: Pipe,
        draw: function() {
            //计算坐标
            this.x -= this.speed;
            if(this.x < -this.width){
                this.x += this.width * 3 * 6;
                //计算y坐标
                //当管道从画布的左边出去了，从右边重新进入的时候，需要重新计算y坐标
                this.getRandomY();
            }

            //这个方法用来绘制 检测小鸟是否撞到管道的路径
            this.initPath();
        
            this.ctx.drawImage(this.imgTop, this.x, this.topY);
            this.ctx.drawImage(this.imgBottom, this.x, this.bottomY);
        },
        getRandomY: function(){
            //随机计算出来一个上面管道的y坐标
            this.topY = -(Math.random() * 150 + 150);
            //跟据上面管道的y坐标，以及中间缝隙的高度，算出下面的管道的y坐标
            this.bottomY = this.topY + this.height + this.gapHeight;
        },
        initPath: function(){
            //给上面的管道绘制路径
            this.ctx.rect(this.x, this.topY, this.width, this.height);
            // 给下面的管道绘制路径
            this.ctx.rect(this.x, this.bottomY, this.width, this.height);
            // this.ctx.fill();
        }
    }


    window.Pipe = Pipe;
})(window)