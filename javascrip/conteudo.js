function validaBusca(){
    if(document.querySelector('#inputlupa').value == ''){
        alert('Campo vazio');
        return false;
    }
}
document.querySelector('#form-busca').onsubmit = validaBusca;