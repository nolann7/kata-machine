type Node<T> = { value: T; next?: Node<T>; prev?: Node<T> };
export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

    constructor(private capacity: number = 10) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        // does it exist?
        const node = this.lookup.get(key) as Node<V>;

        // if it doesn't create new node and prepend it, add length, trimCache
        if (!node) {
            const newNode = { value } as Node<V>;
            this.prepend(newNode);
            this.length++;
            this.trimCache();

            this.lookup.set(key, newNode);
            this.reverseLookup.set(newNode, key);
        } else {
            // if it does - detach it, prepend it, update value on node
            this.detach(node);
            this.prepend(node);
            node.value = value;
        }
    }
    get(key: K): V | undefined {
        const node = this.lookup.get(key) as Node<V>;
        // check if node exist
        // if dont exist return undefined
        if (!node) return undefined;

        // if exist - detach it and append to the beginning
        this.detach(node);
        this.prepend(node);

        // return value of the node
        return node.value;
    }
    private detach(node: Node<V>): void {
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = this.head.next;
        }
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        // cleanUp
        node.next = undefined;
        node.prev = undefined;

        // this.length--;
    }
    private prepend(node: Node<V>): void {
        // this.length++;

        if (!this.head || this.length === 0) {
            this.head = this.tail = node;
            return;
        }

        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }
    private trimCache(): void {
        if (this.length <= this.capacity) return;

        // if we overload capacity:

        // we need to remove tail from linked list
        const tail = this.tail!;
        this.detach(this.tail!);

        // and then remove tail from lookup Map
        // to do that we need reverse lookup (that have nodes and keys reversed), so we can find key by knowing node;
        const key = this.reverseLookup.get(tail)!;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);

        this.length--;
    }
}
