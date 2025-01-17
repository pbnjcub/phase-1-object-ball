function gameObject() {
    return {
        home: {
        teamName: "Brooklyn Nets" ,
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
                     
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },

            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },

            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets" ,
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
                }

            }

        }
    }
}
// - Build a function, `numPointsScored` that takes in an argument of a player's
//   name and returns the number of points scored for that player.
//   - Think about where in the object you will find a player's `points`. How can
//     you iterate down into that level? Think about the return value of your
//     function.

let numPointsScored = (name) => {
    const game = gameObject()
    let returnValue
    for (const gameKey in game){
      const teamObj = game[gameKey]
     // debugger
      for (const teamKey in teamObj){
        const playerObj = teamObj.players
        //debugger
        for (const playerKey in playerObj){
            //debugger
          if(playerKey === name){
            returnValue = playerObj[playerKey].points
          }
        }
        // let playerObj = teamObj[teamKey]
        // for(let playerKey in playerObj){
        //   returnArray.push(Object.keys(playerObj[playerKey][players]))          
        }  
      }
     return returnValue
    }

//     - Build a function, `shoeSize`, that takes in an argument of a player's name and
//   returns the shoe size for that player.
//   - Think about how you will find the shoe size of the correct player. How can
//     you check and see if a player's name matches the name that has been passed
//     into the function as an argument?

let shoeSize = (name) => {
    const game = gameObject()
    let returnValue
    for (const gameKey in game){
      const teamObj = game[gameKey]
     // debugger
      for (const teamKey in teamObj){
        const playerObj = teamObj.players
        //debugger
        for (const playerKey in playerObj){
            //
            debugger
          if(playerKey === name){
            returnValue = playerObj[playerKey].shoe
          }
        }
      }  
    }
     return returnValue
}
//debugger

// Build a function, `teamColors`, that takes in an argument of the team name and
// returns an array of that teams colors.

let teamColors = (team) =>{
    const game = gameObject()
    let returnValue = []
    for (const gameKey in game){
        //debugger
        const teamObj = game[gameKey]
      // debugger
        for (const teamKey in teamObj){
          // debugger
            if(teamObj[teamKey] === team){
                returnValue = teamObj.colors
            }
            //debugger
        }    
              
        
    }
    return returnValue
}

// Build a function, `teamNames`, that operates on the game object to return an
//   array of the team names.

let teamNames = () =>{
    const game = gameObject()
    let returnValue = []
    for (const gameKey in game){
      returnValue.push(game[gameKey].teamName)     
    }
    return returnValue
}

// Build a function, `playerNumbers`, that takes in an argument of a team name
//   and returns an array of the jersey number's for that team.

let playerNumbers = (teams) => {
    const game = gameObject()
    let returnValue = []
    for (const gameKey in game){
      const teamObj = game[gameKey]
      //debugger
      for (const teamKey in teamObj){
        const playerObj = teamObj.players
        if(teamObj[teamKey] === teams) {
            
            for (const playerKey in playerObj){
                //debugger
                returnValue.push(playerObj[playerKey].number)
              //debugger
            }
        }
       // debugger
        
      }  
    }
     return returnValue
}


// Build a function, `playerStats`, that takes in an argument of a player's name
// and returns a object of that player's stats. Check out the following example
// of the expected return value of the `playerStats` function:

// ```js
// playerStats("Alan Anderson")
// // returns:
// {
// number: 0,
// shoe: 16,
// points: 22,
// rebounds: 12,
// assists: 12,
// steals: 3,
// blocks: 1,
// slamDunks: 1
// }
// ```

let playerStats = (name) => {
    const game = gameObject()
    let returnValue = []
    for (const gameKey in game){
      const teamObj = game[gameKey]
     //debugger
      for (const teamKey in teamObj){
        const playerObj = teamObj.players
        //debugger
        for (const playerKey in playerObj){
            //debugger
          if(playerKey === name){
            returnValue = playerObj[playerKey]
          } //debugger
        }
      }  
    }
     return returnValue
}


// Build a function, `bigShoeRebounds`, that will return the number of rebounds
//   associated with the player that has the largest shoe size. Break this one
//   down into steps:
//   - First, find the player with the largest shoe size
//   - Then, return that player's number of rebounds
//   - Remember to think about return values here. Use `debugger` to drop into
//     your function and understand what it is returning and why.

let bigShoeRebounds = () => {
    const game = gameObject()
    let returnShoeValue = []
    let maxShoe = ''
    let maxShoeRebounds = ''
    for (const gameKey in game){
        debugger
        const playerObj = game[gameKey].players
     debugger
        for (const playerKey in playerObj){
           debugger
           returnShoeValue.push(playerObj[playerKey].shoe)
           debugger
           maxShoe = Math.max(...returnShoeValue)
           debugger
           if(playerObj[playerKey].shoe === maxShoe){
            maxShoeRebounds = playerObj[playerKey].rebounds
        }
        debugger
        
            debugger
        }
            
    }
    return maxShoeRebounds

}
bigShoeRebounds()

//debugger