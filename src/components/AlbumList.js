import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
        console.log(response);
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <View>
        <Text>album list</Text>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
