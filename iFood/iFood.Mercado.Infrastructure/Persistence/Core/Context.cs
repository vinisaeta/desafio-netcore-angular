using System;
using System.Threading.Tasks;
using iFood.Mercado.Domain;
using iFood.Mercado.Domain.Produto;
using Microsoft.EntityFrameworkCore;

namespace iFood.Mercado.Infrastructure.Persistence.Core
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options){}

        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(Context).Assembly);
        }
    }
}
