import notificationModel from "../models/notificationModel.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id;

    const notification = await notificationModel.find({ to: userId }).populate({
      path: "from",
      select: "username profileImg"
    });

    await notificationModel.updateMany({ to: userId }, { read: true })

    res.status(200).json(notification)

  } catch (error) {
    console.log("Error in getNotifications controller", error.message);
    return res.status(500).json({ error: error.message })
  }
}
export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    await notificationModel.deleteMany({ to: userId })
    res.status(200).json({ message: "Notification Deleted Successfully" })
  } catch (error) {
    console.log("Error in deleteNotifications controller", error.message);
    return res.status(500).json({ error: error.message })
  }
}