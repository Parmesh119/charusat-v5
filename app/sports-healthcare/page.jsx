import React from 'react'
import { Fragment } from 'react'
import Image from 'next/image'

const Sports = () => {
  return (
    
    <Fragment>
        <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Sports</h3>
                           <div>Indoor Sports</div>
                           <div>Outdoor Sports</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            
          </div>
        </div>
      </div>
      {/* HealthCare */}
      <div
        className="blog-section padding-tb section-bg"
        style={{ padding: "10px 0" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>HealthCare & Facilities</h3>
                            <hr />
                            <br />
                            
                            

                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sports