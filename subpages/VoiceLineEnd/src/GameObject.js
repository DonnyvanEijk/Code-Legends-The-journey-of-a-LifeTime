class GameObject {
  constructor(config) {
    this.id = null;
    this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      //hero staat op default
      src: config.src || "../../images/characters/people/hero.png",
    });

    this.behaviorLoop = config.behaviorLoop || [];
    this.behaviorLoopIndex = 0;

    this.talking = config.talking || [];

  }

  mount(map) {
    console.log("mounting!")
    this.isMounted = true;
    map.addWall(this.x, this.y);

    // behavior delay
    setTimeout(() => {
      this.doBehaviorEvent(map);
    }, 10)
  }

  update() {
  }

  async doBehaviorEvent(map) {

    //do nothing when cutsene
    if (map.isCutscenePlaying || this.behaviorLoop.length === 0 || this.isStanding) {
      return;
    }

    //Info geven aan javascript
    let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
    eventConfig.who = this.id;

    //event aanmaken als een object
    const eventHandler = new OverworldEvent({ map, event: eventConfig });
    await eventHandler.init();

    //events aanmaken in een array
    this.behaviorLoopIndex += 1;
    if (this.behaviorLoopIndex === this.behaviorLoop.length) {
      this.behaviorLoopIndex = 0;
    }

    //OPNIEUW!
    this.doBehaviorEvent(map);


  }
}