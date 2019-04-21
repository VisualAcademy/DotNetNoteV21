using Microsoft.AspNetCore.Mvc;

namespace DotNetNote.Controllers
{
    public class UrlsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
