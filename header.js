class Header extends React.Component {
    
    render() { 
        return  React.createElement('h1',{style : {margin : 0, padding : 30, fontFamily : 'monospace', fontSize : 30}},"Amazing World");
    }
}
 
ReactDOM.render(React.createElement(Header),document.getElementById('header'));