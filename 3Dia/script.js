const inputs = [].slice.call(document.querySelectorAll('.controls input'));

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
    const suffix = (this.id === 'base' ? '' : 'px');
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}
