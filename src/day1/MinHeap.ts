export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
    private swap(idx1: number, idx2: number, arr: number[] = this.data): void {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) return;

        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const currentValue = this.data[idx];

        if (currentValue < parentValue) {
            this.swap(idx, parentIdx);
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number): void {
        const leftChildIdx = this.leftChild(idx);
        const rightChildIdx = this.rightChild(idx);

        if (idx >= this.length || leftChildIdx >= this.length) return;

        const currentValue = this.data[idx];
        const leftChildValue = this.data[leftChildIdx];
        const rightChildValue = this.data[rightChildIdx];

        if (leftChildValue < rightChildValue && leftChildValue < currentValue) {
            this.swap(idx, leftChildIdx);
            this.heapifyDown(leftChildIdx);
        } else if (
            rightChildValue < leftChildValue &&
            rightChildValue < currentValue
        ) {
            this.swap(idx, rightChildIdx);
            this.heapifyDown(rightChildIdx);
        }
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) return -1;

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data.pop()!;
        // this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        console.log(this.data.length, this.length)
        return out;
    }
}
