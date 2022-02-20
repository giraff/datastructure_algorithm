function isPrime(n){
    if(n === 1) return false;
    if(n % 2 === 0) return n === 2 ? true : false;
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i === 0) return false;
    }
    return true;
}


const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); 
        // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; 
        // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); 
        // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]);
        //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results.map(elem => elem.join('')); // 결과 담긴 results return
}

function solution(numbers) {
    let numberSet = new Set();
    let count = 0;
    if(numbers.length === 1) {
        return isPrime(parseInt(numbers)) ? 1 : 0;
    }
    else {
        let splitArr = numbers.split('');
        for(let i = numbers.length ; i >= 2; i--) {
            let result = getCombinations(splitArr, i);
            result.forEach((elem) => numberSet.add(parseInt(elem)));
        }    
        splitArr.forEach(el => numberSet.add(parseInt(el)));
    }
    
    numberSet.forEach(elem => isPrime(elem) ? count++: null);
    
    return count;
}