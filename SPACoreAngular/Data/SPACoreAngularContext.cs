using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SPACoreAngular.Models;

namespace SPACoreAngular.Data
{
    public class SPACoreAngularContext : DbContext
    {
        public SPACoreAngularContext (DbContextOptions<SPACoreAngularContext> options)
            : base(options)
        {
        }

        public DbSet<SPACoreAngular.Models.Lego> Lego { get; set; }
    }
}
