using System;
using System.Diagnostics.CodeAnalysis;
using iFood.Mercado.Domain.Core;
using iFood.Mercado.Domain.Extensions;

namespace iFood.Mercado.Domain.Produto
{
    public class Produto : IEquatable<Produto>
    {
        #region Atributos

        private string _nome;
        private decimal _valorDeVenda;

        #endregion

        #region Propriedades

        public Guid Id { get; private set; }

        public string Nome
        {
            get
            {
                return this._nome;
            }
            private set
            {
                if (value?.Length > 300)
                {
                    throw new DomainException(ExceptionCodes.NomeDoProdutoComMaisDe300Caracteres);
                }

                _nome = value;
            }
        }

        public decimal ValorDeVenda
        {
            get
            {
                return _valorDeVenda;
            }
            private set
            {
                var newValue = decimal.Round(value, 2, MidpointRounding.AwayFromZero);
                
                if (newValue.Size() > 12)
                {
                    throw new DomainException(ExceptionCodes.ValorDeVendaDoProdutoComMaisDe10Digitos);
                }

                _valorDeVenda = newValue;
            }
            
        }

        public string Imagem { get; private set; }

        #endregion

        private Produto() { }

        public Produto(Guid id, string nome, decimal valor, string imagem)
        {
            Id = id;
            Nome = nome;
            ValorDeVenda = valor;
            Imagem = imagem;

            ValidarInformacoesObrigatorias();
        }

        public void Alterar(string nome, decimal valor, string imagem)
        {
            Nome = nome;
            ValorDeVenda = valor;
            Imagem = imagem;

            ValidarInformacoesObrigatorias();
        }

        private void ValidarInformacoesObrigatorias()
        {
            if (Id == Guid.Empty)
            {
                throw new DomainException(ExceptionCodes.IdDoProdutoNaoInformado);
            }

            if (string.IsNullOrEmpty(Nome))
            {
                throw new DomainException(ExceptionCodes.NomeDoProdutoNaoInformado);
            }

            if (ValorDeVenda <= 0)
            {
                throw new DomainException(ExceptionCodes.ValorDeVendaDoProdutoNegativa);
            }
        }

        public bool Equals([AllowNull] Produto objeto)
        {
            if ((objeto is Produto) || objeto == null)
            {
                return false;
            }

            return objeto.Id == Id;
        }
    }
}
