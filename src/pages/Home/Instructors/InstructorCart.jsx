// import React from 'react';

const InstructorCart = ({instructor}) => {
    console.log(instructor)
    const {image, name, email} = instructor;
    return (
        <div className="card  w-80 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="text-lg">Instructor Name: {email}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-lime-600 hover:bg-lime-800 border-0">Select Now</button>
    </div>
  </div>
</div>
    );
};

export default InstructorCart;