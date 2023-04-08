import React, {Component} from 'react';
import './index.scss';

type Props = { message?: string }

class Title extends Component<Props> {
    render() {
        return (
            <div>
                <h1 className={'Title'}>{this.props.message}</h1>
            </div>
        );
    }
}

export default Title;