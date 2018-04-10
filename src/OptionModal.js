import React from 'react';
import Modal from 'react-modal';



export default class OptionModal extends React.Component {
    componentWillMount = () => {
        Modal.setAppElement('body');
    }
    render(){
        return(
        <Modal
            isOpen={!!this.props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={this.props.handleClearOption}>
            <h3>Selected Option</h3>
            <h2>{this.props.selectedOption}</h2>
            <button onClick={this.props.handleClearOption}>OK</button>
        </Modal>
        )
    }
   
}



