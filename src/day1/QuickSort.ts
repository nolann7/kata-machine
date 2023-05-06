function qs(arr: number[], lo: number, hi: number) {
    if (lo >= hi) return;

    const pivotIndex = weekSort(arr, lo, hi);

    qs(arr, lo, pivotIndex - 1);
    qs(arr, pivotIndex + 1, hi);
}

function swap(arr: number[], index1: number, index2: number) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function weekSort(arr: number[], lo: number, hi: number): number {
    let pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi ; i++) {
        if (arr[i] <= pivot) {
            idx++;
            swap(arr, idx, i);
        }
    }
    idx++;
    swap(arr, idx, hi);

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
