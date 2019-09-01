import React from 'react'

const MasterFilter = props => {
  return (
    <>
      <section className="card small">
        <section className="card-content">
          <h3 className="card-title">{props.data.masterFilterTitle}</h3>
          <p>Value - {props.data.filterValue}</p>
          <p>{props.data.gaFilters.length} filters</p>
          <div class="card-action">
            <i className="btn-floating halfway-fab waves-effect waves-light card-action material-icons red">
              edit
            </i>
          </div>
        </section>
      </section>
    </>
  )
}

export default MasterFilter
