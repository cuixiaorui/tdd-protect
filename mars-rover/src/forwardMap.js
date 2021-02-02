const Direction = require("./Direction");
const Position = require("./Position");
const map = {
  [Direction.North]: (position) => {
    return new Position(position.x, position.y + 1);
  },

  [Direction.West]: (position) => {
    return new Position(position.x - 1, position.y);
  },

  [Direction.East]: (position) => {
    return new Position(position.x + 1, position.y);
  },
  [Direction.South]: (position) => {
    return new Position(position.x, position.y - 1);
  },
};

exports.forward = (position, direction) => {
  return map[direction](position);
};
