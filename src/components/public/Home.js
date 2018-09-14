import React from 'react';
import {service} from '../../sandbox/named-exports';

class Home extends React.Component{

  state = {
    search:''
  };

  updateSearch(e){
    this.setState({search:e.target.value.substr(0,20)});
  }
    render(){

    let filteredServices = service.filter(
        (service)=>{

          return service.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;

        }
    );

        return (
            <div>
              <div className="search">
                <input type="search"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
                       placeholder='paieška'/>
              </div>
        <div className='home'>
          {filteredServices.map((services)=>{
            return(

                <div>
          <div className='programs'>
            <h2>{services.name}</h2>

            <div className='btn'>Užsakyti</div>
          </div>

                </div>
          )
          })}



</div>
            </div>
        );
    }
}
export default Home