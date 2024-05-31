import { toast } from "react-toastify";

const App = () => {
  const notify = () =>
    toast("Wow so easy!", {
      autoClose: 1200,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
    </div>
  );
};

export default App;
