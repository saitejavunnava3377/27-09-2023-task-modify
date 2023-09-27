function change1(){
    var a="apple";
    if(true){
        document.getElementById("l1").textContent=a;
    }
    a="bat";
    document.getElementById("l2").textContent=a;
    a="cat";
    document.getElementById("l3").textContent=a;
}
change1();

function change2(){
    var b="dog";
    if(true){
        document.getElementById("l4").textContent=b;
    }
    b="elephant";
    document.getElementById("l5").textContent=b;
   
}
change2();

function change3(){
    const c="frog"
    document.getElementById("l6").textContent=c;
}