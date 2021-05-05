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
    public class DutiesController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public DutiesController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: api/Duties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Duty>>> GetTask()
        {
            return await _context.Task.ToListAsync();
        }

        // GET: api/Duties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Duty>> GetDuty(int id)
        {
            var duty = await _context.Task.FindAsync(id);

            if (duty == null)
            {
                return NotFound();
            }

            return duty;
        }

        // PUT: api/Duties/5

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDuty(int id, Duty duty)
        {
            if (id != duty.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(duty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DutyExists(id))
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

        // POST: api/Duties
        [HttpPost]
        public async Task<ActionResult<Duty>> PostDuty(Duty duty)
        {
            _context.Task.Add(duty);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DutyExists(duty.EmployeeId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDuty", new { id = duty.EmployeeId }, duty);
        }

        // DELETE: api/Duties/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Duty>> DeleteDuty(int id)
        {
            var duty = await _context.Task.FindAsync(id);
            if (duty == null)
            {
                return NotFound();
            }

            _context.Task.Remove(duty);
            await _context.SaveChangesAsync();

            return duty;
        }

        private bool DutyExists(int id)
        {
            return _context.Task.Any(e => e.EmployeeId == id);
        }
    }
}
