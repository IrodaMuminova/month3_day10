
function func (e){
    // e.preventDefault();
    let a=e.target.value;
    a=a.trimRight(' ');
    a=a.trimLeft(' ');
    let b=a.split(" ");

    let c=b.length;
    if(e.target.value==''){
        c=0;
    }
    console.log(c);
}
