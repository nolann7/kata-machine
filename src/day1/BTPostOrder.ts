export default function post_order_search(head: BinaryNode<number>): number[] {
    const result: number[] = [];

    const recurse = (currentNode: BinaryNode<number>, result: number[]) => {
        if (currentNode.left) {
            recurse(currentNode.left, result);
        }

        if (currentNode.right) {
            recurse(currentNode.right, result);
        }
        
        result.push(currentNode.value);
    };

    recurse(head, result);

    return result;
}
