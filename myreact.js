ReactDOM.render(
    <h1>Test page!</h1>,
    document.getElementById('content')
);


// lesson 03 start
class App extends React.Component {
    render() {
        return <h1> Lesson 3 - testing app class to render </h1>
    }
    }

    var mount = document.querySelector('#app');
    ReactDOM.render(<App />, mount);

// lesson 03 end