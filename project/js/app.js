let from = document.getElementById("from");
let to = document.getElementById("to");
let input = document.getElementById("input");
let result = document.getElementById("result");


function createOption(x,y,z){
    let opt = document.createElement("option");
    let text = document.createTextNode(y);
    opt.appendChild(text);
    opt.setAttribute("value" , toNumber(z) );
    x.appendChild(opt);
}

function toNumber(x){
   return Number( x.replace("," ,"") );
} //return ပြန်ကိုပြန်ပေးရမယ်



for(x in data.rates){
    createOption(from,x,data.rates[x]);
    createOption(to,x,data.rates[x]);
    // console.log(x);
}

document.getElementById("calc").addEventListener("submit" , function(e){
    // get state
    e.preventDefault();

    let x = input.value;
    let y = from.value;
    let z = to.value;
   
    
    

    //process
    let first = x * y;
    // console.log(first);

    let second = first/z;
    // console.log(second.toFixed(2));

    let fromText = x+ " " + from.options[from.selectedIndex].innerText;
    let toText = to.options[to.selectedIndex].innerText ;
    let Result = second.toFixed(2) +" "+ toText;
    let date = new Date().toLocaleString();

    let tableArr = [date , fromText , toText , Result ];
    createTable(tableArr);

    //set state
    result.innerHTML = Result;

    input.value = "";

});

let historyList = document.getElementById("historyList");

function createTable(x){
    let tr = document.createElement("tr");

   x.map(function(el){

        let td = document.createElement("td");
        let text = document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);

    });

    historyList.appendChild(tr);
   
}

function darkMode(){
    document.body.classList.toggle("dark-mode");
    document.getElementById("modeIcon").classList.toggle("fa-sun");
    document.getElementById("modeIcon").classList.toggle("aa");
}

// function test(){
//     console.log(from.options[from.selectedIndex].innerText)
// }




