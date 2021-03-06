import React from "react";
import { Link } from "react-router-dom";

class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main items">
        <article className="item">
          <header>
            <h3>Mentee</h3>
          </header>
          <p>
            Ready to take action on the dream idea or profession that has been
            in your mind for quite some time? Join today and within a week you
            will have your first meeting with a mentor that suits your needs.
          </p>
          <ul className="actions">
            <li>
              <Link to="#" className="button">
                More
              </Link>
            </li>
          </ul>
        </article>
        <article className="item">
          <header>
            <h3>Mentor</h3>
          </header>
          <p>
            Do you think you have the knowledge and experiance to mentor pupils
            of all ages? The Oraculi mentorship may be the next stop in your
            career to give back to others while creating your own hours and
            working remotely.
          </p>
          <ul className="actions">
            <li>
              <Link to="/mentor" className="button">
                More
              </Link>
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default Items;
