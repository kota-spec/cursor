const cWidth = 8; //カーソルの大きさ
const fWidth = 40; //フォロワーの大きさ
const delay = 10; // 遅延の時間

class Curser {
  constructor () {
    this.$$cursor = document.getElementById('js-cursor');
    this.$$follower = document.getElementById('js-follower');

    this._timer = -1; // requestAnimationのタイマー
    this._time = Date.now();

    this.posX = 0; // フォロワーのx軸
    this.posY = 0; // フォロワーのy軸
    this.mouseX = 0; // マウスのx軸
    this.mouseY = 0; // マウスのy軸
  }

  init () {
    this._ticker();
    this.onListener();
  }

  onListener () {
    document.addEventListener('mousemove', e => {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
    });
  }

  _ticker () {
    this._timer = window.requestAnimationFrame(() => this._ticker());

    this.posX += (this.mouseX - this.posX) / delay;
    this.posY += (this.mouseY - this.posY) / delay;

    this.$$cursor.style.left = `${this.mouseX - cWidth / 2}px`;
    this.$$cursor.style.top = `${this.mouseY - cWidth / 2}px`;

    this.$$follower.style.left = `${this.posX - fWidth / 2}px`;
    this.$$follower.style.top = `${this.posY - fWidth / 2}px`;
  }
}

const curser = new Curser();
curser.init();
