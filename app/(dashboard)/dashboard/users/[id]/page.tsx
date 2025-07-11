import React from "react";

const UserDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>User Details {id}</div>;
};

export default UserDetails;
