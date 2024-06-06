import { ProfileFragment } from "@lens-protocol/client"
import { useState } from "react"
import lensClient from "./lensClient"

const useProfile = (handle: string) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ProfileFragment>()
  const [error, setError] = useState('')

  const fetch = async () => {
    try {
      setLoading(true)
      setError('')

      const profile = await lensClient().profile.fetch({
        forHandle: `lens/@${handle}`,
      })

      if (!profile)
        throw(Error("Invalid profile"))

      setData(profile);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    data,
    error,
    fetch
  }
}

export default useProfile;
