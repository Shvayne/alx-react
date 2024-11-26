import * as notifications from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalized = normalize(notifications.default, [notification]);

export default function getAllNotificationsByUser(userId) {
  const userNotifications = [];
  const allNotifications = normalized.entities.notifications;
  const allMessages = normalized.entities.messages;
  for (const key in allNotifications) {
    if (allNotifications[key].author === userId) {
      userNotifications.push(allMessages[allNotifications[key].context]);
    }
  }
  return userNotifications;
}