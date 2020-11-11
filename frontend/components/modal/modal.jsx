import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import FilmShow from '../film/film_show'


function Modal({ modal, closeModal, films }) {
    if (!modal) {
        return null;
    }

    const selectedFilm = films[modal]
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
               <FilmShow 
                props = {selectedFilm}
                closeModal = {closeModal}
               />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
        films: state.entities.films 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
