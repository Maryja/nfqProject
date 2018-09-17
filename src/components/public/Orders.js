import React from 'react';
import {orders, service} from '../../sandbox/named-exports';



class Orders extends React.Component{

  state={
    search:'',
  };

  updateSearch(e){
    this.setState({search:e.target.value.substr(0,20)});
  }



    render(){


      let filteredOrders = orders.filter(
          (order)=>{

            return (
                order.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                order.color.toLowerCase().indexOf(this.state.search) !==-1 ||
                order.system.toLowerCase().indexOf(this.state.search) !==-1 ||
                order.camera.toLowerCase().indexOf(this.state.search) !==-1 ||
                order.price.toLowerCase().indexOf(this.state.search) !==-1
          )
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
          {filteredOrders.map((order)=>{
            return(
                <div>
                  <ul>
                    <li key={order.name}>
                  <h2>{order.name}</h2>
                    </li>
                    <li>{order.color}</li>
                    <li>{order.system}</li>
                    <li>{order.camera}</li>
                    <li>{order.price}</li>

                  </ul>

                </div>
            )
          })}

        </div>
        );
    }
}
export default Orders