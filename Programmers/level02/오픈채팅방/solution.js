let result = [];

function makeArr() {
    let res = [];
    result.map((val) => {
        val.type === "Enter" ?
        res.push(`${val.nickname}님이 들어왔습니다.`) :
        res.push(`${val.nickname}님이 나갔습니다.`)
    })
    
    return res;
}

function leave(uid) {
    let idx = 0;
    while(idx < result.length) {
        if(result[idx].uid === uid) {
            result.push({
                uid: `${uid}`,
                type: 'Leave',
                nickname: `${result[idx].nickname}`        
            })
            break;
        }
        idx++;
    }
}

function change(uid, nickname) {
    result.forEach((val) => {
        if(val.uid === uid) {
            val.nickname = `${nickname}`
        }
    })
}

function enter(uid, nickname) {
    result.forEach(val => {
        if(val.uid === uid) {
            val.nickname = `${nickname}`
        }
    })
    result.push({
        uid: `${uid}`,
        type: 'Enter',
        nickname: `${nickname}`
    })
}

function solution(record) {
    var answer = [];
    record.forEach((rec, idx) => {
        const words = rec.split(' ');
        if(words[0] === "Enter"){
            enter(words[1], words[2]);
        } else if(words[0] === "Leave") {
            leave(words[1]);
        } else if(words [0] === "Change") {
            change(words[1], words[2]);
        }
    })
    
    return makeArr();
}