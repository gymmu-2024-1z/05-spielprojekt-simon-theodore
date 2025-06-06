import Base2DScene from "../base-2d-scene"
/**
 * Spiellogik für das Level01.
 */
export default class Level01 extends Base2DScene {
  /**
   * Der Konstuktor wird von Phaser verwendet um die Szene zu erstellen.
   */
  constructor() {
    // Damit rufen wir den Konstruktor von `Base2DScene` auf, und können
    // Optionen an die Szene übergeben. Das brauchen wir damit Phaser einen
    // Namen/Schlüssel für die Szene hat. Damit können wir später die Szene
    // wechseln, wenn wir das brauchen.
    super({ key: "level-01" })
  }

  /**
   * Hier werden alle Resourcen geladen, die spezifisch für dieses Level / diese
   * Szene benötigt werden.
   */
  preload() {
    // Lade die Karte für das aktuelle Level. Der erste Parameter ist der Name
    // unter dem die Karte gespeichert wird. Der zweite Parameter ist die
    // Kartendatei mit allen Daten drin.
    this.load.tilemapTiledJSON(
      "map-level-01",
      "./assets/maps/map-level-01.json",
    )
  }

  /**
   * Mit der Methode werden alle Spielobjekte für eine Szene erstellt.
   */
  create() {
    // Wir müssen hier die `create`-Methode der Klasse `Base2DScene` aufrufen,
    // denn dort ist bereits beschrieben wie die Spielwelt nach der Kartendatei
    // erstellt werden muss.
    super.create("map-level-01")

    // TODO: Möchten wir zusätzliche Layers von der Karte ertellen lassen, oder
    // spezifische Spielobjekte erstellen, dann können wir das hier machen.
    // Besser wäre aber die jeweiligen Methoden zu überschreiben.
  }
}
