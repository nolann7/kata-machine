export default function in_order_search(head: BinaryNode<number>): number[] {
    const walk = (
        currentNode: BinaryNode<number> | null,
        path: number[],
    ): number[] => {
        if (!currentNode) return path;

        walk(currentNode.left, path);

        path.push(currentNode.value);

        walk(currentNode.right, path);

        return path;
    };

    return walk(head, []);
}
