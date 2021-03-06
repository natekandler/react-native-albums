import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { thumbnail_image, title, artist, image, url } = album;
  const { 
    thumbnailStyle, 
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    albumImageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{ uri: thumbnail_image }} 
            style={thumbnailStyle} 
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>
            {title}
          </Text>
          <Text>
            {artist}
          </Text>
        </View>
      </CardSection>
      <CardSection>
      <Image 
        source={{ uri: image }} 
        style={albumImageStyle}  
      />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
         Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }, 
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
