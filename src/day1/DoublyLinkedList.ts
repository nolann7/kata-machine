// type Node<T> = { value: T; next?: Node<T>; prev?: Node<T> };
// export default class DoublyLinkedList<T> {
//     public length: number;
//     private head?: Node<T>;
//     private tail?: Node<T>;

//     constructor() {
//         this.length = 0;
//         this.head = this.tail = undefined;
//     }

//     prepend(item: T): void {}
//     insertAt(item: T, idx: number): void {}
//     append(item: T): void {}
//     remove(item: T): T | undefined {}
//     get(idx: number): T | undefined {}
//     removeAt(idx: number): T | undefined {}
//     reverse(): void {}
// }
type Node<T> = { value: T; next?: Node<T>; prev?: Node<T> };

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item, next: this.head };
        if (this.head) {
            this.head.prev = node;
        } else {
            this.tail = node;
        }
        this.head = node;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length)
            throw new Error("Index out of bounds");
        if (idx === 0) return this.prepend(item);
        const node: Node<T> = { value: item };
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            current = current?.next;
        }
        node.next = current?.next;
        node.prev = current;
        if (current?.next) {
            current.next.prev = node;
        } else {
            this.tail = node;
        }
        current!.next = node;
        this.length++;
    }

    append(item: T): void {
        const node: Node<T> = { value: item, prev: this.tail };
        if (this.tail) {
            this.tail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
        this.length++;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        while (current && current.value !== item) {
            current = current.next;
        }
        if (!current) return undefined;
        if (current.prev) {
            current.prev.next = current.next;
        } else {
            this.head = current.next;
        }
        if (current.next) {
            current.next.prev = current.prev;
        } else {
            this.tail = current.prev;
        }
        this.length--;
        return current.value;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }
        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length)
            throw new Error("Index out of bounds");
        if (idx === 0) return this.remove(this.head!.value);
        if (idx === this.length - 1) return this.remove(this.tail!.value);
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current?.next;
        }
        if (current?.prev) {
            current.prev.next = current?.next;
        }
        if (current?.next) {
            current.next.prev = current?.prev;
        }
        this.length--;
        return current?.value;
    }

    reverse(): void {
        if (!this.head) return;
        let current: Node<T> | undefined = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev: Node<T> | undefined;

        while (current) {
            prev = current.prev;

            current.prev = current.next;
            current.next = prev;
            
            current = current.prev;
        }
    }
}
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);

list.reverse();

// console.log(list.removeAt(2));
// console.log(list.get(-1));
console.log(list);
