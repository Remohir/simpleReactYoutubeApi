import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail"

const API_KEY = "AIzaSyBvDKe0QITTJqfcgVxD949vbeKf6wOzzOE";

// Create a new component. Component should produce HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch("Nadie sabe nada");
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return <div>
			<SearchBar />
			<VideoDetail video={this.state.videos[0]}/>
			<VideoList videos={ this.state.videos } />
		</div>;
	}
}

// Insert the components in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));