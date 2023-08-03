import React from "react";

// export default function UserCard({ name, age, phoneNumber, address }) {
//   return (
// <div class="card">
//   <h2 class="name">{name}</h2>
//   <div class="body">
//     <div class="label">Age:</div>
//     <div>{age}</div>
//     <div class="label">Phone:</div>
//     <div>{phoneNumber}</div>
//     <div class="label">Address:</div>
//     <div>{address}</div>
//   </div>
// </div>
//   );
// }

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card">
        <h2 class="name">{this.props.name}</h2>
        <div class="body">
          <div class="label">Age:</div>
          <div>{this.props.age}</div>
          <div class="label">Phone:</div>
          <div>{this.props.phoneNumber}</div>
          <div class="label">Address:</div>
          <div>{this.props.address}</div>
        </div>
      </div>
    );
  }
}
