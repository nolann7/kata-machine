const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
type Point = {
  x: number;
  y: number;
}
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Base cases:
    // 1) if out of board
    if (
        curr.x < 0 ||
        curr.x > maze[0].length ||
        curr.y < 0 ||
        curr.y > maze.length
    )
        return false;
    // 2) if we on the wall
    if (maze[curr.y][curr.x] === wall) return false;

    // 3) if we at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 4) if we have been here
    if (seen[curr.y][curr.x]) return false;

    // recursion:
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse
    for (let i = 0; i < directions.length; i++) {
        const [x, y] = directions[i];

        // prettier-ignore
        if (walk(maze, wall, {x: curr.x + x, y: curr.y + y}, end, seen, path)) {
          return true;
        }
    }
    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    // console.log(path)

    return path;
}

const maze = [
  "xxxxxxxxxx x",
  "x        x x",
  "x        x x",
  "x xxxxxxxx x",
  "x          x",
  "x xxxxxxxxxx",
]

const result = solve(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 })

console.log(result)