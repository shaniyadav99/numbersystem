const number=[19,23,4,16,28,13,31,8,29,14,6,35,2,11,17,5,9,27,12,30];
const arr=[];
for(let i=0;i<number.length;i++)
{
    let f=0;
    for(let j=1;j<=number[i];j++)
    {
        if(number[i]%j===0)
        {
            f++;
        }
    }
    if(f===2)
    {
        arr[i]=number[i];
    }
}
let max=Number.MIN_SAFE_INTEGER,min=Number.MAX_SAFE_INTEGER;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
    else if(arr[i]<min){
        min=arr[i];
    }
}
console.log("Maximum number in prime array",max,"Minimum number in prime array",min);
let sum=max+min;
console.log("Sum of max and min",sum);