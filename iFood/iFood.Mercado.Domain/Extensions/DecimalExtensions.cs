using System.Text.RegularExpressions;

namespace iFood.Mercado.Domain.Extensions
{
    public static class DecimalExtensions
    {
        public static int Size(this decimal attribute)
        {
            var attrStr = attribute.ToString();

            if (!attrStr.Contains("."))
            {
                attrStr += ".00";
            }

            return Regex.Replace(attrStr, @"[^\d]", "").Length;
        }

    }
}