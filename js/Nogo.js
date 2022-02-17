window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        // 设置初始绘制的坐标
        var c_x = 60;
        var c_y = 60;
        // 设置行高和宽高
        var w = 62.4;
        var h = 62.4;
        // 设置画布的宽高大小
        canvas.width = 665;
        canvas.height = 600;
        // 使用2d绘图
        var ctx = canvas.getContext('2d');
        // 先绘制一个矩形背景
        ctx.fillStyle = 'AntiqueWhite';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 修改画笔为蓝色
        ctx.strokeStyle = 'blue';
        // 开始一个新的画笔路径，绘制一个六边形
        ctx.beginPath();
        // 绘制函数
        function drawLine(x, y, isLine = true) {
            // 移动画笔触点
            ctx.moveTo(x, y);
            // 开始绘制
            if (isLine) {
                ctx.lineTo(x + 500, y);
            } else {
                ctx.lineTo(x, y + 500);
            }
        }
        // 绘制行线
        for (var i = 0; i < 9; i++) {
            drawLine(c_x, c_y + h * i)
        }
        // 绘制列线
        for (var i = 0; i < 9; i++) {
            drawLine(c_x + h * i, c_y, false)
        }

        // 绘制数字
        ctx.font = "15px 宋体";
        ctx.lineWidth = 1;
        for (var i = 0; i < 9; i++) {
            ctx.strokeText(9 - i, c_x - 30, (c_y + 15) + (i * (h - 0)))
        }
        // 绘制字母
        for (var m = 0; m < 9; m++) {
            ctx.strokeText(String.fromCharCode((65 + m)), w + (w * m), 580)
        }
        // 最后绘制
        ctx.stroke();
        // 关闭画笔
        ctx.closePath();
    } else {
        console.log('你的浏览器不支持Canvas');
    }
}