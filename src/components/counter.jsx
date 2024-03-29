import React, { Component } from 'react'
class Counter extends Component {
    // state = {
    //     value: this.props.counter.value
    //     // tags: []
    //     // address: {
    //     //     street: ''
    //     // }
    //     // imageUrl: 'https://picsum.photos/200'
    // };
    // handleIncrement = product =>{
    //     console.log(product);
    //     // this.setState.count++;
    //     this.setState({ value: this.state.value + 1 })
    // };
    // doHandleIncrement =()=>{
    //     this.handleIncrement({id: 1});
    // };
    // styles ={
    //     fontSize: 50,
    //     fontWeight: "bold"
    // };
    // renderTags()n{
    //     if (this.state.tags.length ===0 ) return <p>There are no tags</p>;
    
    //     return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>
    // }
    render() {
        console.log('props', this.props);
        // React.createElement('h1') 
        // let classes = this.getBadgeClasses();
        return ( 
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {/* <button onClick={() =>this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button> */}
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } =this.props.counter;
        return count === 0 ?'Zero': count;
    }
}
export default Counter;