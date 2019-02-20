import React, { Component } from 'react';
import './App.css';
import {Header,Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl";
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props)
   {
     super(props);
     this.state = { activeTab:0};

   }
   toggleCategories(){

   if(this.state.activeTab === 0){
     return(<div>
         hello beauties!
       </div>)
     }
else if(this.state.activeTab === 1){
  return(
    <div className="tab-grid">
    <Grid><Cell> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
       <div style={{color: '#fff', height: '176px', background: 'url(https://previews.123rf.com/images/slavaleks/slavaleks1506/slavaleks150600724/41367526-beauty-model-with-newspaper-on-her-face.jpg) center / cover'}}>
       <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(242, 181, 155, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">Beauty News</h5> </CardTitle></div>
       <CardText>Read News Articles about beauty trends, tips and more!
       </CardText>
       <CardActions border>
       <Button colored> Read More  </Button>
       </CardActions>
     </Card></Cell>
     <Cell> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <div style={{color: '#fff', height: '176px', background: 'url(https://cdn2.stylecraze.com/wp-content/uploads/2016/01/42-Best-Beauty-Blogs-Of-All-Time.jpg) center / cover'}}>
        <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(242, 181, 155, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">Beauty Blogs</h5> </CardTitle></div>
        <CardText>Get some information anything about beauty from bloggers online.
        </CardText>
        <CardActions border>
        <Button colored> Find out  </Button>
        </CardActions>
      </Card></Cell>
      <Cell> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <div style={{color: '#fff', height: '176px', background: 'url(https://www.vlognation.com/wp-content/uploads/2015/02/Beauty-Vlogger-Channel.jpg) center / cover'}}>
         <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(242, 181, 155, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">Beauty Reviews</h5> </CardTitle></div>
         <CardText>Get reviews,compare, find out and get more insights on beauty products and more.
         </CardText>
         <CardActions border>
         <Button colored> Read Reviews  </Button>
         </CardActions>
       </Card></Cell></Grid>


    </div>
    )
}else if(this.state.activeTab === 2){
       return (
         <Grid>
         <Cell> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <div style={{color: '#fff', height: '176px', background: 'url(https://i.ytimg.com/vi/0GzaX2781Tg/maxresdefault.jpg) center / cover'}}>
            <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(242, 181, 155, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">Beauty Tutorials</h5> </CardTitle></div>
            <CardText>Here are some Video Tutorials for you to watch!
            </CardText>
            <CardActions border>
            <Button colored> Start Watching  </Button>
            </CardActions>
          </Card>
        </Cell>
          <Cell> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <div style={{color: '#fff', height: '176px', background: 'url(http://trendimi.com/blog/wp-content/uploads/2016/11/The-Makeup-Chair.jpg) center / cover'}}>
             <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(242, 181, 155, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">Beauty Vlogs</h5> </CardTitle></div>
             <CardText>Watch vloggers showcase beauty tips and more!
             </CardText>
             <CardActions border>
             <Button colored> Watch now  </Button>
             </CardActions>
           </Card></Cell>
           <Cell> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <div style={{color: '#fff', height: '176px', background: 'url(https://www.vlognation.com/wp-content/uploads/2014/07/beauty-vlog-youtub-channel.jpg) center / cover'}}>
              <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(242, 181, 155, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">Beauty Video Reviews</h5> </CardTitle></div>
              <CardText>The moment of 'TRUTH' is here and vloggers just can't help but showcase their reviews on these beauty product.
              </CardText>
              <CardActions border>
              <Button colored> Reveal Truth  </Button>
              </CardActions>
            </Card></Cell></Grid>
       )
     }
   }

   render(){
     return(
       <div className="AppBackground">


       <div className="category-tabs">
        <div><Header style={{backgroundColor:'transparent', color:'white'}}><h4>BeautyBFF</h4></Header></div>
         <Tabs style={{backgroundColor: 'rgba(242, 181, 155, 0.8)'}} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
           <Tab>Home</Tab>
           <Tab>Articles</Tab>
           <Tab>Watch</Tab>
           <Tab>Shop</Tab>
         </Tabs>

         <section className="projects-grid">
           <Grid className="projects-grid">

             <Cell col={12}>
               <div className="content">{this.toggleCategories()}</div>
             </Cell>
           </Grid>
         </section>

       </div>
       </div>
       )
     }
   }
export default App;
