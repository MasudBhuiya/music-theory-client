// import React from 'react';

const InstructorCart = ({instructor}) => {
    console.log(instructor)
    const {image, name, email} = instructor;
    return (
        <div className="card flex w-80 mx-auto bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Instructor Name: {name}</h2>
    <p className="text-lg">Instructor Email: {email}</p>
  </div>
</div>
    );
};

export default InstructorCart;