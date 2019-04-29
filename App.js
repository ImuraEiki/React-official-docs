import React, {Component} from 'react'
import './App.css'


class ProductCategoryRow extends React.Component{
    render(){
        const category = this.props.category;
        return(
           <tr>
               <th colSpan="2">
                    {category}
               </th>
           </tr>
        )
    }
}

class ProductRow extends React.Component{
    render(){
        const product = this.props.product;
        const name = product.stocked

        return(
            <div>
                <p>{props.value}</p>
                <p>{content}</p>
            </div>
        );
    }
}

class ProductTable extends React.Component{
    render(){
        return(
            <div>
                <ProductCategoryRow value="Sporting Goods" value2="Electronics"/>
                <ProductRow list={list}/>
            </div>
        )
    }
}

class SearchBar extends React.Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

  

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <SearchBar />
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}


const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];


export default App
