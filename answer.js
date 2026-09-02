//question1

describeValue = (value)=>{
    let val1 = typeof value;
    let val2 = value? "truthy" : "falsy";
    return `${val1} | ${val2}`;
}