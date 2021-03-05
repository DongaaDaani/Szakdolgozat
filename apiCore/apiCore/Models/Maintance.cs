using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace apiCore.Models
{
    public class Maintance
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaintanceId { get; private set; }
        public string Plate { get; private set; }
        public string Brand { get; private set; }
        public string Type { get; private set; }
        public string Model { get; private set; }

        public int Km { get; private set; }
        public int OperationHours { get; private set; }

        public string ProblemDescription { get; private set; }
        public string SupervisorDescription { get; private set; }
        public string CoordinatorDescription { get; private set; }
        public string MechanicalDescription { get; private set; }

        public int EmpolyeeId { get; set; } // FOREIGN KEY

        public Maintance(int maintanceId, string plate, string brand,
         string type, string model, int km, int operationHours, string problemDescription,
         string supervisorDescription, string coordinatorDescription, string mechanicalDescription,
         int empolyeeId)
        {
            MaintanceId = maintanceId;
            Plate = plate;
            Brand = brand;
            Type = type;
            Model = model;
            Km = km;
            OperationHours = operationHours;
            ProblemDescription = problemDescription;
            SupervisorDescription = supervisorDescription;
            CoordinatorDescription = coordinatorDescription;
            MechanicalDescription = mechanicalDescription;
            EmpolyeeId = empolyeeId;
        }

    }
}
