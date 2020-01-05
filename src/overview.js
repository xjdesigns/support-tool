import React, { useState } from 'react'
import Accordion from './core/accordion'

const Overview = () => {
  const [isopen, toggleOpen] = useState(true)

  return (
    <div className={`stui-overview-pane ${isopen ? 'is-open' : ''}`}>
      <div className="stui-overview-pane__action">
        <button
          className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
          data-icon="menu_open"
          onClick={() => toggleOpen(!isopen)}
        />
      </div>
      {isopen && (
        <>
          <div className="stui-overview-pane__content">
            <Accordion title="Errors" secondary="1" open error>
              <div className="stui-opane">
                <ul>
                  <li>
                    <p>Cannot register device</p>
                    <button
                      className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
                      data-icon="keyboard_arrow_right"
                    />
                  </li>

                  <li>
                    <p>Name conflict (sim btn 2)</p>
                    <button
                      className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
                      data-icon="keyboard_arrow_right"
                    />
                  </li>
                </ul>
              </div>
            </Accordion>

            <Accordion title="hubs offline" secondary="6" open>
              <div className="stui-opane">
                <ul>
                  <li>
                    <p>Home office</p>
                    <button
                      className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
                      data-icon="keyboard_arrow_right"
                    />
                  </li>
                </ul>
              </div>
            </Accordion>

            <Accordion title="devices offline" secondary="6">
              <div className="stui-opane">
                <ul>
                  <li>
                    <p>Simulated button 1</p>
                    <button
                      className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
                      data-icon="keyboard_arrow_right"
                    />
                  </li>
                  <li>
                    <p>Refridgerator</p>
                    <button
                      className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
                      data-icon="keyboard_arrow_right"
                    />
                  </li>
                  <li>
                    <p>Simulated button 3</p>
                    <button
                      className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
                      data-icon="keyboard_arrow_right"
                    />
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </>
      )}
    </div>
  )
}

export default Overview
