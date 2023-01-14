import React from 'react'

class PersonCard extends React.Component {

    constructor(props){        
        super(props);
        this.state = {año: props.año}
    }


    cumpleaños = () =>{
        this.setState({año: this.state.año+1})
    }

    render(){

        const{Nombre, Apellido, año,colorPelo} = this.props
        return (
            
            <>
            <h1 className='persona'> Nombre: {Nombre}, {Apellido}  </h1>    
            <p className='parrafo'> Edad: {this.state.año}</p>
            <p className='parrafo'> Color de Pelo:{colorPelo}</p>   
            <button onClick={this.cumpleaños}> Feliz cumpleaños</button>         
            
            </>
        )

    } 


}

export default PersonCard
