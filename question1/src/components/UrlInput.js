import React from 'react';

const UrlInput = ({ value, onChange, onRemove }) => {
  return (
    <div >
      <input
        type="text"
        placeholder="Enter URL"
        value={`http://${value}`}
        onChange={onChange}
        className='border-2 border-gray-300 w-max px-2 mx-2'
      />
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default UrlInput;