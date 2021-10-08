import React, { useEffect } from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { getSmurfs } from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App(props) {
  const { loading, error, getSmurfs }= props;
  
  useEffect(()=> {
    getSmurfs();
  }, []);
  
  return (
    <div className="App">
      <Header />
      {
        (error !== "") && <h3>{error}</h3>
      }
      <main>
        {
          loading ? <h3>Loading Your Smurfs</h3> : <SmurfList/>
        }
        <AddForm/>
      </main>
    </div>
  );
  
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.