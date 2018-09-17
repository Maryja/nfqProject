import React from 'react';
import {orders, service} from '../../sandbox/named-exports';
import { DataTable } from 'react-data-components';
import 'react-data-components/css/table-twbs.css'

class Orders extends React.Component{

    render(){
    let data = orders.map((order)=> (
      { name:order.name,
      color:order.color,
      system:order.system,
      camera:order.camera,
      price:order.price
      }
    ));

      let columns = [
      {title: 'Name', prop:'name'},
      {title: 'Color', prop:'color'},
      {title: 'System', prop:'system'},
      {title: 'Camera', prop:'camera'},
      {title: 'Price', prop:'price'}
    ];


        return (
        <div>
          <DataTable
              className="container"
              keys="id"
              columns={columns}
              initialData={data}
              initialPageLength={5}
              initialSortBy={{ prop: 'city', order: 'descending' }}
              pageLengthOptions={[ 5, 20, 50 ]}
          />



        </div>
        );
    }
}
export default Orders