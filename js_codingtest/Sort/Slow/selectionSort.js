console.log('Hi. this is selection sort, ASC');

const arr = [19, 20, 38, 17, 39, 21, 33, 33, 20, 20, -1];

console.log('target arr is...:', arr);

function selectionSort (array) {
    for(let last = array.length-1 ; last > 0 ; last--) {
        let maxidx = 0;
        for(let j = 1 ; j <= last ; j++) {
            if(array[maxidx] < array[j]) {
                maxidx = j;
            }
        }
        // exchange
        let tmp = array[last];
        array[last] = array[maxidx];
        array[maxidx] = tmp;
    }

    console.log('selection sort (ASC) 후 :', array)
}

function selectionSort_Desc (array) {
    for(let last = array.length - 1 ; last > 0 ; last--) {
        let minidx = 0;
        for(let j = 0 ; j <= last ; j++) {
            if(array[minidx] > array[j]) minidx = j;
        }
        // exchange
        let tmp = array[last];
        array[last] = array[minidx];
        array[minidx] = tmp;
    }

    console.log('selection sort (DESC) 후 :', array)
}

selectionSort(arr);
selectionSort_Desc(arr);
