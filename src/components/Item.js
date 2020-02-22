import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="avatar__container mt-3">
        <div>
       
          <img src={this.props.character.image} alt="" className="avatar" />
         
        </div>
       
        <div className="avatar__name">{this.props.character.name}</div>
        <div className="description">
                  <label>Status: <span>{this.props.character.status}</span></label>
                  <label>Species: <span>{this.props.character.species}</span></label>
                  <label>Gender: <span>{this.props.character.gender}</span> </label>
                  <label>Origin: <span>{this.props.character.origin.name}</span> </label>
                  <label>Location: <span>{this.props.character.location.name}</span> </label>
                  <label>Created at: <span>{this.props.character.created}</span> </label>
                  
                  
          </div>
          
      </div>
    );
  }
}

export default Item;
