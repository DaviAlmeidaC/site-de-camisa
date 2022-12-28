const botaoMenu = document.querySelector('.cabecalho__menu');//criação de uma variavel
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click',  () =>{//adicionando uma ação
        menu.classList.toggle('menu-lateral--ativo');
    })