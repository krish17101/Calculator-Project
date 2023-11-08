let string = " ";
let butto = document.querySelectorAll('.button');
Array.from(butto).forEach((item)=>{
    item.addEventListener('click',(evt)=>{
      
      if(evt.target.innerHTML == '=') {
       string = eval(string);
       document.querySelector('input').value = string;
      }
      else if (evt.target.innerText == 'Reset'){
        string = "";
        document.querySelector('input').value = string;
      }
    
      else if (evt.target.innerHTML == 'DEL'){
        string = string.slice(0,-1);
        document.querySelector('input').value = string;
      }
        
      
      else {
           
           string = string + evt.target.innerHTML;
           document.querySelector('input').value = string;
        }
    })
})