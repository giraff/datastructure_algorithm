function solution(dartResult) {
    
    let stages = Array.from({length: 3}, () => 0);
    let idx = 0, check = 0;
    
    while(check < dartResult.length) {
        if(parseInt(dartResult.charAt(check)) <= 9 && parseInt(dartResult.charAt(check)) >= 0 )         {
            stages[idx] = parseInt(dartResult.charAt(check));
            check++;
            if(dartResult.charAt(check) === '0') {
                check++;
                stages[idx] = 10;
            }
        }
        if(dartResult.charAt(check) === 'S' ||dartResult.charAt(check) === 'D' || dartResult.charAt(check) === 'T') {
            if(dartResult.charAt(check) === 'S') 
                stages[idx] = stages[idx]**1;
            else if(dartResult.charAt(check) === 'D') 
                stages[idx] = stages[idx]**2;
            else if(dartResult.charAt(check) === 'T') 
                stages[idx] = stages[idx]**3;
            check++;
            if(dartResult.charAt(check) !== '*' && dartResult.charAt(check) !== '#') idx++;
        }
        if(dartResult.charAt(check) === '*' || dartResult.charAt(check) === '#') {
            if(dartResult.charAt(check) === '*') {
                stages[idx] *= 2;
                if(idx > 0) stages[idx-1] *= 2; 
            } else if(dartResult.charAt(check) === '#') stages[idx] *= -1;
            check++;
            idx++;
        }
    }
    
    return stages.reduce((acc, cur) => acc + cur, 0);
}