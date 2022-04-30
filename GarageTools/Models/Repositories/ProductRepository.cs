using GarageTools.Data;
using GarageTools.Models.Interface;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace GarageTools.Models.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;

        public ProductRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> Products
        {
            get
            {
                return _context.Products.ToList();
            }
        }

        public Product GetProductById(int Id)
        {
            throw new System.NotImplementedException();
        }
    }
}
