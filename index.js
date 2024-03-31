function superbowlWin(record){
    let winRecord = record.find(element => element.result === 'W')
    if (winRecord) {
        return winRecord.year;
    }
    else {
        return undefined;
    }
}
const theWinningYear = superbowlWin(record)
console.log(theWinningYear)