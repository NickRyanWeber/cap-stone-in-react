import React, { useEffect, useState } from 'react'
import M from 'materialize-css'

const FormTest = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  const formTestData = [
    {
      name: 'First Name',
      options: ['First Option 1', 'First Option 2']
    },
    {
      name: 'Second Name',
      options: ['Second Option 1', 'Second Option 2']
    }
  ]

  return (
    <>
      <main className="container">
        <h1>Form Test Page</h1>
        <form action="">
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>
                Choose your option
              </option>
              {formTestData.map((data, i) => {
                return (
                  <option key={i} value={data.name}>
                    {data.name}
                  </option>
                )
              })}
            </select>
            <label>Materialize Select</label>
          </div>
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </form>
      </main>
    </>
  )
}

export default FormTest
