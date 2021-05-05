using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apiCore.Models
{
    public class Leader
    {
        public int LeaderId { get; set; }
        public string FistName { get; set; }
        public string LastName { get; set; }
        public int DepartmentId { get; set; } // FOREIGN KEY
        public Department Department { get; set; }
        public string Email { get; set; }
        public DateTime Date { get; set; }

        public ICollection<Duty> Tasks { get; set; }      //1:n kapcsolat egy leadhez is tartozhat több task.
    }
}
