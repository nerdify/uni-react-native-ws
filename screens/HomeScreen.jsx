import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, TextInput } from 'react-native'

import Card from '../components/Card'

async function getAllCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  return data.results
}

export function HomeScreen() {
  const [filter, setFilter] = useState('')
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])

  useEffect(() => {
    getAllCharacters().then((data) => setCharacters(data))
  }, [])

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((character) => {
        return character.name.toLowerCase().includes(filter.toLowerCase())
      })
    )
  }, [filter])

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0000ff" barStyle="light-content" />
      <Text style={styles.headerText}>Rick & Morty Wiki</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar"
        onChangeText={(text) => setFilter(text)}
      />
      <FlatList
        numColumns={2}
        ListEmptyComponent={<Text>No hay datos</Text>}
        data={filteredCharacters}
        renderItem={({ item }) => <Card image={item.image} name={item.name} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default HomeScreen
