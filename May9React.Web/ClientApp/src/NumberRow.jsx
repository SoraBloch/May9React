import React from 'react';

class NumberRow extends React.Component {


    
    render() {
        const { amount } = this.props.number;
        const { onNumberSelectClick, isSelected } = this.props;
        return (
            <tr>
                <td>{amount}</td>
                <td>
                    <button className={`btn ${isSelected ? 'btn-danger' : 'btn-success'}`} onClick={onNumberSelectClick}>
                        {isSelected ? 'Unselect' : 'Select'}
                    </button>
                </td>
            </tr>
        );
    }
};

export default NumberRow