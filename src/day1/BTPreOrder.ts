export default function pre_order_search(head: BinaryNode<number>): number[] {
    const result: number[] = [];

    const recurse = (currentNode: BinaryNode<number>, result: number[]) => {
        result.push(currentNode.value);

        if (currentNode.left) {
            recurse(currentNode.left, result);
        }
        if (currentNode.right) {
            recurse(currentNode.right, result);
        }
    };

    recurse(head, result);

    return result;
}
