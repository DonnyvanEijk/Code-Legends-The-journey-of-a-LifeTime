


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
 
  Among: {
   
    lowerSrc: "../../images/maps/amongus_island.png",
   upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(50),
        y: utils.withGrid(8),

        
      }),
     
      Barbosa_amongus: new Person({
        x: utils.withGrid(50),
        y: utils.withGrid(14),
        src: "../../images/characters/captain_time.png",

     
        talking: [
          {
            events: [
              { type: "textMessage", text: "Finnaly My treasure.. UMMM", faceHero:"Barbosa_amongus" },
              { type: "textMessage", text: "Our treasure :)" },
              { type: "textMessage", text: "use code s.u.s.s.y to continue!!!" },
             
              
            ]
          }
        ]
      }),

      chest: new Person({
        x: utils.withGrid(48),
        y: utils.withGrid(29),
        src: "/images/characters/people/Interactable_obkect.png",

     
        talking: [
          {
            events: [
              { type: "textMessage", text: "Its the CHEST" },
              { type: "textMessage", text: "Its unopenable?" },
              { type: "textMessage", text: "MAYBE A CODE WORKS" },
              { type: "textMessage", text: "the chest does have some color on it" },
              { type: "textMessage", text: "gold, green and brown" },
             
              
            ]
          }
        ]
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


  onder: {
   
    lowerSrc: "../../images/maps/onder.png",
   upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(10),
        y: utils.withGrid(3),

        
      }),

    BerendOnder: new Person({
        x: utils.withGrid(17),
        y: utils.withGrid(9),
        src: "../../images/characters/matroos_berend.png",

     
        talking: [
          {
            events: [
              { type: "textMessage", text: "uhhh we are here" },
              { type: "textMessage", text: "go see barbosa" },
             
              
            ]
          }
        ]
      }),


      
    Bed1: new Person({
      x: utils.withGrid(35),
      y: utils.withGrid(9),
      src: "../../images/characters/map.png",

   
      
    }),
  


    
    Bed2: new Person({
      x: utils.withGrid(27),
      y: utils.withGrid(2),
      src: "../../images/characters/map.png",

   
    }),
  


    
   Bed3: new Person({
      x: utils.withGrid(29),
      y: utils.withGrid(15),
      src: "../../images/characters/map.png",

   
      
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
            { type: "changeMap", map: "Among" }
          ]
        }
      ]
    }
  

  },
  
  
}

  
  





