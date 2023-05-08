export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const que: BinaryNode<number>[] = [head];

    while (que.length) {
        const currentNode = que.shift() as BinaryNode<number>;

        if (currentNode.left) que.push(currentNode.left);
        if (currentNode.right) que.push(currentNode.right);

        if (needle === currentNode.value) return true;
    }
    return false;
}
