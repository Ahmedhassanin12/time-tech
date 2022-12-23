import React from 'react';
import { CiSettings } from 'react-icons/ci';
import { FcIdea } from 'react-icons/fc';
import { TbHeadset } from 'react-icons/tb';

const DoneWork = () => {
  return (
    <section className="done-work">
      <div className="three-card">
        <div className="card-done">
          <div>
            <p>100</p>
            <p>client</p>
          </div>

          <div className="icon-div">
            <TbHeadset />
          </div>
        </div>
        <div className="card-done">
          <div>
            <p>300</p>
            <p>Priject</p>
          </div>

          <div className="icon-div">
            <FcIdea />
          </div>
        </div>
        <div className="card-done">
          <div>
            <p>30</p>
            <p>serivce</p>
          </div>

          <div className="icon-div">
            <CiSettings />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoneWork;
