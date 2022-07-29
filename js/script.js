'strict mode'

const script = (() => {
    const abrirModal = document.querySelector('#open-modal');
    const fecharModal = document.querySelector('#close-modal');
    const modal = document.querySelector('#modal');
    const fade = document.querySelector('#fade');

    function esconderModal() {
        [modal, fade].forEach((e) => e.classList.toggle('hide'));
    }

    function events() {
        [abrirModal, fecharModal, fade].forEach((e) => {
            e.addEventListener('click', esconderModal);
        });
    }

    function init() {
        events();
    }

    return {
        init
    };
})();

script.init();