import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { Component } from 'react';
import { ItemImg } from './ImageGalleryItem.styled';
import * as basicLightbox from 'basiclightbox';

export class ImageGalleryItem extends Component {
  state = {
    isModalState: false,
  };

  openModal = () => {
    this.setState({ isModalState: true });
  };

  onCloseModal = () => {
    this.setState({ isModalState: false });
    console.log('onCloseModal', this.state.isModalState);
  };

  render() {
    const { isModalState } = this.state;
    const {
      item: { id, webformatURL, largeImageURL, tags },
    } = this.props;

    console.log('state', this.state.isModalState);

    return (
      <li className="gallery-item" key={id} onClick={this.openModal}>
        <ItemImg src={webformatURL} alt={tags} />

        <ModalWindow
          isStateModal={isModalState}
          isClose={this.onCloseModal}
          src={largeImageURL}
          alt={tags}
        />
      </li>
    );
  }
}
