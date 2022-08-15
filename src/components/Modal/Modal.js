import React, { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';


class Modal extends Component {

    state = {};

      componentDidMount() {
    window.addEventListener('keydown', this.props.keyCloseModal)
      }
    
      componentWillUnmount() {
    window.removeEventListener('keydown', this.props.keyCloseModal);
      }

    render() {
        return (
         <div className={s.Overlay} onClick={this.props.toogleModal}>
             <div className={s.Modal}>
               <img className={s.ModalImage} src={this.props.children} alt="" width={900} height={ 600} />
           </div>
           </div>
        )
    }
}


Modal.propTypes = {
    toogleModal: PropTypes.func,
    children: PropTypes.node,
    keyCloseModal: PropTypes.func,
};
  

export default Modal;