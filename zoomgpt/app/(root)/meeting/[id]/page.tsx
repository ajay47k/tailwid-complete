import React from 'react';

const Meeting = async (context: { params: { id: string } }) => {
  const { id } = await context.params;
  return (
    <div>Meeting Room: #{id}</div>
  );
};

export default Meeting;
