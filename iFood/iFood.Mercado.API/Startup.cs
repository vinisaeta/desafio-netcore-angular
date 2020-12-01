
using iFood.Mercado.API.Configurations;
using iFood.Mercado.Domain.Produto;
using iFood.Mercado.Infrastructure.Persistence.Core;
using iFood.Mercado.Infrastructure.Persistence.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace iFood.Mercado.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                builder =>
                {
                    builder.WithOrigins("http://localhost", "http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            services.AddSwaggerGen(s =>
            {
                s.SwaggerDoc("v1", new OpenApiInfo { Title = "API de Produtos do iFood Mercado", Version = "v1" });
            });

            services.AddScoped<IProdutoRepository, ProdutoRepository>();
            services.AddDbContext<Context>(options => options.UseSqlServer(Configuration.GetConnectionString("Database")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseGlobalExceptionHandler();

            app.UseCors("CorsPolicy");

            app.UseHttpsRedirection();
            
            app.UseStaticFiles();
            
            app.UseRouting();
            
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
            app.UseSwagger();
            
            app.UseSwaggerUI(s => s.SwaggerEndpoint("/swagger/v1/swagger.json", "WEB API"));

            app.UseSpa(spa =>
            {
                //spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                spa.Options.SourcePath = "../iFood.Mercado.UI";
            });
        }
    }
}
