function excuseGnerator(){
    
    let who = ['The dog','My grandma','His turtle','My bird'];
    
    let action = ['ate','peed','crushed','broke'];
    
    let what = ['my homework', 'the keys', 'the car'];
    
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    
    let a = Math.floor(Math.random()*4);
    let b = Math.floor(Math.random()*4);
    let c = Math.floor(Math.random()*3);
    let d = Math.floor(Math.random()*5);
    
    return who[a] + " " + action[b] + " "+ what[c] + " " +when[d];  
}
document.write(excuseGnerator());
