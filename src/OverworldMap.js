


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
  DemoRoom: {
    lowerSrc: "./images/maps/DemoLower.png",
    upperSrc: "./images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      
      npcA: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "./images/characters/people/npc1.png",
        behaviorLoop: [
          { type: "stand", direction: "left", time: 800 },
          { type: "stand", direction: "up", time: 800 },
          { type: "stand", direction: "right", time: 1200 },
          { type: "stand", direction: "up", time: 300 },

        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "You can talk with ENTER", faceHero: "npcA" },
              { type: "textMessage", text: "Did u know?" },

            ]
          }
        ]
      }),
      baron: new Person({
        x: utils.withGrid(3),
        y: utils.withGrid(6),
        src: "./images/baron.png",
        behaviorLoop: [
         
          { type: "stand", direction: "left", time: 500 },




          

          { type: "stand", direction: "right", time: 500 }


        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "Hello Speler", faceHero: "baron" },
              { type: "textMessage", text: "I am Baron Erso" },
              { type: "textMessage", text: "have a nice day!" },

            ]
          }
        ]
      }),
    },
    walls: {
      [utils.asGridCoord(7, 6)]: true,
      [utils.asGridCoord(8, 6)]: true,
      [utils.asGridCoord(7, 7)]: true,
      [utils.asGridCoord(8, 7)]: true,
      [utils.asGridCoord(6, 4)]: true,
      [utils.asGridCoord(8, 4)]: true,
      [utils.asGridCoord(6, 3)]: true,
      [utils.asGridCoord(8, 3)]: true,
      [utils.asGridCoord(7, 2)]: true,
      [utils.asGridCoord(5, 3)]: true,
      [utils.asGridCoord(4, 3)]: true,
      [utils.asGridCoord(3, 3)]: true,
      [utils.asGridCoord(2, 3)]: true,
      [utils.asGridCoord(1, 3)]: true,
      [utils.asGridCoord(9, 3)]: true,
      [utils.asGridCoord(10, 3)]: true,
      [utils.asGridCoord(11, 4)]: true,
      [utils.asGridCoord(11, 5)]: true,
      [utils.asGridCoord(11, 6)]: true,
      [utils.asGridCoord(11, 7)]: true,
      [utils.asGridCoord(11, 8)]: true,
      [utils.asGridCoord(11, 9)]: true,
      [utils.asGridCoord(10, 10)]: true,
      [utils.asGridCoord(9, 10)]: true,
      [utils.asGridCoord(8, 10)]: true,
      [utils.asGridCoord(7, 10)]: true,
      [utils.asGridCoord(6, 10)]: true,
      [utils.asGridCoord(5, 11)]: true,
      [utils.asGridCoord(4, 10)]: true,
      [utils.asGridCoord(3, 10)]: true,
      [utils.asGridCoord(2, 10)]: true,
      [utils.asGridCoord(1, 10)]: true,
      [utils.asGridCoord(0, 9)]: true,
      [utils.asGridCoord(0, 8)]: true,
      [utils.asGridCoord(0, 7)]: true,
      [utils.asGridCoord(0, 6)]: true,
      [utils.asGridCoord(0, 5)]: true,
      [utils.asGridCoord(0, 4)]: true,
    },
    cutsceneSpaces: {
      [utils.asGridCoord(7, 4)]: [
        {
          events: [


            { type: "textMessage", text: "You cant be here!" },
           

          ]
        }
      ],
      [utils.asGridCoord(5, 10)]: [
        {
          events: [


            { type: "textMessage", text: "Tutorial finished!!" },

          ]
        }
      ],
      [utils.asGridCoord(5, 10)]: [
        {
          events: [
            { type: "changeMap", map: "CodeRoom" }
          ]
        }
      ]
    }

  },
  CodeRoom: {
   
    lowerSrc: "./images/maps/CoderoomLower.png",
    upperSrc: "./images/maps/CoderoomUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(25),
      }),
      COMPUTER: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(19),
        src: "./images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "It is a Computer" },
              { type: "textMessage", text: "It looks complicated" },
              
             
            ]
          }
        ]
      }),
     
      ProfesorC: new Person({
        x: utils.withGrid(3),
        y: utils.withGrid(8),
        src: "../images/characters/professor_Taurus.png",

        behaviorLoop: [
          { type: "stand", direction: "down", time: 800 },
          { type: "stand", direction: "up", time: 800 },
          { type: "stand", direction: "right", time: 1200 },
          { type: "stand", direction: "up", time: 300 },
        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "Player i need you?!", faceHero: "ProfesorC" },
              { type: "textMessage", text: "Please fill in the code C.L.O.C.K on your keyboard", faceHero: "ProfesorC" },
            ]
          }
        ]
      })
    },
    walls: {
     
     
      
    },
    cutsceneSpaces: {
      [utils.asGridCoord(5, 26)]: [
        {
          events: [
            { type: "changeMap", map: "Plain" }
          ]
        }
      ]
    }
  },
  Plain: {
   
    lowerSrc: "./images/maps/StreetLower.png",
    upperSrc: "./images/maps/StreetUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(8),

        
      }),
     
     
    
    
    
    
    },
    walls: {
      


   [utils.asGridCoord(4, 8)]: true,
   [utils.asGridCoord(4, 7)]: true,
   [utils.asGridCoord(6, 8)]: true,
   [utils.asGridCoord(6, 7)]: true,
   [utils.asGridCoord(5, 6)]: true,
   [utils.asGridCoord(4, 9)]: true,
   [utils.asGridCoord(6, 9)]: true,
   [utils.asGridCoord(7, 9)]: true,
   [utils.asGridCoord(8, 9)]: true,
   [utils.asGridCoord(4, 9)]: true,
   [utils.asGridCoord(3, 10)]: true,
   [utils.asGridCoord(3, 11)]: true,
   [utils.asGridCoord(3, 12)]: true,
   [utils.asGridCoord(3, 13)]: true,
   [utils.asGridCoord(3, 14)]: true,
   [utils.asGridCoord(3, 15)]: true,
   [utils.asGridCoord(3, 16)]: true,
   [utils.asGridCoord(3, 17)]: true,
   [utils.asGridCoord(3, 18)]: true,

   




   
    },
    cutsceneSpaces: {
      [utils.asGridCoord(5, 7)]: [
        {
          events: [
            { type: "changeMap", map: "CodeRoom" }
          ]
        }
      ],
      [utils.asGridCoord(25, 5)]: [
        {
          events: [
         
          ]
        }
      ]
    }
  

  },
  
}




