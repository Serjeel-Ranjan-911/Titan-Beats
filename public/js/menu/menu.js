
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click",()=>{
        location.href = `desert/${box.id}`;
    });
})