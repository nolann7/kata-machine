export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    const q = [source];

    while (q.length) {
        let current = q.shift() as number;
        if (current === needle) break;

        const adjs = graph[current];

        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) continue;
            if (seen[i]) continue;

            q.push(i);
            seen[i] = true;
            prev[i] = current;
        }
    }

    if (prev[needle] === -1) return null;

    // build path backwards

    const out: number[] = [];
    let curr = needle;
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }
    return [source, ...out.reverse()];
}
