const sortFilterBarHide = document.getElementById('sortFilterBarHide');
const sortFilterOpen = document.getElementById('sortFilterOpen');
const sortFilterClose = document.getElementById('sortFilterClose');

//Sort & Filter bar open close handler
sortFilterOpen.addEventListener('click', () => { 
    sortFilterBar.classList.toggle('-translate-x-full');
    sortFilterBar.classList.add('translate-x-0');
})

sortFilterClose.addEventListener('click', () => {
    sortFilterBar.classList.remove('translate-x-0');
    sortFilterBar.classList.toggle('-translate-x-full');
})