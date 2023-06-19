import { useState } from 'react';

export default function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in
      </button>

      {showModal && (
        // Agrega aquí el código para el modal, por ejemplo:
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8">
            {/* Contenido del modal */}
            <h2>Modal Content</h2>
            <p>Este es el contenido del modal.</p>
            <button onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
