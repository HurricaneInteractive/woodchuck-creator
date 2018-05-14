window.onload = () => {
    let form: any = document.getElementById('gen');
    let targets: any = document.querySelectorAll('h1 strong');

    form.onsubmit = (e: any) => {
        e.preventDefault();
        let inputs = form.querySelectorAll('input');
        let data: any = {};
        
        inputs.forEach((input: any) => {
            data[input.getAttribute('id')] = input.value.toLowerCase();
            input.value = '';
        });

        targets.forEach((target: any) => {
            target.innerText = data[target.dataset.type];
        });
    }
}