using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UniversityPhoto.Models;

namespace UniversityPhoto.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [ActionName("request-a-qoute")]
        [HttpGet]
        public ActionResult RequestQuote()
        {
            ViewBag.Title = "Request a Qoute";

            return View();
        }

        [ActionName("request-a-qoute-success")]
        [HttpGet]
        public ActionResult RequestQuoteSuccess()
        {
            ViewBag.Title = "Request a Qoute";
            ViewBag.Message = "My Message";

            return View();
        }

        [ActionName("book-a-photographer")]
        [HttpGet]
        public ActionResult BookPhotographer()
        {
            ViewBag.Title = "Return a Photographer";

            return View();
        }

        [ActionName("book-a-photographer-success")]
        [HttpGet]
        public ActionResult BookPhotographerSuccess()
        {
            ViewBag.Title = "Return a Photographer";
            ViewBag.Message = "My Message";

            return View();
        }
    }
}