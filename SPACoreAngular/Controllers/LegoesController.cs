using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SPACoreAngular.Data;
using SPACoreAngular.Models;

namespace SPACoreAngular.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class LegoesController : ControllerBase
    {
        private readonly SPACoreAngularContext _context;
        private readonly IDataRepository<Lego> _repo;

        public LegoesController(SPACoreAngularContext context,IDataRepository<Lego> repo)
        {
            _context = context;
            _repo = repo;
        }

        // GET: api/Legoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lego>>> GetLego()
        {
            return await _context.Lego.ToListAsync();
        }

        // GET: api/Legoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lego>> GetLego([FromRoute]int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var lego = await _context.Lego.FindAsync(id);

            if (lego == null)
            {
                return NotFound();
            }

            return Ok(lego);
        }

        // PUT: api/Legoes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLego([FromRoute]int id, [FromRoute]Lego lego)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != lego.SerialNumber)
            {
                return BadRequest();
            }

            _context.Entry(lego).State = EntityState.Modified;

            try
            {
                _repo.Update(lego);
                var save = await _repo.SaveAsync(lego);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LegoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Legoes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Lego>> PostLego(Lego lego)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _repo.Add(lego);
            var save = await _repo.SaveAsync(lego);

            return CreatedAtAction("GetLego", new { id = lego.SerialNumber }, lego);
        }

        // DELETE: api/Legoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult>  DeleteLego([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var lego = await _context.Lego.FindAsync(id);
            if (lego == null)
            {
                return NotFound();
            }

            _repo.Delete(lego);
            var save = await _repo.SaveAsync(lego);

            return Ok(lego);
        }

        private bool LegoExists(int id)
        {
            return _context.Lego.Any(e => e.SerialNumber == id);
        }
    }
}
