var insertion = document.getElementById("insertion");
insertion.addEventListener('click',
function solution() {
    const list = [5, 3, 8, 4, 9, 1, 6, 2, 7];
 
    console.log('정렬 전', list);
    // insertion Sort
    let i, j, key;
    for(i = 1; i < list.length; i++) {
        key = list[i];
        for(j = i-1; j >= 0 && list[j] > key; j--) {
            list[j + 1] = list[j];
        }
        list[j+1] = key;
    }
    console.log('정렬 후', list);
    return 0;
})
