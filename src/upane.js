import React from 'react'

const Upane = ({ handleSelection, setSelected }) => {
  return (
    <div className="stui-upane">
      <div className="stui-upane__header">
        <div className="stui-uheader">
          <div className="stui-uheader__title">
            <h4>User Information</h4>
          </div>

          <div className="stui-uheader__actions">
            <button
              className="spx-btn spx-btn--pr spx-btn--sm spx-btn--circle"
              data-icon="exit_to_app"
              onClick={() => setSelected('none')}
            />
          </div>
        </div>
      </div>

      <div className="stui-upane__details">
        <div className="stui-udetail">
          <div className="stui-udetail__label">Username</div>
          <div className="stui-udetail__desc">jason.jacobson</div>
        </div>
        <div className="stui-udetail">
          <div className="stui-udetail__label">UUID</div>
          <div className="stui-udetail__desc">784ij8-ewpoitcd-2012shikd</div>
        </div>
        <div className="stui-udetail">
          <div className="stui-udetail__label">Email</div>
          <div className="stui-udetail__desc">jason.jacobson@smartthings.com</div>
        </div>
        <div className="stui-udetail">
          <div className="stui-udetail__label">SAID</div>
          <div className="stui-udetail__desc">32oij8-ewpodpmos-3487shikd</div>
        </div>
      </div>


      <div className="stui-upane__info">
        <div className="spx-apanel">
          <div className="spx-apanel__title">Locations (4)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('users')}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Automations (2)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('automations')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Devices(121)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Events(11)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Notifications(14)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Hub migration tool</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">IDE tool (legacy)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('devices')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upane
