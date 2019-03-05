namespace DotNetNote.Models.Notifications
{
    public interface IMyNotificationRepotiroy
    {
        void CompleteNotificationByUserid(int userId, int id);
        MyNotification GetNotificationByUserid(int userId);
        bool IsNotification(int userId);
    }
}