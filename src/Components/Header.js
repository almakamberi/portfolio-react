import React from 'react';
import ProfilePicture from './ProfilePicture';

function Header() {
  return (
    <header className="grid grid-cols-2 items-center py-4 max-w-screen-md mx-auto">
      <div className="text-gray-500">
        <p className="text-sm mb-1">Hello, I'm</p>
        <h1 className="text-2xl font-bold">Gjin Prelvukaj</h1>
      </div>
      <div className="w-full h-auto">
      </div>
    </header>
  );
}

export default Header;