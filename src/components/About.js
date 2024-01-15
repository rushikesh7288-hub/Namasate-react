import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div className="container">
//       <h1>About Us Page</h1>
//       <User
//         name={"Rushikesh Jadhav (Function Base Component)"}
//         city={"Sambhaji Nagar (Function Base Component)"}
//         contact={"9604728888 (Function Base Component)"}
//       />
//       <UserClass
//         name={"Kamlesh Jadhav (Class Base Component)"}
//         city={"Pune (Class Base Component)"}
//         contact={"9604728888 (Class Base Component)"}
//       />
//     </div>
//   );
// };

// export default About;


class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidAmount");
  }
  componentDidUpdate() {
    // console.log("Parent componentDidAmount");
  }
  componentWillUnmount() {
    // console.log("Parent componentDidAmount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div className="container">
        <h1>About Us Page</h1>
        <User
          name={"Rushikesh Jadhav (Function Base Component)"}
          city={"Sambhaji Nagar (Function Base Component)"}
          contact={"9604728888 (Function Base Component)"}
        />
        <div className="flex"></div>
        <div>
          <label className="flex">
            User Name :- <UserContext.Consumer> 
              {({loggedInUser} )=> <h3>{loggedInUser}</h3>}
            </UserContext.Consumer>
          </label>
        </div>
        <UserClass
        // name={"Kamlesh Jadhav (Class Base Component)"}
        // city={"Pune (Class Base Component)"}
        // contact={"9604728888 (Class Base Component)"}
        />
      </div>
    );
  }
}
export default About;
