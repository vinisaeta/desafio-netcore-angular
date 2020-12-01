using System;
using System.Collections.Generic;
using System.Linq;

namespace iFood.Mercado.Domain.Core
{
    public class Pagination<T>
    {
        public Pagination()
        {
            Itens = new List<T>();
        }

        public int Total { get; set; }
        public int? Pagina { get; set; }
        public int? Limite { get; set; }
        public IEnumerable<T> Itens { get; set; }
    }
}
