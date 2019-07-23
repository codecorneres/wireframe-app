import React, { Component } from 'react';
import axios from 'axios';
class Landing extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      forehand: [],
      backhand: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const that = this;
    event.preventDefault();
    if(this.state.value!== '')
    {
    axios.get('https://my-json-server.typicode.com/anniArrti/demo-1/db')
      .then(function (response) { 
        console.log(response);
         that.setState({
          forehand : response.data.Response.forehand,
          backhand:response.data.Response.backhand
        });
      });
    }
  }
  renderforehandTableData() {
    return this.state.forehand.map((forehand_data, index) => { 
       return (
          <tr key={index}>
             <td>{index+1}</td>
             <td>{forehand_data}</td>
          </tr>
       )
    })
 }
 renderbackhandTableData() {
  return this.state.backhand.map((backhand_data, index) => { 
     return (
        <tr key={index}>
           <td>{index+1}</td>
           <td>{backhand_data}</td>
        </tr>
     )
  })
}
render() {
        return ( 
        <section>
          <div className="row bdy">
            <div className="col-md-4 ms-sm2 ms-md4 ms-lg2" />
            <div className="col-md-4 ms-sm8 ms-md4 ms-lg8">
            <div className="Apps">
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="form-control" id="input-value" name="input-value"  value={this.state.value} onChange={this.handleChange}  />
              <input type="submit" vlaue="Submit"  className="btn btn-primary submitbtn"/>
              </form>
            </div>
            <div className="col-md-2 ms-sm12 ms-md4 ms-lg2" />
          </div>
        </div>
        <div className="row bdy">
        <div className="col-md-2 ms-sm12 ms-md4 ms-lg2" />
          <div className="col-md-4">
              <table className="table table-striped">
                <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Url</th>
                  </tr>
                </thead>
                <tbody>
                {this.renderforehandTableData()}
                </tbody>
              </table>
          </div> 
          <div className="col-md-4">
            <table className="table table-striped">
              <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Url</th>
                  </tr>
              </thead>
              <tbody>
              {this.renderbackhandTableData()}
              </tbody>
            </table>
          </div>  
          <div className="col-md-2 ms-sm12 ms-md4 ms-lg2" />        
        </div>
      </section> );
    }
}
export default Landing;