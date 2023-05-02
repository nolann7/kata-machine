export default function two_crystal_balls(breaks: boolean[]): number {
    let start = 0;
    let end = breaks.length;
    let result = Infinity;

    while (start < end) {
        let middle = start + Math.floor((end - start) / 2);
        if (breaks[middle] === false) {
            start = middle + 1;
        }
        if (breaks[middle] === true) {
            result = Math.min(result, middle);
            end = middle;
        }
    }
    return result === Infinity ? -1 : result;
}
