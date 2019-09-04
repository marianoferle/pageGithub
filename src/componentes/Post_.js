import React, { Component, Fragment } from 'react';



export default class Post_ extends Component{  
  
  state = {
    posts: []
  }

  async componentDidMount(){
    const res_ = await fetch('https://jsonplaceholder.typicode.com/posts');
    const d_ = await res_.json();
    this.setState({posts:d_});
    //console.log(d_);
  }

  render(){   
    return (
      <Fragment>
        <h1>publicaciones</h1>
        {
          this.state.posts.map(post =>{
            return <div key={post.id}>
              <h1>{post.title}</h1>
              <h2>{post.body}</h2>
            </div>
          })
        }
      </Fragment>    
    );
      
  }//---render
}//--class





