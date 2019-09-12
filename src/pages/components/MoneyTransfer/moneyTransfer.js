import React, { Component } from 'react';
import liffHelper from '../../../utils/liffHelper';
import Tf1 from './Tf1/tf1'
import Tf2 from './Tf2/tf2'
import Tf3 from './Tf3/tf3'
import Tf4 from './Tf4/tf4'
import Tf5 from './Tf5/tf5'
import './style.css'

class MoneyTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentRender: 'tf1',
    }
  }

  render() {

    let backStep = 'tf1';
    let nextStep = 'tf2';
    const renderComponent = () =>{

      if(this.state.componentRender === 'tf1'){
        backStep = 'tf1';
        nextStep = 'tf2';
      }else if(this.state.componentRender === 'tf2'){
        backStep = 'tf1';
        nextStep = 'tf3';
      }
      else if(this.state.componentRender === 'tf3'){
        backStep = 'tf2';
        nextStep = 'tf4';
      }
      else if(this.state.componentRender === 'tf4'){
        backStep = 'tf3';
        nextStep = 'tf5';
      }
      else if(this.state.componentRender === 'tf5'){
        backStep = 'tf4';
        nextStep = 'tf1';
      }
      
      switch (this.state.componentRender) {
        case 'tf1':
          return <Tf1 />;
        case 'tf2':
          return <Tf2 />;
        case 'tf3':
          return <Tf3 />;
        case 'tf4':
          return <Tf4 />;
        case 'tf5':
          return <Tf5 />;    
        default:
          return <Tf1 />;
      } 
    }
    
    const gotoStep = step => {
      this.setState({componentRender: step});
    }

    const renderButton = () => {
      if(this.state.componentRender === 'tf5'){
        return (<div className="wrap-button">
        <button className="button-link" onClick={() => { liffHelper.closeWindow() }}>Back to main menu</button>
      </div>);
      }else {
        return (<div className="wrap-button">
        <button className="button-link" onClick={() => gotoStep(nextStep)}>Next</button>
        <button className="button-link" onClick={() => gotoStep(backStep)}>Back</button>
      </div> );
      }
    }
    return (
      <div className="saving-plan">
        <div className="col-lg-3" />
          <div className="col-lg-6">

            {renderComponent()}

            <div className="wrap-tf1">
              {renderButton()}
            </div>
          </div>
        <div>
        
        </div>
        <div className="col-lg-3" />
      </div>
    );
  }
}

export default MoneyTransfer;