import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots.js';
// import { render } from 'react-dom';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            roboti:[],
            searchfield:'',
        }
        //state is a piece of data that describe the app-smart component
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                return response.json();
            })
            .then(users =>{
                this.setState({roboti:users})
            });
        
    }

    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value});
        console.log("event target value ",event.target.value);
        //am mutat mai jos in render commentariul de jos
        // const filteredRobots = this.state.roboti.filter(fiecareRobot =>{
        //     return fiecareRobot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log("filteredRobots here :  ",filteredRobots);
    }
    render(){
        const filteredRobots = this.state.roboti.filter(fiecareRobot =>{
            return fiecareRobot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log("filteredRobots here :  ",filteredRobots);
        if(this.state.roboti.length === 0){
            return <h1 className='tc'>Se incarca datele</h1>
        } else {
        return (
            <div className='tc'>
                <h1>Prietenii mei roboti</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                {/* <CardList robots = {this.state.roboti}/> */}
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots= {filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>   
        )
        }       
    }  
}

export default App;