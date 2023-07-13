import { StyleSheet, Text, View, Image } from 'react-native'

export function Card({ name, image }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.text} numberOfLines={1}>
        {name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
    elevation: 10,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: undefined,
    aspectRatio: 4 / 4,
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
})

export default Card
