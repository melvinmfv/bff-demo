import { MessageType, NotificationType, UserProfileType, UserType } from '@/app/dataType';
import { NextResponse } from 'next/server'


export async function GET() {
  let userProfile: UserProfileType = {
    id: 0,
    first_name: '',
    last_name: '',
    birthDate: '',
    email: '',
    new_messages: 0,
    unread_messages: 0,
    new_notification: 0,
  };
  let userData: UserType;
  let notificationData: NotificationType[];
  let messagesData: MessageType[];

  try {
    const userResponse = await fetch(`http://localhost:3000/api/user`)
    userData = await userResponse.json();
    userProfile = {
      ...userProfile,
      id: userData.id,
      first_name: userData.first_name,
      last_name: userData.last_name,
      birthDate: userData.birthDate,
      email: userData.email,
    }
  } catch (error) {
    // show error
  }

  try {
    const notificationResponse = await fetch(`http://localhost:3000/api/noti`)
    notificationData = await notificationResponse.json();
    userProfile.new_notification = notificationData.length;
  } catch (error) {
    // show error
  }
  try {
    const messageResponse = await fetch(`http://localhost:3000/api/messages`)
    messagesData = await messageResponse.json();
    userProfile.new_messages = messagesData.length
    userProfile.unread_messages = messagesData.filter(res => !res.read).length;
  } catch (error) {
    // show error
  }

  return NextResponse.json(userProfile, { status: 200 })
}