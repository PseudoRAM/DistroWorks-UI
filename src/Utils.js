export default class Utils {
  openModal (title, content, footerAction, footerFunction) {
    document.getElementById('modal-t').innerHTML = title;
    document.getElementById('modal-c').innerHTML = content;
    document.getElementById('modal-f-b1').innerHTML = footerAction;
    document.getElementById('jobtrust-modal').classList.add('active');
    document
      .getElementById('modal-close-btn-1')
      .addEventListener('click', this.closeModal);
    document
      .getElementById('modal-close-btn-2')
      .addEventListener('click', this.closeModal);
    document
      .getElementById('modal-close-btn-3')
      .addEventListener('click', this.closeModal);
    document
      .getElementById('modal-f-b1')
      .addEventListener('click', footerFunction);
  }

  closeModal () {
    document.getElementById('jobtrust-modal').classList.remove('active');
  }

  checkLogin () {
    return !(localStorage.getItem('loggedIn') === 't');
  }
}
