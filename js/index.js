window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        // 控制第一行绘制几个
        var k = 3;
        // 控制每个六边形的大小即宽度
        var d = 22;
        // 
        var w = Math.sqrt(3) * d;
        var h = 3 / 2 * d;
        // 设置画布的宽高大小
        canvas.width = 665;
        canvas.height = 600;
        // 获取画布的中点坐标值
        var o = [canvas.width / 2, canvas.height / 2];
        console.log(o)
        var ctx = canvas.getContext('2d');
        // 先绘制一个矩形背景
        ctx.fillStyle = 'AntiqueWhite';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 修改画笔为蓝色
        ctx.strokeStyle = 'blue';
        // 开始一个新的画笔路径，绘制一个六边形
        ctx.beginPath();
        // 
        var vs = [[0, d], [-w / 2, d / 2], [-w / 2, -d / 2], [0, -d], [w / 2, -d / 2], [w / 2, d / 2]];
        // 绘制六边形
        function one(xo, yo) {
            ctx.moveTo(xo + vs[5][0], yo + vs[5][1]);
            for (var i = 0; i < vs.length; i++) {
                ctx.lineTo(xo + vs[i][0], yo + vs[i][1]);
            }
        }
        // 开始调用绘制函数
        // 设置初始绘制的坐标
        var c_x = 20;
        var c_y = 80;
        // 循环绘制
        for (var i = 0; i < 11; i++) {
            c_x += w / 2;
            for (var j = 0; j < 11; j++) {
                one(c_x + w * j, c_y + h * i)
                console.log(c_x + w * j, c_y + h * i)
            }
        }
        // 绘制数字
        c_x = 20;
        c_y = 80;
        ctx.font = "15px 宋体";
        ctx.lineWidth = 1;
        for (var k = 0; k < 11; k++) {
            ctx.strokeText(k + 1, (c_x - 20) + k * (w / 2), (c_y + 5) + k * h)
        }
        // 绘制字母
        for (var m = 0; m < 11; m++) {
            ctx.strokeText(String.fromCharCode((65 + m)), 243 + (w * m), 445);
        }
        // 最后绘制
        ctx.stroke();
    }
    else {
        console.log('你的浏览器不支持Canvas');
    }
}

var get