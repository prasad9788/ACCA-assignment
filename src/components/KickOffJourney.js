// src/components/KickOffJourney.js
import React, { useState } from 'react';
import CallBackModal from './CallBackModal';

const KickOffJourney = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <section className="text-center my-5">
      <h2 className="font-weight-bold">Kick off your ACCA Prep journey with IndigoLearn</h2>
      <form className="mt-4">
        <input type="text" placeholder="Phone Number" className="form-control my-2" />
        <input type="email" placeholder="Email" className="form-control my-2" />
        <input type="text" placeholder="Current Qualification" className="form-control my-2" />
        <textarea placeholder="Message" className="form-control my-2"></textarea>
        <button type="button" className="btn btn-primary mt-3" onClick={handleShow}>Request Call Back</button>
      </form>
      <CallBackModal show={showModal} handleClose={handleClose} />
    </section>
  );
};

export default KickOffJourney;
