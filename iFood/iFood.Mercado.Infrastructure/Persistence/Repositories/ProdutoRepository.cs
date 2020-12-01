using System;
using System.Linq;
using iFood.Mercado.Domain.Produto;
using iFood.Mercado.Infrastructure.Persistence.Core;
using Microsoft.EntityFrameworkCore;
using iFood.Mercado.Domain.Core;
using iFood.Mercado.Infrastructure.Persistence.Extensions;

namespace iFood.Mercado.Infrastructure.Persistence.Repositories
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly Context _context;

        public ProdutoRepository(Context context)
        {
            _context = context;
        }

        public Produto ObterPorId(Guid id)
        {
            return _context.Produtos.AsNoTracking().FirstOrDefault(p => p.Id == id);
        }

        public Pagination<Produto> Pesquisar(string nome, int pagina = 1, int limite = 100)
        {
            var query = _context.Produtos.AsNoTracking();

            if (!string.IsNullOrEmpty(nome))
            {
                query = query.Where(p => p.Nome.ToUpper().Contains(nome.ToUpper()));
            }

            return query.OrderBy(p => p.Nome).Paginate<Produto>(pagina, limite);
        }

        public void Adicionar(Produto produto)
        {
            _context.Produtos.Add(produto);
            _context.SaveChanges();
        }

        public void Alterar(Produto produto)
        {
            _context.Produtos.Update(produto);
            _context.SaveChanges();
        }

        public void Remover(Produto produto)
        {
            _context.Produtos.Remove(produto);
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context?.Dispose();
        }
    }
}
