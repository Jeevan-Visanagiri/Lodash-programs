//even and odd number using remove function

let evennumber=(arr)=>
{
    return _.remove(arr,(n)=>
    {
        return n%2==0;
    });
}
let oddnumber=(arr)=>
{
    return _.remove(arr,(n)=>
    {
        return n%2!=0;
    });
}
let arr=[10,22,55,78,96,3,1,5,6,4,8,9,3,4,78,99,100,63];
console.log("Even numbers in array is "+evennumber(arr));
console.log("Odd Numbers in array "+oddnumber(arr));