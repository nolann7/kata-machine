export default function pre_order_search(head: BinaryNode<number>): number[] {
    const walk = (
        currentNode: BinaryNode<number> | null,
        path: number[],
    ): number[] => {
        if (!currentNode) return path;

        path.push(currentNode.value);

        walk(currentNode.left, path);

        walk(currentNode.right, path);

        return path;
    };

    return walk(head, []);
}
