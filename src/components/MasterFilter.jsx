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
          <a href="#modal1" className="modal-trigger">
            <section className="card-content">
              <p className="card-title">{props.data.masterFilterTitle}</p>
              <p>Value - {props.data.filterValue}</p>
              <p>{props.data.gaFilters.length} filters</p>
            </section>
          </a>
        </section>
      </main>
      {/* Modal */}
      <div id="modal1" class="modal modal-fixed-footer">
        <div class="modal-content">
          <div className="row">
            <div className="col l7 filter-info">
              <div className="input-field">
                <input
                  id="filter_name"
                  type="text"
                  class="validate"
                  value={props.data.masterFilterTitle}
                />
                <label for="filter_name">Filter Name</label>
              </div>
              <div className="input-field">
                <input
                  id="filter_value"
                  type="text"
                  class="validate"
                  value={props.data.filterValue}
                />
                <label for="filter_value">Filter Value</label>
              </div>
            </div>
            <div className="col l4 filter-count right">
              <br />
              <h2 className="center">{props.data.gaFilters.length}</h2>
              <p className="center">Filter Count</p>
            </div>
          </div>
          <ul className="collection">
            {props.data.gaFilters.map(filter => {
              return (
                <li className="collection-item">
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
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    </>
  )
}

export default MasterFilter
