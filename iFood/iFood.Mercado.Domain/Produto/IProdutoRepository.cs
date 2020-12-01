using System;
using iFood.Mercado.Domain.Core;
using System.Threading.Tasks;

namespace iFood.Mercado.Domain.Produto
{
    public interface IProdutoRepository : IDisposable
    {
        Produto ObterPorId(Guid id);

        Pagination<Produto> Pesquisar(string nome, int page = 0, int limit = 100);

        void Adicionar(Produto produto);

        void Alterar(Produto produto);

        void Remover(Produto produto);
    }
}
