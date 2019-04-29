using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName ="varchar(150)")]
        public string FullName { get; set; }

        [Required(ErrorMessage="Specify User Role")]
        [Column(TypeName="varchar(20)")]
        public string Role { get; set; }
    }
}
