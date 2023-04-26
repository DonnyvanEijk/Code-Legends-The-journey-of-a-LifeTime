


class OverworldMap {
  constructor(config) {
    this.overworld = null;
    this.gameObjects = config.gameObjects;
    this.cutsceneSpaces = config.cutsceneSpaces || {};
    this.walls = config.walls || {};

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;

    this.isCutscenePlaying = false;

  
   
    


  }

  stopAudio() {
    this.currentAudio.pause();
  }

    
  

    // Add event listener to pause audio when another song starts playing

  
  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y
    )
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.upperImage,
      utils.withGrid(10.5) - cameraPerson.x,
      utils.withGrid(6) - cameraPerson.y
    )
  }

  isSpaceTaken(currentX, currentY, direction) {
    const { x, y } = utils.nextPosition(currentX, currentY, direction);
    return this.walls[`${x},${y}`] || false;
  }

  mountObjects() {
    Object.keys(this.gameObjects).forEach(key => {

      let object = this.gameObjects[key];
      object.id = key;

      //check if object can mount
      object.mount(this);

    })
  }

  async startCutscene(events) {
    this.isCutscenePlaying = true;

    for (let i = 0; i < events.length; i++) {
      const eventHandler = new OverworldEvent({
        event: events[i],
        map: this,
      })
      await eventHandler.init();
    }

    this.isCutscenePlaying = false;

    //reset idle behavior
    Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this))
  }

  checkForActionCutscene() {
    const hero = this.gameObjects["hero"];
    const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
    const match = Object.values(this.gameObjects).find(object => {
      return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
    });
    if (!this.isCutscenePlaying && match && match.talking.length) {
      this.startCutscene(match.talking[0].events)
    }
  }

  checkForFootstepCutscene() {
    const hero = this.gameObjects["hero"];
    const match = this.cutsceneSpaces[`${hero.x},${hero.y}`];
    if (!this.isCutscenePlaying && match) {
      this.startCutscene(match[0].events)
    }
  }

  addWall(x, y) {
    this.walls[`${x},${y}`] = true;
  }
  removeWall(x, y) {
    delete this.walls[`${x},${y}`]
  }
  moveWall(wasX, wasY, direction) {
    this.removeWall(wasX, wasY);
    const { x, y } = utils.nextPosition(wasX, wasY, direction);
    this.addWall(x, y);
  }
 
}

