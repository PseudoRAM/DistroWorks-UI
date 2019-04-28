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

  getMonth (monthNum) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return months[monthNum];
  }

  loginUser (firstName, lastName, email, pic, id) {
    localStorage.setItem('fn', firstName);
    localStorage.setItem('ln', lastName);
    localStorage.setItem('id', id);
    localStorage.setItem('email', email);
    localStorage.setItem('pic', pic);
    localStorage.setItem('loggedIn', 't');
  }
  logoutUser () {
    localStorage.setItem('loggedIn', 'f');
    window.open('/', '_self');
  }

  getDetails (location) {
    return localStorage.getItem(location);
  }
}
