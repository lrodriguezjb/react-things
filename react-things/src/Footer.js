import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copyright: '© 2020 Leandro Rodriguez',
          };
    }

    render() {
        return (
            <>
           <h2>This is my placeholder text</h2>
           <p>{this.state.copyright}</p>
           </>
        )
    }
}
export default Footer;