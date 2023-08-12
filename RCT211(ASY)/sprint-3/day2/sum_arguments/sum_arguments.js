

function sum(...arg){
    if(arg.length===0){
        return "sum invoked without arguments"
    }
    else if(arg.length===1){
        return "sum needs atleast 2 arguments"
    }

    const sumValues=[...arg].reduce((a,c)=>a+c,0)

    return sumValues;
}

module.exports=sum;