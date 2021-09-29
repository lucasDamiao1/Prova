using Microsoft.EntityFrameworkCore;
using Prova.models;

namespace Prova.data
{
    public class DataContext : DbContext
    {
        //Construtor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Livro> Livros { get; set; }
    }
}