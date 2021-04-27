console.log('Hi, this is Bubbleb Sort, ASC')

const arr2 = [19,20, 38,17,39,21,33,33,20,20,-1];

console.log('target arr is...:',arr2);

console.log(arr2.length);
function bubbleSort(array) {
    for(let i = array.length - 1 ; i > 0 ; i--) {
        for(let j = 0 ; j < i ; j++) {
            if(array[j] > array[j+1]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }
    console.log('bubble Sort 후 :',array);
}

bubbleSort(arr2);
