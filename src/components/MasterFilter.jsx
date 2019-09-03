import React, { useEffect, useState } from 'react'

import M from 'materialize-css'

const MasterFilter = props => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <>
      <main className="col l3 m4 s6">
        <section className="card">
          <a href={`#modal${props.data.id}`} className="modal-trigger">
            <section className="card-content">
              <h6 className="truncate">{props.data.masterFilterTitle}</h6>
              <p>Value - {props.data.filterValue}</p>
              <p>{props.data.gaFilters.length} filters</p>
            </section>
          </a>
        </section>
      </main>
      {/* View Master Filter Modal */}
      {/* turn into a component, need to figure out how to open component modal */}
      <div id={`modal${props.data.id}`} className="modal modal-fixed-footer">
        <div className="modal-content">
          <div className="row">
            <div className="col l7 filter-info">
              <div className="input-field">
                <input
                  id="filter_name"
                  type="text"
                  className="validate"
                  value={props.data.masterFilterTitle}
                />
                <label htmlFor="filter_name">Filter Name</label>
              </div>
              <div className="input-field">
                <input
                  id="filter_value"
                  type="text"
                  className="validate"
                  value={props.data.filterValue}
                />
                <label htmlFor="filter_value">Filter Value</label>
              </div>
            </div>
            <div className="col l4 filter-count right">
              <br />
              <h2 className="center">{props.data.gaFilters.length}</h2>
              <p className="center">Filter Count</p>
            </div>
          </div>
          <ul className="collection">
            {props.data.gaFilters.map((filter, i) => {
              return (
                <li key={i} className="collection-item">
                  <div>
                    {filter.gaAccountSelector} > {filter.gaPropertySelector} >{' '}
                    {filter.gaViewSelector} > {filter.gaFilterSelector}
                    <a href="#!" className="secondary-content">
                      <i className="material-icons">edit</i>
                    </a>
                    <a href="#!" className="secondary-content">
                      <i className="material-icons">remove_circle_outline</i>
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="modal-footer">
          <a
            href="#modal-new"
            // need to figure out how to trigger modal from this modal...or change UI/UX to something else
            className="waves-effect waves-green btn-flat modal-trigger"
          >
            Add New Filter
          </a>
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Save
          </a>
        </div>
      </div>
    </>
  )
}

export default MasterFilter
