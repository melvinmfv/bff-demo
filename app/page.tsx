'use client';
import { useState } from 'react'
import { MessageType, NotificationType, UserProfileType, UserType } from './dataType';
import './globals.css'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [bffLoading, setBffLoading] = useState(false)
  const [allData, setAllData] = useState<UserType | NotificationType | MessageType>()
  const [userProfile, setUserProfile] = useState<UserProfileType>()

  const getUser = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/api/user`)
    setAllData(await res.json());
    setLoading(false);
  }

  const getMessages = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/api/messages`)
    setAllData(await res.json());
    setLoading(false);
  }

  const getNotification = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/api/noti`)
    setAllData(await res.json());
    setLoading(false);
  }

  const getUserProfile = async () => {
    setBffLoading(true);
    const res = await fetch(`http://localhost:3000/api/bff-user-profile`)
    setUserProfile(await res.json());
    setBffLoading(false);
  }

  return (
    <div>
      <div className="button-group">
        <button onClick={getUser}>Get User</button>
        <button onClick={getMessages}>Get Messages</button>
        <button onClick={getNotification}>Get Notification</button>
        <button onClick={getUserProfile}>Get User Profile With BFF</button>
      </div>
      <div className="dashboard">
        <div className="left-board">
          <div>
            <h1>Original data:</h1>

            {loading ? <pre>Loading....</pre> : JSON.stringify(allData)}
          </div>
        </div>
        <div className="right-board">
          <div>
            <h1>User profile with BFF</h1>
            {bffLoading ? <pre>Loading....</pre> : JSON.stringify(userProfile)}
          </div>
        </div>
      </div>
    </div>
  )
}
