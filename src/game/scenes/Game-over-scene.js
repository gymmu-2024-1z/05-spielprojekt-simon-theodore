import Phaser from "phaser"

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "game-over-scene" })
  }

  preload() {
    this.SPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )
  }

  create() {
    const { width, height } = this.scale

    this.add
      .text(width / 2, height / 2 - 40, "Game Over", {
        fontSize: "48px",
        color: "#ff0000",
        fontFamily: "Arial",
      })
      .setOrigin(0.5, 0.5)

    this.add
      .text(width / 2, height / 2 + 20, "Drücke SPACE, um neu zu starten", {
        fontSize: "20px",
        color: "#ffffff",
        fontFamily: "Arial",
      })
      .setOrigin(0.5, 0.5)
  }

  update() {
    if (this.SPACE.isDown) {
      this.scene.start("level-01")
    }
  }
}
