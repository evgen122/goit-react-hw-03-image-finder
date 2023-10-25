import { Component } from 'react';
import { ItemImg } from './ImageGalleryItem.styled';
// import * as basicLightbox from 'basiclightbox';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
// import Modal from 'react-modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalState: false,
  };

  // componentDidUpdate(prevState) {
  //   if (prevState.isModalState !== this.state.isModalState) {
  //     this.onCloseModal();
  //   }
  // }

  stateСhangeModal = () => {
    if (this.state.isModalState === true) {
      this.setState({ isModalState: false });
    } else {
      this.setState({ isModalState: true });
    }
    // this.setState({ isModalState: true });
  };

  // onCloseModal = () => {
  //   this.setState({ isModalState: false });
  // };

  render() {
    const { isModalState } = this.state;

    const {
      item: { id, webformatURL, largeImageURL, tags },
    } = this.props;

    console.log('state', isModalState);

    // Modal.setAppElement('#root');

    // const customStyles = {
    //   overlay: {
    //     backgroundColor: '#4e4a48',
    //     visibility: 'visible',
    //     visibility: 'hidden',
    //   },
    //   content: {
    //     top: '50%',
    //     left: '50%',
    //     right: 'auto',
    //     bottom: 'auto',
    //     marginRight: '-50%',
    //     transform: 'translate(-50%, -50%)',
    //   },
    // };

    return (
      <li className="gallery-item" key={id} onClick={this.stateСhangeModal}>
        <ItemImg src={webformatURL} alt={tags} />

        <ModalWindow
          stateСhangeModal={this.stateСhangeModal}
          isModalState={isModalState}
          // isClose={this.onCloseModal}
          src={largeImageURL}
          alt={tags}
        />

        {/* <Modal
          onClick={isClose}
          isOpen={isModalState}
          onRequestClose={this.openModal}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="onRequestClose"
        >
          <img src={largeImageURL} alt={tags} width="800" />

          <button onClick={this.onCloseModal}>Close</button>
        </Modal> */}
      </li>
    );
  }
}
