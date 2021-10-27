// Select checkbox and show value based on checkbox selected.

import React, {Component} from 'react';

class Dashboard extends Component {
    state = {
        data: ['itemOne', 'itemTwo'],
        checked: 'itemOne'
    };
    handleChange = (item) => {
        this.setState({
            checked: item
        });
    };

    render() {
        const {checked, data} = this.state;
        return (
            <div>
                {
                    data.map(item => <input type="checkbox" checked={checked === item}
                                   onChange={() => this.handleChange(item)}/>)
                }
                <div>{checked}</div>
            </div>
        );
    }
}

export default Dashboard;