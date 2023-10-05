console.log('Javascript file works');
const getData = async ()=>{
    await fetch("http://localhost:2023/getData")
        .then(request => request.json())
        .then(data => {
            console.log(data);
        });
}

document.querySelector('#getData').addEventListener('click', () => {
    console.log('click');
    getData();
});

