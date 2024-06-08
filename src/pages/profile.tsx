import Button from "@/components/Navbar/Button";
import useProfile from "@/lens/useProfile";
import { ProfileFragment } from "@lens-protocol/client";
import { useState } from "react";

const Profile = () => {
  const [handle, setHandle] = useState<string>("")

  const { data: profile, loading, error, fetch } = useProfile(handle)

  interface ProfileViewProps {
    profile: ProfileFragment;
  }

  const ProfileView = ({ profile }: ProfileViewProps) => (
    <div className="flex-col space-y-2">
      <div>ID: {profile.id}</div>
      <div>Address: {profile.ownedBy.address}</div>
      <div>Created at: {profile.createdAt}</div>
    </div>
  )

  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Profile
      </div>
      <div className="flex space-x-4">
        <input className="bg-white-800 px-4 rounded-md" placeholder="handle as username" onChange={(e) => {
          setHandle(e.target.value)
        }} />
        {loading ?
          <Button
          >
            Loading...
          </Button>
          :
          <Button
            onClick={fetch}
          >
            Fetch profile
          </Button>
        }
      </div>
      {profile && <ProfileView profile={profile} />}
      {error && <div className="text-red-400 line-clamp-2">
        {error}
      </div>}
    </>
  )
}

export default Profile;
