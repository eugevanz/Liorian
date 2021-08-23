import { useContext } from 'react';
import { AppContext } from '../state';
import image from '../images/Quadratic_formula.svg'

function Main() {
  const {activeLes, isShowing} = useContext(AppContext);

  return !isShowing ? <section className="section">
    <p className="title is-2">{activeLes[0]}</p>
    <p className="subtitle is-4">{activeLes[1]}</p>
    <div className="tile is-ancestor">
      <div className="tile is-6 is-vertical is-parent">
        <div className="tile is-child box">
          <small><b>Note: </b>The quadratic formula helps us solve any quadratic equation. First, we bring the equation to the form ax²+bx+c=0, where a, b, and c are coefficients. Then, we plug these coefficients in the formula: (-b±√(b²-4ac))/(2a)</small>
          <figure className="image is-4by3">
            <img src={image} alt="alt"></img>
          </figure>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <p className="title">Let's see if we understand</p>
          <p>Rahul and Rohan have 45 marbles together. After losing 5 marbles each, the product of the number of marbles they both have now is 124. <b>How to find out how many marbles they had to start with.</b></p>
        </div>
      </div>
    </div>
  </section> : null;
}

export default Main;