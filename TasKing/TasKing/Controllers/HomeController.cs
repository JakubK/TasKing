using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TasKing.Domain.Abstract;
using TasKing.Domain.Entities;
using TasKing.Models;

namespace TasKing.Controllers
{
    public class HomeController : Controller
    {
        private IRepository repository;

        public HomeController(IRepository repo)
        {
            this.repository = repo;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            repository.AddUser("DawidWika");

            string ans = "";
            foreach(var user in repository.Users)
            {
                ans += user.Email;
            }

            ViewData["Message"] = ans;

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = repository.Users.ElementAt(0).Email;

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
