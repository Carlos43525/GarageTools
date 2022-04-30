using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GarageTools.Models
{
    public class Item
    {
        public Product product { get; set; }
        public int Quantity { get; set; }
    }
}
