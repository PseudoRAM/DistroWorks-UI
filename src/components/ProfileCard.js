import React from 'react';
import styled from 'styled-components';

const SaveBtn = styled.div`
  padding-top: 0 !important;
`;

class ProfileCard extends React.Component {
  constructor (props) {
    super(props);
    this.initials = `${props.fn[0]}${props.ln[0]}`;
  }
  render () {
    return (
      <div className='panel' style={{ marginTop: '20px' }}>
        <div className='panel-header text-center'>
          <figure
            className='avatar avatar-xl'
            data-initial={this.initials}
            style={{ backgroundColor: '#5755d9' }}
          />
          <div className='panel-title h5 mt-10'>
            {this.props.fn} {this.props.ln}
          </div>
          <div className='panel-subtitle'>{this.props.lastPos}</div>
        </div>
        <div className='panel-body'>
          <div className='tile tile-centered'>
            <div className='tile-content' style={{ marginBottom: '0.8rem' }}>
              <div className='tile-title text-bold'>E-mail</div>
              <div className='tile-subtitle'>{this.props.email}</div>
            </div>
            {this.props.editMode ? (
              <div className='tile-action'>
                <button
                  className='btn btn-link btn-action btn-lg tooltip tooltip-left'
                  data-tooltip='Edit E-mail'
                >
                  <i className='icon icon-edit' />
                </button>
              </div>
            ) : null}
          </div>
        </div>
        {this.props.editMode ? (
          <SaveBtn className='panel-footer'>
            <button className='btn btn-primary btn-block'>Save</button>
          </SaveBtn>
        ) : null}
      </div>
    );
  }
}

export default ProfileCard;
