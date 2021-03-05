using apiCore.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiCore.Data
{
    public class EmployeeContext : DbContext
    {
        //adatbázis tábla létrehozása

        public DbSet<Employee> Employee { get; set; }
        public DbSet<Department> Department { get; set; }
        public DbSet<Duty> Task { get; set; }
        public DbSet<Leader> Leader { get; set; }

        public EmployeeContext(DbContextOptions options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //reláció 1:1 1:n n:m

            modelBuilder.Entity<Employee>()
            .HasOne(p => p.Deprartment)
            .WithMany(b => b.Employee)
            .HasForeignKey(ug => ug.DepartmentId)
            .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Duty>()
            .HasKey(bc => new { bc.EmployeeId, bc.LeaderId });
            modelBuilder.Entity<Duty>()
                .HasOne(bc => bc.Employee)
                .WithMany(b => b.Tasks)
                .HasForeignKey(bc => bc.EmployeeId);
            modelBuilder.Entity<Duty>()
                .HasOne(bc => bc.Leader)
                .WithMany(c => c.Tasks)
                .HasForeignKey(bc => bc.LeaderId);

            modelBuilder.Entity<Department>()
             .HasOne(a => a.Leader).WithOne(b => b.Department)
             .HasForeignKey<Leader>(e => e.DepartmentId);

        }
    }
}
