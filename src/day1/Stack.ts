type Node<T> = { value: T; prev?: Node<T> };
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        const currentHead = this.head;
        this.head = node;
        this.head.prev = currentHead;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const currentHead = this.head;
        this.head = this.head.prev;

        // free
        currentHead.prev = undefined;

        return currentHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
