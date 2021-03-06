import React, { Component, PropTypes } from 'react';

export default class ActivityStory extends Component {
    constructor(props, context) {
        super(props, context);

        this.styles = {
            borderWidth: '2px',
            borderColor: '#DFE8EA',
        }
    }

    static propTypes = {
        story: PropTypes.object.isRequired
    }

    render() {
        const { story } = this.props;

        if (!story.body) {
            return null;
        }

        return (
            <div className="mt1 border-left flex mr2" style={{borderWidth: '3px', marginLeft: '22px', borderColor: '#F2F5F6'}}>
                <div className="flex full ml4 bordered rounded p2" style={this.styles}>
                    { story.bodyLink ?
                        <a className="link" href={story.bodyLink}>{story.body}</a>
                    :
                        <span>{story.body}</span>
                    }
                </div>
            </div>
        )
    }
}
