import React from 'react';
import styled from 'styled-components';

const StyledEvent = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  color: white; /* Text color */
  background-color: ${props => props.color}; /* Set the background color based on props.color */
`;

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <StyledEvent color={props.color}>
                <h5>{props.event}</h5>
                <h6>{props.location}</h6>
            </StyledEvent>
        </td>
    )
}

export default Event;
