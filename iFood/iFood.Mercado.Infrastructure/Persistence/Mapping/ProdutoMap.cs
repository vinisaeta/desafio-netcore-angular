using System;
using iFood.Mercado.Domain;
using iFood.Mercado.Domain.Produto;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace iFood.Mercado.Infrastructure.Persistence.Mapping
{
    public class ProdutoMap : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.ToTable("Produto");
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Nome).HasColumnType("varchar(300)").IsRequired();
            builder.Property(p => p.ValorDeVenda).HasColumnType("decimal(10,2)").IsRequired();
            builder.Property(p => p.Nome).HasColumnType("nvarchar(max)");
        }
    }
}
