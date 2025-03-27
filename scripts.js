const toggle = document.createElement('button');
toggle.classList.add('absolute', 'top-5', 'right-5', 'bg-teal-400', 'text-white', 'p-2', 'rounded-full');
toggle.textContent = 'Toggle Mode';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
