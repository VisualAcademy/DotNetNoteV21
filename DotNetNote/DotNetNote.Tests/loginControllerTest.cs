using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DotNetNote.Tests
{
    // TestDriven.wmv 참고 
    [TestClass]
    public class LoginControllerTest
    {
        [TestMethod]
        public void VerifyLoginControllerExists()
        {
            LoginController controller = new LoginController();
            ViewResult result = controller.Login() as ViewResult;
            Assert.AreEqual("Login Page", result.ViewData["Title"]);
        }

        [TestMethod]
        public void FormSubmitTest()
        {
            // Setup
            LoginController controller = new LoginController()
            {
                Name = "RedPlus",
                Password = "Password"
            };

            // Execute
            string name = controller.Name;
            string password = controller.Password;
            ViewResult result = controller.FormSubmit(name, password) as ViewResult;

            // Verify
            Assert.AreEqual("RedPlus", result.ViewData["Name"]);
            Assert.AreEqual("Welcome", result.ViewData["Title"]);
        }
    }
}
