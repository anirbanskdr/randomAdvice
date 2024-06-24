import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
    
    state = {
        advice:'',
        // buttonColor: 'primary'
    };
    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice')
        
       .then((res)=>{
        const {advice}=res.data.slip;
        this.setState({advice});
       })
       .catch((err)=>{
        console.log(err);
       })
    };
    // changeButtonColor=()=>{
    //     if(this.state.buttonColor === 'primary'){
    //         this.setState({buttonColor: 'secondary'});
    //     } else {
    //         this.setState({buttonColor: 'primary'});
    //     }
    // };
    render(){
        return(
            <div className='app'>
                <div className="card">
                    <h1 className='advice'>{this.state.advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>bonk</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;