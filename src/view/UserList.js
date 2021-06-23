import React from 'react'
import { Alert, View, FlatList } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import users from '../data/Users'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider onPress={() => props.navigation.navigate('UserForm', user)}>
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="grey" />}
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </ListItem>
        )
    }

    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete ' + user.name)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}