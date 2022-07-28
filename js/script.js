const abrirModal = document.querySelector('#open-modal');
const fecharModal = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');
const fade = document.querySelector('#fade');

function esconderModal () {
    [modal, fade].forEach((e) => e.classList.toggle('hide'));
}

[abrirModal, fecharModal, fade].forEach((e) => {
    e.addEventListener('click', esconderModal);
})