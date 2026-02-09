
console.log(makeItalics(makeUpperCase(repeatString(removeSpaces(str)))));

const func=[str,removeSpaces,repeatString,makeUpperCase,makeItalics];

const res=func.reduce((prevAns,currFunc)=>{
    console.log(prevAns,currFunc)
    return currFunc(prevAns)
})
console.log(res)
const arr=[1,2,3,4,5,6];
arr.reduce((totalValue,currValue)=>{
    console.log(totalValue,currValue);
    return totalValue+currValue;
});