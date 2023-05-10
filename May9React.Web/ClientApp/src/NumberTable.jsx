import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import NumberRow from './NumberRow';
import SelectedNumberRow from './SelectedNumberRow';

class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: [],
    }

    onAddClick = () => {
        const { numbers } = this.state;
        const number = {
            id: uuidv4(),
            amount: Math.floor(Math.random() * 100) + 1
        }
        const copy = [...numbers, number]
        this.setState({
            numbers: copy
        })
    }

    onNumberSelectClick = (n) => {

        const { selectedNumbers } = this.state;
        if (selectedNumbers.includes(n)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(num => num !== n) });

        }
        else {
            this.setState({ selectedNumbers: [...selectedNumbers, n] });
        }

    }


    onNumberLockClick = (sn) => {

        const { lockedNumbers } = this.state;
        if (lockedNumbers.includes(sn)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(num => num !== sn) });

        }
        else {
            this.setState({ lockedNumbers: [...lockedNumbers, sn] });
        }

    }

    render() {
        const { selectedNumbers, numbers, lockedNumbers } = this.state;
        return (
            <div className="app-container">
                <div className="d-flex flex-column  align-items-center">
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
                                        isLocked={lockedNumbers.includes(n)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {!!selectedNumbers.length && <> <h1>Selected Numbers</h1>
                        <div className="table-responsive">
                        <table className="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Add/Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedNumbers.map((sn) => (
                                    <SelectedNumberRow
                                        key={sn.id}
                                        number={sn}
                                        onNumberLockClick={() => this.onNumberLockClick(sn)}
                                        isLocked={lockedNumbers.includes(sn)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </>}

                </div>
            </div>
        );
    }
};

export default NumberTable;