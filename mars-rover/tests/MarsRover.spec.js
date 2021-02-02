const Direction = require("../src/Direction");
const MarsRover = require("../src/MarsRover");
const Position = require("../src/Position");

describe("MarsRover", () => {
  it("init marsRover", () => {
    const marsRover = new MarsRover(new Position(0, 0), Direction.North);
    expect(marsRover.getState()).toEqual({
      x: 0,
      y: 0,
      direction: Direction.North,
    });
  });

  describe("Direction", () => {
    describe("turnLeft", () => {
      it("North to West", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.North);
        marsRover.turnLeft();
        expect(marsRover.getState()).toEqual({
          x: 0,
          y: 0,
          direction: Direction.West,
        });
      });

      it("West to South", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.West);
        marsRover.turnLeft();
        expect(marsRover.getState()).toEqual({
          x: 0,
          y: 0,
          direction: Direction.South,
        });
      });

      it("East to North", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.East);
        marsRover.turnLeft();
        expect(marsRover.getState()).toEqual({
          x: 0,
          y: 0,
          direction: Direction.North,
        });
      });

      it("South to East", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.South);
        marsRover.turnLeft();
        expect(marsRover.getState()).toEqual({
          x: 0,
          y: 0,
          direction: Direction.East,
        });
      });
    });

    describe("turnRight", () => {
      function turnRightExpect(direction, expectDirection) {
        const marsRover = new MarsRover(new Position(0, 0), direction);
        marsRover.turnRight();
        expect(marsRover.getState()).toEqual({
          x: 0,
          y: 0,
          direction: expectDirection,
        });
      }
      // it("All", () => {
      //   turnRightExpect(Direction.North, Direction.East);
      //   turnRightExpect(Direction.East, Direction.South);
      //   turnRightExpect(Direction.South, Direction.West);
      //   turnRightExpect(Direction.West, Direction.North);
      // });
      it("North to East", () => {
        turnRightExpect(Direction.North, Direction.East);
      });

      it("East to South", () => {
        turnRightExpect(Direction.East, Direction.South);
      });

      it("South to West", () => {
        turnRightExpect(Direction.South, Direction.West);
      });

      it("West to North", () => {
        turnRightExpect(Direction.West, Direction.North);
      });
    });

    describe("Move", () => {
      it("should position equal to (0,1) when current direction is North and Position is (0,0)", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.North);
        marsRover.forward();
        expect(marsRover.getState()).toEqual({
          x: 0,
          y: 1,
          direction: Direction.North,
        });
      });

      it("should position equal to (-1,0) when current direction is West and Position is (0,0)", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.West);
        marsRover.forward();
        expect(marsRover.getState()).toEqual({
          x: -1,
          y: 0,
          direction: Direction.West,
        });
      });

      it("should position equal to (1,0) when current direction is East and Position is (0,0)", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.East);
        marsRover.forward();
        expect(marsRover.getState()).toEqual({
          x: 1,
          y: 0,
          direction: Direction.East,
        });
      });

      it("should position equal to (0,-1) when current direction is South and Position is (0,0)", () => {
        const marsRover = new MarsRover(new Position(0, 0), Direction.South);
        marsRover.forward();
        expect(marsRover.getState()).toEqual({
          x: 0,
          y: -1,
          direction: Direction.South,
        });
      });
    });
  });

  describe("execute", () => {
    it(" should position equal to (0,-1) when execute M command and current direction is South and Position is (0,0) ", () => {
      const marsRover = new MarsRover(new Position(0, 0), Direction.South);
      marsRover.execute("M");
      expect(marsRover.getState()).toEqual({
        x: 0,
        y: -1,
        direction: Direction.South,
      });
    });

    it("should position equal to (0,-1) when execute LM command and current direction is South and Position is (0,0) ", () => {
      const marsRover = new MarsRover(new Position(0, 0), Direction.South);
      marsRover.execute("LM");
      expect(marsRover.getState()).toEqual({
        x: 1,
        y: 0,
        direction: Direction.East,
      });
    });

    it("should position equal to (0,-1) when execute LRM command and current direction is South and Position is (0,0) ", () => {
      const marsRover = new MarsRover(new Position(0, 0), Direction.South);
      marsRover.execute("LRM");
      expect(marsRover.getState()).toEqual({
        x: 0,
        y: -1,
        direction: Direction.South,
      });
    });

    // it.todo("execute init ", () => {});
  });
});
