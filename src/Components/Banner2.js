import { Link } from "react-router-dom";
import '../App.css';
function Banner2() {
    return (
      <div className="banner">
        <div className="">
          <div className="banner-container">
            <div className="text-side">
              <div className="text">
                <h2>Creative harmonious living</h2>
                <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely</p>
                <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                  <button>Shop now</button>
                </Link>
              </div>
            </div>
            <div className="img-side">
              <img src="https://images.pexels.com/photos/3497060/pexels-photo-3497060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Banner2;