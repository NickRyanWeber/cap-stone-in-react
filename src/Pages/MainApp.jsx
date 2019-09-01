import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import M from 'materialize-css'
import MasterFilter from '../components/MasterFilter'

const MainApp = () => {
  // const elems = ReactDOM.findDOMNode(this).querySelectorAll('.sidenav')
  // need this for the M.AutoInit() below to get sidenav working. Check bottom of NavBar page on materialize website

  useEffect(() => {
    M.AutoInit()
  }, [])

  const test = {
    test: 'This is data',
    masterFilterTitle: 'Nick Weber Home',
    filterValue: '108.190.41.10',
    gaFilters: [
      {
        id: '1',
        gaAccountSelector: 'dummydata',
        gaPropertySelector: 'dummydata',
        gaViewSelector: 'dummydata',
        gaFilterSelector: 'dummydata'
      },
      {
        id: '2',
        gaAccountSelector: 'dummydata',
        gaPropertySelector: 'dummydata',
        gaViewSelector: 'dummydata',
        gaFilterSelector: 'dummydata'
      },
      {
        id: '3',
        gaAccountSelector: 'dummydata',
        gaPropertySelector: 'dummydata',
        gaViewSelector: 'dummydata',
        gaFilterSelector: 'dummydata'
      },
      {
        id: '4',
        gaAccountSelector: 'dummydata',
        gaPropertySelector: 'dummydata',
        gaViewSelector: 'dummydata',
        gaFilterSelector: 'dummydata'
      },
      {
        id: '5',
        gaAccountSelector: 'dummydata',
        gaPropertySelector: '',
        gaViewSelector: 'dummydata',
        gaFilterSelector: 'dummydata'
      }
    ]
  }

  return (
    <>
      <nav class="nav-wrapper">
        <section className="container">
          <a href="/app" class="brand-logo">
            Filter Master
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </section>
      </nav>
      <main className="container">
        <h1>Main App Page</h1>
        <section className="row">
          <section className="col s12 m6 l4">
            <MasterFilter data={test} />
            <MasterFilter data={test} />
            <MasterFilter data={test} />
            <MasterFilter data={test} />
            <MasterFilter data={test} />
            <MasterFilter data={test} />
          </section>
        </section>
      </main>
    </>
  )
}

export default MainApp
