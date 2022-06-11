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
    public class ProductsController : Controller
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Products()
        {
            //return View(_context.Products.ToList());
            IEnumerable<Product> products;

            products = _context.Products.ToList();

            return View(new ProductViewModel
            {
                Products = products
            });
        }

        public IActionResult ProductDetails()
        {
            return View();
        }

        //public IActionResult ProductDetails(int id)
        //{
        //    var product = _context.Products.FirstOrDefault(x => x.Id == id);
        //    // TODO
        //    // null check and logger here

        //    return View(product);
        //}
    }
}
