import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyBvDKe0QITTJqfcgVxD949vbeKf6wOzzOE";

// Create a new component. Component should produce HTML
const App = () => {
	return <div>
		<SearchBar />
	</div>;
}

// Insert the components in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));