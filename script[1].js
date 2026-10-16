const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(aberto));
  menuBtn.textContent = aberto ? '×' : '☰';
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});

const dialog = document.getElementById('ideaDialog');
const dialogText = document.getElementById('dialogText');

document.querySelectorAll('.details-btn').forEach(botao => {
  botao.addEventListener('click', () => {
    dialogText.textContent = botao.dataset.detail;
    dialog.showModal();
  });
});

document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', evento => {
  if (evento.target === dialog) dialog.close();
});

document.getElementById('contactForm').addEventListener('submit', evento => {
  evento.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  document.getElementById('formFeedback').textContent =
    `Obrigado, ${nome}! Sua mensagem foi registrada nesta demonstração.`;
  evento.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
