var bubble = document.getElementById("bubble");
bubble.addEventListener('click',
function solution() {
    const list = [5, 3, 8, 4, 9, 1, 6, 2, 7];
 
    console.log('정렬 전', list);
    // bubble Sort
    for(let i=0; i < list.length - 1; i++) {
        for(let j = 0; j < list.length - i - 1; j++) {
            if(list[j] > list[j+1]) {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    console.log('정렬 후', list);
    return 0;
})


