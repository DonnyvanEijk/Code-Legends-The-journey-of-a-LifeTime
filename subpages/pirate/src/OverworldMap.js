


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
 
 
  
  Pirate: {
   
    lowerSrc: "../../images/maps/Pirates.png",
   upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(45),
        y: utils.withGrid(26),

        
      }),
      TimePirate: new Person({
        x: utils.withGrid(45),
        y: utils.withGrid(27),
        src: "../../images/characters/captain_time.png",

        behaviorLoop: [
         
          { type: "stand", direction: "up", time: 300 },
          { type: "stand", direction: "left", time: 300 },
          { type: "stand", direction: "right", time: 400 },
          { type: "stand", direction: "up", time: 350 },
        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "W-who are you?!", faceHero: "TimePirate" },
              { type: "textMessage", text: "YARRR fill in the code Y.A.R.R to talk please", faceHero: "TimePirate" },
              
            ]
          }
        ]
      }),
      man: new Person({
        x: utils.withGrid(47),
        y: utils.withGrid(24),
        src: "../../images/characters/matroos_berend.png",

        behaviorLoop: [
         
          { type: "stand", direction: "up", time: 390 },
         
        ],
        talking: [
          {
            events: [
              { type: "textMessage", text: "hello", faceHero: "TimePirate" },
              { type: "textMessage", text: "what are you", faceHero: "man" },
              
            ]
          }
        ]
      }),
     
     
    
    
    
    
    },
    walls: {
      
      [utils.asGridCoord(50, 29)]: true,
      [utils.asGridCoord(49, 29)]: true,
      [utils.asGridCoord(48, 29)]: true,
      [utils.asGridCoord(47, 29)]: true,
      [utils.asGridCoord(46, 29)]: true,
      [utils.asGridCoord(45, 29)]: true,
      [utils.asGridCoord(44, 29)]: true,
      [utils.asGridCoord(43, 29)]: true,
      [utils.asGridCoord(42, 29)]: true,
      [utils.asGridCoord(41, 29)]: true,
      [utils.asGridCoord(40, 29)]: true,
      [utils.asGridCoord(51, 29)]: true,
      [utils.asGridCoord(52, 29)]: true,
      [utils.asGridCoord(53, 29)]: true,
      [utils.asGridCoord(54, 29)]: true,
      [utils.asGridCoord(55, 29)]: true,
      [utils.asGridCoord(56, 29)]: true,
      [utils.asGridCoord(57, 29)]: true,
      [utils.asGridCoord(58, 29)]: true,
      [utils.asGridCoord(59, 29)]: true,
      [utils.asGridCoord(58, 29)]: true,
      [utils.asGridCoord(60, 28)]: true,
      [utils.asGridCoord(60, 27)]: true,
      [utils.asGridCoord(62, 26)]: true,
      [utils.asGridCoord(61, 27)]: true,
      [utils.asGridCoord(62, 25)]: true,
     [utils.asGridCoord(63, 25)]: true,
     [utils.asGridCoord(64, 24)]: true,
     [utils.asGridCoord(64, 23)]: true,
     [utils.asGridCoord(63, 22)]: true,
     [utils.asGridCoord(62, 22)]: true,
    [utils.asGridCoord(62, 21)]: true,
    [utils.asGridCoord(61, 20)]: true,
    [utils.asGridCoord(60, 20)]: true,
    [utils.asGridCoord(60, 19)]: true,
    [utils.asGridCoord(59, 18)]: true,
    [utils.asGridCoord(58, 18)]: true,
    [utils.asGridCoord(57, 18)]: true,
    [utils.asGridCoord(56, 18)]: true,
    [utils.asGridCoord(55, 18)]: true,
    [utils.asGridCoord(54, 18)]: true,
    [utils.asGridCoord(53, 18)]: true,
    [utils.asGridCoord(52, 18)]: true,
    [utils.asGridCoord(51, 18)]: true,
    [utils.asGridCoord(50, 18)]: true,
    [utils.asGridCoord(49, 18)]: true,
    [utils.asGridCoord(48, 18)]: true,
    [utils.asGridCoord(47, 18)]: true,
    [utils.asGridCoord(46, 18)]: true,
    [utils.asGridCoord(45, 18)]: true,
    [utils.asGridCoord(44, 18)]: true,
    [utils.asGridCoord(43, 18)]: true,
    [utils.asGridCoord(42, 18)]: true,
    [utils.asGridCoord(41, 18)]: true,
    [utils.asGridCoord(40, 18)]: true,
    [utils.asGridCoord(39, 19)]: true,
    [utils.asGridCoord(39, 20)]: true,
    [utils.asGridCoord(39, 21)]: true,
    [utils.asGridCoord(39, 22)]: true,
    [utils.asGridCoord(39, 23)]: true,
    [utils.asGridCoord(39, 24)]: true,
    [utils.asGridCoord(39, 25)]: true,
    [utils.asGridCoord(39, 26)]: true,
    [utils.asGridCoord(39, 27)]: true,
    [utils.asGridCoord(39, 28)]: true,
    [utils.asGridCoord(44, 27)]: true,
    [utils.asGridCoord(44, 26)]: true,
    [utils.asGridCoord(44, 25)]: true,
    [utils.asGridCoord(44, 24)]: true,
    [utils.asGridCoord(44, 23)]: true,
    [utils.asGridCoord(44, 22)]: true,
    [utils.asGridCoord(44, 21)]: true,
    [utils.asGridCoord(44, 19)]: true,
    
    


    },
    cutsceneSpaces: {
      [utils.asGridCoord(44, 20)]: [
        {
          events: [
            { type: "changeMap", map: "onder" }
          ]
        }
      ],
    
    }
  

  },
  onder: {
   
    lowerSrc: "../../images/maps/onder.png",
   upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(9),
        y: utils.withGrid(3),

        
      }),

    BerendOnder: new Person({
        x: utils.withGrid(17),
        y: utils.withGrid(9),
        src: "../../images/characters/matroos_berend.png",

     
        talking: [
          {
            events: [
              { type: "textMessage", text: "oh uhhhh here is the map ig" },
              { type: "textMessage", text: "take it to the captain and use the code:" },
              { type: "textMessage", text: "l.a.n.d.i.n.s.i.g.h.t" },
              
            ]
          }
        ]
      }),


      
    Bed1: new Person({
      x: utils.withGrid(35),
      y: utils.withGrid(9),
      src: "../../images/characters/map.png",

   
      talking: [
        {
          events: [
            { type: "textMessage", text: "Barbosa's bed?" },
            { type: "textMessage", text: "better not touch it" },
          
          ]
        }
      ]
    }),
  


    
    Bed2: new Person({
      x: utils.withGrid(27),
      y: utils.withGrid(2),
      src: "../../images/characters/map.png",

   
      talking: [
        {
          events: [
            { type: "textMessage", text: "oh that creep berend his bed" },
            { type: "textMessage", text: "better not get in" },
          
            
          ]
        }
      ]
    }),
  


    
   Bed3: new Person({
      x: utils.withGrid(29),
      y: utils.withGrid(15),
      src: "../../images/characters/map.png",

   
      talking: [
        {
          events: [
            { type: "textMessage", text: "Ahhhh the rusty visitors bed" },
            { type: "textMessage", text: "lets go sleep!" },
            { type: "textMessage", text: "use code s.l.e.e.p to get sleepin." },
            
          ]
        }
      ]
    }),
  
    
     
     
    
    
    
    
    },
    walls: {
      


   
      [utils.asGridCoord(10, 3)]:true,
      [utils.asGridCoord(10, 1)]:true,
      [utils.asGridCoord(9, 1)]:true,
      [utils.asGridCoord(8, 1)]:true,
      [utils.asGridCoord(7, 1)]:true,
      [utils.asGridCoord(6, 1)]:true,
      [utils.asGridCoord(5, 1)]:true,
      [utils.asGridCoord(4, 1)]:true,
      [utils.asGridCoord(3, 1)]:true,
      [utils.asGridCoord(2, 2)]:true,
      [utils.asGridCoord(2, 3)]:true,
      [utils.asGridCoord(2, 4)]:true,
      [utils.asGridCoord(2, 5)]:true,
      [utils.asGridCoord(2, 6)]:true,
      [utils.asGridCoord(2, 7)]:true,
      [utils.asGridCoord(2, 8)]:true,
      [utils.asGridCoord(2, 9)]:true,
      [utils.asGridCoord(2, 10)]:true,
      [utils.asGridCoord(2, 11)]:true,
      [utils.asGridCoord(2, 12)]:true,
      [utils.asGridCoord(2, 13)]:true,
      [utils.asGridCoord(2, 14)]:true,
      [utils.asGridCoord(2, 15)]:true,
      [utils.asGridCoord(3, 16)]:true,
      [utils.asGridCoord(4, 16)]:true,
      [utils.asGridCoord(5, 16)]:true,
      [utils.asGridCoord(6, 16)]:true,
      [utils.asGridCoord(7, 16)]:true,
      [utils.asGridCoord(8, 16)]:true,
      [utils.asGridCoord(9, 16)]:true,
      [utils.asGridCoord(10, 16)]:true,
      [utils.asGridCoord(11, 16)]:true,
      [utils.asGridCoord(12, 16)]:true,
      [utils.asGridCoord(13, 16)]:true,
      [utils.asGridCoord(14, 16)]:true,
      [utils.asGridCoord(15, 16)]:true,
      [utils.asGridCoord(16, 16)]:true,
      [utils.asGridCoord(17, 16)]:true,
      [utils.asGridCoord(18, 16)]:true,
      [utils.asGridCoord(19, 16)]:true,
      [utils.asGridCoord(20, 16)]:true,
      [utils.asGridCoord(21, 16)]:true,
      [utils.asGridCoord(22, 16)]:true,
      [utils.asGridCoord(23, 16)]:true,
      [utils.asGridCoord(24, 16)]:true,
      [utils.asGridCoord(25, 16)]:true,
      [utils.asGridCoord(26, 16)]:true,
      [utils.asGridCoord(27, 16)]:true,
      [utils.asGridCoord(28, 16)]:true,
      [utils.asGridCoord(29, 16)]:true,
      [utils.asGridCoord(30, 16)]:true,
      [utils.asGridCoord(31, 16)]:true,
      [utils.asGridCoord(32, 16)]:true,
      [utils.asGridCoord(33, 15)]:true,
      [utils.asGridCoord(33, 14)]:true,
      [utils.asGridCoord(33, 13)]:true,
      [utils.asGridCoord(34, 13)]:true,
      [utils.asGridCoord(35, 13)]:true,
      [utils.asGridCoord(36, 12)]:true,
      [utils.asGridCoord(36, 11)]:true,
      [utils.asGridCoord(36, 10)]:true,
      [utils.asGridCoord(37, 10)]:true,
      [utils.asGridCoord(38, 10)]:true,
      [utils.asGridCoord(38, 9)]:true,
      [utils.asGridCoord(38, 8)]:true,
      [utils.asGridCoord(37, 7)]:true,
      [utils.asGridCoord(36, 7)]:true,
      [utils.asGridCoord(36, 6)]:true,
      [utils.asGridCoord(36, 5)]:true,
      [utils.asGridCoord(35, 4)]:true,
      [utils.asGridCoord(34, 4)]:true,
      [utils.asGridCoord(33, 4)]:true,
      [utils.asGridCoord(33, 3)]:true,
      [utils.asGridCoord(33, 2)]:true,
      [utils.asGridCoord(33, 1)]:true,
      [utils.asGridCoord(32, 1)]:true,
      [utils.asGridCoord(31, 1)]:true,
      [utils.asGridCoord(30, 1)]:true,
      [utils.asGridCoord(29, 1)]:true,
      [utils.asGridCoord(28, 1)]:true,
      [utils.asGridCoord(27, 1)]:true,
      [utils.asGridCoord(26, 1)]:true,
      [utils.asGridCoord(25, 1)]:true,
      [utils.asGridCoord(24, 1)]:true,
      [utils.asGridCoord(23, 1)]:true,
      [utils.asGridCoord(22, 1)]:true,
      [utils.asGridCoord(21, 1)]:true,
      [utils.asGridCoord(20, 1)]:true,
      [utils.asGridCoord(19, 1)]:true,
      [utils.asGridCoord(18, 1)]:true,
      [utils.asGridCoord(17, 1)]:true,
      [utils.asGridCoord(16, 1)]:true,
      [utils.asGridCoord(15, 1)]:true,
      [utils.asGridCoord(14, 1)]:true,
      [utils.asGridCoord(13, 1)]:true,
      [utils.asGridCoord(12, 1)]:true,
      [utils.asGridCoord(11, 1)]:true,



   
    },
    cutsceneSpaces: {
      
      [utils.asGridCoord(9, 3)]: [
        {
          events: [
            { type: "changeMap", map: "Pirate" }
          ]
        }
      ]
    }
  

  },
  
  
}




