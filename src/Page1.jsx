import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="/Page1/detailA">Detail A</Link>
      <br />
      <Link to="/Page1/detailB">Detail B</Link>
    </div>
  );
};
