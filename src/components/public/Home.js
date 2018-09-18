import React from 'react';
import {products} from '../../sandbox/named-exports';
import phone from '../../img/phone.png'

class Home extends React.Component{

  state = {
    search:''
  };

  updateSearch(e){
    this.setState({search:e.target.value.substr(0,20)});
  }
    render(){

    let filteredProducts = products.filter(
        (product)=>{

          return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1||
          product.color.toLowerCase().indexOf(this.state.search) !==-1 ||
          product.system.toLowerCase().indexOf(this.state.search) !==-1 ||
          product.camera.toLowerCase().indexOf(this.state.search) !==-1 ||
          product.price.toLowerCase().indexOf(this.state.search) !==-1

        }
    );

        return (
            <div>
              <div className="search">
                <input type="search"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
                       placeholder='Search'/>
              </div>
        <div className='home'>
          {filteredProducts.map((product)=>{
            return(

                <div  key={Math.random()}>
          <div className='products'>
            <img src={phone} alt="phone"/>
            <h2>{product.name}</h2>
            <ul>
              <li>Color:{product.color}</li>
              <li>Operating system:{product.system}</li>
              <li>Camera:{product.camera}</li>
              <li>Price:{product.price}</li>
            </ul>

            <div className='btn'>Order</div>
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