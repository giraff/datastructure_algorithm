function solution(record) {
    var answer = [];
    let map = new Map();
    
    for(let i = 0; i < record.length; i++) {
        const [state, uid, name] = record[i].split(' ');
        
        if(state === 'Enter') {
            answer.push([uid, '님이 들어왔습니다.']);
        } else if (state === 'Leave') {
            answer.push([uid, '님이 나갔습니다.']);
            continue;
        }
        
        map.set(uid, name);
    }
    
    
    return answer.map(ele => map.get(ele[0]) + ele[1]);
}