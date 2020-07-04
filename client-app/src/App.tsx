import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        values: []
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/values')
            .then((response) => {
                console.log(response);
                this.setState({
                    values: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <Header as='h2' icon>
                    <Icon name='users' />
                    Reactivities
                    <Header.Subheader>
                        Manage your account settings and set e-mail preferences.
                    </Header.Subheader>
                </Header>
                <List>
                    {this.state.values.map((value: any) => (
                        <List.Item key={value.id}>{value.name}</List.Item>
                    ))}
                </List>
            </div>
        );
    }

}

export default App;
