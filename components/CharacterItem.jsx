import { Image, Text, View } from 'react-native';

export function CharacterItem() {
  return (
    <View style={{ width: '50%', padding: 10, borderRadius: 10 }}>
      <Image
        source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' }}
        style={{ width: '100%', aspectRatio: 4 / 4, height: undefined, borderRadius: 10 }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rick Sanchez</Text>
    </View>
  );
}
