using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Prova.models;
using Prova.data;

namespace Prova.Controllers
{

    [ApiController]
    [Route("livro")]

    public class livrocontrollers : ControllerBase
    {
        private readonly DataContext _context;
        public livrocontrollers(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AdicionaLivro([FromBody] Livro livro)
        {
            _context.Livros.Add(livro);
            _context.SaveChanges();
            return Created("", livro);
        }

        [HttpGet]
        public IActionResult buscalivro()
        {
            return Ok(_context.Livros.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult buscalivroPorId(int id)
        {
            Livro livro = _context.Livros.Find(id);
            if (livro != null)
            {
                return Ok(livro);
            }
            else
            {
                return NotFound();
            }
        }
    }
}