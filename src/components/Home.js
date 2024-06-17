import React from 'react'
import "./Home.css"
import LVideos from './LVideos'

const Home = () => {
  return (
    <>
        <div className="bg-dark text-secondary px-4 py-5 text-center" id="home">
            <div className="py-5">
            <h1 className="display-5 fw-bold">Pet Store</h1>
            <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4 text-dark">Lorem ipsum dolor sit amet consectetur adipiscing, elit porta parturient vel nullam senectus, sagittis phasellus pharetra ornare dapibus. Cras lectus ultricies proin parturient penatibus pharetra porttitor pellentesque cubilia non quisque magna curae magnis arcu, fames dapibus bibendum fusce aenean curabitur luctus elementum congue varius tempus metus praesent nullam. Lectus curabitur porta platea euismod blandit libero molestie, aliquet sociosqu ac erat sollicitudin hac tellus sapien, metus vel felis purus hendrerit auctor.
                  Mauris quisque neque ultricies diam accumsan nunc vulputate ullamcorper montes tortor, pretium primis faucibus enim metus himenaeos viverra bibendum. Scelerisque at semper egestas orci libero donec massa, habitant vulputate tellus augue mi faucibus tempus nec, mattis aliquam facilisis a urna malesuada. Nisi habitant imperdiet sociis id ridiculus ac sem, pretium natoque nam cras neque est netus egestas, conubia eros sapien vitae ultrices tristique.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-info btn-lg px-4 me-sm-3 fw-bold">Pet Store</button>
                <button type="button" className="btn btn-light btn-lg px-4">Contactanos</button>
                </div>
            </div>
            </div>
        </div>

        <LVideos/>
    </>
  )
}

export default Home