// Contains the code for the API implementation
// Could'nt implement it in class component cause its not getting rendered anywhere their was no way for me to invoke componentWillMount() method so I could'nt fetch and return data... I'm very curious learning about it

import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error fetching movies data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.results);

        setData(data.results);
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [url]);

  return [data, isPending, error];
};
export default useFetch;
// export default class UseFetch extends Component {
//   constructor(url) {
//     super(url);
//     this.state = {
//       data: null,
//       isPending: true,
//       error: null,
//     };
//   }

// getData() {
//   console.log(this.state.currPage);
//   // asking for UseFetch fn to get me data from the api by perfoming some asynchronous task

//   fetch(this.props.url)
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("Error fetching movies data");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.results);
//       this.setState({
//         isPending: false,
//         data: data.results,
//         error: null,
//       });
//     })
//     .catch((err) => {
//       this.setState({
//         isPending: false,
//         error: err.message,
//       });
//     });

//   // setting internal configurations of the app so that react can run its reconcillation algo to determine wheather to change the actual dom or not
// }

//   // this will run after 1st computation of the instance call: UseFetch(url)
//   componentDidMount() {
//     // TODO: fetch data from argumented url
//     console.log("inside UseFetch()'s componentDidMount()", this.props.url);
//     // Change functions internal configurations(state) so that react can run its Reconcillation algo. to determine wheather to change actual dom or not
//     this.getData();
//   }

//   render() {
//     return {
//       data: this.state.data,
//       isPending: this.state.isPending,
//       error: this.state.error,
//     };
//   }
// }
