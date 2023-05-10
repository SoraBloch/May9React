import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        number: {
            id: uuidv4(),
            amount: Math.floor(Math.random() * 100) + 1
        }
    }

    onAddClick = () => {
        const { numbers } = this.state;
        const { id, amount } = this.state.number;
        const copy = [...numbers, { id, amount }]
        this.setState({
            numbers: copy,
            number: {
                id: uuidv4(),
                amount: Math.floor(Math.random() * 100) + 1
            }
        })
    }

    onNumberSelectClick = (n) => {
        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n.id)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(id => id !== n.id) });
        }
        else {
            this.setState({ selectedNumbers: [...selectedNumbers, n.id] });
        }

    }

    render() {
        const { selectedNumbers, numbers } = this.state;
        return (
            <div className="app-container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button onClick={this.onAddClick} className="btn btn-primary mb-3">Add</button>
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Add/Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {numbers.map((n) => (
                                    <NumberRow
                                        key={n.id}
                                        number={n}
                                        onNumberSelectClick={() => this.onNumberSelectClick(n)}
                                        isSelected={selectedNumbers.includes(n)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
};

export default NumberTable;