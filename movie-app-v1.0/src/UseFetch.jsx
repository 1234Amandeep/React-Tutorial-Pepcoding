// Contains the code for the API implementation
// Could'nt implement it in class component cause its not getting rendered anywhere their was no way for me to invoke componentWillMount() method so I could'nt fetch and return data... I'm very curious learning about it

import React, { Component } from "react";

export default class UseFetch extends Component {
  constructor(url) {
    super(url);
    this.state = {
      data: null,
      isPending: true,
      error: null,
      url: url,
    };
  }

  // this will run after 1st computation of the instance call: UseFetch(url)
  componentDidMount() {
    // TODO: fetch data from argumented url
    console.log("inside UseFetch()'s componentDidMount()", this.state.url);
    // Change functions internal configurations(state) so that react can run its Reconcillation algo. to determine wheather to change actual dom or not
    setTimeout(() => {
      fetch(this.state.url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching movies data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({
            isPending: false,
            data: data,
            error: null,
          });
        })
        .catch((err) => {
          this.setState({
            isPending: false,
            error: err.message,
          });
        });
    }, [0]);
  }

  render() {
    this.componentDidMount();
    return {
      data: this.state.data,
      isPending: this.state.isPending,
      error: this.state.error,
    };
  }
}
