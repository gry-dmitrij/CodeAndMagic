'use strict';
const cloudMessage = {
	width: 420,
	height: 270,
	x0: 100,
	y0: 10,
	columnWidth: 40,
	columnMaxHeight: 150,
	font: '16px PT Mono',
	fontColor: '#000',

	cloudMessageRender(ctx) {
		ctx.fillStyle = 'rgb(0, 0, 0, .3)';
		ctx.fillRect(this.x0+10, this.y0+10, this.width, this.height);
		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.fillRect(this.x0, this.y0, this.width, this.height);
	},

	showText(ctx) {
		ctx.font = this.font;
		ctx.fillStyle = this.fontColor;
		ctx.textBaseline = 'top';
		ctx.fillText('Ура вы победили!', this.x0 + 20, this.y0 + 20);
		ctx.fillText('Список результатов:', this.x0 + 20, this.y0 + 40);
	},

	showDiagram(ctx, names, times) {
		let maxTime = this.getMaxTime(times);
		for (let i = 0; i < times.length; i++) {
			let height = times[i] / maxTime * this.columnMaxHeight;
			let blueSaturation = Math.floor(Math.random() * 256);
			let color = names[i] === 'Вы' ?
				'rgb(255, 0, 0)' : `rgb(0, 0, ${blueSaturation})`;

			this.showColumn(ctx, i, height, color);
			this.showTime(ctx, Math.floor(times[i]), i, height);
			this.showName(ctx, names[i], i);
		}
	},

	showColumn(ctx, index, height, color) {
		ctx.fillStyle = color;
		ctx.fillRect(this.x0 + 40 + (this.columnWidth * 2 * index),
			this.y0 + this.height - 40 - height,
			this.columnWidth, height);
	},

	showTime(ctx, time, index, height) {
		ctx.font = this.font;
		ctx.fillStyle = this.fontColor;
		ctx.textBaseline = 'bottom';
		ctx.fillText(time,
			this.x0 + 40 + (this.columnWidth * 2 * index),
			this.y0 + this.height - 41 - height);
	},

	showName(ctx, name, index) {
		ctx.font = this.font;
		ctx.fillStyle = this.fontColor;
		ctx.textBaseline = 'top';
		ctx.fillText(name,
			this.x0 + 40 + (this.columnWidth * 2 * index),
			this.y0 + this.height - 35);
	},

	getMaxTime(times) {
		let time = times[0];
		times.forEach(el => {
			if (time < el) {
				time = el;
			}
		});
		return time;
	},
}

window.renderStatistics = function (ctx, names, times) {
	cloudMessage.cloudMessageRender(ctx);
	cloudMessage.showText(ctx);
	cloudMessage.showDiagram(ctx, names, times);
}
