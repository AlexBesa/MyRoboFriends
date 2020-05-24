// import React from 'react';
import React , {Component,Fragment} from 'react';

const Card = (props) =>{
    const {name,email,id} = props;
    return (
        // <h1>Prietenii mei roboti</h1>
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow b2 shadow-5'>
            <img alt='robots' src ={`https://robohash.org/${id}?200x200`}/>
            <Fragment>
                <h2>{name}</h2>
                <p>{email}</p>
            </Fragment>
        </div>
        
    );
}

export default Card;

// //aici e hardcodat
// <div className = 'bg-light-green dib br3 pa3 ma2 grow b2 shadow-5'>
// <img alt='robots' src ='https://robohash.org/alex?200x200'/>
//             <div>
//                 <h2>Besa Alex</h2>
//                 <p>alex.besa@gmail.com</p>
//             </div>
//         </div>