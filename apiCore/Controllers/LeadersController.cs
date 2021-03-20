using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using apiCore.Data;
using apiCore.Models;

namespace apiCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeadersController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public LeadersController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: api/Leaders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Leader>>> GetLeader()
        {
            return await _context.Leader.ToListAsync();
        }

        // GET: api/Leaders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Leader>> GetLeader(int id)
        {
            var leader = await _context.Leader.FindAsync(id);

            if (leader == null)
            {
                return NotFound();
            }

            return leader;
        }

        // PUT: api/Leaders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeader(int id, Leader leader)
        {
            if (id != leader.LeaderId)
            {
                return BadRequest();
            }

            _context.Entry(leader).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeaderExists(id))
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

        // POST: api/Leaders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Leader>> PostLeader(Leader leader)
        {
            _context.Leader.Add(leader);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeader", new { id = leader.LeaderId }, leader);
        }

        // DELETE: api/Leaders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Leader>> DeleteLeader(int id)
        {
            var leader = await _context.Leader.FindAsync(id);
            if (leader == null)
            {
                return NotFound();
            }

            _context.Leader.Remove(leader);
            await _context.SaveChangesAsync();

            return leader;
        }

        private bool LeaderExists(int id)
        {
            return _context.Leader.Any(e => e.LeaderId == id);
        }
    }
}
