import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HtmlComment extends Component {


    componentDidMount() {
        let el = ReactDOM.findDOMNode(this);
        ReactDOM.unmountComponentAtNode(el);
        el.outerHTML = this.createComment();
    }

    createComment() {
        let text = this.props.text;
        return `<!-- ${text} -->`;
    }

    render() {
        return <div />;
    }
}

export default HtmlComment;