let title = document.querySelector('.title')
document.querySelectorAll('td').forEach(function(e){
    console.log(e);
    e.addEventListener('click', () => {
        let item = e.innerText
        if(item === 'AC') {
            title.textContent = '';
        } else  if(item === '=') {
           title.textContent = eval(title.textContent);
        } else{
            title.textContent += item
        }
       
    })
})