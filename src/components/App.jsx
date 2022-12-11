import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { getCards } from '../fetchFoto';
import { ImageGallery } from "./imageGallery/ImageGallery";

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { query, page } = this.state;
    getCards(query, page).then()

  }
  render() {
    return <>
      <Searchbar onSubmit={this.handleFormSubmit}/>
      <ImageGallery images={this.state.images}/>
    </>
  }
}
