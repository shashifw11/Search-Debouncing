 
let display_div = document.getElementById("display");  
  
 const searchData = async ()=>{
    try{
        let name = document.getElementById("query").value ;  
           //name = "avengers"; 
           let response = await fetch(`http://localhost:8080/data?q=${name}`) ;  
           let data = await response.json() ;  
                    
                  return data ; 
                    
               
            }  catch (err){
                console.log("err", err); 
            }
 }
  
   
 async function getData(){
                  
    display_div.innerHTML = null ; 

   let search_data = await searchData() ;   
     
    if(search_data === undefined){
        return false ; 
    }  
    console.log(search_data);         
    
    search_data.forEach(function(item){
    
       let p = document.createElement("p") ; 

     p.innerText = item.name ;
      

     display_div.append(p) ; 

  })
}    

 const Debounce = (fn,d) =>{
    let timer ; 
       return function (){
         let context= this ; 
           args = arguments ; 
        clearTimeout(timer) ; 
            timer =   setTimeout(()=>{
                getData.apply(context,arguments);
              } , d)
       }
 }
 
 
 
 const SerachBar = Debounce(getData,300)