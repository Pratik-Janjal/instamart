import { Outlet } from "react-router-dom";
import ProfileNavbar from "../../molecules/navbar/ProfileNavbar";
import MoreInProfile from "../../molecules/profile/MoreInProfile";
import ProfileDetails from "../../molecules/profile/ProfileDetails";

const Profile = () => {
  return (
    <>
      <section className="relative">
        <ProfileNavbar />
        <ProfileDetails />
        <MoreInProfile outlet={<Outlet />} />
      </section>
    </>
  );
};

export default Profile;
