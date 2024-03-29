var mergeDOM = document.getElementById("merge");

const sorted = [];

function merge(a, left, middle, right) {
    let i,j,k,t;
    i = left;
    j = middle + 1;
    k = left;
	while(i <= middle && j <= right) {
		if(a[i] <= a[j]) {
			sorted[k++] = a[i++];
        }
        else {
            sorted[k++] = a[j++];
        }
    }

    if(i > middle) {
		for(t = j; t <= right; t++) {
			sorted[k++] = a[t];
		}
	}
	else {
		for(t = i; t <= middle ; t++) {
			sorted[k++] = a[t];
		}
	}
	for(t = left; t <= right; t++) {
		a[t] = sorted[t];
	}
}

function mergeSort(a, left, right){
	if(left < right) {
        let middle = Math.floor((left + right) / 2);
        mergeSort(a, left, middle); 
        mergeSort(a, middle + 1, right);
        merge(a, left, middle, right);
	}
}


mergeDOM.addEventListener('click',
function solution() {
    const list = [5, 2, 3, 4, 1];
    console.log(list);
    mergeSort(list, 0, list.length - 1);
    console.log(list);
    return 0;
})

