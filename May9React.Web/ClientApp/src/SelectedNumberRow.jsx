import React from 'react';


class SelectedNumberRow extends React.Component {

    render() {
        const { amount } = this.props.number;
        const { onNumberLockClick, isLocked } = this.props;
        return (
            <tr>
                <td>{amount}</td>
                <td>
                    <button className={`btn ${isLocked ? 'btn-danger' : 'btn-success'}`} onClick={onNumberLockClick}>
                        {isLocked ? 'Unlock' : 'Lock'}
                    </button>
                </td>
            </tr>
        );
    }
};

export default SelectedNumberRow