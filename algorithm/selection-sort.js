var selection = document.getElementById("selection");
selection.addEventListener('click',
function solution() {
    const list = [5, 3, 8, 4, 9, 1, 6, 2, 7];
 
    console.log('정렬 전', list);
    // selection Sort
    for(let i=0; i < list.length; i++) {
        let min = i;
        for(let j = i + 1; j < list.length; j++) {
            if(list[min] > list[j]) {
                min = j;
            }
        }
        // min 최소 값을 가리키는 인덱스
        let temp = list[min];
        list[min] = list[i];
        list[i] = temp;
    }
    console.log('정렬 후', list);
    return 0;
})
