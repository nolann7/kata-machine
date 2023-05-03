type Node<T> = { value: T; next?: Node<T> };

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        const prevTail = this.tail;
        prevTail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;

        const prevHead = this.head;
        if (this.length === 1){
          this.tail = undefined;
        }

        this.length--;
        this.head = prevHead.next;

        // free
        prevHead.next = undefined;

        return prevHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
