
import React, { Component } from 'react';

class AllLink extends Component {
    render() {
        return (
            <li>
                <a class="list-unstyled" href = {this.props.linkUrl}>
                    {this.props.linkName}
                </a>
            </li>
        );
    }
}

export default AllLink;
