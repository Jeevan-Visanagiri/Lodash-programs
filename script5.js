//even and odd number using remove function

let evennumber=(arr)=>
{
    var a=[];
    arr.forEach(element => {
        if(element%2==0)
            a.push(element);
    });
    return a;
}
let arr=[10,22,55,78,96,3,1,5,6,4,8,9,3,4,78,99,100,63];
console.log("Even numbers in array is "+evennumber(arr));
