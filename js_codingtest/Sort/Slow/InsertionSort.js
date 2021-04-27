console.log('Hi, THis is Insertion sort, ASC');

const arr3 = [3,2,1,7,6];

console.log('target arr is... :',arr3);
console.log(arr3.length);

let len = arr3.length;

function InsertionSort(arr) {
    for(let idx = 1 ; idx < len ; idx++) {
        let start = idx;
        let tmp = arr[start];
        while(start > 0) {
            if(arr[start-1] > tmp) {
                arr[start] = arr[start-1];
                arr[start-1] = tmp;
                start--;
            } else break;
        }
    }

    console.log('InsertSort 후 : ',arr);
}
console.time("InsertionSort");
InsertionSort(arr3);
console.timeEnd("InsertionSort");
