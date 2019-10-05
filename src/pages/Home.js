import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../store/actions/authAction'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {
          this.props.auth.isAuthenticated ? 
            <button 
              className="btn btn-danger"
              onClick={() => this.props.logout(this.props.history)}
            >Logout</button> :
            <Link to="/login" className="btn btn-success">Login</Link>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logout})(Home);