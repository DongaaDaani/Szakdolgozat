using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace apiCore.Models
{
    public class Department
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DepartmentId { get; set; }
        public string Name { get; set; }
        public Leader Leader { get; set; }

        public ICollection<Employee> Employee { get; set; }      //1:n kapcsolat, több alkalmazott egy részlegen
    }
}
