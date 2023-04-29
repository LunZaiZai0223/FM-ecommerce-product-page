import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/utils";
import { deactivateNotification } from "../../store/notificationSlice";

// styles
import { Container } from "./Notification.style";

const Notification = () => {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((state) => state.notification);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(deactivateNotification());
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [type]);

  const renderNotificationContent = () => {
    switch (type) {
      case "CHECKOUT":
        return "Successfully checked out";

      case "REMOVE_CART":
        return "Successfully removed";

      case "ADD_CART":
        return "Successfully added";
    }
  };
  return (
    <Container>
      <span>{renderNotificationContent()}</span>
    </Container>
  );
};

export default Notification;
