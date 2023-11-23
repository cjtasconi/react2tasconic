import React from 'react'

export const Loader = () => {
  return (
    <div>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden"></span>
        </div>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden"></span>
        </div>

    </div>
  )
}
