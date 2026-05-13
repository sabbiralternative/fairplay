import { useEffect } from "react";
import useGetNotification from "../../../hooks/useGetNotification";

const Notification = ({
  showNotification,
  setShowNotification,
  filteredNotification,
  setFilteredNotification,
}) => {
  const { notification, isFetchingNotification, isFetched } =
    useGetNotification();

  useEffect(() => {
    const storedNotificationId =
      JSON.parse(localStorage.getItem("notificationId")) || [];
    if (
      (!storedNotificationId || storedNotificationId?.length === 0) &&
      notification?.length > 0
    ) {
      setShowNotification(true);

      setFilteredNotification(notification);
    }
    if (
      notification?.length > 0 &&
      storedNotificationId &&
      storedNotificationId?.length > 0 &&
      !showNotification
    ) {
      const filteredNotifications = notification.filter(
        (notif) => !storedNotificationId.some((nId) => nId.id == notif.id),
      );

      if (filteredNotifications?.length > 0) {
        setFilteredNotification(filteredNotifications);
        setShowNotification(true);
      }
    }
  }, [
    notification,
    showNotification,
    isFetched,
    isFetchingNotification,
    setFilteredNotification,
    setShowNotification,
  ]);

  const closeNotification = () => {
    const notificationIds =
      JSON.parse(localStorage.getItem("notificationId")) || [];

    notification?.forEach((item) => {
      if (!notificationIds.some((notif) => notif.id === item.id)) {
        notificationIds.push({ id: item.id });
      }
    });

    localStorage.setItem("notificationId", JSON.stringify(notificationIds));

    setShowNotification(false);
  };
  return (
    <>
      {showNotification && filteredNotification?.length > 0 && (
        <div>
          <div className="commentary_main marquee">
            {filteredNotification?.map((item) => (
              <p
                key={item?.id}
                style={{ marginRight: "100vw", color: "white" }}
              >
                {item?.text}
              </p>
            ))}
            <button onClick={closeNotification}>
              <i className="mdi mdi-close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
