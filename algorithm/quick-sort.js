var quick = document.getElementById("quick");

function partition(list, left, right) {
    let low, high, temp, pivot;
    low = left;
    high = right + 1;
    pivot = list[left];

    do {
        do{
            low++
        }while(low <= right && list[low] < pivot);

        do {
            high--;
        } while(high >= left && list[high] > pivot);

        if(low < high) {
            temp = list[low];
            list[low] = list[high];
            list[high] = temp;
        }
    } while(low < high);

    temp = list[left];
    list[left] = list[high];
    list[high] = temp;

    return high;
}

function quickSort(list, left, right) {
    if(left < right) {
        let q = partition(list, left, right);
    
        quickSort(list, left, q-1);
        quickSort(list, q+1, right);
    }
}

quick.addEventListener('click',
function solution() {
    const list = [5, 3, 8, 4, 9, 1, 6, 2, 7];

    console.log('정렬 전,',list);
    quickSort(list, 0, list.length - 1);
    console.log('정렬 후,',list);
})
