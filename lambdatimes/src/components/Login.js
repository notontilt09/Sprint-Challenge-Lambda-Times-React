import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TopBar from '../components/TopBar'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            modal: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    login = () => {
        console.log('hi');
    }

    render() {
        return (
            <React.Fragment>
                <TopBar handleLogin={this.handleLogin} toggle={this.toggle}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <input 
                            type="text" 
                            placeholder="username"
                            name="username"
                            required
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleLogin}>Login</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>

        )
    }
}

export default Login;