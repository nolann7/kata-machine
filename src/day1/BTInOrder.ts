export default function in_order_search(head: BinaryNode<number>): number[] {
    const result: number[] = [];

    const recurse = (currentNode: BinaryNode<number>, result: number[]) => {
        if (currentNode.left) {
            recurse(currentNode.left, result);
        }

        result.push(currentNode.value);

        if (currentNode.right) {
            recurse(currentNode.right, result);
        }
    };

    recurse(head, result);

    return result;
}
