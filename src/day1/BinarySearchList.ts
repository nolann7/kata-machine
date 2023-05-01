export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;
    while (start < end) {
        let middleIndex = start + Math.floor((end - start) / 2);
        let middleElement = haystack[middleIndex];
        if (middleElement === needle) return true;
        if (needle > middleElement) {
            start = middleIndex + 1;
        } else end = middleIndex;
    }
    return false;
}
