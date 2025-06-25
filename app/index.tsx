import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/codemagic-logo-blue.png.webp');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meet CodePush by:</Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
    imageContainer: {
    flex: 1,
    //resizeMode: "cover"
  },
  image: {
    width: 460,
    height: 85,
    //borderRadius: 18,
  },
});