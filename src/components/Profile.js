const Profile = () => {
  return (
    <div className="px-32 py-4 bg-lightgrey">
      <h2 className="title">Profile</h2>
      <div className="flex">
        <div className="flex flex-wrap w-1/2 bg-white rounded-lg m-8 p-16">
          <h3 className="text-pink pf text-lg tracking-tight w-full">
            Basic Information
          </h3>
          <ul>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">Birth Date</p>
              <p className="w-1/2">18.06.1995</p>
            </li>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">Residence City</p>
              <p className="w-1/2">St. Petersburg</p>
            </li>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">Education Status</p>
              <p className="w-1/2">ITU, Meteorological Eng., 2018</p>
            </li>
            <li className="list-none flex py-4">
              <p className="w-1/2 font-semibold">Preferred Role</p>
              <p className="w-1/2">Frontend, UI</p>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap w-1/2 m-8 p-16">
          <h3 className="text-black pf text-lg tracking-tight w-full">
            About me
          </h3>
          <p className="text-black leading-6 tracking-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
            <br />
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;