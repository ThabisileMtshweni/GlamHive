function search_service() {
    const input = document.getElementById('searchbar');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('list');
    const li = ul.getElementsByTagName('li');

    if (filter) {
        ul.style.display = 'block';
        for (let i = 0; i < li.length; i++) {
            const textValue = li[i].textContent || li[i].innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    } else {
        ul.style.display = 'none';
    }
}

