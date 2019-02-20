import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class LandingPage extends Component {
  render(){
    return(

      <div style={{border:'solid green', width: '100%', height: '100%'}}>
      <Grid style={{border:'solid red', width: '100%', height: '100%'}}>
        <Cell col={4} style={{border:'solid blue', width: '40%', height: '100%'}}>

        </Cell>
        <Cell col={4} style={{border:'solid blue', width: '40%', height: '100%'}}>

        </Cell>
        <Cell col={4}style={{border:'solid blue', width: '40%', height: '100%'}}>

        </Cell>
      </Grid>
      </div>
    )
   }
  }

  export default LandingPage;
