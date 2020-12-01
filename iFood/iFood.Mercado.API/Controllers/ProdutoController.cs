using System;
using iFood.Mercado.API.DTO;
using iFood.Mercado.Domain.Produto;
using Microsoft.AspNetCore.Mvc;

namespace iFood.Mercado.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoRepository _repository;

        public ProdutoController(IProdutoRepository repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Enpoint para retornar um produto;
        /// </summary>
        [HttpGet("{id}")]
        public IActionResult Obter(Guid id)
        {
            return Ok(_repository.ObterPorId(id));
        }

        /// <summary>
        /// Enpoint para retornar produtos a partir de filtros de pesquisa;
        /// </summary>
        /// <param name="nome">nome do produto</param>
        /// <param name="pagina">Índice da página</param>
        /// <param name="limite">Número de registros retornados por página</param>
        [HttpGet]
        public IActionResult Pesquisar(string nome, int pagina = 0, int limite = 100)
        {
            return Ok(_repository.Pesquisar(nome, pagina, limite));
        }

        /// <summary>
        /// Endpoint para inclusão de um novo produto
        /// </summary>
        /// <param name="dto">DTO de criação</param>
        /// <returns></returns>
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Adicionar(ProdutoDTO dto)
        {
            var aggregate = new Produto(dto.Id, dto.Nome, dto.ValorDeVenda, dto.Imagem);

            _repository.Adicionar(aggregate);

            return Ok();
        }

        /// <summary>
        /// Endpoint para alteração de um produto existente;
        /// </summary>
        /// <param name="dto">DTO de alteração</param>
        /// <returns></returns>
        [HttpPut, DisableRequestSizeLimit]
        public IActionResult Alterar(ProdutoDTO dto)
        {
            var aggregate = _repository.ObterPorId(dto.Id);

            if (aggregate == null) return NotFound();

            aggregate.Alterar(dto.Nome, dto.ValorDeVenda, dto.Imagem);

            _repository.Alterar(aggregate);

            return Ok();
        }

        /// <summary>
        /// Endpoint para exclusão de um produto;
        /// </summary>
        /// <param name="id">Identificador do produto</param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Remover(Guid id)
        {
            var aggregate = _repository.ObterPorId(id);

            if (aggregate == null) return NotFound();

            _repository.Remover(aggregate);

            return Ok();
        }
    }
}
