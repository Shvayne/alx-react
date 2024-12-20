import * as notifications from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  const userNotifications = notifications.default.filter(
    (notification) => notification.author.id === userId
  );
  return userNotifications.map((notification) => notification.context);
}