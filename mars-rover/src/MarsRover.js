const { toLeft, toRight } = require("./directionMap.js");
const { forward } = require("./forwardMap");
module.exports = class MarsRover {
  constructor(position, direction) {
    this.position = position;
    this.direction = direction;
  }
  getState() {
    return {
      x: this.position.x,
      y: this.position.y,
      direction: this.direction,
    };
  }

  turnLeft() {
    this.direction = toLeft(this.direction);
  }
  turnRight() {
    this.direction = toRight(this.direction);
  }
  forward() {
    this.position = forward(this.position, this.direction);
  }

  execute(commands) {
    const commandList = commands.split("");
    commandList.forEach(this.executeCommand.bind(this));
  }
  // @private
  executeCommand(command){
      if (command === "L") {
        this.turnLeft();
      }
      if (command === "M") {
        this.forward();
      }
      if (command === "R") {
        this.turnRight();
      }
  }
};
