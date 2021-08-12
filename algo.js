const arr = [51,22,33,44,16,24,73,234,75,234,32,234,253,37,54,3243];
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

mergeSort(arr, 0, arr.length - 1);

// 출력
console.log(arr.join("\n"));