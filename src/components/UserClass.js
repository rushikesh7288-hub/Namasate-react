import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log( this.props.name + "Child constructor")

    // console.log(props);
    this.state = {
      count: 0,
      count1: 1,
      userInfo: {
        name: "dummy",
        company: "dummy",
        location: "dummy",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name +"child componentDidAmount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
    this.timer = setInterval(() => {
      console.log(" Class Comp Naasate React OP");
    }, 1000);
    // console.log(" class comp useEffect");
  }
  componentDidUpdate() {
    // console.log("Parent componentDidAmount");
  }
  componentWillUnmount() {
    // console.log("Parent componentDidAmount");
    clearInterval(this.timer)
    console.log(" class comp useEffect");
  }

  render() {
    // console.log(this.props.name +"Child render")
    console.log(" class comp render");
    const { name, company, location } = this.state.userInfo;
    const { count, count1 } = this.state;
    return (
      <div className="card m-4 p-4 rounded-lg bg-gray-100 border border-solid border-black">
        <h1>count:-{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Incerase
        </button>
        <h1>count1:-{count1}</h1>
        <h2>Name:- {name}</h2>
        <h3>City:- {company}</h3>
        <h3>Contact:- {location}</h3>
      </div>
    );
  }
}
export default UserClass;
