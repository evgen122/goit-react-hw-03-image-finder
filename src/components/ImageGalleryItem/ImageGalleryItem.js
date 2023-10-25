import { Component } from 'react';
import { ItemImg } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export class ImageGalleryItem extends Component {
  state = {
    isModalState: false,
  };

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
      </li>
    );
  }
}
