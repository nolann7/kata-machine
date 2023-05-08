type Node<T> = { value: T; next?: Node<T> };
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        const prevHead = this.head!;
        this.head = node;
        this.head.next = prevHead;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) return;
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }

        const node = { value: item } as Node<T>;
        this.length++;
        let current = this.head;
        let index = 0;

        while (current) {
            if (index + 1 === idx) {
                let prevNext = current.next;
                current.next = node;
                node.next = prevNext;
                return;
            }
            current = current.next;
            index++;
        }
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        const prevTail = this.tail;
        prevTail.next = node;
        this.tail = prevTail.next;
    }
    remove(item: T): T | undefined {
        if (!this.head) return undefined;

        let current: Node<T> | undefined = this.head;
        let index = 0;
        if (current.value === item) {
            this.length--;
            let removedNode = current;
            this.head = current.next;

            // free
            removedNode.next = undefined;

            return removedNode.value;
        }
        while (current.next) {
            if (current.next.value === item) {
                this.length--;
                let removedNode: Node<T> | undefined = current.next;
                if (index + 1 === this.length) {
                    this.tail = current;
                    current.next = undefined;
                    return removedNode.value;
                }

                current.next = removedNode.next;

                // free
                removedNode.next = undefined;

                return removedNode.value;
            }
            index++;
            current = current.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        if (!this.head || idx < 0 || idx >= this.length) return undefined;

        let current: Node<T> | undefined = this.head;
        let index = 0;
        while (index < idx && current) {
            current = current.next;
            index++;
        }
        return current?.value;
    }
    removeAt(idx: number): T | undefined {
        if (!this.head) return undefined;

        let current: Node<T> | undefined = this.head;
        let index = 0;
        if (idx === 0) {
            this.length--;
            let removedNode = current;
            this.head = current.next;
            // free
            removedNode.next = undefined;

            return removedNode.value;
        }
        while (current.next) {
            if (index + 1 === idx) {
                this.length--;
                let removedNode: Node<T> | undefined = current.next;
                if (idx === this.length) {
                    this.tail = current;
                    current.next = undefined;
                    return removedNode.value;
                }

                current.next = removedNode.next;

                // free
                removedNode.next = undefined;

                return removedNode.value;
            }
            index++;
            current = current.next;
        }
        return undefined;
    }
}

const list = new SinglyLinkedList();
list.append(5);
list.append(7);
list.append(9);

// console.log(list.removeAt(2));
console.log(list.get(-1));
// console.log(list);
