/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const drawHLine = (moveX, moveY, lineX, lineY, len) => {
    let interval;
    interval = setInterval(() => {
        if (moveX < len) {
            ctx.beginPath();
            ctx.lineWidth = 12;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.shadowBlur = 4;
            ctx.shadowColor = `rgba(255, 255, 255, 0.2)`;

            ctx.moveTo(moveX, moveY + Math.random());
            ctx.lineTo(lineX, lineY + Math.random());

            ctx.stroke();
            ctx.closePath();

            moveX = lineX;
            lineX += 3;
        } else {
            clearInterval(interval);
        }
    }, 5);
};

const drawVLine = (moveX, moveY, lineX, lineY, len) => {
    let interval;
    interval = setInterval(() => {
        if (moveY < len) {
            ctx.beginPath();
            ctx.lineWidth = 12;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.shadowColor = `rgba(255, 255, 255, 0.2)`;
            ctx.shadowBlur = 4;

            ctx.moveTo(moveX + Math.random(), moveY);
            ctx.lineTo(lineX + Math.random(), lineY);

            ctx.stroke();
            ctx.closePath();

            moveY = lineY;
            lineY += 3;
        } else {
            clearInterval(interval);
        }
    }, 10);
};

const drawCircle = (x, y, radius, start, end) => {
    let interval;

    interval = setInterval(() => {
        if (end > -0.7) {
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.shadowColor = `rgba(255, 255, 255, 0.2)`;
            ctx.shadowBlur = 4;

            ctx.arc(
                x + Math.random() * 3.5,
                y - Math.random() * 3.5,
                radius,
                start,
                end,
                Math.PI * 2
            );

            ctx.stroke();
            ctx.closePath();

            start -= 0.039;
            end -= 0.039;
        } else {
            clearInterval(interval);
        }
    }, 0);
};

const drawLeg = (moveX, moveY, lineX, lineY, len) => {
    let interval;
    interval = setInterval(() => {
        if (lineY < len) {
            ctx.beginPath();
            ctx.lineWidth = 12;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.shadowColor = `rgba(255, 255, 255, 0.2)`;
            ctx.shadowBlur = 4;

            ctx.moveTo(moveX + Math.random(), moveY);
            ctx.lineTo(lineX + Math.random(), lineY);

            ctx.stroke();
            ctx.closePath();

            if (moveX <= lineX) {
                moveX += 2;
                lineX += 2;
            } else {
                moveX -= 2;
                lineX -= 2;
            }

            moveY = lineY;
            lineY += 3;
        } else {
            clearInterval(interval);
        }
    }, 10);
};

const drawArm = (moveX, moveY, lineX, lineY, len) => {
    let interval;
    interval = setInterval(() => {
        ctx.beginPath();
        ctx.lineWidth = 12;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.shadowColor = `rgba(255, 255, 255, 0.2)`;
        ctx.shadowBlur = 4;

        ctx.moveTo(moveX, moveY + Math.random());
        ctx.lineTo(lineX, lineY + Math.random());

        ctx.stroke();
        ctx.closePath();

        if (moveX < lineX) {
            if (moveX <= len) {
                moveX = lineX;
                lineX += 2;
                moveY += 1;
                lineY += 1;
            } else {
                clearInterval(interval);
            }
        }

        if (moveX > lineX) {
            if (moveX >= len) {
                moveX = lineX;
                lineX -= 2;
                moveY += 1;
                lineY += 1;
            } else {
                clearInterval(interval);
            }
        }
    }, 10);
};

const drawVerticalBase = () => {
    drawVLine(100, 10, 100, 12, 270);
};

const drawHorizontalBase = () => {
    drawHLine(95, 10, 97, 10, 200);
};

const drawRope = () => {
    drawVLine(198, 7, 198, 9, 50);
};

const drawHead = () => {
    drawCircle(200, 85, 30, 6, 5.92);
};

const drawBody = () => {
    drawVLine(200, 115, 200, 117, 165);
};

const drawRightArm = () => {
    drawArm(200, 128, 202, 128, 240);
};

const drawLeftArm = () => {
    drawArm(200, 128, 198, 128, 160);
};

const drawRightLeg = () => {
    drawLeg(200, 165, 200, 167, 215);
};

const drawLeftLeg = () => {
    drawLeg(200, 165, 199.9, 167, 215);
};

const cleanCanvas = () => {
    ctx.clearRect(0, 0, 330, 280);
    drawHLine(30, 270, 32, 270, 320);
};

const gamePieces = [
    drawVerticalBase,
    drawHorizontalBase,
    drawRope,
    drawHead,
    drawBody,
    drawRightArm,
    drawLeftArm,
    drawRightLeg,
    drawLeftLeg,
];
