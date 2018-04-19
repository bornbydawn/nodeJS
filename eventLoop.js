const slowAdd = (a,b) => {

setTimeout(() => {
for(var i = 0; i < 1000000000 ; i ++){}
console.log(a+b);
}, 0);
};

slowAdd(3,3);
slowAdd(4,4);

console.log("printed even before the slowadd calls finished");
