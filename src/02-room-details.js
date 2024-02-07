/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  // Create variables to hold data
  let dinoId;
  let dino;
  let room;
  
  // Filtering through the dinosaurs array of dinosaurs objects to retrieve the Given dinosaurs information Object in an array and assiging that to the dino variable
  dino = dinosaurs.filter(dino => dino.name == dinosaurName);
  // Checking if the newly filtered dino array is empty. If empty return the given error message
  if(dino.length === 0) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  }
  
  // Else assign the found dinosaurs ID to the dinoId variable
  dinoId = dino[0].dinosaurId;
  // Now filter through the rooms array of room objects to find the room the given dinosaur is located.
  room = rooms.find(room => room.dinosaurs.includes(dinoId));
  
  // Checking if the newly filtered room array is empty. If empty return given error message.
  if(!room) {
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
  }
  // Else assign the found found to the roomName variable and return the found roomName.
  return room.name;

}

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */

const getConnectedRoomNamesById = (rooms, id) => {
  // Loop through to check if any of the connected rooms has an incorrect ID. If so return given error message 
  for(let i = 0; i < rooms.length; i++) {
    if(rooms[i].connectsTo.includes("incorrect-id")){
      return `Room with ID of 'incorrect-id' could not be found.`
    }
  }

  // Filtering through the rooms array of rooms object to find the rooms the given ID is connected to.
  let roomArray = rooms.filter(room => room.connectsTo.includes(id));
  
  // Checking if the newly filtered room array is empty. If empty return given error message.
  if(roomArray.length == 0) {
    return `Room with ID of '${id}' could not be found.`;
  }


  // If the room array isnt empty it is connected to. So we want to create a an array that holds the room names the room is connected to and return that Array.
  return roomArray.reduce((arr, room) => {
    arr.push(room.name);
    return arr;
  },[]);
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
