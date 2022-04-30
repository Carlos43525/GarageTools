using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GarageTools.Models
{
    public class Product
    {
        public int Id { get; set; }

        [StringLength(130, MinimumLength = 5)]
        [Required]
        public string Name { get; set; }

        public string? Description { get; set; }

        [Required]
        public string Images { get; set; }   
        
        [Display(Name = "Price")]
        [Column(TypeName = "decimal(18, 2)")]
        [DataType(DataType.Currency)]
        public decimal UnitPrice { get; set; }

        [Required]
        public int UnitsInStock { get; set; }

        public double AverageStarRating { get; set; }
    }
}
