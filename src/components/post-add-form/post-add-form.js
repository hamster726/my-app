import React, {Component} from "react";

import {Button, Input} from 'reactstrap';
import styled from "styled-components";

const StyledAddForm = styled.form`
    display: flex;
    margin-top: 20px;
`

const StyledInput = styled(Input)`
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
`

export default class PostAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange (e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault();

        if (this.state.text.trim() !== '') {
            this.props.onAdd(this.state.text)
            this.setState({
                text : ''
            })
        }
        if (this.state.text === 'Hamster726'){
            alert('Красунчик');
        }
    }

    render() {

        return (
            <StyledAddForm onSubmit={this.onSubmit}>
                <StyledInput
                    type="text"
                    placeholder="О чем Вы думаете сейчас?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    outline
                    color="secondary"
                    type="submit"
                    >
                    Добавить
                </Button>
            </StyledAddForm>
        )
    }
}

