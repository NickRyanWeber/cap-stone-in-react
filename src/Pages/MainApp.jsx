import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import M from 'materialize-css'
import MasterFilter from '../components/MasterFilter'

const MainApp = () => {
  useEffect(() => {
    // let navbar = document.querySelectorAll('.nav-wrapper')
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
        gaPropertySelector: 'dummydata',
        gaViewSelector: 'dummydata',
        gaFilterSelector: 'dummydata'
      }
    ]
  }

  return (
    <>
      <nav className="nav-wrapper">
        <section className="container">
          <a href="/app" className="brand-logo">
            Filter Master
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </section>
      </nav>
      <main className="container">
        <section className="row">
          <MasterFilter data={test} />
          <MasterFilter data={test} />
          <MasterFilter data={test} />
          <MasterFilter data={test} />
          <MasterFilter data={test} />
          <MasterFilter data={test} />
        </section>
      </main>
    </>
  )
}

export default MainApp
