import React, {Component} from 'react';
import Moment from 'moment';

class Header extends Component {
    render() {
        let Indonesia = require('moment/locale/id');
        Moment.updateLocale('id', Indonesia);
        return (
            <div>
                <h3>Todo List</h3>
                <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
            </div>
        )
    }
}
export default Header;