window.OverworldMaps = {
 
 
  
  amogusend: {
   
    lowerSrc: "../../images/maps/Amongusafter.png",
   upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(45),
        y: utils.withGrid(26),

        
      }),
      TimePirate: new Person({
        x: utils.withGrid(45),
        y: utils.withGrid(25),
        src: "../../images/characters/captain_time.png",

        behaviorLoop: [
         
          { type: "stand", direction: "up", time: 200 },
          { type: "stand", direction: "left", time: 200 },
          { type: "stand", direction: "down", time: 200 },
          { type: "stand", direction: "right", time: 200 },
        ],
       
      }),
      man: new Person({
        x: utils.withGrid(49),
        y: utils.withGrid(24),
        src: "../../images/characters/matroos_berend.png",

        behaviorLoop: [
         
          { type: "stand", direction: "left", time: 390 },
         
        ],
       
      }),
     
     
    
    
    
    
    },
    walls: {
      


      [utils.asGridCoord(48, 29)]:true,
      [utils.asGridCoord(47, 29)]:true,
      [utils.asGridCoord(49, 29)]:true,
      [utils.asGridCoord(47, 28)]:true,
      [utils.asGridCoord(46, 28)]:true,
      [utils.asGridCoord(45, 28)]:true,
      [utils.asGridCoord(44, 28)]:true,
      [utils.asGridCoord(44, 27)]:true,
      [utils.asGridCoord(43, 27)]:true,
      [utils.asGridCoord(43, 26)]:true,
      [utils.asGridCoord(43, 25)]:true,
      [utils.asGridCoord(43, 24)]:true,
      [utils.asGridCoord(43, 23)]:true,
      [utils.asGridCoord(43, 22)]:true,
      [utils.asGridCoord(43, 21)]:true,
      [utils.asGridCoord(43, 20)]:true,
      [utils.asGridCoord(44, 19)]:true,
      [utils.asGridCoord(45, 18)]:true,
      [utils.asGridCoord(46, 18)]:true,
      [utils.asGridCoord(46, 17)]:true,
      [utils.asGridCoord(46, 16)]:true,
      [utils.asGridCoord(46, 15)]:true,
      [utils.asGridCoord(47, 14)]:true,
      [utils.asGridCoord(48, 13)]:true,
      [utils.asGridCoord(48, 12)]:true,
      [utils.asGridCoord(47, 12)]:true,
      [utils.asGridCoord(46, 12)]:true,
      [utils.asGridCoord(45, 12)]:true,
       [utils.asGridCoord(44, 12)]:true,
      [utils.asGridCoord(43, 12)]:true,
      [utils.asGridCoord(42, 12)]:true,
      [utils.asGridCoord(41, 12)]:true,
      [utils.asGridCoord(40, 12)]:true,
      [utils.asGridCoord(40, 11)]:true,
      [utils.asGridCoord(40, 10)]:true,
      [utils.asGridCoord(40, 9)]:true,
      [utils.asGridCoord(40, 8)]:true,
      [utils.asGridCoord(40, 7)]:true,
      [utils.asGridCoord(40, 6)]:true,
      [utils.asGridCoord(40, 5)]:true,
      [utils.asGridCoord(40, 4)]:true,
      [utils.asGridCoord(40, 3)]:true,
      [utils.asGridCoord(40, 2)]:true,
      [utils.asGridCoord(41, 1)]:true,
      [utils.asGridCoord(42, 1)]:true,
      [utils.asGridCoord(43, 1)]:true,
      [utils.asGridCoord(44, 1)]:true,
      [utils.asGridCoord(45, 1)]:true,
      [utils.asGridCoord(46, 1)]:true,
      [utils.asGridCoord(47, 1)]:true,
      [utils.asGridCoord(48, 1)]:true,
      [utils.asGridCoord(49, 1)]:true,
      [utils.asGridCoord(50, 1)]:true,
      [utils.asGridCoord(51, 1)]:true,
      [utils.asGridCoord(52, 1)]:true,
      [utils.asGridCoord(54, 1)]:true,
      [utils.asGridCoord(55, 1)]:true,
      [utils.asGridCoord(56, 1)]:true,
      [utils.asGridCoord(57, 1)]:true,
      [utils.asGridCoord(58, 1)]:true,
      [utils.asGridCoord(59, 1)]:true,
      [utils.asGridCoord(60, 2)]:true,
      [utils.asGridCoord(60, 3)]:true,
      [utils.asGridCoord(61, 3)]:true,
      [utils.asGridCoord(62, 4)]:true,
      [utils.asGridCoord(62, 5)]:true,
      [utils.asGridCoord(63, 5)]:true,
      [utils.asGridCoord(64, 6)]:true,
      [utils.asGridCoord(64, 7)]:true,
      [utils.asGridCoord(63, 8)]:true,
      [utils.asGridCoord(62, 8)]:true,
      [utils.asGridCoord(62, 9)]:true,
       [utils.asGridCoord(61, 10)]:true,
       [utils.asGridCoord(60, 10)]:true,
      [utils.asGridCoord(60, 11)]:true,
      [utils.asGridCoord(59, 12)]:true,
      [utils.asGridCoord(58, 12)]:true,
      [utils.asGridCoord(57, 12)]:true,
      [utils.asGridCoord(56, 12)]:true,
      [utils.asGridCoord(55, 12)]:true,
      [utils.asGridCoord(54, 12)]:true,
      [utils.asGridCoord(53, 12)]:true,
      [utils.asGridCoord(52, 12)]:true,
      [utils.asGridCoord(51, 12)]:true,
      [utils.asGridCoord(51, 13)]:true,
      [utils.asGridCoord(52, 13)]:true,
      [utils.asGridCoord(53, 13)]:true,
      [utils.asGridCoord(54, 14)]:true,
      [utils.asGridCoord(55, 15)]:true,
      [utils.asGridCoord(55, 16)]:true,
      [utils.asGridCoord(56, 17)]:true,
      [utils.asGridCoord(56, 18)]:true,
      [utils.asGridCoord(56, 19)]:true,
      [utils.asGridCoord(55, 20)]:true,
      [utils.asGridCoord(55, 21)]:true,
      [utils.asGridCoord(55, 22)]:true,
      [utils.asGridCoord(55, 23)]:true,
      [utils.asGridCoord(55, 24)]:true,
      [utils.asGridCoord(55, 25)]:true,
      [utils.asGridCoord(55, 26)]:true,
      [utils.asGridCoord(55, 27)]:true,
      [utils.asGridCoord(55, 28)]:true,
      [utils.asGridCoord(55, 29)]:true,
      [utils.asGridCoord(54, 30)]:true,
      [utils.asGridCoord(53, 30)]:true,
      [utils.asGridCoord(52, 29)]:true,
      [utils.asGridCoord(52, 28)]:true,
      [utils.asGridCoord(52, 29)]:true,
      [utils.asGridCoord(51, 29)]:true,
      [utils.asGridCoord(50, 29)]:true,
      [utils.asGridCoord(50, 30)]:true,
      [utils.asGridCoord(50, 31)]:true,




   
    },
    

  },
  
  
  
}




