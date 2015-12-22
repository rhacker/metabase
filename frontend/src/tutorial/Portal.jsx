import React, { Component, PropTypes } from "react";

import BodyComponent from "metabase/components/BodyComponent.jsx";

@BodyComponent
export default class Portal extends Component {
    static defaultProps = {
        padding: 10
    };

    getStyles(position) {
        const { padding } = this.props;
        return {
            position: "absolute",
            boxSizing: "content-box",
            border: "10000px solid rgba(0,0,0,0.70)",
            boxShadow: "inset 0px 0px 8px #509EE3",
            transform: "translate(-10000px, -10000px)",
            borderRadius: "10010px",
            pointerEvents: "none",
            transition: "all 0.5s ease-in-out",
            top: position.top - padding,
            left: position.left - padding,
            width: position.width + 2 * padding,
            height: position.height + 2 * padding
        };
    }

    render() {
        const { target, padding } = this.props;
        let position = target === true ?
            { top: -padding, left: -padding, width: 0, height: 0 } :
            target.getBoundingClientRect();
        return (
            <div style={this.getStyles(position)}/>
        );
    }
}
