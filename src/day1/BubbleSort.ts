export default function bubble_sort(arr: number[]): void {
    const swap = (arr: any[], index1: number, index2: number) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    for (let j = arr.length - 1; j >= 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) swap(arr, i, i + 1);
        }
    }
}
