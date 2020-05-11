import React from "react";

import {Button, Input} from 'reactstrap';
import styled from "styled-components";

const StyledAddForm = styled.div`
    display: flex;
    margin-top: 20px;
`

const StyledInput = styled(Input)`
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
`

const PostAddForm = ({onAdd}) => {
    return (
        <StyledAddForm>
            <StyledInput
                type="text"
                placeholder="О чем Вы думаете сейчас?"
            />
            <Button
                outline
                color="secondary"
                type="submit"
                onClick={() => onAdd('Hello')}>
                Добавить</Button>
        </StyledAddForm>
    )
}

export default PostAddForm;