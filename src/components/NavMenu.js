import React from 'react';
import styled from 'styled-components';
import logoLarge from './../img/icon_large.png';
import logoSmall from './../img/icon_small.png';
import Utils from './../Utils';
import axios from 'axios';
const utils = new Utils();

const Header = styled.header`
  background: #252525;
`;

const LogoLarge = styled.img`
  height: 55px;
  width: auto;
  padding-top: 3.5px;
  padding-left: 10px;

  @media (max-width: 750px) {
    display: none;
  }
`;

const LogoSmall = styled.img`
  height: 55px;
  width: auto;
  padding-top: 3.5px;
  padding-left: 10px;

  @media (min-width: 751px) {
    display: none;
  }
`;

const LoginBtn = styled.button`
  margin-right: 15px;
`;

const loginForm = () => {
  return `<form class='form-horizontal' action='#forms'>
      <div class='form-group'>
        <div class='col-3'>
          <label class='form-label' htmlFor='input-example-8'>
            Email
          </label>
        </div>
        <div class='col-9'>
          <input
            class='form-input'
            id='input-example-8'
            type='email'
            placeholder='Email'
            value=''
            pattern='[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
          />
        </div>
      </div>

      <div class='form-group'>
        <div class='col-3'>
          <label class='form-label' htmlFor='input-example-12'>
            Password
          </label>
        </div>
        <div class='col-9'>
          <input
            class='form-input'
            id='input-example-12'
            type='password'
            placeholder='Password'
          />
        </div>
      </div>
      <div class="form-group">
    <label class="form-checkbox is-error">
      <input type="checkbox">
      <i class="form-icon"></i> Remember me
    </label>
  </div>
    </form>`;
};

class NavMenu extends React.Component {
  constructor (props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
  }
  loginUser () {
    document.getElementById('modal-f-b1').classList.add('loading');
    axios
      .get('http://104.248.214.65:5001/healthcheck')
      .then(function (response) {
        // handle success
        if (response.data.status === 'success') {
          document.getElementById('modal-f-b1').classList.remove('loading');
          window.open('/profile');
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render () {
    return (
      <Header className='navbar'>
        <section className='navbar-section'>
          <a href='...' className='navbar-brand mr-2'>
            <LogoLarge src={logoLarge} alt='Logo' />
            <LogoSmall src={logoSmall} alt='Logo' />
          </a>
          <a href='...' className='btn btn-link text-gray'>
            Home
          </a>
          <a href='...' className='btn btn-link text-gray'>
            About
          </a>
        </section>
        <section className='navbar-section'>
          {utils.checkLogin() ? (
            <LoginBtn
              className='btn btn-primary'
              onClick={() => {
                utils.openModal('Login', loginForm(), 'Login', this.loginUser);
              }}
            >
              Login
            </LoginBtn>
          ) : (
            ''
          )}
        </section>
      </Header>
    );
  }
}

export default NavMenu;
