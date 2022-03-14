import React from 'react'

function Card({ title, body }) {
      return (
            <div className="column">
                  <div className="card">
                        <h3>{title}</h3>
                        <p>{body}</p>
                  </div>
            </div>
      )
}

export default Card
