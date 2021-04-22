import React from "react";
import ReactDOM from "react-dom";
import LoadingSpinner from "./LoadingSpinner";
import SeasonDisplay from "./SeasonDisplay";

// Functional component
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return (
//         <div>Latitude: </div>
//     );
// }

// Class based component
class App extends React.Component {
    // Constructor is good for one-time setup
    // State must be initialised when a component is created
    constructor(props) {
        super(props);

        // THE ONLY TIME DIRECT ASSIGNMENT TO this.state IS ALLOWED
        this.state = { lat: null, errorMessage: '' };
    }

    // Good for loading data; Constructor can also be used in a similar way
    // but it's best practice for all data loading, API calls, etc. to be
    // done here so that it's better organised.
    componentDidMount() {
        // Because the render() function is called constantly, it is best
        // to put things that take some time to process such as this
        // geolocation fetch in componentDidMount(), which is only called once.
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
        console.log("My component was rendered to the screen.")
    }

    // Good for more data loading when state/props change
    componentDidUpdate() {
        console.log("My component updated.");
    }

    // Good for cleanup (especially for non-React stuff)
    // componentWillUnmount() {

    // }

    // For class based components, render() MUST be defined, otherwise
    // there will be an error
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <LoadingSpinner spinnerMessage='Please accept the location request...'/>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));