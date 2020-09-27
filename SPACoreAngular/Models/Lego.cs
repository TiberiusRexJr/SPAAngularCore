using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SPACoreAngular.Models
{
    public class Lego
    {
        [Key]
        public int Id { get; set; }
        public int SerialNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Division { get; set; }
        public int age { get; set; }
        public DateTime DOB { get; set; }
        public string Role { get; set; }
        public string SecondaryRole { get; set; }
        public string rank { get; set; }
        public string CarrierAssinged { get; set; }
        public string WeaponOfChoice { get; set; }
        
    }
}
