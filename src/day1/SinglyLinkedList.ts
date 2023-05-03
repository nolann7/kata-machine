type Node<T> = {value:T, next: Node<T>}
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    

    constructor() {
      this.head = this.tail = undefined;
      this.length = 0;
    }

    prepend(item: T): void {
      const node = {value:item} as Node<T>;
      this.length++

      if (this.length === 0) {
        this.head = node;
        this.tail = node;
        return;
      }

      const prevHead = this.head!;
      this.head = node;
      this.head.next = prevHead;
      
}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {
      const node = {value:item} as Node<T>;
      this.length++

      if (this.length === 0) {
        this.head = node;
        this.tail = node;
        return;
      }

      const prevTail = this.tail!;
      prevTail.next = node;
      this.tail = node;
}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {
      
}
}