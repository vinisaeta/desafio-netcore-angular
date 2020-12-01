﻿using System;
using System.Linq;
using iFood.Mercado.Domain.Core;

namespace iFood.Mercado.Infrastructure.Persistence.Extensions
{
    public static class QueryableExtensions
    {
        public static Pagination<T> Paginate<T>(this IQueryable<T> collection, int page, int limit)
        {
            var items = collection.Skip(page * limit).Take(limit).ToList();
            var count = collection.Count();

            return new Pagination<T>
            {
                Total = count,
                Limite = limit,
                Pagina = page,
                Itens = items
            };
        }
    }
}
