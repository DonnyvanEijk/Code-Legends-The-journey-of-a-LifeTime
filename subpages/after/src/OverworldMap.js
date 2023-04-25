


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
    lowerSrc: "../../images/maps/DemoLower.png",
    upperSrc: "../../images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      
      npcA: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(9),
        src: "../../images/characters/people/npc1.png",
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
        src: "../../images/baron.png",
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
   
    lowerSrc: "../../images/maps/labroom_portal_off.png",
    upperSrc: "../../images/maps/CoderoomUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(25),
      }),
      COMPUTER: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(19),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "It is a Computer" },
              { type: "textMessage", text: "It looks complicated" },
              
             
            ]
          }
        ]
      }),

      COMPUTER2: new Person({
        x: utils.withGrid(8),
        y: utils.withGrid(19),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "It is a Computer" },
              { type: "textMessage", text: "It looks complicated" },
              
             
            ]
          }
        ]
      }),

      HINT1: new Person({
        x: utils.withGrid(9),
        y: utils.withGrid(19),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "Look at the buttons" },
              { type: "textMessage", text: "purple, green, blue, green and yellow" },
              { type: "textMessage", text: "What can this mean?" },
             
            ]
          }
        ]
      }),

      HINT1_2: new Person({
        x: utils.withGrid(10),
        y: utils.withGrid(19),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "Look at the buttons" },
              { type: "textMessage", text: "purple, green, blue, green and yellow" },
              { type: "textMessage", text: "What can this mean?" },
             
            ]
          }
        ]
      }),
     
      ProfesorC: new Person({
        x: utils.withGrid(3),
        y: utils.withGrid(8),
        src: "../../images/characters/professor_Taurus.png",

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
              { type: "textMessage", text: "I need the code for the machine, but I forgot it!", faceHero: "ProfesorC" },
              { type: "textMessage", text: "The colorfull buttons are the hint to the code", faceHero: "ProfesorC" },
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
  After: {
   
    lowerSrc: "../../images/maps/labroom_portal_on.png",
    upperSrc: "../../images/maps/CoderoomUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(25),
      }),
      COMPUTER: new Person({
        x: utils.withGrid(7),
        y: utils.withGrid(19),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "It is a Computer" },
              { type: "textMessage", text: "It looks complicated" },
              
             
            ]
          }
        ]
      }),

      COMPUTER2: new Person({
        x: utils.withGrid(8),
        y: utils.withGrid(19),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "It is a Computer" },
              { type: "textMessage", text: "It looks complicated" },
              
             
            ]
          }
        ]
      }),

      HINT1: new Person({
        x: utils.withGrid(9),
        y: utils.withGrid(19),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "Look at the buttons" },
              { type: "textMessage", text: "purple, green, blue, green and yellow" },
              { type: "textMessage", text: "What can this mean?" },
             
            ]
          }
        ]
      }),

      Portal: new Person({
        x: utils.withGrid(31),
        y: utils.withGrid(14),
        src: "../../images/characters/people/Interactable_obkect.png",
        talking: [
          {
            events: [
              { type: "textMessage", text: "P." },
              { type: "textMessage", text: "A" },
              { type: "textMessage", text: "S" },
              { type: "textMessage", text: "T" },
             
            ]
          }
        ]
      }),
     
      ProfesorC: new Person({
        x: utils.withGrid(29),
        y: utils.withGrid(16),
        src: "../../images/characters/professor_Taurus.png",

        behaviorLoop: [
          { type: "stand", direction: "down", time: 800 },
          { type: "stand", direction: "up", time: 800 },
          { type: "stand", direction: "right", time: 1200 },
          { type: "stand", direction: "up", time: 300 },
        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "THE PORTAL IS OPEN", faceHero: "ProfesorC" },
              { type: "textMessage", text: "GO INSIDE, QUICK!!!!", faceHero: "ProfesorC" },
              
            ]
          }
        ]
      })
    },
    walls: {
     
       
   [utils.asGridCoord(4, 26)]: true,
   [utils.asGridCoord(3, 26)]: true,
   [utils.asGridCoord(2, 25)]: true,
   [utils.asGridCoord(1, 25)]: true,
   [utils.asGridCoord(0, 24)]: true,
   [utils.asGridCoord(1, 23)]: true,
   [utils.asGridCoord(1, 22)]: true,
   [utils.asGridCoord(1, 21)]: true,
   [utils.asGridCoord(0, 20)]: true,
   [utils.asGridCoord(1, 19)]: true,
   [utils.asGridCoord(2, 19)]: true,
   [utils.asGridCoord(3, 19)]: true,
   [utils.asGridCoord(4, 19)]: true,
   [utils.asGridCoord(5, 19)]: true,
   [utils.asGridCoord(6, 19)]: true,
   [utils.asGridCoord(7, 19)]: true,
   [utils.asGridCoord(8, 19)]: true,
   [utils.asGridCoord(9, 19)]: true,
   [utils.asGridCoord(10, 19)]: true,
   [utils.asGridCoord(11, 19)]: true,
   [utils.asGridCoord(12, 19)]: true,
   [utils.asGridCoord(13, 20)]: true,
   [utils.asGridCoord(13, 21)]: true,
   [utils.asGridCoord(13, 22)]: true,
   [utils.asGridCoord(14, 22)]: true,
   [utils.asGridCoord(15, 22)]: true,
   [utils.asGridCoord(16, 22)]: true,
   [utils.asGridCoord(17, 22)]: true,
   [utils.asGridCoord(18, 22)]: true,
   [utils.asGridCoord(19, 22)]: true,


   [utils.asGridCoord(20, 22)]: true,
   [utils.asGridCoord(20, 21)]: true,
   [utils.asGridCoord(20, 20)]: true,
   [utils.asGridCoord(20, 19)]: true,
   [utils.asGridCoord(20, 18)]: true,
   [utils.asGridCoord(20, 17)]: true,
   [utils.asGridCoord(20, 16)]: true,
   [utils.asGridCoord(20, 15)]: true,
   [utils.asGridCoord(20, 14)]: true,
   [utils.asGridCoord(20, 13)]: true,
   [utils.asGridCoord(20, 12)]: true,
   [utils.asGridCoord(20, 11)]: true,
   [utils.asGridCoord(20, 10)]: true,
   [utils.asGridCoord(20, 9)]: true,
   [utils.asGridCoord(20, 8)]: true,
   [utils.asGridCoord(20, 7)]: true,



   






   [utils.asGridCoord(23, 22)]: true,
   [utils.asGridCoord(23, 21)]: true,
   [utils.asGridCoord(23, 20)]: true,
   [utils.asGridCoord(23, 19)]: true,
   [utils.asGridCoord(23, 18)]: true,
   [utils.asGridCoord(23, 17)]: true,
   [utils.asGridCoord(23, 16)]: true,
   [utils.asGridCoord(23, 15)]: true,
   [utils.asGridCoord(23, 14)]: true,
   [utils.asGridCoord(23, 13)]: true,
   [utils.asGridCoord(23, 12)]: true,
   [utils.asGridCoord(23, 11)]: true,
   [utils.asGridCoord(23, 10)]: true,
   [utils.asGridCoord(23, 9)]: true,
   [utils.asGridCoord(23, 8)]: true,
   [utils.asGridCoord(23, 7)]: true,
   [utils.asGridCoord(23, 6)]: true,
   [utils.asGridCoord(23, 5)]: true,

   [utils.asGridCoord(22, 4)]: true,
   [utils.asGridCoord(21, 4)]: true,

 [utils.asGridCoord(20, 4)]: true,
 [utils.asGridCoord(19, 4)]: true,
 [utils.asGridCoord(18, 4)]: true,
 [utils.asGridCoord(17, 4)]: true,
 [utils.asGridCoord(16, 4)]: true,
 [utils.asGridCoord(15, 4)]: true,
 [utils.asGridCoord(14, 3)]: true,
 [utils.asGridCoord(13, 3)]: true,
 [utils.asGridCoord(12, 3)]: true,
 [utils.asGridCoord(11, 3)]: true,
 [utils.asGridCoord(10, 3)]: true,
 [utils.asGridCoord(9, 3)]: true,
 [utils.asGridCoord(8, 3)]: true,
 [utils.asGridCoord(7, 3)]: true,
 [utils.asGridCoord(6, 3)]: true,
 [utils.asGridCoord(5, 3)]: true,
 [utils.asGridCoord(4, 3)]: true,
 [utils.asGridCoord(3, 3)]: true,
 [utils.asGridCoord(3, 4)]: true,
 [utils.asGridCoord(3, 5)]: true,
 [utils.asGridCoord(2, 6)]: true,
 [utils.asGridCoord(2, 7)]: true,
 [utils.asGridCoord(2, 8)]: true,
 [utils.asGridCoord(2, 9)]: true,
 [utils.asGridCoord(2, 10)]: true,
 [utils.asGridCoord(3, 10)]: true,
 [utils.asGridCoord(4, 10)]: true,
 [utils.asGridCoord(5, 10)]: true,
 [utils.asGridCoord(6, 9)]: true,
 [utils.asGridCoord(7, 9)]: true,
 [utils.asGridCoord(8, 10)]: true,
 [utils.asGridCoord(9, 10)]: true,
 [utils.asGridCoord(10, 10)]: true,
 [utils.asGridCoord(11, 10)]: true,
 [utils.asGridCoord(12, 10)]: true,
 [utils.asGridCoord(13, 10)]: true,
 [utils.asGridCoord(14, 10)]: true,
 [utils.asGridCoord(15, 9)]: true,
 [utils.asGridCoord(15,8)]: true,



 [utils.asGridCoord(15, 7)]: true,
 [utils.asGridCoord(16, 7)]: true,
 [utils.asGridCoord(17, 7)]: true,
 [utils.asGridCoord(18, 7)]: true,
 [utils.asGridCoord(19, 7)]: true,
 



   [utils.asGridCoord(24, 22)]: true,
   [utils.asGridCoord(25, 22)]: true,
   [utils.asGridCoord(26, 22)]: true,
   [utils.asGridCoord(27, 22)]: true,
   [utils.asGridCoord(28, 22)]: true,
   [utils.asGridCoord(28, 21)]: true,
   [utils.asGridCoord(27, 21)]: true,
   [utils.asGridCoord(26, 21)]: true,
   [utils.asGridCoord(25, 20)]: true,
   [utils.asGridCoord(25, 19)]: true,
   [utils.asGridCoord(25, 18)]: true,
   [utils.asGridCoord(25, 17)]: true,
   [utils.asGridCoord(25, 16)]: true,
   [utils.asGridCoord(25, 15)]: true,
   [utils.asGridCoord(26, 14)]: true,
   [utils.asGridCoord(27, 14)]: true,
   [utils.asGridCoord(28, 14)]: true,
   [utils.asGridCoord(29, 14)]: true,
   [utils.asGridCoord(30, 14)]: true,
   [utils.asGridCoord(31, 14)]: true,
   [utils.asGridCoord(32, 14)]: true,
   [utils.asGridCoord(33, 14)]: true,
   [utils.asGridCoord(34, 14)]: true,

   [utils.asGridCoord(35, 14)]: true,
   [utils.asGridCoord(36, 14)]: true,
   [utils.asGridCoord(37, 15)]: true,

  [utils.asGridCoord(37, 16)]: true,
  [utils.asGridCoord(37, 17)]: true,



   [utils.asGridCoord(6, 26)]: true,
   [utils.asGridCoord(9, 23)]: true,
   [utils.asGridCoord(10, 23)]: true,
   [utils.asGridCoord(7, 23)]: true,
   [utils.asGridCoord(6, 23)]: true,
   [utils.asGridCoord(7, 26)]: true,
   [utils.asGridCoord(8, 26)]: true,
   [utils.asGridCoord(9, 25)]: true,
   [utils.asGridCoord(10, 25)]: true,
   [utils.asGridCoord(11, 26)]: true,
   [utils.asGridCoord(12, 26)]: true,
   [utils.asGridCoord(13, 25)]: true,
   [utils.asGridCoord(14, 25)]: true,
   [utils.asGridCoord(15, 25)]: true,
   [utils.asGridCoord(16, 25)]: true,
   [utils.asGridCoord(17, 25)]: true,
   [utils.asGridCoord(18, 25)]: true,
   [utils.asGridCoord(19, 25)]: true,
   [utils.asGridCoord(20, 25)]: true,
   [utils.asGridCoord(21, 25)]: true,
   [utils.asGridCoord(22, 25)]: true,
   [utils.asGridCoord(23, 25)]: true,
   [utils.asGridCoord(24, 25)]: true,
   [utils.asGridCoord(25, 25)]: true,
   [utils.asGridCoord(26, 25)]: true,
   [utils.asGridCoord(27, 25)]: true,
   [utils.asGridCoord(28, 25)]: true,
   [utils.asGridCoord(29, 25)]: true,
   [utils.asGridCoord(30, 25)]: true,
   [utils.asGridCoord(30, 24)]: true,
   [utils.asGridCoord(30, 23)]: true,
   [utils.asGridCoord(30, 22)]: true,
   [utils.asGridCoord(30, 21)]: true,
   [utils.asGridCoord(31, 21)]: true,
   [utils.asGridCoord(32, 21)]: true,
   [utils.asGridCoord(33, 21)]: true,
   [utils.asGridCoord(34, 21)]: true,
   [utils.asGridCoord(35, 21)]: true,
   [utils.asGridCoord(36, 21)]: true,
   [utils.asGridCoord(37, 21)]: true,

   [utils.asGridCoord(38, 20)]: true,
   [utils.asGridCoord(38, 17)]: true,
   [utils.asGridCoord(39, 17)]: true,
   [utils.asGridCoord(40, 17)]: true,
   [utils.asGridCoord(41, 17)]: true,
   [utils.asGridCoord(42, 17)]: true,
   [utils.asGridCoord(42, 17)]: true,

   [utils.asGridCoord(39, 20)]: true,
   [utils.asGridCoord(40, 20)]: true,
   [utils.asGridCoord(41, 20)]: true,
   [utils.asGridCoord(42, 20)]: true,
   [utils.asGridCoord(43, 20)]: true,
   [utils.asGridCoord(44, 20)]: true,
   [utils.asGridCoord(45, 19)]: true,
   [utils.asGridCoord(45, 18)]: true,
   [utils.asGridCoord(45, 17)]: true,


   [utils.asGridCoord(42, 17)]: true,
   [utils.asGridCoord(42, 16)]: true,
   [utils.asGridCoord(42, 15)]: true,
   [utils.asGridCoord(42, 14)]: true,
   [utils.asGridCoord(42, 13)]: true,
   [utils.asGridCoord(42, 12)]: true,
   [utils.asGridCoord(42, 11)]: true,
   [utils.asGridCoord(42, 10)]: true,

   [utils.asGridCoord(45, 16)]: true,
   [utils.asGridCoord(45, 15)]: true,
   [utils.asGridCoord(45, 14)]: true,
   [utils.asGridCoord(45, 13)]: true,
   [utils.asGridCoord(45, 12)]: true,
   [utils.asGridCoord(45, 11)]: true,
   [utils.asGridCoord(45, 10)]: true,
   [utils.asGridCoord(46, 10)]: true,
   [utils.asGridCoord(47, 10)]: true,
   [utils.asGridCoord(48, 10)]: true,
   [utils.asGridCoord(49, 10)]: true,
   [utils.asGridCoord(50, 10)]: true,
   [utils.asGridCoord(51, 10)]: true,
   [utils.asGridCoord(52, 9)]: true,
   [utils.asGridCoord(52, 8)]: true,
   [utils.asGridCoord(51, 7)]: true,
   [utils.asGridCoord(51, 6)]: true,
   [utils.asGridCoord(52, 5)]: true,
   [utils.asGridCoord(52, 4)]: true,
   [utils.asGridCoord(50, 3)]: true,
   [utils.asGridCoord(51, 3)]: true,
   [utils.asGridCoord(49, 3)]: true,
   [utils.asGridCoord(48, 3)]: true,
   [utils.asGridCoord(47, 3)]: true,
   [utils.asGridCoord(46, 3)]: true,
   [utils.asGridCoord(45, 3)]: true,
   [utils.asGridCoord(44, 3)]: true,
   [utils.asGridCoord(43, 3)]: true,
   [utils.asGridCoord(42, 3)]: true,
   [utils.asGridCoord(41, 4)]: true,
   [utils.asGridCoord(40, 4)]: true,
   [utils.asGridCoord(39, 5)]: true,
   [utils.asGridCoord(39, 6)]: true,
   [utils.asGridCoord(39, 7)]: true,
   [utils.asGridCoord(39, 8)]: true,
   [utils.asGridCoord(39, 9)]: true,
   [utils.asGridCoord(40, 9)]: true,
   [utils.asGridCoord(41, 9)]: true,
   [utils.asGridCoord(42, 9)]: true,
   
      
    },
   
  },
  Plain: {
   
    lowerSrc: "../../images/maps/StreetLower.png",
    upperSrc: "../../images/maps/StreetUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(8),

        
      }),
     
     
    
    
    
    
    },
    walls: {
      


   [utils.asGridCoord(4, 8)]: true,
   [utils.asGridCoord(6, 7)]: true,
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




