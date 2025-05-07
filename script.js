
const PASSWORD = 'matias2025';
function checkPassword(){
    const inp=document.getElementById('pwd');
    if(inp.value===PASSWORD){
        document.getElementById('passwordModal').style.display='none';
        sessionStorage.setItem('osint_ok','1');
    }else{
        document.getElementById('error').style.display='block';
    }
}
window.onload=function(){
    if(sessionStorage.getItem('osint_ok')==='1'){
        document.getElementById('passwordModal').style.display='none';
    }
};
// Search filter
function filterLinks(){
    const term=document.getElementById('searchInput').value.toLowerCase();
    document.querySelectorAll('section.category li').forEach(li=>{
        const txt=li.textContent.toLowerCase();
        li.style.display= txt.includes(term) ? '' : 'none';
    });
}
