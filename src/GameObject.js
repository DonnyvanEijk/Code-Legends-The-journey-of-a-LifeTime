class GameObject {
  constructor(config) {
    this.id = null;
    this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";
    this.sprite = new Sprite({
      gameObject: this,
      //hero is default character
      src: config.src || "./images/characters/people/hero.png",
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

    //make the event usable
    let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
    eventConfig.who = this.id;

    //Make the event a object
    const eventHandler = new OverworldEvent({ map, event: eventConfig });
    await eventHandler.init();

    //throw them in a array
    this.behaviorLoopIndex += 1;
    if (this.behaviorLoopIndex === this.behaviorLoop.length) {
      this.behaviorLoopIndex = 0;
    }

    //AND DO IT AGAIN
    this.doBehaviorEvent(map);


  }
}