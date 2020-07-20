//slice
let slicefunction=(arr,start,end)=>
{
    var result=[];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
        
    }
    return result;
}

let arr=["first place ","second place","third place","fourth place"];
console.log(slicefunction(arr,2,arr.length));
