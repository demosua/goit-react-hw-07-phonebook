import { ToastContainer } from 'react-toastify';

export const ToastMessage = () => {

  < ToastContainer
    position="top-center"
    autoClose={1000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />

};