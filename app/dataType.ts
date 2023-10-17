export type UserProfileType = {
  id: number
  first_name: string,
  last_name: string,
  birthDate: string,
  email: string,
  new_messages: number,
  new_notification: number
  unread_messages: number,
}

export type NotificationType = {
  uid: string,
  text: string,
  created_at: string,
  seen: number,
}

export type MessageType = {
  uid: string,
  text: string,
  created_at: string,
  read: boolean,
}

export type UserType = {
  id: number,
  first_name: string,
  last_name: string,
  birthDate: string,
  email: string,
  gender: string,
  ip_address: string,
  address: string,
  created_at: string,
}