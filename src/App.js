import React, { Component }  from 'react';
import SearchBar from './components/Searchbar'
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Api from 'Services/Api';
import Button from 'components/Button';
import Modal from 'components/Modal';


class App extends Component {
  state = {
    queryString: '',
    currentPage: 1,
    images: [],
    loading: false,
    error: null,
    largeImage: '',
    showModal: false
  };

  
  componentDidUpdate(prevProps, prevState) {
    const { currentPage, queryString } = this.state;
    const options = { queryString, currentPage };
    
    if (this.state.currentPage !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      })
    };
    if (prevState.queryString !== this.state.queryString) {
          
      this.setState({ loading: true, images: []})
          
      Api(options)
            .then(images => this.setState({ images: images.hits }))
            .catch(error => this.setState({error}))
            .finally(() => this.setState({ loading: false }));
        
        }

    if (prevState.currentPage !== this.state.currentPage && this.state.currentPage!==1) {
      this.setState({ loading: true})
        Api(options)
          .then(images => {
            this.setState(prevState => ({
              images: [...prevState.images, ...images.hits],
              }));
              })
              .catch(error => this.setState({error}))
          .finally(() => this.setState({ loading: false }));
    }
    
  }
  

      
  handleLoadMore = () => {
      this.setState(prevState => ({
          currentPage: prevState.currentPage + 2,
      }));  
  } 

  handleKeyDowm = e => {
    if (e.code === 'Escape') {
  this.setState({ showModal: false });
    }
      }
  
  
  handleFormSubmit = (galleryItem) => {
    this.setState({
      currentPage: 1,
      queryString: galleryItem,
    });
      }
  
  getBigImage = (largeImage) => {
      this.toggleModal();
      this.setState({ largeImage });
        }
        
  toggleModal = () => {
      this.setState(state => ({
      showModal: !state.showModal
      }))
    }
  
  onClose = event => {
    if (event.currentTarget === event.target) {
      this.toggleModal();
    }
  }


  render() {
    const { loading, images, showModal } = this.state;
  
    return (
      
      <div>

        {showModal && <Modal toogleModal={this.onClose} keyCloseModal={this.handleKeyDowm }>{this.state.largeImage}</Modal>} 
        <SearchBar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}  
        {images &&  <ImageGallery images={images} bigImage={this.getBigImage} />}
        {!!images.length && (loading ? <Loader /> : <Button onClick={this.handleLoadMore} />)}
    
      </div>
    )
  };
}

export default App;
