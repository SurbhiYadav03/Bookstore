import './App.css';

function Card(props){
  return(
      <>
          <div className="container">
              <div className="card">
                       <div className="img">
                            <img className="image" src={props.bookimg} alt='imgg'></img>
                       </div>

                       <div className="card-info">
                           <span className='one'>{props.name}</span><br/>
                           <span>{props.author}</span><br/>
                           <span>{props.price}</span><br/>
                           <a href={props.link}>
                              <button className="btn">View</button>
                           </a>
                       </div>
              </div>
          </div>

      </>
  )
}
export default Card;
