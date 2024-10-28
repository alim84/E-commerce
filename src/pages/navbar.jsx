import { IoBagHandle } from "react-icons/io5";

const navbar = () => {
  return (
    <>
      <nav>
        <div className="flex">
          <div>
            <div className="flex">
              <h2 className="font-bold text-2xl">Logo</h2>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Page</li>
                <li>Contract</li>
              </ul>
            </div>
          </div>
          <div className="flex">
            <div>
              <input type="text"></input>
            </div>
            <div>
              <link to>My Account</link>
            </div>
            <div>
              <IoBagHandle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
