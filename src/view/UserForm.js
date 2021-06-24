import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

export default props => {
    const [user, setUser] = useState(props.route.params ? props.route.params : {})

    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput 
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe seu nome"
                value={user.name}
                style={styles.input}
            />
            <Text>Email</Text>
            <TextInput 
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe seu email"
                value={user.email}
                style={styles.input}
            />
            <Text>URL do avatar</Text>
            <TextInput 
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do avatar"
                value={user.avatarUrl}
                style={styles.input}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    props.navigation.goBack()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }
})