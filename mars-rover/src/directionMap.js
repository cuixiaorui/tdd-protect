const Direction = require("./Direction");
const map = {
  [Direction.North]: {
    left: Direction.West,
    right: Direction.East
  },
  [Direction.West]: {
    left: Direction.South,
    right: Direction.North
  },
  [Direction.East]: {
    left: Direction.North,
    right: Direction.South
  },
  [Direction.South]: {
    left: Direction.East,
    right: Direction.West
  },
};

exports.toLeft = (direction) => {
  return map[direction].left;
};

exports.toRight = (direction) => {
  return map[direction].right;
};
