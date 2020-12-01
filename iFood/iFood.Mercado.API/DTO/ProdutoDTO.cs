using System;
namespace iFood.Mercado.API.DTO
{
    [Serializable]
    public class ProdutoDTO
    {
        public Guid Id { get; set; }

        public string Nome { get; set; }

        public decimal ValorDeVenda { get; set; }

        public string Imagem { get; set; }
    }
}
