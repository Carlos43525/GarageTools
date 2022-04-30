using GarageTools.Data;
using GarageTools.Models;
using GarageTools.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarageTools.Controllers
{
    public class ProductController : Controller
    {
        private readonly AppDbContext _context;
        //public Product product { get; set; }

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            //return View(_context.Products.ToList());
            IEnumerable<Product> products;

            products = _context.Products.ToList();

            return View(new ProductViewModel
            {
                Products = products
            });
        }

        public IActionResult Details(int id)
        {
            var product = _context.Products.FirstOrDefault(x => x.Id == id);
            // TODO
            // null check and logger here

            return View(product);
        }
    }
}
