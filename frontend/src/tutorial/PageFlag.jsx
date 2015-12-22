import React, { Component, PropTypes } from "react";

import BodyComponent from "metabase/components/BodyComponent.jsx";

import cx from "classnames";

@BodyComponent
export default class PageFlag extends Component {
    render() {
        if (!this.props.target) {
            return <span className="hide" />;
        }

        let position = this.props.target.getBoundingClientRect();
        let style = {
            position: "absolute",
            left: position.left + position.width,
            top: position.top + position.height / 2 - 12,
            transition: "all 0.5s ease-in-out"
        }

        return (
            <div className={cx("PageFlag", { "bounce-left": this.props.bounce })} style={style}>&nbsp;</div>
        );
    }
}
