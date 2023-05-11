import React from 'react';

class NumberRow extends React.Component {


    render() {
        const { amount } = this.props.number;
        const { onNumberSelectClick, isSelected, isLocked } = this.props;
        return (
            <tr>
                <td>{amount}</td>
                <td>
                    <button className={`btn ${isSelected ? 'btn-danger' : 'btn-success'}`} disabled={isLocked} onClick={onNumberSelectClick}>
                        {isSelected ? 'Remove from selected' : 'Add to selected'} 
                    </button>
                </td>
            </tr>
        );
    }
};

export default NumberRow