function walk(
    graph: WeightedAdjacencyList,
    current: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (current === needle) {
        path.push(current);
        return true;
    }
    if (seen[current]) return false;
    seen[current] = true;

    // recurse

    // pre
    path.push(current);

    // recurse
    const list = graph[current]; // neighbors
    for (let i = 0; i < list.length; i++) {
        const edge = list[i]; // neighbor
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = [];
    const seen = new Array(graph.length).fill(false);

    walk(graph, source, needle, seen, path);
    if (path.length === 0) return null;
    return path;
}
