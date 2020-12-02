import { Container, Loader, Sprite } from 'pixi.js';

export default class Background {
  constructor() {
    this.container = new Container();
    this.background = Loader.shared.resources['BG'].texture;
    this.setBackground();
  }

  setBackground() {
    const BG = new Sprite(this.background);
    this.container.addChild(BG);
  }
}
